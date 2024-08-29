<script setup>
import DetailSection from '@/components/detail/detailSection.vue'
defineProps({
  landlordInfos: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="landlord">
    <detail-section title="房东介绍" footer="查看房东主页">
      <div class="landlord-inner">
        <div class="banner">
          <img :src="landlordInfos.topScroll" alt="">
        </div>
        <div class="hotel-name">
          <div class="left">
            <img :src="landlordInfos.hotelLogo" alt="">
            <div class="name">
              <div class="name-text">{{ landlordInfos.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landlordInfos.hotelTags" :key="index">
                  <div class="tag" :style="{ color: item.tagText.color }">
                    <span>{{ item.tagText.text }}</span>
                    <span v-if="index !== landlordInfos.hotelTags.length - 1" class="divider">|</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="right">
            联系房东
          </div>
        </div>
        <div class="hotel-summary">
          <template v-for="(iten,index) in landlordInfos.hotelSummary" :key="index">
            <div class="summary">
              <div class="title">{{ iten.title }}</div>
              <div class="percent">{{ iten.introduction }}</div>
              <div class="tip">{{ iten.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
.landlord-inner {
  .banner {
    img {
      width: 100%;
      border-radius: 3px;
    }
  }

  .hotel-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    .left {
      display: flex;
      img {
        width: 54px;
        height: 54px;
      }

      .name {
        margin-top: 8px;
        font-size: 16px;
        font-weight: 600;
      }

      .tags {
        display: flex;
        margin-top: 5px;
        font-size: 12px;

        .divider {
          margin: 0 5px;
        }
      }
    }

    .right {
      height: 24px;
      line-height: 24px;
      border-radius: 5px;
      padding: 0 12px;
      font-size: 12px;
      color: #fff;
      background-image: linear-gradient(90deg,#fa8c1d,#fcaf3f);
    }
  }

  .hotel-summary {
    display: flex;
    justify-content: space-between;
    margin: 50px 10px 10px;

    .summary {
      font-size: 12px;
      .title {
        color: #999;
      }
      .percent {
        margin: 5px 0;
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }
      .tip {
        color: #666;
      }
    }
  }
}
</style>