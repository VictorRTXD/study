import { Layout } from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import { useContext, useState, useEffect } from "react"
import { Link } from "react-router-dom";

function SignUp() {
  let email = ""
  let password1 = ""
  let password2 = ""
  const [route, setRoute] = useState("/sign-up"); // Estado inicial: redirecciona a /sign-in
  const {account, setAccount} = useContext(ShoppingCartContext)

  function onSubmit() {
    if (password1 === password2 && password1 != "" && email != "") {
      const addAccountToContext = new Map(account); // Haces una copia del Map actual
      addAccountToContext.set(email, password1); // Agregas un nuevo elemento al Map
      setAccount(addAccountToContext); // Actualizas el estado con el nuevo Map
      setRoute("/welcome"); // Cambia la ruta a /welcome si las contraseñas coinciden
    } else {
      alert("las contrasenas no coinsiden, intenta nuevamente")
    }
  }

  useEffect(() => {
    localStorage.setItem("accounts", JSON.stringify(account))
  }, [account])

  return (
    <>
      <Layout>
        <h1 className=" font-semibold mb-4">Sign-up a new account</h1>
        <form onSubmit={onSubmit} className="flex items-center flex-col w-full h-full">
          <input type="text" placeholder="New email" className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => email = event.target.value} />
          <input type="password" placeholder="New password" className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => password1 = event.target.value} />
          <input type="password" placeholder="Confirm password" className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
          onChange={(event) => password2 = event.target.value} />
          <Link to={route}>
            {/* <button className="w-full bg-black py-3 text-white rounded-lg" onClick={() => handleCheckout()}>Checkout</button> */}
            <button onClick={() => onSubmit()} className="rounded-lg border border-teal-500 w-80 p-4 mb-4 focus:outline-none cursor-pointer">Registrar usuario</button>
          </Link>
        </form>
      </Layout>
    </>
  )
}

export { SignUp }