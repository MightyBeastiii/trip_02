<script setup>
import { useRoute } from 'vue-router';
import TabBar from './components/tabbar/Tabbar.vue'
import loading from '@/components/loading/loading.vue'
const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.isShowTab"></tab-bar>
    <loading></loading>
  </div>
</template>

<style scoped>
</style>
