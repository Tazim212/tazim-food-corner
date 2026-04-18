import React, { use, useState } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { IoMdEyeOff } from 'react-icons/io';
import { IoEye } from 'react-icons/io5';

const Register = () => {

    const { createUser } = use(AuthContext);
    const [error, setError] = useState("")

    const [show, setShow] = useState(false);

    const location = useLocation();
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const passeord = e.target.password.value;
        // console.log(email, passeord);
        setError("")
        createUser(email, passeord)
            .then(res => {
                console.log(res.user)
                e.target.reset()
                navigate(location?.state || "/")
            })
            .catch(err => {
                console.log(err)
                setError(err)
            })
    }
    return (
            <div className="hero-content flex-col lg:flex-row-reverse py-9">
                <form onSubmit={handleRegister}>
                    <div className="card bg-sky-800 w-90 max-w-90 shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <h1 className="text-2xl font-bold">Register now!!!</h1>
                                {/* <label className="label">Enter Your Name</label>
                            <input type="text" className="input" placeholder="Your Name" /> */}
                                <label className="label">Enter Your Email</label>
                                <input type="email" className="input" name="email" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type={show ? "text" : "password"} className="input" name="password" placeholder="Password" />
                                {show ?
                                    <span onClick={() => setShow(false)} type="button" className='absolute top-44 right-8'><IoMdEyeOff></IoMdEyeOff></span>
                                    :
                                    <span onClick={() => setShow(true)} type="button" className='absolute top-44 right-8'><IoEye></IoEye></span>}
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </div>
                    </div>
                </form>
                <p className='text-red-600 text-md text-center py-2'>{error.message}</p>
            </div>
    );
};

export default Register;