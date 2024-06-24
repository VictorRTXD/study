import { useContext } from "react";
import {ShoppingCartContext} from "../../Context"
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

function Cards({ product }) {
    const {count, setCount, openProductDetail, setProductToShow, cartProducts, setCartProducts, openCheckoutSideMenu} = useContext(ShoppingCartContext);
    const {category, images, title, price, id } = product
    
    function showProduct(productDetail) {
        openProductDetail()
        setProductToShow(productDetail)
    }

    function addProductsToCart(event, productCart) {
        event.stopPropagation();
        setCount(count + 1)
        setCartProducts([...cartProducts, productCart]);
        openCheckoutSideMenu()
        console.log(cartProducts);
    }

    function renderIcon(id) {
        const isInCart = cartProducts.filter(product => product.id === id).length > 0;

        if (isInCart) {
            return (
                <div 
                    className=" absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon />
                </div>
            )
        } else {
            return (
                <div 
                    className=" absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" >
                    <PlusIcon onClick={(event) => addProductsToCart(event, product)} />
                </div>
            )
        } 
    }

    return (
        <div className=" bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={() => showProduct(product)}>
            <figure className=" relative mb-2 w-full h-4/5">
                <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {category.name}
                </span>
                <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={`imagen de ${title}`} />
                {renderIcon(id)}
            </figure>
            <p className="flex justify-between bottom-0">
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium">{`$${price}`}</span>
            </p>
        </div>
    );
}

export { Cards }