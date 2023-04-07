export const endpoints = {
  getNewestNewsIds: () => 'https://hacker-news.firebaseio.com/v0/newstories.json',
  getNewByIds: (id: number) =>
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  getComments: (id: number) =>
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
}
