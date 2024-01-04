import React, { useContext, useState } from "react";
import axios from "axios";

import { Info } from "../info";
import { useCart } from "../../hooks/useCart";

import styles from "./Drawer.module.scss";

//prettier-ignore
export function Drawer({ onClose, onRemove, opened }) {
    const {setCartItems, cartItems, totalValue, taxPrice} = useCart()
    const [orderID, setOrderID] = useState(null);
    const [isOrderCompleted, setOrderCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.post(
                "https://657c99bc853beeefdb99afd3.mockapi.io/Orders",
                { items: cartItems }
            );
            setOrderID(+data.id);
            setOrderCompleted(true);
            setCartItems([]);
        } catch (error) {
            alert(`В данный момент вы не можете сделать заказ :(`);
            console.log(`${error}`);
        }
        setIsLoading(false);
    };

    return (
        <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
            <div className={styles.drawer}>
                <h2 className="mb-20 d-flex justify-between">
                    Корзина
                    <img
                        onClick={onClose}
                        className="removeBtn"
                        src="/img/btn-remove.svg"
                        alt="Remove"
                    />
                </h2>

                {cartItems.length > 0 ? (
                    <>
                        <div className="items flex">
                            {cartItems.map((items, index) => (
                                <div
                                    key={index}
                                    className="cartItem d-flex align-center mb-30"
                                >
                                    <img
                                        className="mr-20"
                                        width={70}
                                        height={70}
                                        src={items.img}
                                        alt="Img"
                                    />
                                    <div className="mr-20">
                                        <p className="mb-5">{items.title}</p>
                                        <b>{items.price} руб.</b>
                                    </div>
                                    <img
                                        onClick={() => onRemove(items.id)}
                                        className="removeBtn"
                                        src="/img/btn-remove.svg"
                                        alt="Remove"
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock d-flex">
                            <ul>
                                <li>
                                    <span>Итого</span>
                                    <div></div>
                                    <b>{totalValue} руб.</b>
                                </li>

                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{taxPrice} руб.</b>
                                </li>
                            </ul>
                            <button
                                disabled={isLoading}
                                onClick={onClickOrder}
                                className="greenBtn"
                            >
                                Оформить заказ
                                <img src="/img/arrow-next.svg" alt="Arrow" />
                            </button>
                        </div>
                    </>
                ) : (
                    <Info
                        title={
                            isOrderCompleted
                                ? "Заказ оформлен"
                                : "Корзина пустая"
                        }
                        descr={
                            isOrderCompleted
                                ? `Ваш заказ #${orderID} скоро будет передан курьерской доставке`
                                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ"
                        }
                        img={
                            isOrderCompleted
                                ? "/img/cartTotal.jpg"
                                : "/img/empty-cart.jpg"
                        }
                    />
                )}
            </div>
        </div>
    );
}
