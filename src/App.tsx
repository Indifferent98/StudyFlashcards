import { Provider } from 'react-redux'

import { Header } from './components/ui/Header'
import { Router } from './router'
import { store } from './services/store'
import { Input } from './components/ui/Input'

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
