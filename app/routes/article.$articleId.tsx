import type {V2_MetaFunction} from '@remix-run/node'
import {useLoaderData, useRevalidator} from '@remix-run/react'
import type {LoaderArgs} from '@remix-run/node'
import ReplayIcon from '@mui/icons-material/Replay'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {useNavigate} from 'react-router'
import {
  ArticleDetails,
  CONSTANTS,
  Comments,
  apiService,
  ArticleWrapper,
  ROUTE_CONSTANTS,
} from '~/src'

export const meta: V2_MetaFunction = () => {
  return [{title: CONSTANTS.TITLE}]
}

export const loader = async ({params}: LoaderArgs) => {
  try {
    if (params.articleId) {
      const articleData = await apiService.getArticleById(+params.articleId)
      if (articleData.descendants > 0) {
        const comments = await apiService.getComments(articleData.kids)
        return {...articleData, comments: comments}
      }
      return {...articleData, comments: null}
    }
    return null
  } catch (e) {
    throw new Error(`Loader Error: ${(e as Error).message}`)
  }
}

const ArticleInfo = () => {
  const articleData = useLoaderData<typeof loader>()
  const {revalidate} = useRevalidator()
  const navigate = useNavigate()
  const redirectHandler = () => {
    navigate(ROUTE_CONSTANTS.HOME)
  }
  return (
    articleData && (
      <ArticleWrapper>
        <ArticleDetails
          time={articleData.time}
          by={articleData.by}
          score={articleData.score}
          title={articleData.title}
          url={articleData.url}
          commentsCount={articleData.descendants}
        />
        <div>
          <ArrowBackIcon onClick={redirectHandler} style={{cursor: 'pointer'}} />
          <ReplayIcon onClick={revalidate} style={{cursor: 'pointer'}} />
        </div>
        <Comments
          commentsCount={articleData.descendants}
          comments={{item: articleData.comments}}
        />
      </ArticleWrapper>
    )
  )
}

export default ArticleInfo
