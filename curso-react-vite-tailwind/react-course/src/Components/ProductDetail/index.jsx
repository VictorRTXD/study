import "./styles.css"
import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

function ProductDetail() {
    const {isOpenProductDetail, productToShow, closeProductDetail} = useContext(ShoppingCartContext);
    console.log(`product to show ${productToShow}`);
    
    return (
        <aside className={`${isOpenProductDetail ? "flex" : "hidden"} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl">Detail</h2>
                <XMarkIcon onClick={() => closeProductDetail()} className="size-6 text-black-500 cursor-pointer" />
            </div>
            <figure className=" px-6">
                <img className="w-full h-full rounded-lg" src={productToShow.images} alt={productToShow.title} />
            </figure>
            <p className="flex flex-col p-6 ">
                <span className=" font-medium text-2xl mb-2">{productToShow.price}</span>
                <span className=" font-medium text-md">{productToShow.title}</span>
                <span className=" font-light text-sm">{productToShow.description}</span>
            </p>
        </aside>
    );
}

export { ProductDetail }