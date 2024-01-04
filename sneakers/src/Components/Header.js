import React, { useContext } from "react";
import { useCart } from "../hooks/useCart";

import { Link } from "react-router-dom";

//prettier-ignore
export function Header({onOpenCart}) {
    const {totalValue} = useCart()

    return (
        <header className="d-flex r flex-column">
            <div className="d-flex justify-between align-center mb-40">
            <div className="d-flex align-center">
            <Link to='/' className="d-flex">
                <img
                    className="mr-15 cu-p"
                    width={40}
                    height={40}
                    src="/img/logo.png"
                    alt="Logo"
                />
                <div>
                    <h3 className="text-uppercase">Sneakers</h3>
                    <p>Магазин кроссовок</p>
                </div>
                </Link>
            </div>

            <div>
                <ul className="d-flex align-center">
                    <li onClick={onOpenCart} className="mr-30 d-flex justify-center  cu-p">
                        <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
                        <span style={{color: '#5C5C5C'}} className="ml-5">{totalValue} руб.</span>
                    </li>
                    <li className="mr-30 d-flex justify-center cu-p">
                        <Link to='/favorites'>
                            <img width={18} height={18} src="/img/heart.svg" alt="Закладки"/>
                            <span style={{color: '#5C5C5C'}} className="ml-5">Закладки</span>
                        </Link>
                    </li>
                    <li className="mr-30 d-flex justify-center cu-p">
                        <Link to='/orders'>
                            <img  width={18} height={18} src="/img/account.svg" alt="Account"/>
                            <span style={{color: '#5C5C5C'}} className="ml-5">Аккаунт</span>
                        </Link>
                    </li>
                </ul>
            </div>
            </div>
            

            <div className="offer">
                <img src="/img/offer_img2.jpg" alt="" />
            </div>
        </header>
    );
}
