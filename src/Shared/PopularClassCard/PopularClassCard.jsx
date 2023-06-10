import React from "react";

const PopularClassCard = ({ cl }) => {
  const { image, sports_name, number_of_students } = cl;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="avatar">
        <div className="w-auto rounded">
          <img src={image} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{sports_name}</h2>
        <p>Number of students:{ number_of_students}</p>
       
      </div>
    </div>
  );
};

export default PopularClassCard;
