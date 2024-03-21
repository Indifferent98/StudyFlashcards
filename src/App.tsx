import { Provider } from 'react-redux'

import { Header } from './components/ui/Header'
import { Input } from './components/ui/Input'
import { Router } from './router'
import { store } from './services/store'
import s from './App.module.scss'
export const App = () => {
  return (
    <>
      <Header />

      <div>
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    </>
  )
}
