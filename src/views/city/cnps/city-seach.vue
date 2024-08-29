<script setup>
  import {ref} from 'vue'
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const value = ref('')
  function cancelClick() {
    router.push('/')
  }

</script>

<template>
  <div class="seach">
    <van-search 
      v-model="value"
      placeholder="城市/区间/位置"
      show-action
      shape="round"
      @cancel = 'cancelClick'
      />
  </div>
</template>

<style lang="less" scoped>
  .seach {
    :deep(.van-field__left-icon) {
      color: #ff9854 !important
    }
  }
</style>