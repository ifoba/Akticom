<template>
  <nav>
    <div class="nav-logo">
      <nuxt-link no-prefetch to="/">
        <img class="nav-logo-img" src="@/assets/img/logo.png" />
      </nuxt-link>
    </div>
    <a-menu mode="horizontal">
      <a-menu-item key="home"
        ><nuxt-link no-prefetch to="/">
          <a-icon type="home" />Home</nuxt-link
        ></a-menu-item
      >
      <a-menu-item key="news"
        ><nuxt-link no-prefetch to="/news">
          <a-icon type="read" />News</nuxt-link
        ></a-menu-item
      >
    </a-menu>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;

  .nav-logo {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-logo-img {
      max-width: 110px;
      padding: 5px;
    }
  }

  .ant-menu {
    border: none;
  }
}
</style>
