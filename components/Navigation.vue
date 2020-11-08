<template>
  <nav>
    <div class="nav-logo">
      <img class="nav-logo-img" src="@/assets/img/logo.png" />
    </div>
    <div class="nav-info"> News Portal </div>
    <a-menu mode="horizontal">
      <a-menu-item key="home"> <a-icon type="home" />Home</a-menu-item>
      <a-menu-item key="read"> <a-icon type="read" />News</a-menu-item>
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
