import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Search from '../Searchbar/Search'



const Navbar = () => {

    // get user from localStorage 
    const user = (localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    const [menu, setMenu] = useState(false);
    // navList Data
    const mobile = (
        <div className="md:hidden transition-all ease-out duration-500">
       
        <ul className=" text-center gap-10  text-white font-medium text-lg px-5 py-2 transition-all ease-out duration-500 ">
            <li className=" pb-5  border-slate-700 hover:bg-pink-900">
                <Link spy={true} smooth={true} to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li className=" pb-5  border-slate-700 hover:bg-pink-900">
                <Link spy={true} smooth={true} to={'/allproduct'}>Products</Link>
            </li>
            {!user ? <li className=" pb-5  border-slate-700 hover:bg-pink-900">
                <Link spy={true} smooth={true} to={'/signup'}>Signup</Link>
            </li> : ""}
            {!user ? <li className=" pb-5  border-slate-700 hover:bg-pink-900">
                <Link spy={true} smooth={true} to={'/login'}>Login</Link>
            </li> : ""}
            {user?.role === "user" && <li className=" pb-5  border-slate-700 hover:bg-pink-900">
                <Link spy={true} smooth={true} to={'/userDashboard'}>{user?.name} </Link>
            </li>}
            {user?.role === "admin" && <li className=" pb-5  border-slate-700 hover:bg-pink-900">
                <Link spy={true} smooth={true} to={'/adminDashboard'}>{user?.name} </Link>
            </li>}

            {/* logout  */}
            {user && <li className=" pb-5  border-slate-700 hover:bg-pink-900 cursor-pointer" onClick={logout}>Logout </li>}
        </ul>
        <Search />
        <br/>
        </div>
    
    )

    // navList Data
    const navList = (
        <ul className="md:flex hidden space-x-3 text-white font-medium text-md px-5 ">
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
            {user?.role === "user" && <li>
                <Link to={'/userDashboard'}>{user?.name} </Link>
            </li>}
            {user?.role === "admin" && <li>
                <Link to={'/adminDashboard'}>{user?.name} </Link>
            </li>}

            {/* logout  */}
            {user && <li className=" cursor-pointer" onClick={logout}>Logout </li>}



        </ul>
    )
    return (

        <div>


            <nav className="bg-pink-600 sticky top-0 z-20 transition-all ease-in duration-500">
                {/* main  */}
                <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                    {/* left  */}
                    <div className="md:flex hidden  justify-center items-center left py-3 lg:py-0" >
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
                    <div className=' md:flex hidden '>
                        <Search />
                    </div>

                    <div className='md:hidden flex justify-between mx-4'>
                        <div>
                            <Link to={'/'}>
                              
                                <img className="h-10 md:hidden " src="./images/samLogo.png" alt="" />

                            </Link>
                        </div>

                        <button className='md:hidden transition-all  text-3xl px-2' onClick={() => setMenu(!menu)} >{menu ? <span>&times;</span> : <span>&#9776;</span>}</button>


                    </div>

                    {menu && mobile}

                </div>
            </nav>

        </div>

    );
}

export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import Search from '../Searchbar/Search'
// import { useSelector } from "react-redux";

// const Navbar = () => {
//     // get user from localStorage 
//     const user = JSON.parse(localStorage.getItem('users'));

//     // // navigate 
//     const navigate = useNavigate();

//     // logout function 
//     const logout = () => {
//         localStorage.clear('users');
//         navigate("/login")
//     }



//     // navList Data
//     const navList = (
//         <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
//             {/* Home */}
//             <li>
//                 <Link to={'/'}>Home</Link>
//             </li>

//             {/* All Product */}
//             <li>
//                 <Link to={'/allproduct'}>Products</Link>
//             </li>
//            {!user ? <li>
//                 <Link to={'/signup'}>Signup</Link>
//             </li> : ""}
//             {!user ? <li>
//                 <Link to={'/login'}>Login</Link>
//             </li> : ""}
//            {user?.role=== "user" && <li>
//                 <Link to={'/userDashboard'}>{user?.name} </Link>
//             </li>} 
//             {user?.role=== "admin" && <li>
//                 <Link to={'/adminDashboard'}>{user?.name} </Link>
//             </li>} 
            
//             {/* logout  */}
//             {user && <li className=" cursor-pointer" onClick={logout}>Logout </li>}

      

//         </ul>
//     )
//     return (
//         <nav className="bg-pink-600 sticky top-0 z-20">
//             {/* main  */}
//             <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
//                 {/* left  */}
//                 <div className="flex justify-center items-center left py-3 lg:py-0" >
//                     <Link to={'/'}>
                      
//                      <img className="h-10 " src="./images/samLogo.png" alt="" />  
                   
//                     </Link>
//                 </div>

//                 {/* right  */}
//                 <div className="right flex justify-center mb-4 lg:mb-0">
//                     {navList}
//                 </div>

         

//                 {/* Search Bar  */}
//                 <Search />
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


