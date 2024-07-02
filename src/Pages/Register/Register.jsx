import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CreateContext } from "../../Provider/AuthProvider";
import swal from "sweetalert";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Register = () => {
    const { register, namePhotoUrl, user } = useContext(CreateContext);
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        if (password.length < 6) {
            return swal("Password Must 6 Characters", "Your Password must 6 character or more!", "warning");
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            return swal("One Special Character Must", "One special character please!", "warning");
        }

        const user = { name, email, photoURL, password };
        console.log(user);

        // Login method with password and email
        register(email, password)
            .then(result => {
                namePhotoUrl(name, photoURL)
                    .then(result => {
                        // Save user information in my database
                        const emailAndUid = { email };
                        fetch('https://stone-crafters-server.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(emailAndUid)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log('User Information', data);
                                if (data.insertedId) {
                                    swal("Register Successful", "Welcome To Our Community", "success");
                                }
                            })
                    })
                    .catch(error => {
                        swal("Recheck Name & Photo Url", "Your name and photo are something wrong", "warning");
                    })
            })
            .catch(error => {
                swal("Something Wrong!", "This email is already added", "error");
            })
    }
    return (
        <div className="bg-blue-100 dark:bg-zinc-800 h-screen">
            <div className="flex flex-col md:flex-row h-full">

                <div className="md:w-1/2 text-white p-8 relative flex items-center">
                    {/* Background image with overlay */}
                    <div className="absolute inset-0 bg-no-repeat bg-cover blur-md" style={{ backgroundImage: 'url("https://i.ibb.co/7vPkXb8/Flower-Img.jpg")' }}></div>

                    {/* Content */}
                    <div className="max-w-md mx-auto relative z-10">
                        <img src="https://i.ibb.co/7vPkXb8/Flower-Img.jpg" alt="Welcome Page" className="rounded-lg shadow-lg mb-4" />
                    </div>
                </div>


                <div className="md:w-1/2 bg-white p-8">
                    <div className="max-w-md mx-auto">
                        <Fade triggerOnce>
                            <h2 className="text-6xl font-bold mb-6 text-black">Register</h2>
                        </Fade>

                        <form onSubmit={handleRegister}>
                            <Fade cascade>
                                <div className="mb-4">
                                    <label className="block text-zinc-700 text-sm font-bold mb-2">Full Name</label>
                                    <input type="text" name="name" placeholder="Enter Your Full Name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-zinc-700 text-sm font-bold mb-2">Email</label>
                                    <input type="email" name="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-zinc-700 text-sm font-bold mb-2">Photo URL</label>
                                    <input type="text" name="photoURL" placeholder="Enter Your Photo URL" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline" />
                                </div>
                                <div className="mb-6 relative">
                                    <label className="block text-zinc-700 text-sm font-bold mb-2">Password</label>
                                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="Create Your Password" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:shadow-outline" />
                                    {/* Show Password */}
                                    <div className="absolute right-5 bottom-2">
                                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEye /> : <FaRegEyeSlash />
                                            }
                                        </button>
                                    </div>
                                </div>
                                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg">Register Now</button>
                            </Fade>
                        </form>
                        <div className="flex justify-between mt-8">
                            {
                                user ? <></>
                                    : <p>If You Have an Account <Link className="text-blue-600 underline" to='/login'>Please LogIn</Link></p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;