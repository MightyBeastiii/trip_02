<script setup>
const props = defineProps({
  swipeData:{
    type: Array,
    default: () => []
  }
})
const swipeGrop = {}
//思路1: 用enumPictureCategory来创建key塞到上面定义的空对象里面 再循环一次一个个push进去
// for(const item of props.swipeData) {
//   swipeGrop[item.enumPictureCategory] = []
// }
// for (const item of props.swipeData) {
//   let valueArr = swipeGrop[item.enumPictureCategory]
//   valueArr.push(item)
// }
// console.log(swipeGrop)
//思路2: 直接创建一个变量去找swipeGrop,如果swipeGrop里面没有值为undefined
//就创建一个空的数组再把空数组赋值给swipeGrop再把值一个一个push进去
for(const item of props.swipeData) {
  let valueArr = swipeGrop[item.enumPictureCategory]
  if(!valueArr) {
    valueArr = []
    swipeGrop[item.enumPictureCategory] = valueArr
  }
  valueArr.push(item)
}
const getName = (name) => {
  return name.replace('：', "")
}
//获取当前轮播图片的index 用传进来的item的enumPictureCategory去找对象中的key的数组赋值给新常量
//再用常量findindex返回找到的index
const getCategrouyIndex = (item) => {
  const valueArr = swipeGrop[item.enumPictureCategory]
  return valueArr.findIndex(data => item === data)
}
</script>

<template>
  <div class="swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.albumUrl" alt="">
        </van-swipe-item>
      </template>
      <template #indicator="{ active }">
        <div class="custom-indicator">
          <template v-for="(item, key) in swipeGrop" :key="key">
            <span class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">
                {{ getName(item[0].title) }}
              </span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCategrouyIndex(swipeData[active]) + 1 }}/{{ item.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
  .swipe {
    .my-swipe {
      img {
        width: 100%;
        height: 240px;
      }
    }
    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.3);
    }
    .item {
      margin: 0 3px;
      &.active {
        padding: 0 3px;
        border-radius: 5px;
        background-color: #fff;
        color:#000
      }
    }
  }
</style>