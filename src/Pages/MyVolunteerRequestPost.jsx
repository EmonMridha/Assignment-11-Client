import { useState } from "react";
import Swal from "sweetalert2";
import { getAuth } from "firebase/auth"; // import Firebase auth

const MyVolunteerRequestPost = ({ Requests }) => {
    const [allReqs, setAllReqs] = useState(Requests);

    if (allReqs.length === 0) {
        return (
            <div className="p-4 text-center text-gray-500">
                No requests yet.
            </div>
        );
    }

    const handleDeleteReq = async (id) => {
        const result = await Swal.fire({
            title: "Do you want to delete the request?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Delete",
            denyButtonText: `Don't delete`
        });

        if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
            return;
        }

        if (result.isConfirmed) {
            try {
                const auth = getAuth();
                const user = auth.currentUser;

                if (!user) {
                    Swal.fire("Error", "You must be logged in to delete a request.", "error");
                    return;
                }

                // Get Firebase JWT token
                const token = await user.getIdToken();

                // Send DELETE request with Authorization header
                const res = await fetch(`https://volunteer-server-inky.vercel.app/requests/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}` // send token here
                    }
                });

                const data = await res.json();

                if (res.ok) {
                    // Remove deleted request from state
                    setAllReqs(allReqs.filter(singleReq => singleReq._id !== id));
                    Swal.fire("Deleted!", "Request has been deleted.", "success");
                } else {
                    Swal.fire("Error", data.message || "Failed to delete request", "error");
                }

            } catch (error) {
                Swal.fire("Error", error.message || "Something went wrong", "error");
            }
        }
    };

    return (
        <div className="overflow-x-auto my-20 rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allReqs.map((req, index) => (
                        <tr key={req._id}>
                            <th>{index + 1}</th>
                            <td>{req.title}</td>
                            <td>{req.location}</td>
                            <td>{req.category}</td>
                            <td>
                                <button
                                    onClick={() => handleDeleteReq(req._id)}
                                    className='btn rounded-full bg-red-500'
                                >
                                    Cancel
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyVolunteerRequestPost;
