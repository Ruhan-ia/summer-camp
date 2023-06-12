import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {social} = useContext(AuthContext)
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () =>{
        social()
        .then(result =>{
            const loggedUser =result.user;
            console.log(loggedUser)

            const userInfo = {name:loggedUser.displayName, email:loggedUser.email}
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
                
                navigate(from, {replace:true})
              }
            })


            
        })
        .catch(error =>{
            console.log(error.message)
        })
    }
  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center my-6 mx-auto">
      <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
       <FcGoogle></FcGoogle>
      </button>
      </div>
    </div>
  );
};

export default SocialLogin;
