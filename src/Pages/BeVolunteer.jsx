import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext/AuthContext';

const BeVolunteer = () => {
    const { title, photo, number, deadline, description, category, orgName, location, organizerEmail } = useLoaderData()
    const { user } = useContext(AuthContext)

    return (
        <div className='flex justify-center'>
            <div >
                <div className='flex flex-col bg-amber-900 p-10 w-100'>
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
                    <input name='suggestion' type="email" placeholder='Give you advices' className="input" />

                    <label className="label">Status</label>
                    <input name='status' type="email" defaultValue={'Requested'} placeholder='Give you advices' className="input" />

                    <div className='flex justify-center'>
                    <button className='btn btn-secondary btn-wide my-5'>Request</button>
                </div>
                </div>
                
            </div>
        </div>

    );
};

export default BeVolunteer;