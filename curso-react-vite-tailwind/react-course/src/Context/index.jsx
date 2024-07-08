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

    // get products by title and category
    const [searchByTitle, setSearchByTitle] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItem(data))
      }, [])
    
      const filteredItemsByTitle = (item, searchByTitle) => {
        return item?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
      }

      const filteredItemsByCategory = (item, searchByCategory) => {
        return item?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
      }

      const filterBy = (searchType, item, searchByTitle, searchByCategory) => {
        if (searchType === 'BY_TITLE') {
          return filteredItemsByTitle(item, searchByTitle)
        }
    
        if (searchType === 'BY_CATEGORY') {
          return filteredItemsByCategory(item, searchByCategory)
        }
    
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
          return filteredItemsByCategory(item, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return item
        }
      }
    
      useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', item, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', item, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', item, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, item, searchByTitle, searchByCategory))
      }, [item, searchByTitle, searchByCategory]
    )

    // para without account y signup
    const [account, setAccount] = useState(new Map());
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
            filteredItems,
            setSearchByCategory,
            searchByCategory,
            account,
            setAccount,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export { ShoppingCarProvider }