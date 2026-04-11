import React from 'react';
import banner from "../../assets/banner.png";

const Banner = () => {
    return (
        <div className="bg-linear-to-r from-sky-800 to-green-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={banner}
                    className="max-w-72 md:max-w-sm h-56 md:h-[400px] rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl italic text-center md:text-left"><span className='text-green-300'>Welcome to the</span> <br></br>food world</h1>
                    <p className="py-6 text-amber-400 text-balance text-center md:text-left">
                        Delicious and fresh food delivered to your doorstep. Explore a variety of tasty dishes, 
                        from traditional favorites to modern flavors — all in one place.
                    </p>
                    <div className="join ml-4 md:ml-0">
                        <div>
                            <label className="input validator join-item">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                    </g>
                                </svg>
                                <input type="email" placeholder="mail@site.com" required />
                            </label>
                            <div className="validator-hint hidden">Enter valid email address</div>
                        </div>
                        <button className="btn btn-neutral join-item">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;