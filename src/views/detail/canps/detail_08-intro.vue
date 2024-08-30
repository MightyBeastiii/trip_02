<script setup>
defineProps({
  intro:{
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="intro">
    <h2 class="title">
      {{ intro.title }}
    </h2>
    <div class="info">{{ intro.introduction }}</div>
  </div>
</template>

<style lang="less" scoped>
.intro {
  padding: 16px 12px;
  border-top: 5px solid #f2f3f4;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .info {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>