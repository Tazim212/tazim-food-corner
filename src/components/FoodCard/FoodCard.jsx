import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const FoodCard = ({ food}) => {
    // console.log(food)
    const { foodName, price, rating, foodDescription, image } = food;

    return (
        <div className="card image-full h-90 max-w-72 md:max-w-85 mx-15 md:mx-6
        transition delay-120 duration-200 ease-linear hover:-translate-5 hover:scale-z-110">
            <figure>
                <img
                    src={image}
                    className='w-80 md:w-87.5 rounded-4xl'
                    alt="Shoes" />
            </figure>
            <div className='flex flex-col absolute'>
                <h2 className="font-bold text-xl py-5 px-4">{foodName}</h2>
                <p className='italic px-3 pb-9'>{foodDescription}</p>

                <div className='flex justify-between px-3'>
                    <p className='text-lg font-bold text-amber-400'>$ {price}</p>
                    <div className="badge badge-soft badge-info"><FaStar></FaStar> {rating}</div>
                </div>
            </div>
                <div className="absolute top-73 left-12 md:left-20">
                    <Link to="/menulist"><button className="btn btn-secondary px-15">View Details</button></Link>
                </div>
        </div>
    );
};

export default FoodCard;
