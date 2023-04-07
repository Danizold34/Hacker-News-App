import type {News} from '~/src'
import {endpoints} from '~/src'

export const getNews = async (): Promise<News[]> => {
  const newsIds: number[] = await (await fetch(endpoints.getNewestNewsIds())).json()

  const newsRequests = newsIds
    .slice(0, 100)
    .map((id) => fetch(endpoints.getNewByIds(id)))

  const newsData: News[] = await Promise.all(newsRequests).then(async (response) =>
    Promise.all(response.map(async (data) => await data.json()))
  )

  return newsData
}
