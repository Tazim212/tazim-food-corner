import { Link } from "react-router";
import FoodCard from "../FoodCard/FoodCard";

const FoodContainer = ({ foodsList }) => {

    const foods = foodsList;   
    // console.log(foods);
    return (
        <div>
            <h1 className="my-4 text-center text-3xl font-bold">Our Food Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    foods.splice("0", "3").map(food =><FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
            <div className="text-center">
                <button className="btn btn-outline btn-accent my-4"><Link to="/menulist">See More</Link></button>
            </div>
        </div>
    );
};

export default FoodContainer;