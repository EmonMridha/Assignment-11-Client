import React, { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';

const BeVolunteer = () => {
    useEffect(()=> {
        document.title= 'Be Volunteer - Voluntopia'
    })
    const { title, photo, number, deadline, description, category, orgName, location, organizerEmail, _id, } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleRequest = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Sending all data to backend
        axios.post('https://volunteer-server-inky.vercel.app/requests', data)
            .then(res => {
                if (res.data.insertedId) {
                    axios.patch(`https://volunteer-server-inky.vercel.app/posts/${_id}/decrease`)
                        .then(() => {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Requested Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        })
                }
            })
            .catch(error => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Cannot request. Something went wrong.",
                    showConfirmButton: false,
                    timer: 1500
                });
            })

    }
    return (
        <div className='flex justify-center'>
            <div >
                <form onSubmit={handleRequest} className='flex flex-col bg-amber-900 p-10 w-100'>
                    <h2 className='text-center text-2xl'>Be A Volunteer</h2>
                    <label className="label">Thumbnail</label>
                    <input name='photo' type="url" readOnly className="input" defaultValue={photo} />

                    <label className="label">Post Title</label>
                    <input name='title' defaultValue={title} type="email" className="input" readOnly />

                    <label className="label">Description</label>
                    <input name='description' type="email" defaultValue={description} className="input" readOnly />

                    <label className="label">Category</label>
                    <input name='category' defaultValue={category} type="email" className="input" readOnly />

                    <label className="label">No of Volunteer needed</label>
                    <input name='number' defaultValue={number} type="email" className="input" readOnly />

                    <label className="label">Location</label>
                    <input name='location' defaultValue={location} type="email" className="input" readOnly />

                    <label className="label">Deadline</label>
                    <input name='deadline' defaultValue={deadline} type="email" className="input" readOnly />

                    <label className="label">Organizer Name</label>
                    <input name='orgName' readOnly type="email" defaultValue={orgName} className="input" />

                    <label className="label">Organizer Email</label>
                    <input name='organizerEmail' readOnly type="email" defaultValue={organizerEmail} className="input" />

                    <label className="label">Volunteer Name</label>
                    <input name='volunteerName' readOnly type="email" defaultValue={user.displayName} className="input" />

                    <label className="label">Volunteer Email</label>
                    <input name='volunteerEmail' readOnly type="email" defaultValue={user.email} className="input" />

                    <label className="label">Suggestion</label>
                    <input name='suggestion' type="text" placeholder='Give you advices' className="input" />

                    <label className="label">Status</label>
                    <input name='status' type="text" defaultValue={'Requested'} placeholder='Give you advices' className="input" />

                    <div className='flex justify-center'>
                        <button type='submit' className='btn btn-secondary btn-wide my-5'>Request</button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default BeVolunteer;