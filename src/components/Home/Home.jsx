import Banner from '../Banner/Banner';
import FoodContainer from '../FoodContainer/FoodContainer';
import { useLoaderData } from 'react-router';
import Services from '../../Pages/services/Services';

const Home = () => {
    const foodsList = useLoaderData();
   
    return (
        <div className='bg-gray-500'>
            <Banner></Banner>
            <FoodContainer foodsList={foodsList}></FoodContainer>
            <Services></Services>
        </div>
    );
};

export default Home;