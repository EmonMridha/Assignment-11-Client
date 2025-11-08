import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import { useLoaderData, useParams } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdatePosts = () => {
    const { user } = useContext(AuthContext)
    const { photo, title, description, category, number, location, deadline, _id } = useLoaderData();
    console.log(photo);

    const handleUpdatePost = async (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedPost = {
            photo: form.photo.value,
            title: form.title.value,
            description: form.description.value,
            category: form.category.value,
            location: form.location.value,
            number: parseInt(form.number.value),
            deadline: form.deadline.value,
            organizerName: form.organizerName.value,
            organizerEmail: form.organizerEmail.value,
        }

        try {
            const res = await axios.patch(`https://volunteer-server-inky.vercel.app/posts/${_id}`, updatedPost);

            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Updated Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Could not update",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        catch (error) {
            console.log(error);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Error happened",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update You Post</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleUpdatePost} className="fieldset">

                            <label className="label">Thumbnail Image URL</label>
                            <input name='photo' defaultValue={photo} type="url" className="input" placeholder="Thumbnail image URL" />

                            <label className="label">Post Title</label>
                            <input defaultValue={title} name='title' type="text" className="input" placeholder="Post Title" />

                            <label className='label'>Description</label>
                            <textarea name='description' defaultValue={description} type="text" className="input w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Post Description" rows='4' />

                            <label className="label">Category</label>
                            <input defaultValue={category} name='category' type="text" className="input" placeholder="ex- healthcare, education, social service etc" />

                            <label className="label">Location</label>
                            <input defaultValue={location} name='location' type="text" className="input" placeholder="Location of the post" />

                            <label className="label">Number of Volunteers Needed</label>
                            <input defaultValue={number} name='number' type="number" placeholder="e.g. 10" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" min="1" ></input>

                            <label className="block text-gray-700 font-medium mb-1">Deadline</label>

                            <input defaultValue={deadline} type="date" name='deadline' className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" ></input>

                            <label className="label">Organizer Name</label>
                            <input name='organizerName' type="text" className="input" defaultValue={user?.displayName} readOnly />

                            <label className="label">Organizer Email</label>
                            <input name='organizerEmail' type="email" className="input" defaultValue={user?.email} readOnly />


                            <button className="btn btn-neutral mt-4">Update Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatePosts;