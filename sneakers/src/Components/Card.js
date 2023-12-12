import React from "react";

export function Card() {
    return (
        <div className="card">
            <div className="favorit">
                <img src="/img/heart-unliked.svg" alt="Unlicked" />
            </div>
            <img width={133} height={122} src="/img/Sneakers/1.jpg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена</span>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/ing/plus.svg" alt="" />
                </button>
            </div>
        </div>
    );
}
