<script setup>
import DetailSection from '@/components/detail/detailSection.vue'
defineProps({
  rulesModule: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="rules">
    <detail-section title="预定需知">
      <div class="rules-inner">
        <template v-for="(item, index) in rulesModule.orderRules" :key="index">
          <div class="item">
            <div class="title">{{ item.title }}</div>
            <div class="introduction">{{ item.introduction }}</div>
            <div class="tip" v-if="item.tips">查看说明</div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
.rules-inner {
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;

    .title {
      width: 64px;
      color: #666;
    }

    .introduction {
      flex: 1;
      color: #333;
    }
  }
}
</style>