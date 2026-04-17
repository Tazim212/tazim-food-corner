import React, { use } from 'react';
import { AuthContext } from '../../Layout/AuthContext/AuthContext';

const Register = () => {

    const { createUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const passeord = e.target.password.value;

        // console.log(email, passeord);
        createUser(email, passeord)
        .then(res =>{
            console.log(res.user)
        })
        .catch(err =>{
            console.log(err)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <form onSubmit={handleRegister}>
                    <div className="card bg-sky-800 w-90 max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <h1 className="text-2xl font-bold">Register now!!!</h1>
                                {/* <label className="label">Enter Your Name</label>
                            <input type="text" className="input" placeholder="Your Name" /> */}
                                <label className="label">Enter Your Email</label>
                                <input type="email" className="input" name="email" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" name="password" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;