<script setup>
defineProps({
  title: {
    type:String,
    default: '默认标题'
  },
  footer: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="detail-section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot><span>默认内容</span></slot>
    </div>
    <div class="footer" v-if="footer.length">
      {{ footer }}
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .detail-section {
    padding: 0 15px;
    margin-top: 12px;
    border-top: 5px solid #f2f3f4;
    background-color: #fff;

    .header {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #eee;

      .title {
        font-size: 20px;
        color: #333;
      }
    }

    .content {
      padding: 8px 0;
    }

    .footer {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 44px;
      line-height: 44px;
      color: #ff9645;
      font-size: 14px;
      font-weight: 600;
    }
  }
</style>