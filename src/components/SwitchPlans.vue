<template>
  <div>
    <label class="switch">
      <input type="checkbox" @click="toggleCheckbox" />
      <div class="slider round"></div>
    </label>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.toggle-button {
  @apply w-16 h-16 bg-orange;
}
</style>
