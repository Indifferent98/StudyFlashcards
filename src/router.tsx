import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Cards } from './Pages/Cards'
import { Decks } from './Pages/Decks'
import { LearnCard } from './Pages/LearnCard'
import { GetCurrentCard } from './Pages/GetCurrentCard/GetCurrentCard'

const publicRoutes: RouteObject[] = [
  {
    element: <div>Login</div>,
    path: '/login',
  },
  {
    element: <Decks />,
    path: '/',
  },
  {
    element: <Cards />,
    path: '/Cards/*',
  },
  {
    element: <LearnCard />,
    path: '/learn/*',
  },
  {
    element: <GetCurrentCard />,
    path: '/getCurrentCard/*',
  },
]

const privateRouters: RouteObject[] = [
  {
    element: <div>hello</div>,
    path: '/sss',
  },
]

const PrivateRoutes = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const router = createBrowserRouter([
  ...publicRoutes,
  { children: privateRouters, element: <PrivateRoutes /> },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
