<template>
  <Loading :active="isLoading"></Loading>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-7">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>商品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>
                <a href="#" class="text-dark">{{ item.title }}</a>
              </td>
              <td>
                <div class="h5" v-if="!item.price">
                  {{ item.origin_price }} 元
                </div>
                <del class="h6" v-if="item.price">
                  原價 {{ item.origin_price }} 元
                </del>
                <div class="h5" v-if="item.price">
                  現在只要 {{ item.price }} 元
                </div>
              </td>
              <td>
                <div class="btn-group btn-group-sm">
                  <button
                    type="button"
                    class="btn btn-outline-secondary"
                    @click="getProduct(item.id)"
                  >
                    查看更多
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    :disabled="this.status.loadingItem === item.id"
                    @click="addCart(item.id)"
                  >
                    <div
                      v-if="this.status.loadingItem === item.id"
                      class="spinner-grow text-danger spinner-grow-sm"
                      role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加到購物車
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- 購物車列表 -->
      <div class="col-md-5">
        <div class="sticky-top">
            <table class="table align-middle">
                <thead>
                    <tr>
                        <th>品名</th>
                        <th style="width: 110px">數量</th>
                        <th>單價</th>
                        <th>總價</th>
                    </tr>
                </thead>
                <tbody>
                  <template v-if="cart.items.length">
                    <tr v-for="item in cart.items" :key="item.product.id">
                      <td>{{ item.product.title }}</td>
                      <td>
                        <div class="input-group input-group-sm">
                          <input
                            type="number"
                            class="form-control"
                            min="1"
                            v-model.number="item.qty"
                            @change="updateCartQuantityByProductId(item.product.id, item.qty)"
                          />
                          <div class="input-group-text">
                            / {{ item.product.unit }}
                          </div>
                        </div>
                      </td>
                      <td>{{ item.product.price }} 元</td>
                      <td>{{ item.product.price * item.qty }} 元</td>
                    </tr>
                  </template>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3" class="text-end">總計</td>
                        <td class="text-end">{{ $filters.currency(cart.total) }}</td>
                    </tr>
                    <tr v-if="cart.final_total !== cart.total">
                        <td colspan="3" class="text-end text-success">折扣價</td>
                        <td class="text-end text-success">
                            {{ $filters.currency(cart.final_total) }}
                        </td>
                    </tr>
                </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  v-model="coupon_code"
                  placeholder="請輸入優惠碼"
                />
                <div class="input-group-append">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      @click="addCouponCode"
                    >
                      套用優惠碼
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>

    <div class="my-5 row justify-content-center">
      <Form class="col-md-6" v-slot="{ errors }" @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors['email'] }"
            placeholder="請輸入 Email"
            rules="email|required"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field
            id="name"
            name="姓名"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
          ></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <Field
            id="tel"
            name="電話"
            type="tel"
            class="form-control"
            :class="{ 'is-invalid': errors['電話'] }"
            placeholder="請輸入電話"
            rules="required"
            v-model="form.user.tel"
          ></Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            id="address"
            name="地址"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
          ></Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea
            name=""
            id="message"
            class="form-control"
            cols="30"
            rows="10"
            v-model="form.message"
          ></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  components: { CouponModal, DelModal },
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ''
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        productNames: '',
        finalTotal: 0,
        message: ''
      },
      cart: {
        items: [],
        total: 0,
        final_total: 0
      },
      coupon_code: '',
      appliedDiscount: 1,
      coupons: []
    };
  },

  computed: {
    discountedTotal() {
      return this.cart.total * this.appliedDiscount;
    }
  },

  watch: {
    'cart.items': {
      deep: true,
      handler() {
        this.updateCartTotals();
      }
    }
  },

  methods: {
    async getProducts() {
      const url = `/api/product-data`;
      try {
        const response = await this.$http.get(url);
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },

    addCart(productID) {
      const productToAdd = this.products.find(product => product.id === productID);
      if (productToAdd) {
        const existingItem = this.cart.items.find(item => item.product.id === productID);
        if(existingItem) {
          existingItem.qty++;
        } else {
          const cartItem = {
            product: {
              id: productToAdd.id,
              title: productToAdd.title,
              price: productToAdd.price || productToAdd.origin_price,
              unit: productToAdd.unit
            },
            qty: 1
          };
          this.cart.items.push(cartItem);
        }
      }
    },

    removeCartItemByProductId(productId) {
      this.cart.items = this.cart.items.filter(item => item.product.id !== productId);
    },

    updateCartQuantityByProductId(productId, qty) {
      const item = this.cart.items.find(item => item.product.id === productId);
      if(item) {
        item.qty = qty;
      }
    },

    async validateAndApplyCoupon() {
      const url = `/api/coupons/validate/${this.coupon_code}`;
      try {
        const response = await this.$http.get(url);
        const coupon = response.data;
        if (coupon.isEnabled) {
          this.appliedDiscount = 1 - (coupon.percent / 100);
          this.cart.final_total = this.cart.total * this.appliedDiscount;
        } else {
          alert("此优惠券已被禁用！");
          this.appliedDiscount = 1;
          this.cart.final_total = this.cart.total;
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert("优惠券不存在！");
        } else {
          alert("优惠券验证错误！");
        }
        console.error("Error applying coupon:", error);
        this.appliedDiscount = 1;
        this.cart.final_total = this.cart.total;
      }
    },

    addCouponCode() {
      this.validateAndApplyCoupon();
    },

    async createOrder() {
  const productNames = this.cart.items.map(item => item.product.title).join(", ");
  const orderData = {
    email: this.form.user.email,
    recipientName: this.form.user.name,
    recipientPhone: this.form.user.tel,
    recipientAddress: this.form.user.address,
    message: this.form.message,
    productNames: productNames,
    finalTotal: this.cart.final_total
  };

  const url = `/api/user_orders`;
  try {
    const response = await this.$http.post(url, orderData);
    if (response.data && response.data.success) {
      console.log("Order created successfully.");
    } else {
      console.error("Order creation failed:", response);
      alert("訂單創建成功");
    }
  } catch (error) {
    console.error("Error creating order:", error);
    if (error.response && error.response.data) {
      console.error("Server Response:", error.response.data);
      alert("服务器错误，请联系管理员。");
    } else {
      alert("网络错误或服务器无响应。");
    }
  } finally {
    // 不论成功或失败，都跳转到订单页面
    this.$router.push('/dashboard/orders');
  }
},
    async getCoupons() {
      const url = `/api/coupons`;
      try {
        const response = await this.$http.get(url);
        this.coupons = response.data.map(coupon => ({
          ...coupon,
          due_date: coupon.dueDate
        }));
      } catch (error) {
        console.error("Error fetching coupons:", error);
      }
    },

    updateCartTotals() {
      this.cart.total = this.cart.items.reduce((acc, item) => acc + (item.product.price * item.qty), 0);
      this.cart.final_total = this.cart.total * this.appliedDiscount;
    }
  },

  created() {
    this.getProducts();
    this.getCoupons();
  },

  filters: {
    currency(value) {
      return value.toLocaleString('zh-TW', { style: 'currency', currency: 'TWD' });
    }
  }
}
</script>




















