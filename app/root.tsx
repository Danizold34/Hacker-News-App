import * as React from 'react'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse,
} from '@remix-run/react'
import {withEmotionCache} from '@emotion/react'
import {
  Typography,
  Box,
  unstable_useEnhancedEffect as useEnhancedEffect,
} from '@mui/material'
import {theme, ClientStyleContext, Layout} from './src'

interface DocumentProps {
  children: React.ReactNode
  title?: string
}

const Document = withEmotionCache(
  ({children, title}: DocumentProps, emotionCache) => {
    const clientStyleData = React.useContext(ClientStyleContext)

    //NOTE: Only executed on client
    useEnhancedEffect(() => {
      //NOTE: re-link sheet container
      emotionCache.sheet.container = document.head
      //NOTE: re-inject tags
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach((tag) => {
        // eslint-disable-next-line no-underscore-dangle
        ;(emotionCache.sheet as any)._insertTag(tag)
      })
      clientStyleData.reset()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <meta name='theme-color' content={theme.palette.primary.main} />
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <link
            rel='stylesheet'
            href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          />
          <meta name='emotion-insertion-point' content='emotion-insertion-point' />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
)

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <Document title='Error!'>
        <Layout>
          <Box>
            <Typography variant='h2'>
              Error
            </Typography>
            <Typography variant='subtitle1'>Status: {error.status}</Typography>
            <Typography variant='subtitle2'>{error.data.message}</Typography>
            <hr />
          </Box>
        </Layout>
      </Document>
    )
  }
}
