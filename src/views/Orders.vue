<template>
  <div class="container">
    <h2 class="my-4">所有訂單</h2>

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
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.email }}</td>
            <td>{{ order.recipientName }}</td>
            <td>{{ order.recipientPhone }}</td>
            <td>{{ order.recipientAddress }}</td>
            <td>{{ order.message }}</td>
            <td>{{ order.productNames }}</td>
            <td>{{ order.finalTotal }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const orders = ref([]);
    const isLoading = ref(false);

    const getOrders = () => {
      const url = `/api/user_orders`;

      isLoading.value = true;
      axios.get(url).then((response) => {
        orders.value = response.data;
        isLoading.value = false;
      }).catch(error => {
        console.error('Failed to fetch orders:', error);
        isLoading.value = false;
      });
    };

    onMounted(() => {
      getOrders();
    });

    return {
      orders,
      isLoading
    };
  }
}
</script>
