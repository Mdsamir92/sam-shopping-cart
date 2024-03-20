import { Link, useNavigate } from "react-router-dom";
import Search from '../Searchbar/Search'
import { useSelector } from "react-redux";

const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

   // CartItems
    // const cartItems = useSelector((state) => state.cartreducer.carts);
  

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
            {/* Home */}
            <li>
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>Products</Link>
            </li>
           {!user ? <li>
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}
            {!user ? <li>
                <Link to={'/login'}>Login</Link>
            </li> : ""}
           {user?.role=== "user" && <li>
                <Link to={'/userDashboard'}>{user?.name} </Link>
            </li>} 
            {user?.role=== "admin" && <li>
                <Link to={'/adminDashboard'}>{user?.name} </Link>
            </li>} 
            
            {/* logout  */}
            {user && <li className=" cursor-pointer" onClick={logout}>Logout </li>}

               {/* Cart */}
                 {/* <li>
                <Link to={'/cart'}>
                <i className="fa-solid fa-cart-shopping"> <sup> {cartItems.length}</sup></i>
                </Link>
                </li> */}
                

        </ul>
    )
    return (
        <nav className="bg-pink-600 sticky top-0 z-20">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="flex justify-center items-center left py-3 lg:py-0" data-aos="fade-right" data-aos-duration="1400"  data-aos-easing="linear">
                    <Link to={'/'}>
                        {/* <h1 className=" font-bold text-white text-2xl align-item--center">SamKart    </h1> */}
                     <img className="h-10 " src="./images/samLogo.png" alt="" />  
                   
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

         

                {/* Search Bar  */}
                <Search />
            </div>
        </nav>
    );
}

export default Navbar;