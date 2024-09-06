<script setup>
import { ref, computed, watch } from 'vue'
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
import useScroll from '@/hooks/useScroll'


const route = useRoute()
const router = useRouter()
const houseId = route.params.id
const detailData = ref({})
const mainPart = computed( () => detailData.value.mainPart )
getDetailInfos(houseId).then(res => {
  detailData.value = res.data
})
function onClickLeft() {
  router.back()
}
//到一定高度显示tabControl
const { scrollTop } = useScroll()
const tabControlShow = computed(() => {
  return scrollTop.value >= 300
})
//获取所有组件的根元素用作tabcontrol的title
const detailRef = ref()
const active = ref(0)
const sectionRefs = ref({})
const titles = computed(() => {
  return Object.keys(sectionRefs.value)
})
const getTabEl = (value) => {
  if(!value) return
  // console.log(value)
  const names = value.$el.getAttribute('name')
  // console.log(value.$el)
  sectionRefs.value[names] = value.$el
}
let isClick = false
let distance = -1
const tabClick = (index) => {
  isClick = true
  const key = Object.keys(sectionRefs.value)[index]
  distance = sectionRefs.value[key].offsetTop - 44
  window.scrollTo({
    top: distance,
    behavior: "smooth"
  })
}

//根据页面滚动高度匹配对应的tabControl
watch(scrollTop, (newValue) => {
  if (newValue === distance) {
    isClick = false
  }
  if (isClick) return
  const els = Object.values(sectionRefs.value)
  const topValue = els.map(el => el.offsetTop - 49)
  // console.log(topValue, scrollTop.value)
  let index = topValue.length - 1
  for(let i = 0; i < topValue.length; i++) {
    if (topValue[i] >= newValue) {
      index = i - 1
      break
    }
  }
  if(active.value != index) {
    active.value = index
  }
})
</script>

<template>
  <div class="detail" ref="detailRef">
    <div class="tab-control" v-if="tabControlShow">
      <van-tabs v-model:active="active" @click-tab="tabClick(active)">
        <template v-for="item in titles">
          <van-tab :title="item"></van-tab>
        </template>
      </van-tabs>
    </div>

    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"></detail-swipe>
      <detail-top-infos :top-infos="mainPart.topModule"></detail-top-infos>
      <detail-facility name="设施" :ref="getTabEl"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
      <detail-landlord name="房东" :ref="getTabEl"
        :landlord-infos="mainPart.dynamicModule.landlordModule"></detail-landlord>
      <detail-comment name="评价" :ref="getTabEl" :comments-data="mainPart.dynamicModule.commentModule"></detail-comment>
      <detail-rules name="须知" :ref="getTabEl" :rules-module="mainPart.dynamicModule.rulesModule"></detail-rules>
      <detail-map name="地图" :ref="getTabEl"></detail-map>
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
    --van-nav-bar-title-text-color: var(--primary-color);
    .tab-control {
      position:fixed;
      z-index: 9;
      top:0;
      left: 0;
      right: 0;
    }
    
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