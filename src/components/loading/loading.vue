<script setup>
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore()
</script>

<template>
  <div class="loading" v-if="mainStore.isLoading">
    <div class="bg">
      <img src="../../assets/img/home/full-screen-loading.gif" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
  .loading {
    z-index: 999;
    position:fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .bg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 104px;
      background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
      img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
      }
    }
  }
</style>