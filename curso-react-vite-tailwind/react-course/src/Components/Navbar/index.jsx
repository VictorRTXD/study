import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { useContext } from "react"
import { ShoppingBagIcon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
    const {count} = useContext(ShoppingCartContext);
    const activateStyle = 'underline underline-offset-4'

    return (
        <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white'>
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/" >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/"
                        className={({ isActive }) => isActive ? activateStyle : undefined
                        }
                    >
                        All 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/clothes"
                        className={({ isActive }) => isActive ? activateStyle : undefined
                        }
                    >
                        Clothes 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/electronics"
                        className={({ isActive }) => isActive ? activateStyle : undefined
                        }
                    >
                        Electronics 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/furnitures"
                        className={({ isActive }) => isActive ? activateStyle : undefined
                        }
                    >
                        Furnitures 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/toys"
                        className={({ isActive }) => isActive ? activateStyle : undefined
                        }
                    >
                        Toys 
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/others"
                        className={({ isActive }) => isActive ? activateStyle : undefined
                        }
                    >
                        Others 
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className=" text-black/60">
                    victor@microsoft.com
                </li>
                <li>
                    <NavLink 
                        to="/my-orders"
                        className={({ isActive }) => isActive ? activateStyle : undefined
                        }
                    >
                        My orders
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/my-account"
                        className={({ isActive }) => isActive ? activateStyle : undefined
                        }
                    >
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/sign-in"
                        className={({ isActive }) => isActive ? activateStyle : undefined
                        }
                    >
                        Sign in
                    </NavLink>
                </li>
                <li className=" flex justify-center p-3">
                    <ShoppingCartIcon className="size-5"/>
                    {count}
                </li>
            </ul>
        </nav>
    )
}

export { Navbar }