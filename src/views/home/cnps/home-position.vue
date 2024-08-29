<template>
  <div class="search-box">
    <div class="loction">
      <div class="city">
        <span @click="changeCity">{{ currentCity.cityName }}</span>
      </div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
    <div class="section date-range" >
      <div class="start" @click="showCalendar = true">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
      </div>
        <div class="stay">共{{ stayDay }}晚</div>
      <div class="end" @click="showCalendar = true">
        <div class="date">
        <span class="tip">离开</span>
        <span class="time">{{ endDateStr }}</span>
      </div>
      </div>
      <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm" color="#ff9854" />
    </div>
    <!-- 价格/人数选择 -->
    <div class="section price-counter">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword">关键字/位置/民宿名</div>
    <div class="section hot-suggest">
      <template v-for="(item, index) in hotSuggest" :key="index">
        <div class="item" :style="{ colot:item.tagText.color, background:item.tagText.background.image?item.tagText.background.image:item.tagText.background.color }">
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import useCityStore from '@/stores/modules/city';
import { useRouter } from 'vue-router';
import useMainStore from '@/stores/modules/main'
import { storeToRefs } from 'pinia';
import { formatDate, getDiffDay } from '@/utils/format_day';
//拿到路由点击进入城市选择
const router = useRouter()
const cityStore = useCityStore()
const {currentCity} = storeToRefs(cityStore)
function changeCity() {
  router.push('/city')
}
//显示入住日期和日期列表显示
// const nowDate = new Date()
// const newData = new Date().setDate(new Date().getDate() + 1)
const mainStore = useMainStore()
const { startDate, endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatDate(startDate.value))
const endDateStr = computed(() => formatDate(endDate.value))
let showCalendar = ref(false)
let stayDay = getDiffDay(startDate.value, endDate.value)
function onConfirm(values) {
  mainStore.startDate = values[0]
  mainStore.endDate = values[1]
  showCalendar.value = false;
  stayDay = getDiffDay(values[0], values[1])
};
//拿到store里面的网络数据展示

import useHomeStore from '@/stores/modules/home'

const HotSuggestStore = useHomeStore()
const { hotSuggest } = storeToRefs(HotSuggestStore)

// 搜索按钮点击
function searchBtnClick() {
  router.push(
    {
      path: '/search',
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        currentCity: currentCity.value.cityName
      }
    }
  )
}
</script>

<style lang="less" scoped>
  
  .search-box {
    
    .loction{
      display: flex;
      align-items: center;
      height: 44px;
      padding: 0 10px 0 20px;

      .city {
        flex: 1;
      }

      .position {
        width: 74px;
        display: flex;
        align-items: center;

        .text {
          font-size: 12px;
        }
        img{
          margin-left: 2px;
          width: 18px;
          height: 18px;
        }
      }
    }
    .section {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 0 20px;
      color: #999;
      height: 44px;

      .start {
        flex: 1;
        display: flex;
        height: 44px;
        align-items: center;
      }

      .end {
        flex: 1;
        display: flex;
        // min-width: 30%;
        height: 44px;
        align-items: center;
        // padding-right: 10px;
        justify-content: flex-end;
      }

      .date {
        display: flex;
        flex-direction: column;

        .tip {
          font-size: 12px;
          color: #999;
        }

        .time {
          margin-top: 3px;
          color: #333;
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
    .date-range {
      height: 44px;
      .stay {
        flex: 1;
        text-align: center;
        font-size: 12px;
        height: 44px;
        line-height: 44px;
        color: #666;
      }
    }
    //热门推荐 hotSuggest
    .hot-suggest {
      height: auto;
      .item {
        font-size: 12px;
        padding: 4px 8px;
        margin: 3px;
        border-radius: 14px;
      }
    }
    .search-btn {
      display: flex;
      justify-content: center;
      .btn {
        width: 342px;
        height: 38px;
        max-height: 50px;
        font-weight: 500;
        font-size: 18px;
        line-height: 38px;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
      }
    }
  }
</style>