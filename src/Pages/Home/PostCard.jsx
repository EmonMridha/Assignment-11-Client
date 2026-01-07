import React from 'react';
import { Link } from 'react-router';

const PostCard = ({ post }) => {
    const { _id } = post


    return (
        <div className=" bg-green-950 rounded-4xl lg:h-120 w-full shadow-sm">
            <div className='flex justify-center p-5 sm:p-10'>
                <img className='rounded-2xl object-cover h-48' src={post.photo} alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>

                <p><b>Deadline:</b> {post.deadline}</p>
                <p><b>Category:</b> {post.category}</p>

                <div className="card-actions justify-end">
                    <Link to={`/posts/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default PostCard;