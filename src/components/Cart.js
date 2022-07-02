import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cartslice";
const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const show = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();
  const showCartItems = () => {
    dispatch(cartActions.setShowCart());

    console.log(show);
  };
  return (
    <div className="cartIcon" onClick={showCartItems}>
      <h3>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
