import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import Swal from 'sweetalert2';



const AddVolunterNeedPage = () => {
    useEffect(()=> {
        document.title= 'Add Volunter Post - Voluntopia'
    })

    const { user } = useContext(AuthContext)
    const [deadline, setDeadline] = useState(null)

    const handleAddPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const number = form.number.value;
        const orgName = form.organizerName.value;
        const organizerEmail = form.organizerEmail.value;

        const postData = { photo, deadline, title, description, category, location, number, orgName, organizerEmail }

        axios.post('https://volunteer-server-inky.vercel.app/posts', postData)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Posted Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Cannot Post. Something went wrong.",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Post for a volunteer</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleAddPost} className="fieldset">

                            <label className="label">Thumbnail Image URL</label>
                            <input name='photo' type="url" className="input" placeholder="Thumbnail image URL" />

                            <label className="label">Post Title</label>
                            <input name='title' type="text" className="input" placeholder="Post Title" />

                            <label className='label'>Description</label>
                            <textarea name='description' type="text" className="input w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Post Description" rows='4' />

                            <label className="label">Category</label>
                            <input name='category' type="text" className="input" placeholder="ex- healthcare, education, social service etc" />

                            <label className="label">Location</label>
                            <input name='location' type="text" className="input" placeholder="Location of the post" />

                            <label className="label">Number of Volunteers Needed</label>
                            <input name='number' type="number" placeholder="e.g. 10" className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" min="1" ></input>

                            <label className="block text-gray-700 font-medium mb-1">Deadline</label>
                            <DatePicker selected={deadline}
                                onChange={(date) => setDeadline(date)}
                                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholderText="Select a deadline"
                                dateFormat="yyyy-MM-dd"
                                minDate={new Date()} // prevents selecting past dates
                                required></DatePicker>
                            {/* <input type="date" name='deadline' className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" ></input> */}

                            <label className="label">Organizer Name</label>
                            <input name='organizerName' type="text" className="input" defaultValue={user?.displayName} readOnly />

                            <label className="label">Organizer Email</label>
                            <input name='organizerEmail' type="email" className="input" defaultValue={user?.email} readOnly />

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Add Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVolunterNeedPage;