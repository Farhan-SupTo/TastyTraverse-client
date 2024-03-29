import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const {googleSignIn} =useContext(AuthContext)
    const location =useLocation()
    const navigate =useNavigate()

    const  from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result=>{
            
            const loggedUser =result.user 
            console.log(loggedUser)
            const savedUser ={email:loggedUser.email,name:loggedUser.displayName}
            
            fetch('https://tasty-traverse-server.vercel.app/users',{
                method:'POST',
                headers: {
                   'content-type':'application/json',
                },
                body:JSON.stringify(savedUser)
              })
              .then(res=>res.json())
              .then(()=>{
                
                 

                  navigate(from, { replace: true });
               
      
              })
           
            
        })
    }
     
  return (
    <div>
      <div className="divider divider-horizontal"></div>
      <div className="text-center my-4">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline  hover:border-[#D1A054] text-gray-700 hover:text-[#D1A054] duration-200">
            <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
