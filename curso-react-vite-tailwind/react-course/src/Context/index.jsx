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

    // ProductDetail show product
    const [productToShow, setProductToShow] = useState({});

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
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCarProvider }