import "./styles.css"
import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

function CheckoutSideMenu() {
    const {isOpenCheckoutSideMenu, closeCheckoutSideMenu} = useContext(ShoppingCartContext);
    
    return (
        <aside className={`${isOpenCheckoutSideMenu ? "flex" : "hidden"} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl">My order</h2>
                <XMarkIcon onClick={() => closeCheckoutSideMenu()} className="size-6 text-black-500 cursor-pointer" />
            </div>
        </aside>
    );
}

export { CheckoutSideMenu }