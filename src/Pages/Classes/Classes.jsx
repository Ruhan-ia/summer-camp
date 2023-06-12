import React, { useEffect, useState } from 'react';
import Allclasses from '../../Shared/AllClasses/Allclasses';

const Classes = () => {
    const [allClass, setAllClass] = useState([])
    useEffect(()=>{

        fetch('https://summer-camp-server-ivory.vercel.app/allClasses')
        .then(res => res.json())
        .then(data =>setAllClass(data))
    }, [])
    return (
        <div className='grid lg:grid-cols-2 gap-10 mb-12'>
           {
            allClass.map(alc => <Allclasses key={alc._id} alc={alc}></Allclasses>)
           }
        </div>
    );
};

export default Classes;