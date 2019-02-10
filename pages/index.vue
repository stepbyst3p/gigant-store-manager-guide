<template>
  <section class="container">
    <CategoriesList :categories="categories" />
  </section>
</template>

<script>
import axios from "axios";
import CategoriesList from "~/components/CategoriesList.vue";
export default {
  components: { CategoriesList },
  async asyncData() {
    if (process.server) {
      let page1 = await axios.get(
        `https://gigant-store.ru/wp-json/wc/v2/products/categories?page=1&per_page=100&consumer_key=ck_b240cc1b0519183f591d63aeec945099cdd84e69&consumer_secret=cs_4b9772fa0d7477a5bba0d5ad4d9d03082844b4da`
      );
      let page2 = await axios.get(
        `https://gigant-store.ru/wp-json/wc/v2/products/categories?page=2&per_page=100&consumer_key=ck_b240cc1b0519183f591d63aeec945099cdd84e69&consumer_secret=cs_4b9772fa0d7477a5bba0d5ad4d9d03082844b4da`
      );
      let totalData = page1.data.concat(page2.data).sort(function(a, b) {
        let catA = a.name.toLowerCase(),
          catB = b.name.toLowerCase();
        if (catA < catB) {
          return -1;
        }
        if (catA > catB) {
          return 1;
        }
        return 0;
      });
      return { categories: totalData };
    }
  }
};
</script>
