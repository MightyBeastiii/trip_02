<script setup>
defineProps({
  hotListData: {
    type: Object,
    default: () => ({}),
  }
})
</script>

<template>
  <div class="hot-list-item">
    <div class="inner">
        <div class="cover">
          <img :src="hotListData.image.url" alt="">
        </div>
        <div class="info">
          <div class="summary">{{ hotListData.summaryText }}</div>
          <div class="house-name">{{ hotListData.houseName }}</div>
          <div class="price">
            <van-rate :model-value="Number(hotListData.commentScore)" readonly allow-half color="#fff" :size="15" />
            <span class="finalPrice">¥{{ hotListData.finalPrice }}</span>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.hot-list-item {
  width: 50%;

  .inner {
    position: relative;
    margin: 5px;
    background: #fff;
    border-radius: 6px;
    overflow: hidden;

    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      padding: 8px 10px;
      color: #fff;

      .summary {
        font-size: 12px;
      }

      .house-name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      .price {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>