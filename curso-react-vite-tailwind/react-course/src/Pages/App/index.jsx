import { useRoutes, BrowserRouter } from 'react-router-dom'
import './App.css'
import { Navbar } from '../../Components/Navbar'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import { ShoppingCarProvider } from '../../Context'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

function AppRoutes() {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders-last', element: <MyOrder />},
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> },
  ])

  return routes;
}

function App() {
  return (
    <ShoppingCarProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCarProvider>
  )
}

export default App