import "./navbar.css"
import logo from "../../assets/logo.png"
import cart_icon from "../../assets/cart_icon.png"
import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState("")
    const menuChange = menu => {
        setActiveMenu(menu)
    }

    return (
        <nav>
            <div className="wrapper nav-wrapper">
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="" />
                    <p>eComm<span>.</span></p>
                </Link>

                <ul className="nav-menu">
                    <li>
                        <NavLink to="shop" >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="men">
                            Men
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="women">
                            Women
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="kids">
                            Kids
                        </NavLink>
                    </li>
                    {/* <li onClick={() => menuChange("Shop")}
                        className={activeMenu === "Shop" ? "active" : ""}>Shop</li>
                    <li onClick={() => menuChange("Men")}
                        className={activeMenu === "Men" ? "active" : ""}>Men</li>
                    <li onClick={() => menuChange("Women")}
                        className={activeMenu === "Women" ? "active" : ""}>Women</li>
                    <li onClick={() => menuChange("Kids")}
                        className={activeMenu === "Kids" ? "active" : ""}>Kids</li> */}
                </ul>

                <div className="nav-login-cart">
                    <button>login</button>
                    <div>
                        <Link to="cart">
                            <img src={cart_icon} alt="" />
                            <span className="cart-counter">0</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar