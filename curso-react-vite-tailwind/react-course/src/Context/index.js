import { createContext } from "react";

const ShoppingCarContext = React.createContext();

function ShoppingCarProvider({children}) {

    return(
        <ShoppingCarContext.Provider>
            {children}
        </ShoppingCarContext.Provider>
    );
}

export { ShoppingCarProvider }