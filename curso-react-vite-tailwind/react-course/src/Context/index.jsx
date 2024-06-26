import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

function ShoppingCarProvider({children}) {
    // shopping cart increment quantity
    const [count, setCount] = useState(0);

    // shopping cart add products
    const [cartProducts, setCartProducts] = useState([]);

    // ProductDetail open/close product
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false);
    const openProductDetail = () => setIsOpenProductDetail(true)
    const closeProductDetail = () => setIsOpenProductDetail(false)

    // checkoutSideMenu open/close product
    const [isOpenCheckoutSideMenu, setIsOpenCheckoutSideMenu] = useState(false);
    const openCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(false)

    // ProductDetail show product
    const [productToShow, setProductToShow] = useState({});

    // shopping cart order
    const [order, setOrder] = useState([])

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isOpenCheckoutSideMenu,
            closeCheckoutSideMenu,
            openCheckoutSideMenu,
            order,
            setOrder,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCarProvider }