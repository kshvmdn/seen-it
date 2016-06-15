import axios from 'axios'
import promiseWhile from './promiseWhile'

const BASE = 'https://reddit.com'

export function formURL(permalink) {
  return `${BASE}${permalink}`
}

export function getTopSubmissions(subreddit, after) {
  return new Promise((resolve, reject) => {
    let url = `${BASE}/r/${subreddit}.json`
    let params = {
      limit: 100,
      after: after
    }

    let videos = []

    promiseWhile(() => videos.length < 300, () => {
      return new Promise(r => {
        axios.get(url, {params})
          .then(response => {
            videos.push(...response.data.data.children)
            params.after = response.data.data.after;
            r()
          })
          .catch((e) => {
            throw new Error(e)
          })
      })
    }).then(() => {
      resolve(videos)
    })
  })
}
