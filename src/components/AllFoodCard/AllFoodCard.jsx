import { FaStar } from 'react-icons/fa';

const AllFoodCard = ({ food, handleOrder }) => {
    const { foodName, price, rating, foodDescription, image } = food;

    return (
        <div className="card bg-mist-500 w-70 h-100 mx-auto md:mx-0 my-5 shadow-sm transition delay-120 
        duration-200 ease-linear hover:-translate-5 hover:scale-z-110">
            <figure className='h-2/5'>
                <img
                    src={image}
                    className='w-75 h-55 rounded-3xl'
                    alt="Shoes" />
            </figure>
            <div className='h-1/3'>
                <h2 className="text-xl font-bold pl-3 py-1">{foodName}</h2>
                <p className='px-3 text-sm'>{foodDescription}</p>
                <div className='flex justify-between px-4 pt-2'>
                    <p className='text-lg font-bold text-amber-400'>$ {price}</p>
                    <div className="badge badge-soft badge-info"><FaStar></FaStar> {rating}</div>
                </div>
            </div>
            <div className="relative justify-end mt-2 mr-4">
                <button onClick={() => handleOrder(food)} className="absolute top-10 right-0 btn btn-secondary">Order Food</button>
            </div>
        </div>
    );
};

export default AllFoodCard;