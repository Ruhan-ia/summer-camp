import React from "react";

const Allclasses = ({ alc }) => {
  const {
    sports_name,
    image,
    number_of_students,
    instructor_name,
    available_seats,
    price,
  } = alc;

  const handleAddToCart= (cls) =>{
        console.log(cls)
  }
  return (
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
  );
};

export default Allclasses;
