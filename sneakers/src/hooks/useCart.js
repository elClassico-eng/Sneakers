import React, { useContext } from "react";
import { RootContext } from "../App";

//prettier-ignore
export const useCart = () => {
    const { setCartItems, cartItems } = useContext(RootContext);
    const totalValue = cartItems.reduce((sum, obj) => +obj.price.replaceAll(" ", "") + sum, 0);
    const taxPrice = ((totalValue / 100) * 5).toFixed(0);

    return { cartItems, setCartItems, totalValue, taxPrice };
};
