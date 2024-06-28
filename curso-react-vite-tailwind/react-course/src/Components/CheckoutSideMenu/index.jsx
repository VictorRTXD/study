import "./styles.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../utils";

function CheckoutSideMenu() {
    const {isOpenCheckoutSideMenu, closeCheckoutSideMenu, cartProducts, setCartProducts, order, setOrder, setCount} = useContext(ShoppingCartContext);
    console.log(cartProducts);

    function deleteProduct(id) {
        const filteredProducts = cartProducts.filter(product => product.id != id);
        setCartProducts(filteredProducts);
    }

    function handleCheckout() {
        const orderToAdd = {
            date: "01.02.23",
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts)
        }

        setOrder([...order, orderToAdd])
        setCartProducts([])
        setCount(0)
    }
    
    return (
        <aside className={`${isOpenCheckoutSideMenu ? "flex" : "hidden"} checkout-side-menu  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl">My order</h2>
                <XMarkIcon onClick={() => closeCheckoutSideMenu()} className="size-6 text-black-500 cursor-pointer" />
            </div >
            <div className="px-6 flex-1 overflow-y-scroll">
                {cartProducts.map(product => (
                    <OrderCard id={product.id} title={product.title} imageUrl={product.images} price={product.price} key={product.id} deleteProduct={deleteProduct} />
                ))}
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center">
                    <span className="font-light">Total: </span>
                    <span className="font-medium text-2xl">${`${totalPrice(cartProducts)}`}</span>
                </p>
                <Link to={"/my-orders-last"}>
                    <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button>
                </Link>
            </div>
        </aside>
    );
}

export { CheckoutSideMenu }