import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";
import { Helmet } from "react-helmet-async";

const Allclasses = ({ alc }) => {
  const{user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const [ , refetch] =UseCart()
  const {
    sports_name,
    image,
    number_of_students,
    instructor_name,
    available_seats,
    price,
    _id
  } = alc;

  const handleAddToCart= (alc) =>{
    console.log(alc)
       if(user && user.email){
        const selectClasses = {
          selectedId:_id,
          price,  sports_name,
          image,
          number_of_students,
          instructor_name,
          email:user.email,
          available_seats

        }
        fetch('https://summer-camp-server-ivory.vercel.app/carts', {
          method: 'POST',
          headers:{
              'content-type': 'application/json'
          },
          body:JSON.stringify(selectClasses)
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data)
          if(data.insertedId){
            
            refetch()
            Swal.fire(
              'Good job!',
              'success!!'
            )
          }
        })
       }

       else{
        Swal.fire({
          title: 'Please login to select the class!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login', {state: {from:location}})
          }
        })
       }
  }
  return (
    <section>
       <Helmet>
        <title>Summer-Camp || All Classes</title>
      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl">
      <div className="avatar">
        <div className="w-auto rounded">
          <img src={image}/>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{sports_name}</h2>
        <p>Instructor: {instructor_name}</p>
        <p>Number of Students: {number_of_students}</p>
        <p>Available seats: { available_seats}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button onClick={() =>handleAddToCart(alc)} className="btn btn-primary">Select</button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Allclasses;
