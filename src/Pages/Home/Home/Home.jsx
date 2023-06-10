import React from 'react';
import Banner from '../Banner/Banner';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import Animation from '../../../Shared/Animated/Animation';
import PopularInstructorCard from '../../../Shared/PopularInstructorCard/PopularInstructorCard';
import PopularInstuctor from '../PoplarInstructor/PopularInstuctor';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Summer-Camp || Home</title>
      </Helmet>
            <Banner></Banner>
            <PopulerClasses></PopulerClasses>
            <Animation></Animation>
            <PopularInstuctor></PopularInstuctor>
        </div>
    );
};

export default Home;