import React from 'react';

const Item = (props) => {
    return (
        <div className="product_item" onClick={props.click}>
            <h3 className="name_product_item">{props.name}</h3>
            <h4 className="product_price">{props.price}</h4>
        </div>
    );
};

export default Item;
