import React from 'react';
import Banner from '../Banner/Banner';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import Animation from '../../../Shared/Animated/Animation';
import PopularInstructorCard from '../../../Shared/PopularInstructorCard/PopularInstructorCard';
import PopularInstuctor from '../PoplarInstructor/PopularInstuctor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopulerClasses></PopulerClasses>
            <Animation></Animation>
            <PopularInstuctor></PopularInstuctor>
        </div>
    );
};

export default Home;