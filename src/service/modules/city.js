import jxRequest from '../request'

export function getCityAll() {
  return jxRequest.get({
    url: "/city/all"
  })
}
