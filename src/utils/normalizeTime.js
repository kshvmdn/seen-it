import moment from 'moment'

export default function normalizeTime (ms) {
  return moment(ms, 'X').fromNow()
}
