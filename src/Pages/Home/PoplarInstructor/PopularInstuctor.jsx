import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import PopularInstructorCard from '../../../Shared/PopularInstructorCard/PopularInstructorCard';

const PopularInstuctor = () => {
    const [instructor, setInstructor] = useState([])
    useEffect(()=>{
 
     fetch('http://localhost:5000/popularClass')
     .then(res => res.json())
     .then(data =>setInstructor(data))
    }, [])
    return (
        <section>
         <SectionTitle heading='popular Instructors' subHeading='Instructors are here'></SectionTitle> 

         <div className='grid lg:grid-cols-3 gap-5'>
              {
                instructor.map(is => <PopularInstructorCard key={is._id} is={is}></PopularInstructorCard>)
              }
            </div>
        </section>
    );
};

export default PopularInstuctor;