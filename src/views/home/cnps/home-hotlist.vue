<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import HotListT9 from '@/components/hotList/hotListT9.vue'
import HotListT3 from '@/components/hotList/hotListT3.vue'
import { useRoute, useRouter } from 'vue-router';
  const homeStore = useHomeStore()
  const { hotList } = storeToRefs(homeStore)

  //拿到路由跳转到detail详情页面
  const router = useRouter()
  const hotListClick = (data) => {
    // console.log('click', data.houseId)
    router.push('/detail/' + data.houseId)

  }
</script>

<template>
  <div class="hot-list">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in hotList" :key="item.data.houseId">
        <hot-list-t9 v-if="item.discoveryContentType === 9" :hot-list-data="item.data"
          @click="hotListClick(item.data)"></hot-list-t9>
        <hot-list-t3 v-else-if="item.discoveryContentType === 3" :hot-list-data="item.data"
          @click="hotListClick(item.data)"></hot-list-t3>
        <!-- <template v-if="item.discoveryContentType === 9">

          <div class="inner">
            <div class="cover">
              <img :src="item.data.image.url" alt="">
            </div>
            <div class="info">
              <div class="summary">{{ item.data.summaryText }}</div>
              <div class="house-name">{{ item.data.houseName }}</div>
              <div class="price">
                
              </div>
            </div>
          </div>
        </template> -->
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .hot-list {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>