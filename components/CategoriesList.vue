<template>
  <div class="categories-list">
    <div v-for="(category, index) in categories" v-bind:key="index" class="categories-item">
      <nuxt-link
        :to="{ path: `category/${category.id}`}"
        class="categories-item-link"
      >{{category.name}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"]
};
</script>


<style lang="scss">
.categories {
  &-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100vh;
    padding: 32px 0;
  }
  &-item {
    margin: 8px 32px;
    &-link {
      font-size: 18px;
    }
  }
}
</style>
