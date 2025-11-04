
import { useLoaderData } from 'react-router';
import Banner from './Banner';
import VolunteerNeedsNow from './VolunteerNeedsNow';

const Home = () => {

    const posts = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            
            <VolunteerNeedsNow posts={posts}></VolunteerNeedsNow>
        </div>
    );
};

export default Home;