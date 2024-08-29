<script setup>
import {computed, ref} from 'vue'
import { storeToRefs } from 'pinia';
import useCityStore from '@/stores/modules/city';
import CitySeach from './cnps/city-seach.vue'
import CityGroup from './cnps/city-group.vue'
const active = ref()
const cityStore = useCityStore()
cityStore.fetchAllCityData()
const { allCities } = storeToRefs(cityStore)
const currentGroup = computed(() => allCities.value[active.value])


</script>

<template>
  <div class="city">
    <div class="top">
      <city-seach></city-seach>
      <van-tabs v-model:active="active" color="#ff9854">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <template v-for="(group, index) in currentGorp.cities" :key='index'>
        <h2>标题 {{ group.group }}</h2>
        <div class="list">
          <template v-for="(city, indey) in currentGorp.cities" :key="indey">
            <div class="city">
              {{ city.cityName }}
            </div>
          </template>
        </div>
      </template> -->
      <city-group :city-group-data="currentGroup"></city-group>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .city {
    .top {
    position: relative;
    z-index: 9;
    }
    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
    }

  }
</style>