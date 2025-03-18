import {  useState,useContext } from "react";
import {Link, useNavigate } from "react-router-dom";
import MyContext from '../../context/Context';
import { useSelector } from "react-redux";
import {IoMdClose} from "react-icons/io";
import { BsSearch } from 'react-icons/bs';


const Search = () => {
    const context = useContext(MyContext);
    const { getAllProduct } = context
  
  const navigate = useNavigate();
   // CartItems
   const cartItems = useSelector((state) => state.cartreducer.carts);
  

    // Search State 
    const [search, setSearch] = useState("");

    // Filter Search Data
       const filterSearchData = getAllProduct
   .filter((obj) => 
        obj.title.toLowerCase().includes(search.toLowerCase()) // Convert both to lowercase
    )
    .slice(0, 8);

    const handleClose = () => {
        setSearch("");
    }

    return (
        <div className="">
            {/* search input  */}
            <div className="input flex justify-center">
            <ul>
                   {/* Cart */}
                   <li className="px-3 py-2">
                <Link to={'/cart'}>
                <i className=" fa-solid fa-cart-shopping"> <sup> {cartItems.length}</sup></i>
                </Link>
                </li>
            </ul>
            <div className="relative w-52 lg:w-50 md:w-50 outline-none">
            <input
                    type="text"
                    value={search}
                    placeholder='Search here...'
                    onChange={(e) => setSearch(e.target.value)}
                    className=' bg-gray-200 placeholder-gray-400 rounded-full relative  px-2 py-2 w-52 lg:w-50 md:w-50 outline-none text-black '
                />
                 {
                        search === "" ? (<BsSearch className='cursor-pointer absolute right-0 top-0 mr-4 mt-3 text-gray-400' size={20} />
                        ) : (<IoMdClose className='cursor-pointer absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} onClick={handleClose} />)
                    } 
            </div>
                  
            
            </div>

            {/* search drop-down  */}
            <div className=" flex justify-center">
                {search && <div className="block absolute bg-gray-200 w-50 md:w-50 lg:w-40 z-50 my-1 rounded-lg px-2 py-1">
                    {filterSearchData.length > 0 ?
                        <>
                        <IoMdClose className='cursor-pointer absolute right-0 top-0 mx-2 mt-2 text-gray-400' size={20} onClick={handleClose} />
                            {filterSearchData.map((item, index) => {
                                return (
                                    <div  onClick={()=> navigate(`/productinfo/${item.id}`)} key={index} className="py-2 px-2 cursor-pointer">
                                        <div className="flex items-center gap-2">
                                            <img className="w-10" src={item.productImageUrl} alt="" />
                                            <p className='text-xs'> {item.title.slice(0, 20)}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                        :
                        <>
                            <div className="flex justify-center">
                                <img className=" w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                            </div>
                        </>}
                </div>
                }
            </div>
        </div>
    );
}


export default Search
