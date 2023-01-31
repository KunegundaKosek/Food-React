import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from './Modal';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = item => {
        
    };

    const cartItemAddHandler = () => {
    
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler}
                    onAdd={cartItemAddHandler}
                />
            ))}
        </ul>
    );


    return (
        <Modal onClose={props.onClose}>
            {cartItems}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart;