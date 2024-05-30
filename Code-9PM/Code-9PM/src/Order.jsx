import React from 'react'
import { Link } from 'react-router-dom';

export default function Order() {
    const orders = [101, 102, 103, 104, 105];
    return (
        <div>
            <h1>All Orders</h1>
            <ul>
                {
                    orders.map(order => {
                        return (
                            <li key={order} ><Link to={`/order/details/${order}`} >Order - {order}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
