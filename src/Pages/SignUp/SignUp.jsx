import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate,  } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const SignUp = () => {
 const {createUser,updateUserProfile} =useContext(AuthContext)
 const navigate =useNavigate()
 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    // console.log(data)
    createUser(data.email,data.password)
    .then(result=>{ 
      const loggedUser =result.user 
      console.log(loggedUser)
      updateUserProfile(data.name,data.photo)
      .then(()=>{
        const savedUser ={email:data.email,name:data.name}
        fetch('http://localhost:5000/users',{
          method:'POST',
          headers: {
             'content-type':'application/json',
          },
          body:JSON.stringify(savedUser)
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            reset()
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          }

        })
      })
      .catch(error => console.log(error))
    })
  }

 

    return (
      <>
      <Helmet>
      <title>Tasty Traverse | Sign Up</title>
    </Helmet>
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left md:w-1/2">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input type="text" name='name' {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                {errors.name && <span className='text-red-500'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input type="text" name='photo' {...register("Photo_URL", { required: true })} placeholder="Photo_URL" className="input input-bordered" />
                {errors.Photo_URL && <span className='text-red-500'>Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email && <span className='text-red-500'>Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input type="password" name='password' {...register("password", { required: true, minLength: 6, maxLength: 20, pattern:/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/ })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === "required" && (
        <p className='text-red-500'>Password is required</p>
      )}
                {errors.password?.type === "minLength" && (
        <p className='text-red-500'>Password must be 6 characters</p>
      )}
                {errors.password?.type === "maxLength" && (
        <p className='text-red-500'>Password must be 6 characters</p>
      )}
                {errors.password?.type === "pattern" && (
        <p className='text-red-500'>Password must be at least one digit,one special character,one uppercase,one lowercase</p>
      )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control  mt-6">
               <input  className="btn btn-primary font-bold" type="submit" value="Sign Up" />
              </div>
              <p className='text-orange-400 font-medium text-center mb-3'><small>Already Registered? </small><Link to='/login'>Go to log in</Link></p>
            </form>
            <SocialLogin></SocialLogin>
           
          </div>
        </div>
      </div>
      </>
    );
};

export default SignUp;