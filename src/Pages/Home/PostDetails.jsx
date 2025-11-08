import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const PostDetails = () => {

    const { title, _id, description, location, number, orgName, organizerEmail, photo } = useLoaderData();




    return (
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-200">

            <div className="md:w-1/3">
                <img
                    src={photo}
                    alt="Event"
                    className="w-full h-64 md:h-full object-cover"
                />
            </div>

            <div className="md:w-2/3 p-6 flex flex-col justify-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">
                    {description}
                </p>

                <div className="grid sm:grid-cols-2 gap-3 text-gray-700 text-sm">
                    <p><span className="font-semibold text-gray-900">Category:</span> Environment</p>
                    <p><span className="font-semibold text-gray-900">Location:</span> {location}</p>
                    <p><span className="font-semibold text-gray-900">Number of volunteer needed: </span>{number}</p>
                    <p><span className="font-semibold text-gray-900">Organizer Name:</span> {orgName}</p>
                    <p><span className="font-semibold text-gray-900">Organizer Email:</span> {organizerEmail}</p>
                </div>
                {
                    number > 0 ? (
                        <Link to={`/beVolunteer/${_id}`}><button className='btn btn-secondary btn-wide'>Be a Volunteer</button></Link>
                    ) : (
                        <button disabled className="btn btn-disabled btn-wide mt-4 bg-gray-400 text-white cursor-not-allowed">
                            No Volunteers Needed
                        </button>
                    )
                }
            </div>
        </div>

    );
};

export default PostDetails;