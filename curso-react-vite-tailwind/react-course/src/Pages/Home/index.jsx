import React from "react";
import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout"
import { Cards } from "../../Components/Cards"

function Home() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItem(data))
  }, [])

  return (
    <Layout>
      Home
      <div className="grid w-full grid-cols-4 gap-4 max-w-screen-lg ">
      {
        item?.map((item) => {
          return <Cards product={item} key={item.id}  />
        })
      }
      </div>
    </Layout>
  )
}

export default Home