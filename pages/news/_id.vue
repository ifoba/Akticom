<template>
  <div class="news-more-info">
    <a-card style="width: 80%">
      <img
      :src="photo.urls.small"
    />
      <h2>{{ data.title }}</h2>
      <!-- <img :src="photo.urls.small" /> -->
      <h4>{{ data.body }}</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        quae doloribus error voluptates eum, placeat quos mollitia aperiam
        fugit, laudantium tempore, maxime rem libero officia aliquam cum harum
        dolorum suscipit labore molestiae quisquam! Consequatur neque,
        cupiditate unde amet ipsa ullam odio. Consequuntur error tempore dolorum
        ex molestias, laudantium, quasi quae earum possimus sunt doloribus
        numquam blanditiis a vero amet? Necessitatibus quibusdam cum veritatis
        ipsam minima error facilis placeat, accusantium beatae nesciunt enim!
        Sit recusandae maxime quo praesentium quasi delectus eum quos fugit,
        impedit placeat hic optio voluptatem voluptatibus numquam natus eos
        doloribus suscipit dolor, sunt sint vel est. Quibusdam, cumque?
      </p>
      <a-button type="default">
        Buy News
      </a-button>
    </a-card>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return params.id > 0;
  },
  async asyncData({ $axios, params }) {
    const data = await $axios.$get(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`
    );
    const photo = await $axios.$get(
      `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&client_id=a9pMFmJ7RZZbmqBQlL-VicCm9qIDYkTikfvdORyBikQ`
    );
    return { data, photo };
  }
};
</script>

<style lang="scss" scoped>
.news-more-info {
  display: flex;
  justify-content: center;
  padding-top: 10px;
}
</style>
