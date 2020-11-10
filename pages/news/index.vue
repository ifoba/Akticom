<template>
  <div class="container">
    <h1>News</h1>
    <div class="news-container">
      <Card
        v-for="count of news.slice(paginationNumber - 1, paginationNumber + 1)"
        :count="count"
        :key="count.id"
      />
    </div>
    <a-pagination
      class="pagination"
      :default-current="paginationNumber"
      :total="news.length"
      @change="onChange"
      simple 
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  async fetch({ store }) {
    if (store.getters["news/news"].length === 0) {
      await store.dispatch("news/fetch");
    }
  },
  computed: {
    ...mapGetters({
      news: "news/news",
      paginationNumber: "news/paginationNumber"
    })
  },
  methods: {
    onChange(x) {
      this.$store.dispatch("news/changePaginationNumber", x);
      this.$store.dispatch("news/paginationClicked");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.news-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
}
.pagination {
  margin-top: 10px
}
</style>
