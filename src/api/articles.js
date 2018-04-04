import _articles from './articles.json'

const TIMEOUT = 100

export default {
  getArticles: (cb, timeout) => setTimeout(() => cb(_articles), timeout || TIMEOUT),
}
