import React, { useEffect } from 'react';
import MyVolunteerNeedPosts from './MyVolunteerNeedPosts';
import MyVolunteerRequestPost from './MyVolunteerRequestPost';
import { useLoaderData } from 'react-router';

const ManageMyPosts = () => {

    useEffect(() => {
        document.title = 'Edit - Voluntopia'
    })
    const Requests = useLoaderData();
    return (
        <div>
            <h1 className='md:text-4xl text-3xl font-bold text-center'>Manage My Posts</h1>

            <h2 className="md:text-4xl text-2xl mt-40 ml-5">My Posts</h2>
            <MyVolunteerNeedPosts></MyVolunteerNeedPosts>

            <h2 className=' text-3xl my-10 ml-5'>My Requests</h2>
            <MyVolunteerRequestPost Requests={Requests}></MyVolunteerRequestPost>
        </div>
    );
};

export default ManageMyPosts;