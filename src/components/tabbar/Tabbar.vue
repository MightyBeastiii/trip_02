<template>
  <div class="tab-bar">
    <!-- <template v-for="(item, index) in TabBarData" :key="index">
      <div class="tab-bar-item" :class="{ active: currIndex === index }" @click="tabClick(index, item)">
        <img v-if="currIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else :src="getAssetURL(item.image_active)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template> -->
    <van-tabbar v-model="currIndex" route active-color="#ff9854" :placeholder='true'>
      <template v-for="(item, index) in TabBarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img :src="props.active ? getAssetURL(item.image_active) : getAssetURL(item.image)" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
  import { getAssetURL } from '../../utils/loder_assets'
  import { ref } from 'vue'
  const TabBarData = [
    {
      text: '首页',
      image: "tabbar/tab_home.png",
      image_active: "tabbar/tab_home_active.png",
      path: '/'
    },
    {
      text: '收藏',
      image: "tabbar/tab_favor.png",
      image_active: "tabbar/tab_favor_active.png",
      path: '/favor'
    },
    {
      text: '订单',
      image: "tabbar/tab_order.png",
      image_active: "tabbar/tab_order_active.png",
      path: '/order'
    },
    {
      text: '消息',
      image: "tabbar/tab_message.png",
      image_active: "tabbar/tab_message.png",
      path: '/message'
    },
  ]
  let currIndex = ref(0)
</script>

<style lang="less" scoped>
</style>