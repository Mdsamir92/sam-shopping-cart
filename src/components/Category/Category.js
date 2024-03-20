import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/416/416/xif0q/perfume/g/e/d/100-cologne-spray-base-camp-perfume-ustraa-men-original-imagzs39xdhfcgnx.jpeg?q=70&crop=false',
        name: 'perfume'
    },

    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png ',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    
    {
        image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MT633_VW_34FR+watch-49-titanium-ultra2_VW_34FR+watch-face-49-ocean-ultra2_VW_34FR_GEO_IN?wid=2000&hei=2000&fmt=png-alpha&.v=1694507270905',
        name: 'watch'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },

]

const Category = () => {
    // naviaget 
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-4 lg:px-4">
                                    {/* Image  */}
                                    <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-pink-500 transition-all hover:bg-pink-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img" />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
        </div>
    );
}

export default Category;