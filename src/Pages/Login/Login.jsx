import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const {logIn} =useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    const handleLogIn = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
        .then(result =>{
          const loggedUser = result.user;
          console.log(loggedUser)
          Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
          navigate(from, {replace:true})
        })
        .catch(error =>{
          console.log(error.message)
        })
    }
  return (
   <>
     <Helmet>
        <title>Summer-Camp || Login</title>
      </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
         
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                required
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
            </div>
            <SocialLogin></SocialLogin>
            <p>Dont have an account? Please  <Link to='/signup'><span className="font-bold text-blue-500">SignUp</span></Link></p>
          </form>
        </div>
      </div>
    </div>
   </>
  );
};

export default Login;
