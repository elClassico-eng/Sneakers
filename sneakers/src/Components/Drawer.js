import React from "react";

export function Drawer() {
    return (
        <div style={{ display: "none" }} className="overlay">
            <div className="drawer d-flex">
                <h2 className="mb-20 d-flex justify-between">
                    Корзина
                    <img
                        className="removeBtn"
                        src="/img/btn-remove.svg"
                        alt="Remove"
                    />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-30">
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="/img/Sneakers/1.jpg"
                            alt="Img"
                        />
                        <div className="mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className="removeBtn"
                            src="/img/btn-remove.svg"
                            alt="Remove"
                        />
                    </div>

                    <div className="cartItem d-flex align-center mb-30">
                        <img
                            className="mr-20"
                            width={70}
                            height={70}
                            src="/img/Sneakers/1.jpg"
                            alt="Img"
                        />
                        <div className="mr-20">
                            <p className="mb-5">
                                Мужские Кроссовки Nike Air Max 270
                            </p>
                            <b>12 999 руб.</b>
                        </div>
                        <img
                            className="removeBtn"
                            src="/img/btn-remove.svg"
                            alt="Remove"
                        />
                    </div>
                </div>

                <div className="cartTotalBlock d-flex">
                    <ul>
                        <li>
                            <span>Итого</span>
                            <div></div>
                            <b>21 498 руб.</b>
                        </li>

                        <li>
                            <span>Налог 5%:</span>
                            <div></div>
                            <b>1070 руб.</b>
                        </li>
                    </ul>
                    <button className="greenBtn">
                        Оформить заказ
                        <img src="/img/arrow-next.svg" alt="Arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
}
