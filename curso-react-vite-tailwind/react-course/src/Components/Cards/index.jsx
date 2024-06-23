import { useContext } from "react";
import {ShoppingCartContext} from "../../Context"
import { PlusIcon } from "@heroicons/react/24/solid";

function Cards({ product }) {
    const {count, setCount, openProductDetail, setProductToShow, cartProducts, setCartProducts} = useContext(ShoppingCartContext);
    const {category, images, title, price } = product
    
    function showProduct(productDetail) {
        openProductDetail()
        setProductToShow(productDetail)
    }

    function addProductsToCart(productCart) {
        setCartProducts([...cartProducts, productCart])
        console.log(cartProducts);
    }

    return (
        <div className=" bg-white cursor-pointer w-56 h-60 rounded-lg" onClick={() => showProduct(product)}>
            <figure className=" relative mb-2 w-full h-4/5">
                <span className=" absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {category.name}
                </span>
                <img className="w-full h-full object-cover rounded-lg" src={images[0]} alt={`imagen de ${title}`} />
                <div 
                className=" absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1" 
                onClick={(event) => {
                    setCount(count + 1)
                    event.stopPropagation()
                }}>
                    <PlusIcon onClick={() => addProductsToCart(product)} />
                </div>
            </figure>
            <p className="flex justify-between bottom-0">
                <span className="text-sm font-light">{title}</span>
                <span className="text-lg font-medium">{`$${price}`}</span>
            </p>
        </div>
    );
}

export { Cards }