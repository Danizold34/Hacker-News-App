import type {V2_MetaFunction} from '@remix-run/node'
import {CardItem, useWindowSize} from '~/src'
import {FixedSizeList as List} from 'react-window'

export const meta: V2_MetaFunction = () => {
  return [{title: 'Hacker News App'}]
}
const array = new Array(100).fill(0).map((_, index) => ({
  title: `Firefox engineers discover a Windows Defender bug that causes high CPU usage`,
  id: index,
  time: 1175714200,
  score: 123 + index,
  by: 'Dovlet',
}))

const Row = ({index, style}: {index: number; style?: React.CSSProperties}) => (
  <CardItem data={array[index]} key={index} style={style} />
)

const Index = () => {
  const size = useWindowSize()

  return (
    size.height && (
      <List
        height={size.height - 100}
        itemCount={array.length}
        itemSize={80}
        width={'100%'}>
        {Row}
      </List>
    )
  )
}

export default Index
