import axios from 'axios'

const BASE = 'https://reddit.com'

export function formURL(permalink) {
  return `${BASE}${permalink}`
}

export function getTopPosts(subreddit) {
  let api = `${BASE}/r/${subreddit}.json?limit=100`
  return axios.get(api)
}
