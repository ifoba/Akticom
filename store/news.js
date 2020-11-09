export const state = () => ({
  news: [],
  paginationNumber: 1,
  paginationClickedCounter: 0
});

export const mutations = {
  setNews(state, news) {
    state.news = news;
  },
  setPaginationNumber(state, paginationNumber) {
    state.paginationNumber = paginationNumber;
  },
  setPaginationClickedCounter(state) {
    state.paginationClickedCounter = state.paginationClickedCounter  + 1;
  }
};

export const actions = {
  async fetch({ commit }) {
    const news = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("setNews", news);
  },
  changePaginationNumber({commit}, x){
    commit('setPaginationNumber', x)
  },
  paginationClicked({ commit }) {
    commit("setPaginationClickedCounter");
  },
};

export const getters = {
  news: state => state.news,
  paginationNumber: state => state.paginationNumber,
  paginationClickedCounter: state => state.paginationClickedCounter
};
