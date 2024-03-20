import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/Context";
import toast from "react-hot-toast";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from '../../components/Loader/Loader'

function Signup() {
  const context = useContext(MyContext);
  const {loading, setLoading } = context;

  // navigate 
  const navigate = useNavigate();

  // User Signup State 
  const [userSignup, setUserSignup] = useState({
      name: "",
      email: "",
      password: "",
      role: "user"
  });

  const userSignupFunction = async (e) => {
    e.preventDefault();
    // validation 
    if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
        toast.error("All Fields are required")
       
    }else if(userSignup.password.length<6) {
       toast.error("Password required minimum 6 char")
     
    }
    


    setLoading(true);
    try {
        const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

        // create user object
        const user = {
            name: userSignup.name,
            email: users.user.email,
            uid: users.user.uid,
            role: userSignup.role,
            time: Timestamp.now(),
            date: new Date().toLocaleString(
                "en-US",
                {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }
            )
        }

        // create user Refrence
        const userRefrence = collection(fireDB, "user")

        // Add User Detail
        addDoc(userRefrence, user);

        setUserSignup({
            name: "",
            email: "",
            password: ""
        })

        toast.success("Signup Successfully");

        setLoading(false);
        navigate('/login')
    } catch (error) {
        console.log(error);
        setLoading(false);
    }

  }

  return (
    <div>

<div className= "h-screen  flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
{loading && <Loader/>}
  <div className="relative  bottom-16">
    <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
    <div id="form-container" className="bg-white p-10 rounded-lg shadow-2xl w-72 relative z-10 transform transition duration-500 ease-in-out">
      <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-gray-800">Register</h2>
      <form className="space-y-5">
        <input className="w-full h-10 border border-gray-800 px-3 rounded-lg" placeholder="Name" id="" name="" type="text" value={userSignup.name} onChange={(e)=> setUserSignup({...userSignup,name:e.target.value})} />
        <input className="w-full h-10 border border-gray-800 px-3 rounded-lg" placeholder="Email" id="" name="" type="email" value={userSignup.email} onChange={(e)=> setUserSignup({...userSignup,email:e.target.value})}/>
        <input className="w-full h-10 border border-gray-800 px-3 rounded-lg" placeholder="Password" id="" name="" type="password" value={userSignup.password} onChange={(e)=> setUserSignup({...userSignup,password:e.target.value})} />
        <button className="w-full h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={userSignupFunction}>Sign up</button>
        <Link to={"/login"} className="text-blue-500 hover:text-blue-800 text-sm" href="#">Already account / login</Link>
      </form>
    </div>
  </div>
</div>


    </div>
  )
}

export default Signup
