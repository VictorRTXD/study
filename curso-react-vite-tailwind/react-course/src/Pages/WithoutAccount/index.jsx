import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function WithoutAccount() {
  let email = ""
  let password = ""
  const [route, setRoute] = useState("/welcome")
  const {account} = useContext(ShoppingCartContext)

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(account.get(email));
  }

  function logIn() {
    if (account.get(email) === password) {
      setRoute("/")
    } else {
      console.log("ouhno");
    }
  }

  return (
    <Layout>
      <h1>Welcome to Shoppi! </h1>
      <h2 className="mb-4">Look for our new seals and products</h2>

      <form onSubmit={onSubmit}  className="flex items-center flex-col">
        <input required type="text" placeholder="example@email.com" className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event) => email = event.target.value  }/>
        <input required type="password" placeholder="password" className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        onChange={(event => password = event.target.value)} />
        <Link to={route}>
          <button onClick={() => logIn()} className="rounded-lg border border-teal-500 w-80 p-4 mb-4 focus:outline-none cursor-pointer">inicar sesion</button>
        </Link>
      </form>

      <Link to={"/sign-up"}>
        <p>Don't have account?</p>
      </Link>
    </Layout>
  )
}

export { WithoutAccount } 