import React from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Layout } from "../../Components/Layout"
import { Cards } from "../../Components/Cards"
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {
  const {item, setSearchByTitle} = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input type="text" placeholder="Search a product" className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" onChange={(event) => setSearchByTitle(event.target.value)} />
      <div className="grid w-full grid-cols-4 gap-4 max-w-screen-lg ">
      {
        item?.map((item) => {
          return <Cards product={item} key={item.id}  />
        })
      }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home