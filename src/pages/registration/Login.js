
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/Context";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from '../../components/Loader/Loader'
import { collection, onSnapshot, query, where } from "firebase/firestore";

function Login() {

  const context = useContext(MyContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

        /**========================================================================
    *========================================================================**/

        const userLoginFunction = async (e) => {
          e.preventDefault();
          // validation 
          if (userLogin.email === "" || userLogin.password === "") {
              toast.error("All Fields are required")
          }
  
          setLoading(true);
          try {
              const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);
              // console.log(users.user)
  
              try {
                  const q = query(
                      collection(fireDB, "user"),
                      where('uid', '==', users?.user?.uid)
                  );
                  const data = onSnapshot(q, (QuerySnapshot) => {
                      let user;
                      QuerySnapshot.forEach((doc) => user = doc.data());
                      localStorage.setItem("users", JSON.stringify(user) )
                      setUserLogin({
                          email: "",
                          password: ""
                      })
                      toast.success("Login Successfully");
                      setLoading(false);
                      if(user.role === "user") {
                          navigate('/userDashboard');
                      }else{
                          navigate('/adminDashboard');
                      }
                  });
                  return () => data;
              } catch (error) {
                  console.log(error);
                  setLoading(false);
              }
          } catch (error) {
              console.log(error);
              setLoading(false);
              toast.error("Login Failed");
          }
        }
  return (
    <div>

<div className="h-screen  flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
{loading && <Loader />}
  <div className="relative  bottom-16">
    <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>
    <div id="form-container" className="bg-white p-10 rounded-lg shadow-2xl w-72 relative z-10 transform transition duration-500 ease-in-out">
      <h2 id="form-title" className="text-center text-3xl font-bold mb-10 text-gray-800">Login</h2>
      <form className="space-y-5">
        <input className="w-full h-10 border border-gray-800 px-3 rounded-lg" placeholder="Email" id="" name="" type="text"   value={userLogin.email}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                email: e.target.value
                            })
                        }} />
        <input className="w-full h-10 border border-gray-800 px-3 rounded-lg" placeholder="Password" id="" name="" type="password"  value={userLogin.password}
                        onChange={(e) => {
                            setUserLogin({
                                ...userLogin,
                                password: e.target.value
                            })
                        }} />
        <button className="w-full h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"    onClick={userLoginFunction}>Sign in</button>
        <Link to={"/signup"} className="text-blue-500 hover:text-blue-800 text-sm" href="#">Don't have an account / Signup</Link>
      </form>
    </div>
  </div>
</div>


    </div>
  )
}

export default Login