<script setup>
defineProps({
  topInfos: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="top-infos">
    <div class="title">
      {{ topInfos.houseName }}
    </div>
    <div class="tags">
      <template v-for="item in topInfos.houseTags" :key="item.tagCode">
        <span class="tag-text" v-if="item.tagText"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }">
          {{ item.tagText.text }}
        </span>
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <span class="score">{{ topInfos.commentBrief.overall }}</span>
        <span class="score-title">{{ topInfos.commentBrief.scoreTitle }}</span>
        <span class="comment-brief">"{{ topInfos.commentBrief.commentBrief }}"</span>
      </div>
      <div class="right">
        <span class="total-count">
          {{ topInfos.commentBrief.totalCount }}条评论
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
    <div class="position extra">
      <div class="left">
        <span class="address">{{ topInfos.nearByPosition.address }}</span>
      </div>
      <div class="right">
        <span class="circum">
          地图.周边
          <van-icon name="arrow" />
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top-infos {
  padding: 16px;
  background-color: #fff;

  .title {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .tags {
    margin: 10px 0;

    .tag-text {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .right {
      color: #ff9645;
    }
  }

  .comment {
    .score {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }

    .score-title {
      color: #333;
      font-weight: 700;
      margin: 0 3px;
    }

    .comment-brief {
      color: #666;
    }
  }

  .position {
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}
</style>