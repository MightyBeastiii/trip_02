<script setup>
import { watch, ref, computed } from 'vue'
//honeStore
import useHomeStore from '@/stores/modules/home'
//home组件
import HomeNavBar from "./cnps/home-nav-bar.vue";
import HomePosition from "./cnps/home-position.vue";
import HomeCategrouies from './cnps/home-categrouies.vue';
import HomeHotList from './cnps/home-hotlist.vue';
import HomeSearchBar from './cnps/home-search-bar.vue';
import useScroll from '@/hooks/useScroll';

const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategrouiesDate()
homeStore.fetchHotList()
//监听屏幕滚动 到底部请求更多数据
const { isReachBottom, scrollTop } = useScroll()
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHotList().then(() => {
      isReachBottom.value = false
    })
  }
})
//监听屏幕滚动 滚动到一点高度显示搜索栏
const isSearchShow = computed(() => {
  return scrollTop.value > 550
})

</script>

<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="">
    </div>
    <home-position></home-position>
    <home-categrouies></home-categrouies>
    <div class="search-bar" v-if="isSearchShow">
      <home-search-bar></home-search-bar>
    </div>
    <home-hot-list></home-hot-list>
  </div>
</template>



<style lang="less" scoped>

.home {
  
  .banner {
    img{
      width: 100%;
    }
  }
  .search-bar {
    z-index: 9;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background: #fff;
  }
}
  
</style>