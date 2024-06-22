import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

function ShoppingCarProvider({children}) {
    const [count, setCount] = useState(0);
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false);

    const openProductDetail = () => setIsOpenProductDetail(true)
    const closeProductDetail = () => setIsOpenProductDetail(false)

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail,
            setIsOpenProductDetail
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCarProvider }