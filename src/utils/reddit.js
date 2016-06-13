import axios from 'axios'

const BASE = 'https://reddit.com'

export function formURL(permalink) {
  return `${BASE}${permalink}`
}

export function getTopPosts(subreddit) {
  let api = `${BASE}/r/${subreddit}.json?limit=100`
  return axios.get(api)
}

// export function getTopPosts(subreddit) {
//   return new Promise((resolve, reject) => {
//     let base_api = `${BASE}/r/${subreddit}.json?limit=100`
//     let api = base_api

//     let videos = []
//     for (var i = 0; i < 5; i++) {
//       console.log(i)
//       axios.get(api)
//         .then((response) => {
//           Array.prototype.push.apply(videos, response.data.data.children)
//           api = `${base_api}&after=${response.data.data.after}`
//           if (i === 4) {
//             console.log(videos.length)
//             resolve(videos)
//           }
//         })
//         .catch(err => reject(err))
//     }
//   })
// }
