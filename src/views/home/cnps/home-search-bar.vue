<script setup>
import {ref} from 'vue'
import useMainStore from "@/stores/modules/main";
import { formatDateDot } from '@/utils/format_day';
const mainStore =  useMainStore()
const { startDate, endDate } = mainStore
const startDateStr = ref(formatDateDot(startDate))
const endDateStr = ref(formatDateDot(endDate))
</script>

<template>
  <div class="search">
    <div class="left">
      <div class="item start">
        <span class="text">住</span>
        <span class="date">{{ startDateStr }}</span>
      </div>
      <div class="item end">
        <span class="text">离</span>
        <span class="date">{{ endDateStr }}</span>
      </div>
    </div>
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
    <!-- <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" :left-icon="''" background="#fff">
      <template #left>
        <div class="left">
          <div class="item start">
            <span class="text">住</span>
            <span class="date">1</span>
          </div>
          <div class="item end">
            <span class="text">离</span>
            <span class="date">1</span>
          </div>
        </div>
      </template>
      <template #right-icon>
        <div class="right">
          <i class="icon-search"></i>
        </div>
      </template>
    </van-search> -->
  </div>
</template>

<style lang="less" scoped>
.search {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 45px;
  line-height:45px;

  padding: 0 10px;
  font-size: 14px;
  color: #999;

  border-radius: 6px;
  background: #f2f4f6;

  // .left {
  //   // max-width: 80px;

  //   font-weight: 500;
  //   min-width: 30px;
  //   font-size: 14px;
  //   padding-right: 6px;
  //   margin-right: 5px;
  //   border-right: 1px solid #fff;
  //   color: #333;
  //   white-space: nowrap;
  // }

  .left {
    display: flex;
    flex-direction: column;

    .item {
      display: flex;
      flex-direction: row;
      align-items: center;
      line-height: normal;
      font-size: 10px;
      .name {
        font-size: 10px;
      }

      .date {
        position: relative;
        color: #333;
        margin: 0 10px 0 3px;
        font-weight: 500;
      }
    }

    .end .date::after {
      content: " ";
      width: 0;
      height: 0;
      border: 4px solid #666;
      border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #666;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      bottom: 0px;
      right: -12px;
    }
  }

  .content {
    position: relative;
    flex: 1;
    padding: 0 6px;
    text-align: left;
    border-left: 1px solid #fff;

    .keyword {
      max-width: 155px;
      font-size: 12px;
    }

    .icon-cancel {
      position: absolute;
      top: 30%;
      right: 0;
      display: inline-block;
      background-image: url(@/assets/img/sprite.png);
      background-position: -92px -58.5px;
      width: 14.5px;
      height: 15px;
      background-size: 125px 110px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .icon-search {
    width: 24px;
    height: 24px;
    display: inline-block;

    background-image: url(@/assets/img/home/home-sprite.png);
    background-position: -29px -151px;
    background-size: 207px 192px;
  }
}
</style>