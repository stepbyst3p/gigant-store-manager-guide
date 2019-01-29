<template>
  <section class="container">
    <CategoriesList :categories="categories"/>
  </section>
</template>

<script>
import axios from "axios";
import CategoriesList from "~/components/CategoriesList.vue";
export default {
  components: { CategoriesList },
  asyncData() {
    if (process.server) {
      return axios
        .get(
          `https://gigant-store.ru/wp-json/wc/v2/products/categories?per_page=100&consumer_key=ck_b240cc1b0519183f591d63aeec945099cdd84e69&consumer_secret=cs_4b9772fa0d7477a5bba0d5ad4d9d03082844b4da`
        )
        .then(response => {
          return { categories: response.data };
        });
    }
  }
};
</script>

