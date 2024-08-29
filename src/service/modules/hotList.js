import jxRequest from '../request'

export function getHotList(currentPage) {
  return jxRequest.get({
    url: "/home/houselist",
    params:{
      page: currentPage
    }
  })
}