import { Provider } from 'react-redux'
import { Header } from './components/ui/Header'
import { Router } from './router'
import { store } from './services/store'

export const App = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: '10%' }}>
        <Provider store={store}>
          <Router />
        </Provider>
      </div>
    </>
  )
}
