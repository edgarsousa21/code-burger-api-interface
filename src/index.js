import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'

import AppProvider from './hooks'
import Routes from './routes/routes'
import GlobalStyles from './styles/globalStyles'

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer autoClose={2000} theme="colored" />
    <GlobalStyles />
  </>,
  document.getElementById('root')
)

/*
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<><Login /> <GlobalStyles /></>)

ReactDOM.render(
  <Login />,
  document.getElementById('root')
)
*/
