import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';

const PostDetails = () => {
    useEffect(() => {
        document.title = 'Post Details - Voluntopia'
    })

    const { title, _id, description, location, number, orgName, organizerEmail, photo } = useLoaderData();

    return (
        <div className='flex justify-center'>
            <div className=" bg-green-950 lg:w-200 lg:m-20 m-5   rounded-2xl shadow-lg flex flex-col md:h-100 md:flex-row overflow-hidden border border-gray-200">

                <div className="p-5 flex justify-center rounded-2xl">
                    <img
                        src={photo}
                        alt="Event"
                        className="rounded-3xl h-60 object-cover"
                    />
                </div>

                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold text-white mb-2">{title}</h2>
                    <p className="text-white mb-4">
                        {description}
                    </p>

                    <div className="grid text-white sm:grid-cols-2 gap-3  text-sm">
                        <p><span className="font-semibold ">Category:</span> Environment</p>
                        <p><span className="font-semibold ">Location:</span> {location}</p>
                        <p><span className="font-semibold ">Number of volunteer needed: </span>{number}</p>
                        <p><span className="font-semibold ">Organizer Name:</span> {orgName}</p>
                        <p><span className="font-semibold ">Organizer Email:</span> {organizerEmail}</p>
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
        </div>

    );
};

export default PostDetails;