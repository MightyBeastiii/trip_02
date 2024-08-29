<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { computed, onMounted} from 'vue';
import { useRouter } from 'vue-router';

  const props = defineProps({
    cityGroupData: {
      type: Object,
      default: () => ({})
    }
  })
  let cityIdenx = []
  onMounted(() => {
    cityIdenx = computed(() => props.cityGroupData.cities.map(item => item.group))
  })
  const router = useRouter()
  const cityStore = useCityStore()
  function cityClick(city) {

    cityStore.currentCity = city
    router.back()
  }

</script>

<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :index-list="cityIdenx">
        <van-index-anchor index="热门" />
        <div class="group-list">
          <template v-for="(hotCity, index) in cityGroupData.hotCities" :key="hotCity.cityId">
            <div class="hot-city" @click="cityClick(hotCity)">{{ hotCity.cityName }}</div>
          </template>
        </div>
      <template v-for="(group, index) in cityGroupData?.cities" :key='index'>
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
  .city-group {
    overflow-y: auto;
    .group-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 10px;
      padding-right: 25px;
        .hot-city {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        font-size: 12px;
        color: #000;
        text-align: center;
        line-height: 28px;
        background-color: #fff4ec;
        margin: 6px 0;
        cursor: pointer;
      }
    }
  }
</style>