import React from 'react';
import { Link } from 'react-router';

const PostCard = ({ post }) => {
    const {_id} = post
    
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={post.photo}
                    alt="Shoes" />
            </figure>
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