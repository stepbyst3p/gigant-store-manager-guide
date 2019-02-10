<template>
  <div class="categories-list">
    <div
      v-for="(category, index) in categories"
      v-bind:key="index"
      class="categories-item"
    >
      <nuxt-link
        :to="{ path: `category/${category.id}` }"
        class="categories-item-link"
        >{{ category.name }}</nuxt-link
      >
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
    column-count: 3;
    padding: 32px 0;
  }
  &-item {
    margin: 16px 8px;
    &-link {
      font-size: 18px;
    }
  }
}
</style>
