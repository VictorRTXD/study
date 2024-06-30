import { createContext, useState, useEffect } from 'react'

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

    // get products
    const [item, setItem] = useState(null);

    // get products by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log(`resultado: ${searchByTitle}`);

    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItem(data))
    }, [])

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
            item, 
            setItem,
            searchByTitle,
            setSearchByTitle,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCarProvider }