import React from "react";

const PopularInstructorCard = ({ is }) => {
  const { image, instructor_name, number_of_students, sports_name } = is;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="avatar">
        <div className="w-auto rounded">
          <img src={image}/>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{instructor_name}</h2>
        <p>{sports_name}</p>
        <p>Number of Students:{number_of_students}</p>
      </div>
    </div>
  );
};

export default PopularInstructorCard;
