<template>
  <div class="about">
    <h1>This is an about page.</h1>
    {{ data }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    console.log(import.meta.env.VITE_TEXT)
    const url = import.meta.env.VITE_PATH
    this.$http.get(url)
    .then(res => {
      console.log(res.data);
      this.data = res.data.results[0];
    })
    .catch(err => {
      console.log(err);
    })
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
