import React, { useEffect, useState } from 'react';
import AllInstructor from '../../Shared/AllInstructor/AllInstructor';

const Instructor = () => {
    const  [instructor, setInstructor] = useState([])
    useEffect(() =>{
        fetch('https://summer-camp-server-ivory.vercel.app/allClasses')
        .then(res => res.json())
        .then(data =>setInstructor(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-3 gap-5 mb-12'>
            {
            
            instructor.map(ins => <AllInstructor key={ins._id} ins={ins}></AllInstructor>)
            
            }
        </div>
    );
};

export default Instructor;