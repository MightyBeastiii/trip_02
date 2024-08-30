<script setup>
import DetailSection from '@/components/detail/detailSection.vue'
</script>

<template>
  <div class="map">
    <detail-section title="位置周边" footer="查看更多周边信息">
      <div class="baidu">
        百度地图
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
  .baidu {
    height: 300px;
  }
</style>