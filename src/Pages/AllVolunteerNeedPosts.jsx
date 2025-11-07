import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AllVolunteerNeedPostsCard from './AllVolunteerNeedPostsCard';

const AllVolunteerNeedPosts = () => {
    const initialPosts = useLoaderData();
    const [posts, setPosts] = useState(initialPosts)
    const [searchText, setSearchText] = useState('');

    const fetchPosts = async (query) => {
        try {
            const res = await fetch(`https://volunteer-server-inky.vercel.app/posts/search?title=${query}`)
            const data = await res.json();
            setPosts(data)
        }
        catch (error) {
            console.log(erro);
        }
    }

    const handleSearchChange = e => {
        const value = e.target.value; // Text from searchbar
        setSearchText(value);
        fetchPosts(value)

    }
    return (
        <div className='flex justify-center'>
            <div>
                <h1 className='text-center text-4xl font-semibold my-5'>All Volunteer Need Posts</h1>

                {/* Search Input */}
                <div className='flex justify-center mb-5'>
                    <input
                        type="text"
                        placeholder="Search by post title..."
                        value={searchText}
                        onChange={handleSearchChange}
                        className="border p-2 rounded w-full max-w-md"
                    />
                </div>
                <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    {
                        posts.map(post => <AllVolunteerNeedPostsCard key={post._id} post={post}></AllVolunteerNeedPostsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllVolunteerNeedPosts;