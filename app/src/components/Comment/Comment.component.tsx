import {apiService} from '../../api/apis'
import {useState} from 'react'
import Parser from 'html-react-parser'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import {getDifferenceBetweenTimes} from '../../utilities/getDifferenceBetweenTimes.utilities'
import {
  Author,
  Time,
  InfoWrapper,
  Wrapper,
  ChildWrapper,
  ContentWrapper,
  Text,
} from './Comment.styles'
import type {CommentProps} from './Comment.model'

export const CommentItem: React.FC<CommentProps> = ({comment, depth, items}) => {
  const [children, setChildren] = useState(items)
  const [expanded, setExpanded] = useState(false)
  const onClickHandler = async () => {
    if (comment.kids) {
      const data = await apiService.getComments(comment.kids)
      setChildren(data)
      setExpanded(true)
    }
  }
  const onnCloseHandler = () => {
    setExpanded(false)
  }
  return (
    <Wrapper>
      <ContentWrapper>
        <InfoWrapper>
          <Author variant='subtitle2'>by {comment.by}</Author>
          <Time variant='subtitle2'>
            {getDifferenceBetweenTimes(comment.time)} ago
          </Time>
          {comment?.kids &&
            (expanded ? (
              <ExpandLessIcon
                onClick={onnCloseHandler}
                style={{cursor: 'pointer'}}
              />
            ) : (
              <KeyboardArrowDownIcon
                onClick={onClickHandler}
                style={{cursor: 'pointer'}}
              />
            ))}
        </InfoWrapper>
        <Text>{Parser(comment.text)}</Text>
      </ContentWrapper>
      {expanded && (
        <ChildWrapper depth={depth}>
          {children?.map((item) => (
            <CommentItem key={item.id} depth={depth + 1} comment={item} />
          ))}
        </ChildWrapper>
      )}
    </Wrapper>
  )
}

export default CommentItem
