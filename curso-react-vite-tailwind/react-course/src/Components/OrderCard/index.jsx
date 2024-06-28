import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

function OrderCard({id, title, imageUrl, price, deleteProduct}) {
    const {count, setCount} = useContext(ShoppingCartContext);
    let renderXMarkIcon
    if (deleteProduct) {
            renderXMarkIcon = <XMarkIcon className="size-6 text-black-500 cursor-pointer" onClick={() => {
            deleteProduct(id);
            setCount(count - 1);
        }} />
    }

    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
                </figure>
                <p className="text-sm font-light ">{title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">{price}</p>
                {renderXMarkIcon}
            </div>
        </div>
    );
}

export { OrderCard }