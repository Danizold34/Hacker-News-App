import type {V2_MetaFunction} from '@remix-run/node'
import {CardItem, getNews, useWindowSize, CONSTANT, useRefetch} from '~/src'
import {FixedSizeList as List} from 'react-window'
import {json} from '@remix-run/node'
import {useLoaderData, useRevalidator} from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{title: CONSTANT.TITLE}]
}

export const loader = async () => {
  const response = await getNews()
  return json(response, {
    headers: {'Cache-Control': `max-age=${CONSTANT.REFETCH_TIMEOUT}`},
  })
}

const Index = () => {
  const size = useWindowSize()
  const products = useLoaderData<typeof loader>()
  const {revalidate} = useRevalidator()

  useRefetch(revalidate, CONSTANT.REFETCH_TIMEOUT)

  const Row = ({index, style}: {index: number; style?: React.CSSProperties}) => (
    <CardItem data={products[index]} key={index} style={style} />
  )
  return (
    size.height && (
      <List
        height={size.height - CONSTANT.LIST_HEIGHT}
        itemCount={products.length}
        itemSize={CONSTANT.ITEM_SIZE}
        width={CONSTANT.LIST_WIDTH}>
        {Row}
      </List>
    )
  )
}

export default Index
