import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const {createUser, profile} = useContext(AuthContext)
  const navigate = useNavigate()
    const { register, handleSubmit,reset,  formState: { errors } } = useForm();
    const onSubmit = data =>{ 
      
      console.log(data)
      createUser(data.email, data.password)
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser)
        profile(result.user, data.name, data.PhotoURL)
        .then(() =>{
          console.log('profile updated')
            const userInfo = {name:data.name, email:data.email}
          fetch('https://summer-camp-server-ivory.vercel.app/users', {
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(userInfo)
          })
          .then(res =>res.json())
          .then(data=>{
            if(data.insertedId){
              reset()
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your profile has been updated',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/')
            }
          })
         
        })
        .catch(error =>{
          console.log(error.message)
        })
        
      })
      .catch(error =>{
        console.log(error.message)
      })
     
    
  }
  return (
   <>
    <Helmet>
        <title>Summer-Camp || SignUp</title>
      </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">SignUp now!</h1>
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name",  { required: true })}

                placeholder="name"
                name="name"
                className="input input-bordered"

              />
          {errors.name &&  <span className="text-red-500">Name is required.</span> }

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                {...register("PhotoURL",  { required: true })}

                placeholder="PhotoURL"
                name="PhotoURL"
                className="input input-bordered"

              />
          {errors.PhotoURL &&  <span className="text-red-500">PhotoURL is required.</span> }

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {required:true})}
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
           {errors.email && <span className="text-red-600">Email is required.</span>}

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: true,
                  minLength:6, 
                  maxLength: 20,
                  pattern:/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!#$%&?*@])/
                })}
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
                {errors.password?.type === 'required' && <p  className="text-red-500">password is required</p>}
                {errors.password?.type === 'minLength' && <p  className="text-red-500">password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p  className="text-red-500">one uppercase, one lowercase, one spacial character and one numeric digit.</p>}

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />

            </div>
            <SocialLogin></SocialLogin>
            <p>Already have an account? Please <Link to='/login'><span className="font-bold text-blue-500 ">Login</span></Link></p>
          </form>
        </div>
      </div>
    </div>
   
   </>
  );
};

export default SignUp;
