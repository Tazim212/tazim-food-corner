import React, { use, useState } from 'react';
import AllFoodCard from '../AllFoodCard/AllFoodCard';

const allFoods = fetch("foods.json").then(res => res.json())

const AllFoods = () => {
    const foods = use(allFoods);
    const [sort, setSort] = useState("")
    const [ordered, setOrdered] = useState([])

    const handleOrder = (id) => {
        // console.log(id);
        const orderedFood = foods.find(food => food.id === id);
        if (orderedFood) {
            ordered.push(orderedFood)
            console.log(ordered);
            setOrdered(ordered)
        }

    }
    // console.log(foods);
    if (sort === "lowPrice") {
        foods.sort((a, b) => a.price - b.price)
    }
    else if (sort === "highPrice") {
        foods.sort((a, b) => b.price - a.price)
    }

    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-3'>Discover Your Foods</h1>

            <p className='text-white'>{ordered.length}</p>
            <div className='mx-auto md:mx-10 my-3 w-44'>
                <select defaultValue="Color scheme" onChange={(e) => setSort(e.target.value)} className="select select-accent bg-white text-black">
                    <option >Sort By</option>
                    <option value="lowPrice">Low Price</option>
                    <option value="highPrice">High Price</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-9 ml-2 md:ml-10 mb-5'>
                {
                    foods.map(food => <AllFoodCard key={food.id} food={food} handleOrder={handleOrder}></AllFoodCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;