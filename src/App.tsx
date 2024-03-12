import { Provider } from 'react-redux'

import { Header } from './components/ui/Header'
import { Router } from './router'
import { store } from './services/store'

export const App = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '2%', marginBottom: '5%' }}>
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    </>
  )
}
