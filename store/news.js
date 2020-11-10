export const state = () => ({
  news: [],
  paginationNumber: 1,
  paginationClickedCounter: 0,
  popup: false
});

export const mutations = {
  setNews(state, news) {
    state.news = news;
  },
  setPaginationNumber(state, paginationNumber) {
    state.paginationNumber = paginationNumber;
  },
  setPaginationClickedCounter(state) {
    state.paginationClickedCounter = state.paginationClickedCounter + 1;
  },
  setPopup(state, visibility) {
    state.popup = visibility;
  }
};

export const actions = {
  async fetch({ commit }) {
    const news = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    commit("setNews", news);
  },
  changePaginationNumber({ commit }, num) {
    commit("setPaginationNumber", num);
  },
  paginationClicked({ commit }) {
    commit("setPaginationClickedCounter");
  },
  changePopupVisibility({ commit }, visibility) {
    commit("setPopup", visibility);
  }
};

export const getters = {
  news: state => state.news,
  paginationNumber: state => state.paginationNumber,
  paginationClickedCounter: state => state.paginationClickedCounter,
  popup: state => state.popup
};
