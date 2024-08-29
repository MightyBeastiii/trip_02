<script setup>
import DetailSection from '@/components/detail/detailSection.vue'
defineProps({
  commentsData:{
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="comment-module">
    <detail-section title="热门评论" :footer="`查看全部${commentsData.totalCount}条评论`">
      <div class="comment-inner">
        <div class="score">
          <div class="left">
            <div class="overall">{{ commentsData.overall }}</div>
            <div class="info">
              <div class="score-title">{{ commentsData.scoreTitle }}</div>
              <div class="total-count">{{ commentsData.totalCount }}条评论</div>
              <div class="rate">
                <van-rate v-model="commentsData.overall" color="#ff9854" size="12" readonly allow-half />
              </div>
            </div>
          </div>
          <div class="right">
            <template v-for="(item,index) in commentsData.subScores" :key="index">
              <div class="sub-scores">
                {{ item }}
              </div>
            </template>
          </div>
        </div>
        <div class="tags">
          <template v-for="(iten,indey) in commentsData.commentTagVo" :key="indey">
            <div class="iten" :style="{ color: iten.color, backgroundColor: iten.backgroundColor }">
              {{ iten.text }}
            </div>
          </template>
        </div>
        <div class="comment">
          <div class="user">
            <div class="avatars">
              <img :src="commentsData.comment.userAvatars" alt="">
            </div>
            <div class="profile">
              <div class="name">{{ commentsData.comment.userName }}</div>
              <div class="date">{{ commentsData.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="text">
            {{ commentsData.comment.commentDetail }}
          </div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
.comment-inner {
  padding: 10px 0;

  .score {
    display: flex;

    .left {
      display: flex;
      align-items: center;

      .overall {
        width: 65px;
        height: 100%;
        color: #333;
        position: relative;
        font-weight: 600;
        font-size: 48px;
        position: relative;
        z-index: 9;

        

        // .line {
        //   width: 66px;
        //   height: 6px;
        //   background: linear-gradient(90deg, #fa8c1d, #fcaf3f);
        //   border-radius: 3px;
        //   position: absolute;
        //   bottom: 6px;
        //   z-index: 5;
        // }
      }

      .info {
        margin-left: 19px;
        font-size: 12px;
        color: #333;

        .total-count {
          margin: 3px 0;
          color: #999;
        }
      }
    }

    .right {
      display: flex;
      flex-wrap: wrap;
      flex: 1;
      justify-content: flex-end;

      .sub-scores {
        margin-left: 5px;
        font-size: 12px;
        color: #666;
      }
    }
  }

  .tags {
    display: flex;
    margin: 10px 0;
    flex-wrap: wrap;

    .iten {
      padding: 3px 5px;
      margin-right: 8px;
      margin-top: 5px;
      border-radius: 8px;
      font-size: 12px;
    }
  }

  .comment {
    padding: 10px;
    border-radius: 6px;
    background-color: #f7f9fb;

    .user {
      display: flex;

      .avatars {
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }

      .profile {
        margin-left: 8px;
        .date {
          margin-top: 3px;
          font-size: 12px;
          color: #999;
        }
      }
    }

    .text {
      font-size: 12px;
      line-height: 16px;
      color: #333;
      margin-top: 16px;
    }
  }
}
</style>