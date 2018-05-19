<template>
  <div class="search">
    <aside class="search-input">
      <input type="text" placeholder="search">
    </aside>
    <!-- <aside>
      <span>取消</span>
    </aside> -->
  </div>
</template>

<style lang="scss" scoped>
.search {
  width: 100%;
  .search-input {
    height: 1.8rem;
    min-width: 4rem;
    border-radius: 2rem;
    width: 100%;
    background-color: rgba(245, 246, 250, 0.5);
    input {
      outline: none;
      border: none;
      display: block;
      width: 90%;
      margin: 0.3rem auto;
      background-color: rgba(245, 246, 250, 0);
      font-size: 0.9rem;
      color: #7f8c8d;
    }
  }
}
</style>
