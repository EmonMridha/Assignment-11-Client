import React from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router';

const VolunteerNeedsNow = ({ posts }) => {
    const sortedPosts = [...posts].sort((a, b) => new Date(a.deadline) - new Date(b.deadline)) // if difference between a and b are positive then value of a and b will swap if negative then keep order

    const limitedPosts = sortedPosts.slice(0, 6)
    return (
        <div className='p-10 rounded-2xl'>
            <h2 className='text-center text-5xl font-semibold'>Volunteer Needs Now</h2>

            <div className='flex justify-center rounded-2xl bg-gray-700 p-10 my-20'>

                <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1'>

                    {
                        limitedPosts.map((post) => <PostCard key={post._id} post={post}></PostCard>)
                    }
                </div>
            </div>
            <div className='flex justify-center mt-[-40px]'>
                <Link to='/allVolunterNeed'><button className='btn btn-secondary'>See All</button></Link>
            </div>
        </div>
    );
};

export default VolunteerNeedsNow;