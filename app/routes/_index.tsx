import type {V2_MetaFunction} from '@remix-run/node'
import {CardItem, apiService, useWindowSize, CONSTANTS, useRefetch} from '~/src'
import {FixedSizeList as List} from 'react-window'
import {json} from '@remix-run/node'
import {useLoaderData, useRevalidator} from '@remix-run/react'
import ReplayIcon from '@mui/icons-material/Replay'

export const meta: V2_MetaFunction = () => {
  return [{title: CONSTANTS.TITLE}]
}

export const loader = async () => {
  const response = await apiService.getNewestNews()
  return json(response, {
    headers: {'Cache-Control': `max-age=${CONSTANTS.REFETCH_TIMEOUT}`},
  })
}

const Index = () => {
  const size = useWindowSize()
  const products = useLoaderData<typeof loader>()
  const {revalidate} = useRevalidator()

  useRefetch(revalidate, CONSTANTS.REFETCH_TIMEOUT)

  const Row = ({index, style}: {index: number; style?: React.CSSProperties}) => (
    <CardItem data={products[index]} key={index} style={style} />
  )
  return (
    size.height && (
      <>
        <ReplayIcon onClick={revalidate} style={{cursor: 'pointer'}} />
        <List
          height={size.height - CONSTANTS.LIST_HEIGHT}
          itemCount={products.length}
          itemSize={CONSTANTS.ITEM_SIZE}
          width={CONSTANTS.LIST_WIDTH}>
          {Row}
        </List>
      </>
    )
  )
}

export default Index
