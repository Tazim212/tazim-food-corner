import { Link } from "react-router";
import FoodCard from "../FoodCard/FoodCard";
import { useState } from "react";

const FoodContainer = ({ foodsList }) => {

    const foods = foodsList;

    const [ordered, setOrdered] = useState([])
    // console.log(foods);
    const handleOrder = (id) => {
        const orderedFood = [...foods, ordered];
        if (orderedFood) {
            const fooding = orderedFood.find(food => food.id !== id)
            console.log(fooding)
            setOrdered(fooding);
        }
    }
    return (
        <div>
            <h1 className="my-4 text-center text-3xl font-bold">Our Food Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    foods.slice(0, 3).map(food => <FoodCard key={food.id} food={food} handleOrder={handleOrder}></FoodCard>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline btn-accent my-4"><Link to="/menulist">See More</Link></button>
            </div>
        </div>
    );
};

export default FoodContainer;