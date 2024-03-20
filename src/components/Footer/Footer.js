



const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-2xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Free</span> until you're ready to
          launch
        </h1>
                  
            <ul>
                <li><a href="mailto:mdsamir13968@gmail.com">mdsamir13968@<i className="fa-regular fa-envelope"></i>.com</a></li>
           <li>+91 8910467866 <i className="fa-solid fa-phone "></i> </li>
            <li>Metiabruz,Kolkata 700024 <i className="fa-solid fa-location"></i></li>
           
          </ul>
        {/* <div>
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <button
            className="bg-teal-400 hover:bg-teal-500 duration-300 px-5 py-2.5 font-[Poppins]
           rounded-md text-white md:w-auto w-full"
          >
            Request Code
          </button>
        </div> */}
      </div>
      {/* <ItemsContainer /> */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
  
        <div className=" social-icons">
    
    <a href="#"><i className="fa-brands fa-facebook"></i> </a>
    <a href="https://www.instagram.com/md_samir92"><i className="fa-brands fa-instagram"></i> </a>
    <a href="#"><i className="fa-brands fa-linkedin"></i> </a>
    <a href='https://www.youtube.com/channel/UCp5waAFnrZKIJSANfNuYvzw'><i className="fa-brands fa-youtube"></i> </a>
</div>
      </div>
    </footer>
  );
};

export default Footer;

// import React from 'react'

// // import 'bootstrap/dist/css/bootstrap.min.css';


// function Footer() {
//   return (
//     <div className=' mt-4 px-3 py-3 footer text-center' >
     
    
//             <h5>Contact Us</h5>
//             <ul>
//                 <li><a href="mailto:mdsamir13968@gmail.com">mdsamir13968@<i className="fa-regular fa-envelope"></i>.com</a></li>
//            <li>+91 8910467866 <i className="fa-solid fa-phone "></i> </li>
//            <li>Metiabruz,Kolkata 700024 <i className="fa-solid fa-location"></i></li>
           
//             </ul>

            
              
//         </div>
  
//   )
// }

// export default Footer