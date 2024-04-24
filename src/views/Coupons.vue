<template>
  <div>
    <!-- Form for Percentage Range Search -->
    <div class="mb-4">
      <label for="minPercent">最小百分比: </label>
      <input type="number" id="minPercent" v-model="minPercent">
      <label for="maxPercent">最大百分比: </label>
      <input type="number" id="maxPercent" v-model="maxPercent">
      <button @click="getCouponsByPercentRange">搜索</button>
    </div>

    <div class="text-end mt-4">
      <button class="btn btn-primary" @click="openCouponModal(true)">
        建立新的優惠券
      </button>
    </div>

    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in coupons" :key="key">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}%</td>
          <td>{{ formatDate(item.due_date) }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, item)">編輯</button>
              <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <couponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateOrCreateCoupon" />
    <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
  </div>
</template>


<script>
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';
import useJwt from '@/composables/useJwt'; // 引入 useJwt

export default {
  components: { CouponModal, DelModal },
  data() {
    return {
      coupons: [],
      tempCoupon: {
        title: '',
        is_enabled: true,
        percent: 100,
        code: '',
        due_date: new Date().toISOString().split('T')[0],
      },
      isNew: false,
      minPercent: null,
      maxPercent: null
    };
  },
  methods: {
    // 使用 useJwt
    ...useJwt(),  // 解構 useJwt 返回的所有方法

    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          title: '',
          is_enabled: true,
          percent: 100,
          code: '',
          due_date: new Date().toISOString().split('T')[0],
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.showModal();
    },

    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.delModal.showModal();
    },

    getCoupons() {
      const url = `/api/coupons`;
      const token = this.getToken(); // 使用 useJwt 的 getToken 方法
      
      // 使用 token 在這裡進行身份驗證，例如在 headers 中添加 Authorization
      this.$http.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then((response) => {
        this.coupons = response.data.map(coupon => ({
          ...coupon,
          due_date: coupon.dueDate
        }));
      });
    },

    formatDate(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleDateString();
    },

    updateOrCreateCoupon(coupon) {
      if (this.isNew) {
        this.createCoupon(coupon);
      } else {
        this.updateCoupon(coupon);
      }
    },

    createCoupon(newCoupon) {
      const api = `/api/coupons`;
      this.$http.post(api, newCoupon).then((response) => {
        this.getCoupons();
        this.$refs.couponModal.hideModal();
      });
    },

    updateCoupon(updatedCoupon) {
      const api = `/api/coupons/${updatedCoupon.id}`;
      this.$http.put(api, updatedCoupon).then((response) => {
        this.getCoupons();
        this.$refs.couponModal.hideModal();
      });
    },

    delCoupon() {
      const api = `/api/coupons/${this.tempCoupon.id}`;
      this.$http.delete(api).then(() => {
        this.getCoupons();
        this.$refs.delModal.hideModal();
      });
    },

    getCouponsByPercentRange() {
      const api = `/api/coupons/percent-range?minPercent=${this.minPercent}&maxPercent=${this.maxPercent}`;
      this.$http.get(api).then((response) => {
        this.coupons = response.data.map(coupon => ({
          ...coupon,
          due_date: coupon.dueDate
        }));
      });
    }
  },
  created() {
    this.getCoupons();
  },
};

</script>
