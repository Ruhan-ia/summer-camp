import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import PopularClassCard from '../../../Shared/PopularClassCard/PopularClassCard';

const PopulerClasses = () => {

    const [classes, setClasses] = useState([])
   useEffect(()=>{

    fetch('http://localhost:5000/popularClass')
    .then(res => res.json())
    .then(data =>setClasses(data))
   }, [])
    return (
        <div>
           <SectionTitle heading='popular classes' subHeading='classes are here'></SectionTitle> 
        
            <div className='grid lg:grid-cols-3 gap-5'>
              {
                classes.map(cl => <PopularClassCard key={cl._id} cl={cl}></PopularClassCard>)
              }
            </div>
        </div>
    );
};

export default PopulerClasses;