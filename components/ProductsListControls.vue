<template>
  <nav class="top-controls">
    <nuxt-link :to="{ path: `/`}" class="button--empty">
      <span role="image" aria-label="back">&#x2B05;</span> Назад
    </nuxt-link>
    <a href class="button--empty" @click.prevent="getProducts">
      <span role="image" aria-label="reload">&#x1F504;</span>
      Обновить
    </a>
  </nav>
</template>

<script>
export default {
  props: ["getProducts"]
};
</script>


<style lang="scss" scoped>
.top-controls {
  text-align: center;
  margin: 32px auto;
}
</style>