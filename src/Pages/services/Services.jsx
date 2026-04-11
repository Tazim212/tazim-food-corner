import React from 'react';
import service from "../../assets/service.jpg";
import delivery from "../../assets/delivery.png"
import tasty from "../../assets/tasty.png";

const Services = () => {
    return (
        <div className='pb-5'>
            <h1 className='text-3xl font-bold text-center my-3'>Our Services</h1>
            <div className='flex flex-col md:flex-row gap-8 md:gap-0 justify-around items-center'>
                <img src={service} className='w-55 h-48 shadow-2xl rounded-xl' alt="" />
                <img src={delivery} className='w-55 h-48 shadow-2xl rounded-xl' alt="" />
                <img src={tasty} className='w-55 h-48 shadow-2xl rounded-xl' alt="" />
            </div>
        </div>
    );
};

export default Services;