import React from 'react';
import './Order.css';
import OrderItem from "./OrderItem/OrderItem";
import TotalPrice from "./TotalPrice/TotalPrice";
const Order = (props) => {

    const orders = props.orders.map((order) => {

        return <OrderItem
            key = {order.price}
            name = {order.name}
            price = {order.price * order.count}
            count = {order.count}
            click = {() => props.removeOrder(order.name)}/>
    });
    let totalPrice = (props) => {
        const index = props.orders.findIndex(order => order.name === name);
        // for (i = 0)

        // <TotalPrice/>
    }

    return (
        <div className="order">
            <fieldset>
                <legend className='border'>
                    Order details
                </legend>
                <div className='orders'>
                    {orders}
                </div>

            </fieldset>

        </div>
    );
};

export default Order;
