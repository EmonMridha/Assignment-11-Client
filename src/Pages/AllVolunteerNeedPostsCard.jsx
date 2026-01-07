import React from 'react';
import { Link } from 'react-router';

const AllVolunteerNeedPostsCard = ({post}) => {
    return (
        <div className="card bg-green-950 p-5 border-2 h-140  w-full shadow-sm">
            <div className='flex justify-center'>
                <img
                className='rounded-2xl object-cover h-50'
                    src={post.photo}
                    alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>

                <p><b>Deadline:</b> {post.deadline}</p>
                <p><b>Category:</b> {post.category}</p>

                <div className="card-actions justify-end">
                    <Link to={`/posts/${post._id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllVolunteerNeedPostsCard;