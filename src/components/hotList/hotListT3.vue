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
        <div class="location">
          <img src="../../assets/img/home/location.png" alt="">
          <span class="text">{{ hotListData.location }}</span>
        </div>
        <div class="house-name">{{ hotListData.houseName }}</div>
        <div class="summary">{{ hotListData.summaryText }}</div>
        <div class="price">
          <span class="new">¥{{ hotListData.finalPrice }}</span>
          <span class="old">¥{{ hotListData.productPrice }}</span>
          <span class="tip">{{ hotListData?.priceTipBadge?.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.hot-list-item {
  width: 50%;

  .inner {
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
      padding: 8px 10px;
      color: #666;
      font-size: 12px;
    }

    .location {
      display: flex;
      align-items: center;
      img {
        width: 12px;
        height: 12px;
      }

      .text {
        margin-left: 2px;
        font-size: 12px;
        color: #666;
      }
    }

    .house-name {
      margin: 5px 0;
      font-size: 14px;
      color: #333;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price {
      display: flex;
      align-items: flex-start;

      margin: 8px 0;
      .new {
        color: #ff9645;
        font-size: 14px;
      }

      .old {
        margin: 0 3px;
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
      }

      .tip {
        background-image: linear-gradient(270deg,#f66,#ff9f9f);
        color: #fff;
        padding: 0 6px;
        border-radius: 8px;
      }
    }
  }
}
</style>