import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout"
import { Cards } from "../../Components/Cards"
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
  const {filteredItems, setSearchByTitle} = useContext(ShoppingCartContext)

  const renderView = () => {
      if (filteredItems?.length > 0) {
        return (
          filteredItems?.map(item => (
            <Cards key={item.id} product={item} />
          ))
        )
      } else {
        return (
          <div>We don't have anything :(</div>
        )
      }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => setSearchByTitle(event.target.value)} />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home