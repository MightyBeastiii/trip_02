<script setup>
import { ref, computed } from 'vue'
import getDetailInfos from '@/service/modules/detail'
import { useRoute, useRouter } from 'vue-router'
import DetailSwipe from './canps/detail_01-swipe.vue'
import DetailTopInfos from './canps/detail_02-topinfos.vue'
import DetailFacility from './canps/detail_03-facility.vue'
import DetailLandlord from './canps/detail_04-landlord.vue'
import DetailComment from './canps/detail_05-comment.vue'
import DetailRules from './canps/detail_06-rules.vue'
import DetailMap from './canps/detail_07-map.vue'
import DetailIntro from './canps/detail_08-intro.vue'


const route = useRoute()
const router = useRouter()
const houseId = route.params.id
const detailData = ref({})
const mainPart = computed( () => detailData.value.mainPart )
getDetailInfos(houseId).then(res => {
  detailData.value = res.data
})
const onClickLeft = () => {
  router.back()
}
</script>

<template>
  <div class="detail">
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
      <detail-top-infos :top-infos="mainPart.topModule"></detail-top-infos>
      <detail-facility :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
      <detail-landlord :landlord-infos="mainPart.dynamicModule.landlordModule"></detail-landlord>
      <detail-comment :comments-data="mainPart.dynamicModule.commentModule"></detail-comment>
      <detail-rules :rules-module="mainPart.dynamicModule.rulesModule"></detail-rules>
      <detail-map></detail-map>
      <detail-intro :intro="mainPart.introductionModule"></detail-intro>
    </div>
    <div class="footer">
      <div class="img">
        <img src="@/assets/img/detail/icon_ensure.png" alt="">
      </div>
      <div class="text">
        佳鑫旅途,永无止境!
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .detail {
    --van-nav-bar-height: 44px;
    --van-nav-bar-title-text-color: var(--primary-color)
    
  }
    .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 120px;
  
      img {
        width: 123px;
      }
  
      .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
      }
    }
</style>