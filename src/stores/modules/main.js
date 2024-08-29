import { defineStore } from"pinia";

const nowDate = new Date()
const endDate = new Date().setDate(nowDate.getDate() + 1)

const useMainStore = defineStore('main',{
  state: () => ({
    startDate: nowDate,
    endDate: endDate,
    isLoading: false,
  })
})

export default useMainStore