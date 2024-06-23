import "./styles.css"
import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";

function CheckoutSideMenu() {
    const {isOpenCheckoutSideMenu, closeCheckoutSideMenu, cartProducts} = useContext(ShoppingCartContext);
    console.log(cartProducts);
    
    return (
        <aside className={`${isOpenCheckoutSideMenu ? "flex" : "hidden"} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl">My order</h2>
                <XMarkIcon onClick={() => closeCheckoutSideMenu()} className="size-6 text-black-500 cursor-pointer" />
            </div >
            <div className="px-6">
                {cartProducts.map(product => (
                    <OrderCard title={product.title} imageUrl={product.images} price={product.price} key={product.id}/>
                ))}
            </div>
        </aside>
    );
}

export { CheckoutSideMenu }