<template>
   <Loading :active="isLoading"></Loading> 
  <div class="text-end mt-3">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="openModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="openDelProductModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  ></ProductModal>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct" />
</template>

<script>
import ProductModal from '@/components/ProductModal.vue'
import Pagination from '@/components/Pagination.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  data() {
    return {
      products: [],
      pagination: {}, // 可根据后端返回的分页信息进行更新
      tempProduct: {},
      isNew: false,
      isLoading: false // 這個狀態可以保留，以便未來重新啟用加載功能
    }
  },
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      const api = `/api/product-data?page=${page}`
       this.isLoading = true
      this.$http.get(api).then((res) => {
         this.isLoading = false
        this.products = res.data
        // 更新分页信息，根据后端返回的结构
      })
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      const productComponent = this.$refs.productModal
      productComponent.showModal()
    },
    updateProduct(item) {
      this.tempProduct = item
      let api = `/api/product-data`
      let httpMethod = 'post'

      if (!this.isNew) {
        api = `/api/product-data/${item.id}`
        httpMethod = 'put'
      }
      const productComponent = this.$refs.productModal
      this.$http[httpMethod](api, this.tempProduct).then(
        (response) => {
          productComponent.hideModal()
          if (response.data.id) {
            this.getProducts()
            this.emitter.emit('push-message', {
              style: 'success',
              title: '更新成功'
            })
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: response.data.message.join('、')
            })
          }
        }
      )
    },
    openDelProductModal(item) {
      this.tempProduct = { ...item }
      const delComponent = this.$refs.delModal
      delComponent.showModal()
    },
    delProduct() {
      const url = `/api/product-data/${this.tempProduct.id}`
      this.$http.delete(url).then((response) => {
        const delComponent = this.$refs.delModal
        delComponent.hideModal()
        this.getProducts()
      })
    }
  },
  created() {
    this.getProducts()
  }
}
</script>

