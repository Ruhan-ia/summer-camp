import React from "react";

const AllInstructor = ({ ins }) => {
  const { instructor_name, in_email, instructor_img } = ins;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <div className="avatar">
        <div className="w-auto rounded">
          <img src={instructor_img} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">Name: {instructor_name}</h2>
        <p>Email:{in_email}</p>
      
      </div>
    </div>
  );
};

export default AllInstructor;
