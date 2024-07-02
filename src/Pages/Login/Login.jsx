import { useContext, useEffect, useState } from "react";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import { CreateContext } from "../../Provider/AuthProvider";
import { NavLink, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



const Login = () => {
    const { user, logIn, logInWithMedia } = useContext(CreateContext)
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    // Filter user
    const users = useLoaderData();
    console.log(users);
    const a = users.find(user => user.email === 'hisam@gmail.com')
    // if (findUser.email === email){

    // }


    // Login form on Submit
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        if (password.length < 6) {
            return toast.error('Your Password must 6 character or more!')
        }
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
            return toast.error('One special character please!')
        }

        logIn(email, password)
            .then(() => {
                toast.success('Successful login');

                // navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                toast.error('Something Wrong!')
                console.log(error);
            })
    }


    // Media login 
    const handleMedia = (arg) => {
        logInWithMedia(arg)
            .then(result => {
                const email = result?.user?.email ? result.user.email : result.user?.uid
                const emailAndUid = { email };

                // Check if the user already exists in the database
                const findUser = users.find(user => user.email === email);
                if (!findUser) {
                    // If user doesn't exist, make a POST request to create the user
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
                                toast.success('Successfully Set User');
                            }
                        })
                        .catch(error => {
                            toast.error('Failed to set user');
                            console.error(error);
                        });
                } else {
                    // If user already exists, show a message indicating that they're already created
                    toast.info('User already exists');
                }

                toast.success('Successful login');
            })
            .catch(error => {
                toast.error('Something went wrong with media login');
                console.error(error);
            });
    }

    useEffect(() =>{
        if (user) {
            navigate(location?.state ? location.state : '/');
        }
    }, [user])




    return (
        <div className="hero min-h-screen" style={{ backgroundImage: "url('https://i.ibb.co/7vPkXb8/Flower-Img.jpg')" }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content py-10">
                <div className="max-w-2xl bg-gray-600 rounded-md bg-opacity-25 shadow-2xl shadow-black p-11 border-2 border-[#8d98ff4d]">
                    <h1 className="mb-5 text-5xl font-semibold rajdhani text-white">Welcome Back to Stone Crafter</h1>
                    <p className="mb-5 roboto text-lg text-gray-300">
                        Access your Stone Crafter account to explore exclusive listings, manage properties, and connect with industry professionals. Your journey in commercial real estate begins here.
                    </p>

                    {/* Form */}
                    <div>
                        <form onSubmit={handleLogin}>
                            {/* Email */}
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text text-xl font-bold roboto text-white">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="Enter Your Email" className="input bg-transparent border-4 border-[#8d98ff81] focus:border-[#8d98ffad]" required />
                            </div>
                            {/* Password */}
                            <div className="form-control mb-5">
                                <label className="label">
                                    <span className="label-text text-xl font-bold roboto text-white">Password</span>
                                </label>
                                <div className="relative">
                                    <input name="password" type={showPassword ? 'text' : 'password'} placeholder="Create Password" className="input w-full bg-transparent border-4 border-[#8d98ff81] focus:border-[#8d98ffad]" required />
                                    {/* Show Password */}
                                    <div className="absolute right-5 bottom-2">
                                        <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaRegEye /> : <FaRegEyeSlash />
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Submit */}
                            <div className="form-control mt-14">
                                <button className="
                            bg-[#8D99FF] text-white py-3 z-0 border-2 border-transparent rounded-md
                            transition duration-300
                            hover:bg-transparent lg:hover:text-[#8D99FF] hover:border-2 hover:border-[#8D99FF]
                            ">Login</button>
                            </div>
                        </form>
                        <div className="space-x-8 mt-24">
                            <button onClick={() => handleMedia('google')} className="
                            btn 
                            bg-transparent 
                            border-2
                            border-[#8D99FF] 
                            text-[#8D99FF] 
                            text-xl
                            hover:bg-[#8d98ff27] hover:border-[#8D99FF] hover:text-[#8d98ff]">
                                <FaGoogle />
                            </button>
                            <button onClick={() => handleMedia('gitHub')} className="
                            btn 
                            bg-transparent 
                            border-2
                            border-[#8D99FF] 
                            text-[#8D99FF] 
                            text-xl
                            hover:bg-[#8d98ff27] hover:border-[#8D99FF] hover:text-[#8d98ff]">
                                <FaGithub />
                            </button>
                        </div>
                        <div className="text-center mt-6">
                            <p className="roboto font-bold">You don't have an account. Please <NavLink className='underline text-[#8D99FF]' to='/register'>Register Now</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;