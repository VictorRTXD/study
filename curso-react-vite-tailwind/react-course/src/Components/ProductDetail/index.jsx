import "./styles.css"
import { XMarkIcon } from '@heroicons/react/24/solid'
function ProductDetail() {
    
    return (
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white">
            <div className="flex justify-between items-center p-6">
                <h2 className=" font-medium text-xl">Detail</h2>
                <XMarkIcon className="size-6 text-black-500" />
            </div>
        </aside>
    );
}

export { ProductDetail }