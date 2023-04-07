import {RemixBrowser} from '@remix-run/react'
import ReactDOM from 'react-dom/client'
import {CacheProvider} from '@emotion/react'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {theme, createEmotionCache, ClientStyleContext} from './src'
import React from 'react'

interface ClientCacheProviderProps {
  children: React.ReactNode
}
function ClientCacheProvider({children}: ClientCacheProviderProps) {
  const [cache, setCache] = React.useState(createEmotionCache())

  const clientStyleContextValue = React.useMemo(
    () => ({
      reset() {
        setCache(createEmotionCache())
      },
    }),
    []
  )

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  )
}

const hydrate = () => {
  React.startTransition(() => {
    ReactDOM.hydrateRoot(
      document,
      <ClientCacheProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RemixBrowser />
        </ThemeProvider>
      </ClientCacheProvider>
    )
  })
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate)
} else {
  window.setTimeout(hydrate, 1)
}
