<template>
  <section class="container">
    <ProductsListControls :getProducts="getProducts"/>
    <ProductsList :products="products"/>
  </section>
</template>

<script>
import axios from "axios";
import ProductsListControls from "~/components/ProductsListControls.vue";
import ProductsList from "~/components/ProductsList.vue";

export default {
  mounted() {
    this.getProducts();
  },
  components: { ProductsListControls, ProductsList },
  data() {
    return {
      products: ""
    };
  },
  methods: {
    async getProducts() {
      this.$nuxt.$loading.start();
      const response = await axios.get(
        `https://gigant-store.ru/wp-json/wc/v2/products?category=${
          this.$route.params.id
        }&per_page=100&consumer_key=ck_b240cc1b0519183f591d63aeec945099cdd84e69&consumer_secret=cs_4b9772fa0d7477a5bba0d5ad4d9d03082844b4da`
      );
      this.products = response.data;
      this.$nuxt.$loading.finish();
    }
  }
};
</script>
