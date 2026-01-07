import React, { useState } from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router';

const VolunteerNeedsNow = ({ posts }) => {
    const sortedPosts = [...posts].sort((a, b) => new Date(a.deadline) - new Date(b.deadline)) // if difference between a and b are positive then value of a and b will swap if negative then keep order
    const [tableView, setTableView] = useState(false)

    const limitedPosts = sortedPosts.slice(0, 6)

    const handleToggleView = () => {
        setTableView(!tableView)
    }
    return (
        <div className='p-10 rounded-2xl'>
            <h2 className='text-center text-3xl md:text-5xl font-semibold'>Volunteer Needs Now</h2>

            {/* Toggle button */}
            <div className='flex justify-center my-6'>
                <button className='btn btn-primary' onClick={handleToggleView}>
                    {tableView ? 'Switch to Card View' : 'Switch to Table View'}
                </button>
            </div>

            <div className='flex justify-center rounded-2xl bg-gray-900 p-5 sm:p-7 md:p-10 my-20'>

                {
                    tableView ? (<div className='overflow-x-auto bg-gray-800 text-white rounded-2xl p-6 my-10'>
                        <table className='table w-full'>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Location</th>
                                    <th>Deadline</th>
                                    <th>Volunteers Needed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {limitedPosts.map((post) => (
                                    <tr key={post._id} className='hover:bg-gray-700'>
                                        <td>{post.title}</td>
                                        <td>{post.category}</td>
                                        <td>{post.location}</td>
                                        <td>{post.deadline}</td>
                                        <td>View Details</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>) : (<div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1'>

                        {
                            limitedPosts.map((post) => <PostCard key={post._id} post={post}></PostCard>)
                        }
                    </div>)
                }


            </div>
            <div className='flex justify-center mt-[-40px]'>
                <Link to='/allVolunterNeed'><button className='btn btn-secondary'>See All</button></Link>
            </div>
        </div>
    );
};

export default VolunteerNeedsNow;