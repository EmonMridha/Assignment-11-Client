import { useState } from "react";
import Swal from "sweetalert2";

const MyVolunteerRequestPost = ({ Requests }) => {
    const [allReqs, setAllReqs] = useState(Requests)

    if (allReqs.length === 0) {
        return (
            < div className="p-4 text-center text-gray-500" >
                No requests yet.
            </div >

        )
    }

    const handleDeleteReq = (id) => {
        Swal.fire({
            title: "Do you want to delete the requests?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't delete`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/requests/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        setAllReqs(allReqs.filter(singleReq => singleReq._id !== id))
                    })
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    return (
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                {
                    allReqs.map((req, index) => <tbody key={req._id}>
                        {/* row 1 */}
                        <tr>
                            <th>{index + 1}</th>
                            <td>{req.title}</td>
                            <td>{req.location}</td>
                            <td>{req.category}</td>
                            <td><button onClick={() => handleDeleteReq(req._id)} className='btn rounded-full bg-red-500'>Cancle</button></td>
                        </tr>
                    </tbody>)
                }
            </table>
        </div>
    );
};




export default MyVolunteerRequestPost;