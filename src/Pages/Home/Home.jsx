
import { useLoaderData } from 'react-router';
import Banner from './Banner';
import VolunteerNeedsNow from './VolunteerNeedsNow';
import { useEffect } from 'react';
import Testimonials from './Testimonials';
import Tips from './Tips';

const Home = () => {

    useEffect(()=>{
        document.title='Home - Voluntopia';
    },[])

    const posts = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            <VolunteerNeedsNow posts={posts}></VolunteerNeedsNow>
            <Testimonials></Testimonials>
            <Tips></Tips>
        </div>
    );
};

export default Home;