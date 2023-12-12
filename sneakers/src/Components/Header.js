import React from "react";

export function Header() {
    return (
        <header className="d-flex justify-between align-center ">
            <div className="d-flex align-center">
                <img
                    className="mr-15"
                    width={40}
                    height={40}
                    src="/img/logo.png"
                />
                <div>
                    <h3 className="text-uppercase">Sneakers</h3>
                    <p>Магазин кроссовок</p>
                </div>
            </div>

            <div>
                <ul className="d-flex">
                    <li className="mr-30 justify-center">
                        <img width={18} height={18} src="/img/cart.svg" />
                        <span className="ml-5">1205 руб.</span>
                    </li>
                    <li>
                        <img
                            className="justify-center"
                            width={18}
                            height={18}
                            src="/img/account.svg"
                        />
                    </li>
                </ul>
            </div>
        </header>
    );
}
