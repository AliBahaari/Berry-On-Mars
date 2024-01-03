'use client'

import { createTheme, ThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
      light: '#777',
    },
    secondary: {
      main: '#F9F000',
    },
  },
  typography: {
    fontFamily: 'IRANSansXFaNum',
    fontSize: 16,
    htmlFontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: '2.375rem',
      lineHeight: 1.21,
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.27,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.33,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
    },
    overline: {
      lineHeight: 1.66,
    },
    button: {
      textTransform: 'capitalize',
    },
  },
  direction: 'ltr',
})

const queryClient = new QueryClient()

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <AppRouterCacheProvider>
        <ToastContainer />
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </AppRouterCacheProvider>
    </ThemeProvider>
  )
}

export default Layout
