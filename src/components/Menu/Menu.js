import React from 'react';
import Item from "./Item/Item";
import './Menu.css';


const Menu = (props) => {
    const products = props.products.map((product) =>
        {return <Item
            key = {product.id}
            name = {product.name}
            price = {product.price}
            click = {() => props.addToOrder(product.name, product.price)}/>}
    );

    return (
        <fieldset className="products">
            <legend className="legend_menu">Your menu</legend>
            {products}
        </fieldset>
    );
};

export default Menu;
