<template>
  <div class="container">
    <h2 class="my-4">所有訂單</h2>

    <input type="text" v-model="searchQuery" placeholder="搜索..." class="form-control mb-3">

    <div v-if="isLoading">
      <p>Loading...</p>
    </div>

    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>收件人姓名</th>
            <th>收件人電話</th>
            <th>收件人地址</th>
            <th>留言</th>
            <th>品名</th> 
            <th>總計</th> 
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in filteredOrders" :key="order.id" :class="{ 'highlight': order.matches }">
            <td v-html="highlight(order.email)"></td>
            <td v-html="highlight(order.recipientName)"></td>
            <td v-html="highlight(order.recipientPhone)"></td>
            <td v-html="highlight(order.recipientAddress)"></td>
            <td v-html="highlight(order.message)"></td>
            <td v-html="highlight(order.productNames)"></td>
            <td>{{ order.finalTotal }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import visitRecorder from '@/methods/visitRecorder';

export default {
  name: 'Order',
  setup() {
    const orders = ref([]);
    const isLoading = ref(false);
    const searchQuery = ref("");

    visitRecorder.recordVisit('OrderPage');

    const getOrders = () => {
      const url = `/api/user_orders`;
      isLoading.value = true;
      axios.get(url).then((response) => {
        orders.value = response.data.reverse();
        isLoading.value = false;
      }).catch(error => {
        console.error('Failed to fetch orders:', error);
        isLoading.value = false;
      });
    };

    const filteredOrders = computed(() => {
      if (!searchQuery.value) {
        return orders.value.map(order => ({ ...order, matches: false }));
      }
      return orders.value
        .map(order => {
          const regex = new RegExp(searchQuery.value, 'gi');
          const matches = Object.values(order).some(value => regex.test(value));
          return { ...order, matches };
        })
        .filter(order => order.matches);
    });

    const highlight = (text) => {
      if (!searchQuery.value) return text;
      const regex = new RegExp(searchQuery.value, 'gi');
      return text.replace(regex, match => `<span class="highlight">${match}</span>`);
    };

    onMounted(() => {
      getOrders();
    });

    return {
      orders,
      isLoading,
      searchQuery,
      filteredOrders,
      highlight
    };
  }
}
</script>

<style>
.highlight {
  color: red;
}
</style>
