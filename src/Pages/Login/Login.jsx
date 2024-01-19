
import { BsGithub, BsGoogle } from "react-icons/bs";
import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProviders';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import bgImg from "../../../src/assets/others/authentication.png"
import authenticationImg from "../../../src/assets/others/authentication2.png"
import { FaFacebookF } from 'react-icons/fa';


const Login = () => {

    const [disabled,setDisabled] =useState(true)
    const {signIn,googleSignIn} =useContext(AuthContext)
    const location =useLocation()
    const navigate =useNavigate()

   const  from = location.state?.from?.pathname || "/";
     
   useEffect(()=>{
    loadCaptchaEnginge(6);
   },[])
  

    const handleLogin = (event) =>{
      event.preventDefault()
      const form =event.target 
      const email =form.email.value
      const password =form.password.value 
      console.log(email,password)
      signIn(email,password)
      .then(result=>{
        const user =result.user
        console.log(user)
        Swal.fire({
          title: "User login successful",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          }
          
        });
        navigate(from, { replace: true });
      })
      .catch(error=>{
        console.log(error.message)
      })
    }

    const handleValidateCaptcha =(e) =>{
        const user_captcha_value =e.target.value
        if(validateCaptcha(user_captcha_value)){
setDisabled(false)
        }else{
            setDisabled(true)
        }
    }
   
    return (
     <>
      <Helmet>
      <title>Tasty Traverse | Login</title>
    </Helmet>
        <div className="hero bg-base-200 min-h-screen lg:p-[80px]" style={{backgroundImage: `url(${bgImg})`}}>
  <div className="hero-content flex-col lg:flex-row w-full h-2/4 border-[3px] border-gray-300 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
    <div className="text-center lg:text-left md:w-1/2">
    <img src={authenticationImg} alt="" />
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body text-gray-700">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="type the text above" className="input input-bordered" required />
        </div>
        <div className="form-control">
         <input disabled={disabled}  className="btn font-bold btn-primary" type="submit" value="Login" />
        </div>
        <p className='text-orange-400 font-medium text-center mb-3'><small>New here? </small><Link to='/signUp'>Create an Account</Link></p>
      </form>
      
      
      <div className="flex flex-col  gap-3 mx-auto">
            <p className="text-gray-700 font-semibold">Or sign in with</p>
            <div className="flex items-center gap-6">
                <div className="btn btn-circle btn-outline  hover:border-[#D1A054] text-gray-700 hover:text-[#D1A054] duration-200">
                    <FaFacebookF/>
                </div>
                <div>
                <SocialLogin></SocialLogin>
                </div>
                <div className="rounded-full btn btn-circle btn-outline hover:border-[#D1A054] text-gray-700 hover:text-[#D1A054] duration-200">
                    <BsGithub/>
                </div>
            </div>
            </div>
     
    </div>
  </div>
</div>
     </>
    );
};

export default Login;








