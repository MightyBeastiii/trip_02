import { getHotSuggest } from '@/service/modules/hotSuggest';
import { getCategrouies } from '@/service/modules/categrouies';
import { getHotList } from '@/service/modules/hotList';
import { defineStore }  from "pinia";

const useHomeStore = defineStore('home', {
  state: () => ({
    currentPage: 1,
    hotSuggest: [],
    categrouies: [],
    hotList: [],
    start: ''
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggest()
      this.hotSuggest = res.data
    },
    async fetchCategrouiesDate() {
      const res = await getCategrouies()
      this.categrouies = res.data
    },
    async fetchHotList() {
      const res = await getHotList(this.currentPage++)
      this.hotList.push(...res.data)
    }
  }
})

export default useHomeStore