import React, { useContext } from "react";
import { RootContext } from "../App";

export const Info = ({ title, img, descr }) => {
    const { setOpenCart } = useContext(RootContext);

    return (
        <>
            <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                <div className="d-flex flex-column align-center justify-center flex">
                    <img
                        className="mb-20 "
                        width={120}
                        src={img}
                        alt="Empty-cart"
                    />
                    <h2>{title}</h2>
                    <p className="opacity-6">{descr}</p>
                </div>
                <button onClick={() => setOpenCart(false)} className="greenBtn">
                    <img
                        className="prev"
                        src="/img/prev-arrow.svg"
                        alt="Arrow"
                    />
                    Вернуться назад
                </button>
            </div>
        </>
    );
};
