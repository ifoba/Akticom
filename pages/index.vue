<template>
  <div class="home-container">
    <h1 class="home-popular">Most popular news</h1>
    <Card :count="data" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    let rand = Math.round(1 - 0.5 + Math.random() * (100 - 1 + 1));
    const data = await $axios
      .$get(`https://jsonplaceholder.typicode.com/posts/${rand}`)
      .catch(e => {
        console.log(e);
      });
    return { data };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
