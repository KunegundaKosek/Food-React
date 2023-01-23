import React from 'react';
import classes from './Cart.module.css';
import Modal from './Modal';

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-items']}> {[
        {
            id: 'c1',
            name: 'Kurczak',
            amount: 2,
            price: 12.99
        },
    ].map(item => <li>{item.name}</li>)}</ul>


    return (
        <Modal onClose={props.onClose}>
            {cartItems}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>12,35</span>
            </div>

            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;