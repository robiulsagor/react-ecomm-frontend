import "./navbar.css"
import logo from "../../assets/logo.png"
import cart_icon from "../../assets/cart_icon.png"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <div className="wrapper nav-wrapper">
                <Link to="/" className="nav-logo">
                    <img src={logo} alt="" />
                    <p>eComm<span>.</span></p>
                </Link>

                <ul className="nav-menu">
                    <li>
                        <NavLink to="/" >
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
                </ul>

                <div className="nav-login-cart">
                    <Link to="login"><button>login</button></Link>
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