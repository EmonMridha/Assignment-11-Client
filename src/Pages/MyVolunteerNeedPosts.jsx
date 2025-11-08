import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyVolunteerNeedPosts = () => {
    const { user } = useContext(AuthContext);
    const [myPosts, setMyPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            if (!user?.email) return;

            try {
                const res = await fetch(`https://volunteer-server-inky.vercel.app/posts/byEmail/${user.email}`, {
                    headers: {
                        authorization: `Bearer ${user.accessToken}`
                    }
                });
                const data = await res.json();
                setMyPosts(data);
            } catch (err) {
                console.error("Error fetching posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [user?.email, user.accessToken]);

    if (loading) {
        return <div>Loading your posts...</div>;
    }

    if (myPosts.length === 0) {
        return <div className='text-center my-20 text-red-400'>No posts found for {user?.email}</div>;
    }

    const handleDeletePost = async (id) => {

        Swal.fire({
            title: "Are you sure you want to delete this?.",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes, delete",
            denyButtonText: `Don't delete`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {

                // Start deleting
                fetch(`https://volunteer-server-inky.vercel.app/posts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        setMyPosts(myPosts.filter(post => post._id !== id)) // keeping those whose _id doesn't match with id
                    })
                Swal.fire("Deleted!", "", "success");
            } else if (result.isDenied) {
                Swal.fire(`Couldn't delete`);
            }
        });
    }

    return (
        <div>

            <div className='flex justify-center'>
                <div className="space-x-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                    {myPosts.map((post) => (
                        <div key={post._id} className="card bg-purple-600 p-5 border-2 h-140 w-100 shadow-sm">
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
                                    <Link to={`/updatePosts/${post._id}`}><button className='btn btn-secondary'>Update</button></Link>
                                    <Link><button onClick={() => handleDeletePost(post._id)} className='btn '>Delete</button></Link>
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
