import jxRequest from '../request'

export function getHotSuggest() {
  return jxRequest.get({
    url: "/home/hotSuggests"
  })
}