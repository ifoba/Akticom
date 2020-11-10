<template>
  <div class="news">
    <a-card class="news-card" :title="transformText(count.title)">
      <a slot="extra" href="#" @click.prevent="openNews(count.id)">See more</a>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        similique natus et iste molestias cum beatae fuga odio minima placeat
        ullam necessitatibus sint modi pariatur, omnis deleniti repellendus
        incidunt magnam! Eos fugit sint inventore numquam! Eligendi voluptates
        minus deleniti sapiente nihil delectus molestiae suscipit dolore ad.
        Eligendi autem pariatur iste modi cumque accusantium! Magnam, id ad
        pariatur hic obcaecati expedita quis iure error! Non perferendis cum hic
        voluptatibus harum eaque doloribus saepe, accusamus, tempora
        exercitationem quia earum dolorum inventore voluptatum eum similique
        minus voluptate? Numquam doloribus doloremque libero placeat magnam
        dolor ullam dicta, nemo officiis veniam inventore, provident ut ratione.
      </p>
    </a-card>
  </div>
</template>

<script>
export default {
  props: ["count"],
  methods: {
    openNews(id) {
      this.$router.push(`/news/${id}`);
    },
    transformText(txt) {
      const res = txt
        .split("")
        .map((el, i) => {
          return i === 0 ? el.toUpperCase() : el;
        })
        .join("");
      return res;
    }
  }
};
</script>

<style lang="scss" scoped>
.news {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  .news-card {
    width: 90%;
  }
}
</style>
