import jxRequest from '../request'

export default function getDetailInfos(houseId) {
  return jxRequest.get({
    url: '/detail/infos',
    params:{
      houseId
    }
  })
}