import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Link } from 'react-router';

const MyVolunteerNeedPosts = () => {
    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            if (!user?.email) return;

            try {
                console.log("Fetching posts for:", user.email);
                const res = await fetch(`http://localhost:3000/posts/byEmail/${user.email}`);
                const data = await res.json();
                console.log("Data fetched:", data);
                setMyPosts(data);
            } catch (err) {
                console.error("Error fetching posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [user?.email]);

    if (loading) {
        return <div>Loading your posts...</div>;
    }

    if (myPosts.length === 0) {
        return <div className='text-center my-20 text-red-400'>No posts found for {user?.email}</div>;
    }

    return (
        <div>

            <div className='flex justify-center'>
                <div className="space-x-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {myPosts.map(post => (
                        <div className="card bg-purple-600 p-5 border-2 h-140 w-100 shadow-sm">
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
                                    <Link to={`/posts/${post._id}`}><button className="btn btn-primary">View Details</button></Link>
                                    <Link to={`/updatePosts/${myPosts._id}`}><button className='btn btn-secondary'>Update</button></Link>
                                    <Link><button className='btn '>Delete</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyVolunteerNeedPosts;
