import React from 'react';
// import './OrderItem.css';
const OrderItem = (props) => {
    return (
        <div className="order_item">
            <span className="product_name">{props.name}</span>
            <span className="product_count">{"x" + props.count}</span>
            <span className="product_price">{props.price + "som"}</span>
            <button className="btn_remove" onClick={props.click}><strong>X</strong></button>
        </div>
    );
};

export default OrderItem;
