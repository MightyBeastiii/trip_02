import jxRequest from '../request'

export function getCategrouies() {
  return jxRequest.get({
    url: "/home/categories"
  })
}