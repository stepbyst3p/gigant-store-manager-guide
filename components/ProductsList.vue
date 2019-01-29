<template>
  <div class="products-grid">
    <article v-for="(product, index) in products" :key="index" class="products-item">
      <ProductCard
        :image="product.images[0].src"
        :link="product.permalink"
        :name="product.name"
        :price="product.price"
        :description="product.short_description"
      />
    </article>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  props: ["products"],
  components: { ProductCard }
};
</script>

<style lang="scss" scoped>
.products {
  &-grid {
    display: flex;
    flex-wrap: wrap;
  }
  &-item {
    width: calc(100% / 4 - 32px);
    margin: 16px;
    padding: 32px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
}
</style>


