<template>
  <div class="tag">
    <span class="tag-wrapper"
      v-for="tag in tags"
      :key="tag"
      @click="$emit('useHistory', tag)">
      {{ tag }}
    </span>
    <span class="prompt" v-show="!tags.length">{{ prompt }}</span>
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    tags: {
      type: Array,
      default: () => []
    },
    prompt: {
      type: String,
      default: '搜索记录为空'
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  .tag-wrapper {
    background-color: rgba(245, 246, 250, 0.9);
    padding: 0 0.5rem;
    border-radius: 1rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .prompt {
    color: #dcdde1;
  }
}
</style>
