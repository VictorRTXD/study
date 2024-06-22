import "./styles.css"
import { useContext } from "react";
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from "../../Context";

function ProductDetail() {
    const {isOpenProductDetail} = useContext(ShoppingCartContext);
    
    return (
        <aside className={`${isOpenProductDetail ? "flex" : "hidden"} product-detail  flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl">Detail</h2>
                <XMarkIcon className="size-6 text-black-500" />
            </div>
        </aside>
    );
}

export { ProductDetail }