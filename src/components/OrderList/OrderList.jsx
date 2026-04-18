import React, { useEffect, useState } from 'react';

const OrderList = () => {
    const [ordered, setOrdered] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("orderList")) || [];
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setOrdered(storedData)
    }, [])

    // console.log(ordered)
    return (
        <div>
            {ordered.length === 0 ?
                (<p className='text-2xl font-bold text-white text-center my-5'>No orders have been happened</p>)
                :
                (
                    ordered.map(order => <div key={order.id} className="card card-side bg-gray-600 shadow-sm my-4 w-2/3 mx-auto">
                        <figure>
                            <img
                                src={order.image}
                                className='w-48 h-48'
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold">{order.foodName}</h2>
                            <p className='text-lg text-sky-300'>Category: {order.foodCategory}</p>
                            <p>{order.price} Taka</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                    )
                )
            }
        </div>
    );
};

export default OrderList;