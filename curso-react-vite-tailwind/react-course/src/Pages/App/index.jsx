import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import './App.css'
import { Navbar } from '../../Components/Navbar'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import { NotFound } from '../NotFound'
import SignIn from '../SignIn'
import { ShoppingCarProvider, initializeLocalStorage, ShoppingCartContext } from '../../Context'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import { useContext } from 'react'


function AppRoutes() {
  const context = useContext(ShoppingCartContext)
  // account
  const account = localStorage.getItem("account")
  const parsedAccount = JSON.parse(account)
  // sign out
  const signOut = localStorage.getItem("sign-out")
  const parsedSignOut = JSON.parse(signOut)
  // has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0 
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"}/> },
    { path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"}/> },
    { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"}/> },
    { path: '/furnitures', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"}/> },
    { path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"}/> },
    { path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={"/sign-in"}/> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-orders/last', element: <MyOrder />},
    { path: '/my-orders/:id', element: <MyOrder />},
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes;
}

function App() {
  initializeLocalStorage()
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