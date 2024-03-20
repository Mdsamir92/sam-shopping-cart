import { useNavigate, useParams } from "react-router";
import { useContext,useEffect } from "react";
import MyContext from "../../context/Context";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
// import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import { DLT,ADD,REMOVE } from '../../redux/Actions/action'


function Category() {
    
    const {categoryname} = useParams();

    
    const context = useContext(MyContext);
    const { getAllProduct, loading } = context;
    
    const cartItems = useSelector((state) => state.cartreducer.carts);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(ADD(item));
        toast.success("Add to cart")
    }


    // const deleteCart = (item) => {
    //     dispatch(deleteFromCart(item));
    //     toast.success("Delete cart")
    // }

    // console.log(cartItems)

    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cartItems));
    }, [cartItems])


    const navigate = useNavigate();

    // filter product 
    const filterProduct = getAllProduct.filter((obj)=> obj.category.includes(categoryname));
    // console.log(filterProduct)
  return (
    <div className="mt-10">
                {/* Heading  */}
                <div className="">
                    <h1 className=" text-center mb-5 text-2xl font-semibold first-letter:uppercase">{categoryname}</h1>
                </div>
                {loading ?

                    <div className="flex justify-center">
                        <Loader />
                    </div>

                    :

                    <section className="text-gray-600 body-font">
                        {/* main 2 */}
                        <div className="container px-5 py-5 mx-auto">
                            {/* main 3  */}
                            <div className="flex flex-wrap -m-4 justify-center">
                                {filterProduct.length > 0 ?
                                    <>
                                        {filterProduct.map((item, index) => {
                                            const { id, title, price, productImageUrl } = item;
                                            return (
                                                <div key={index} className="p-4 w-full md:w-1/4">
                                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                                        <img
                                                            onClick={() => navigate(`/productinfo/${id}`)}
                                                            className="lg:h-60  h-96 w-full"
                                                            src={productImageUrl}
                                                            alt="img"
                                                        />
                                                        <div className="p-6">
                                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                            </h2>
                                                            <h1 className="title-font text-xs font-medium text-gray-900 mb-3">
                                                                {title.substring(0, 25)}
                                                            </h1>
                                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                                                ₹{price}
                                                            </h1>
                                                            <div className="flex justify-center ">
                                                            
                                                           <button
                                                    onClick={() => addCart(item)}
                                                    className=" bg-pink-500 hover:bg-pink-600 w-full text-white py-[4px] rounded-lg font-bold">
                                                     Add to cart  </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>

                                    :

                                    <div>
                                        <div className="flex justify-center">
                                            <img  className="w-24 mb-2" src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png" alt="" />
                                        </div>
                                        <h1 className=" text-black text-xl">No {categoryname} product found</h1>
                                    </div>
                                }
                            </div>
                        </div>
                    </section>

                }
            </div>
  )
}

export default Category