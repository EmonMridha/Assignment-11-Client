import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext/AuthContext';
import registerAnimation from '../assets/Register.json'
import Lottie from 'lottie-react';
import { updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Register = () => {

    const { createUser, user } = useContext(AuthContext)
    (user);
    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const photo = form.photo.value;
        const displayName = form.disName.value;
        const password = form.password.value;


        // Create User
        createUser(email, password)
            .then(result => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                updateProfile(auth.currentUser, {
                    photoURL: photo,
                    displayName: displayName
                })
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Can't Register successfully. Something went wrong!"
                });
            })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='lg:w-1/2 w-full'>
                    <Lottie animationData={registerAnimation} loop={true}></Lottie>
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Photo URL</label>
                            <input type="url" name='photo' className="input" placeholder="Photo URL" />

                            <label className="label">User Name</label>
                            <input type="text" name='disName' className="input" placeholder="Name" />

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />

                            <label className="label">Password</label>
                            <input name='password' type="password"  title="Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."  pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                            <p>Already Have an account? <Link to='/login'>Login</Link></p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;