import {useNavigate } from "react-router-dom"
import { useContext,useEffect } from "react";
import MyContext from "../../context/Context";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { DLT,ADD,REMOVE } from '../../redux/Actions/action'
// productData 
// const productData = [
//     {
//         id: 1,
//         image: 'https://i.pinimg.com/564x/3e/05/ce/3e05cefbc7eec79ac175ea8490a67939.jpg',
//         title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//         desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//         price: 150,
//         trendingProductName: 'Featured',
//         quantity: 1,
//     },
//     {
//         id: 2,
//         image: 'https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg',
//         title: 'Kaushalam kalash Copper Pot',
//         desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//         price: 120,
//         trendingProductName: 'Featured',
//         quantity: 1,
//     },
//     {
//         id: 3,
//         image: 'https://i.pinimg.com/564x/fd/50/68/fd50688767adb47aba7204f034554cbd.jpg',
//         title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//         desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//         price: 130,
//         trendingProductName: 'Featured',
//         quantity: 1,
//     },
//     {
//         id: 4,
//         image: 'https://i.pinimg.com/564x/22/80/8d/22808d88ada424962f2e064f3075b2d1.jpg',
//         title: 'Hand Painted Blue Kaushalam Tea Pot in Aluminium',
//         desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
//         price: 120,
//         trendingProductName: 'Featured',
//         quantity: 1,
//     },

// ]

const Homeproduct = () => {

    const navigate = useNavigate();
    
    const context = useContext(MyContext);
    const {loading,getAllProduct} = context;

    const cartItems = useSelector((state) => state.cartreducer.carts);
 
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(ADD(item));
        toast.success("Add to cart")
    }

  

    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart")
    }

  

    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cartItems));
    }, [cartItems])



    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>


            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                <div className="flex justify-center">
                    {loading && <Loader/>}
                </div>
                    <div className="flex flex-wrap -m-4">
                    {getAllProduct.slice(0,8).map((item, index) => {
                     const { id, title, price,productImageUrl } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img onClick={()=> navigate(`/productinfo/${id}`)}
                                                className="lg:h-60  h-96 w-full"
                                                src={productImageUrl}
                                                alt="blog"
                                            />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                               SamKart
                                            </h2>
                                            <h1 className="title-font text-md font-medium text-gray-900 mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                           
                           
                                          <button
                                                    onClick={() => addCart(item)}
                                                    className="cart-btn bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                     Add to cart  </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homeproduct;