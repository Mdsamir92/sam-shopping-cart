import { useContext, useEffect, useState } from "react";
import MyContext from "../../context/Context";
import { useParams } from "react-router";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { DLT,ADD,REMOVE } from '../../redux/Actions/action'


const Product = () => {
    const context = useContext(MyContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState('')

    const { id } = useParams()

    // console.log(product)

    const cartItems = useSelector((state) => state.cartreducer.carts);
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(ADD(item));
        toast.success("Add to cart")
    }

    // getProductData
    const getProductData = async () => {
        setLoading(true)
        try {
            const productTemp = await getDoc(doc(fireDB, "products", id))
            setProduct({...productTemp.data(), id : productTemp.id });
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        localStorage.setItem('cart',JSON.stringify(cartItems));
    }, [cartItems])

    useEffect(() => {
        getProductData()
    }, [])



    return (

        <section className="py-5 lg:py-16 font-poppins dark:bg-gray-800">
            {loading ?
                <>
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                </>

                :
            


                <div className="max-w-6xl px-4 mx-auto">
                    <div className="flex flex-wrap mb-24 -mx-4">
                        <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                            <div className="">
                                <div className="">
                                    <img
                                        className=" w-full lg:h-[26em] rounded-lg"
                                        src={product?.productImageUrl}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2">
                            <div className="lg:pl-20">
                                <div className="mb-6 ">
                                    <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                    {product?.title}
                                    </h2>
                                    <div className="flex flex-wrap items-center mb-6">
                                    <i style={{color:"yellow"}} className="fa-solid fa-star"></i>
                                    <i style={{color:"yellow"}} className="fa-solid fa-star"></i>
                                    <i style={{color:"yellow"}} className="fa-solid fa-star"></i>
                                    <i style={{color:"yellow"}} className="fa-solid fa-star"></i>
                                    <i  className="fa-regular fa-star"></i>
                                    
                                    </div>
                                    <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                                    <span>₹ {product?.price}</span>
                                    </p>
                                </div>
                                <div className="mb-6">
                                    <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                                    <p>{product?.description}</p>
                                    </h2>
                                </div>

                                <div className="mb-6 " />
                                <div className="flex flex-wrap items-center mb-6">

                                    <button     onClick={() => addCart(product)}
                                        className="w-full px-4 py-3 text-center text-pink-600 bg-pink-100 border border-pink-600  hover:bg-pink-600 hover:text-gray-100 rounded-xl"
                                    >
                                        Add to cart
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
            </section>


    );
}

export default Product;