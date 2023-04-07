import type {News, Comment} from '../types/types'
import {CONSTANTS} from '../constants/default.constants'

export const getNews = async () => {}

export const apiService = {
  getNewestNews: async (): Promise<News[]> => {
    const newsIds: number[] = await (
      await fetch(`${CONSTANTS.API_URL}newstories.json`)
    ).json()

    const newsRequests = newsIds
      .slice(0, CONSTANTS.NEWS_ITEM_COUNT)
      .map((id) => fetch(`${CONSTANTS.API_URL}item/${id}.json`))

    const newsData: News[] = await Promise.all(newsRequests).then(async (response) =>
      Promise.all(response.map(async (data) => await data.json()))
    )

    return newsData
  },
  getArticleById: async (id: number): Promise<News> =>
    await (await fetch(`${CONSTANTS.API_URL}item/${id}.json`)).json(),

  getComments: async (ids: number[]): Promise<Comment[]> =>
    await Promise.all(
      ids.map((id) => fetch(`${CONSTANTS.API_URL}item/${id}.json`))
    ).then((response) =>
      Promise.all(response.map(async (data) => await data.json()))
    ),
}
