<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
  color: #0070c9;
  font-weight: 400;
  transition: 0.2s;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
a:hover {
  border-color: #0070c9;
}
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  min-height: 100vh;
  padding: 0 32px;
}
.button--empty {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #dadada;
  color: #000;
  text-decoration: none;
  padding: 10px 30px;
  margin: 0 4px;
}
.button--empty:hover {
  color: #0070c9;
}
</style>
