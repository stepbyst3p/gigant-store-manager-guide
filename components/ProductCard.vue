<template>
  <div>
    <img :src="image" class="product-image">
    <a :href="link" class="product-name" target="_blank">{{name}}</a>
    <div class="product-price">Цена: {{price}} ₽</div>
    <div class="product-description" v-html="description"></div>
  </div>
</template>
<script>
export default {
  props: ["name", "image", "price", "link", "description"]
};
</script>

<style lang="scss">
.product {
  &-name {
    font-size: 1.5em;
  }
  &-price {
    font-weight: 600;
    font-size: 1.5em;
    margin: 16px 0;
  }
  &-image {
    display: block;
    margin: 0 auto 16px;
    max-height: 200px;
  }
}
</style>
