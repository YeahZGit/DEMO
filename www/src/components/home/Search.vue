<template>
  <div class="search">
    <aside class="search-input">
      <input type="text">
    </aside>
    <aside>
      <!-- <span>取消</span> -->
    </aside>
  </div>
</template>

<style lang="scss" scoped>
.search {
  width: 100%;
  .search-input {
    height: 1.8rem;
    min-width: 4rem;
    border: 1px solid #666;
    border-radius: 1.5rem;
    width: 100%;
    input {
      outline: none;
      border: none;
      display: block;
      width: 90%;
      margin: 0.3rem auto;
    }
  }
}
</style>
