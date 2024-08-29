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
    </div>
  </div>
</template>

<style lang="less" scoped>
  .detail {
    --van-nav-bar-height: 44px;
    --van-nav-bar-title-text-color: var(--primary-color)
  }
</style>