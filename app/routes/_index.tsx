import {Typography} from '@mui/material'
import type {V2_MetaFunction} from '@remix-run/node'
import {Link} from '@remix-run/react'

export const meta: V2_MetaFunction = () => {
  return [{title: 'Hacker News App'}]
}

export default function Index() {
  return (
    <>
      <Typography variant='h4' component='h1' gutterBottom>
        Material UI Remix in TypeScript example
      </Typography>
      <Link to='/about' color='secondary'>
        Go to the about page
      </Link>
    </>
  )
}
