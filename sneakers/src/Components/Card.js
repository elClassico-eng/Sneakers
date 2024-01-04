import React, { useState, useContext } from "react";
import ContentLoader from "react-content-loader"; //Skeleton

import { RootContext } from "../App"; //Context

export function Card({
    id,
    title,
    price,
    img,
    onFavorit,
    onPlus,
    isFavorite = false,
    isLoading = false,
}) {
    const { isAddedToCart } = useContext(RootContext);
    const [favorit, setFavorit] = useState(isFavorite);
    const obj = { id, parentID: id, title, price, img };

    const addCart = () => {
        onPlus(obj);
    };

    const onClickFavorit = () => {
        setFavorit(!favorit);
        return !favorit ? onFavorit(obj) : null;
    };

    return (
        <div className="card">
            {isLoading ? (
                <ContentLoader
                    speed={2}
                    width={170}
                    height={250}
                    viewBox="0 0 150 187"
                    backgroundColor="#ededed"
                    foregroundColor="#d4d4d4"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="155" height="90" />
                    <rect x="0" y="101" rx="6" ry="6" width="150" height="15" />
                    <rect
                        x="-1"
                        y="125"
                        rx="6"
                        ry="6"
                        width="100"
                        height="15"
                    />
                    <rect x="0" y="156" rx="6" ry="6" width="80" height="24" />
                    <rect
                        x="115"
                        y="152"
                        rx="10"
                        ry="10"
                        width="32"
                        height="32"
                    />
                </ContentLoader>
            ) : (
                <>
                    <div onClick={onClickFavorit} className="favorit ">
                        {favorit ? (
                            <img src="/img/liked.svg" alt="Unliked" />
                        ) : (
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                                fill="#CECECE"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="31"
                                    height="31"
                                    rx="6.5"
                                    fill="white"
                                    stroke="#CECECE"
                                />
                                <path
                                    d="M21.8609 11.0746C21.5204 10.7339 21.1161 10.4636 20.6711 10.2793C20.2261 10.0949 19.7492 10 19.2675 10C18.7859 10 18.3089 10.0949 17.864 10.2793C17.419 10.4636 17.0147 10.7339 16.6742 11.0746L15.9675 11.7812L15.2609 11.0746C14.5731 10.3868 13.6402 10.0004 12.6675 10.0004C11.6948 10.0004 10.762 10.3868 10.0742 11.0746C9.3864 11.7623 9 12.6952 9 13.6679C9 14.6406 9.3864 15.5734 10.0742 16.2612L10.7809 16.9679L15.9675 22.1546L21.1542 16.9679L21.8609 16.2612C22.2015 15.9207 22.4718 15.5164 22.6561 15.0715C22.8405 14.6265 22.9354 14.1495 22.9354 13.6679C22.9354 13.1862 22.8405 12.7093 22.6561 12.2643C22.4718 11.8193 22.2015 11.4151 21.8609 11.0746Z"
                                    stroke="#EAEAEA"
                                    strokeWidth="1.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                    </div>
                    <img width={133} height={122} src={img} alt="" />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="d-flex flex-column">
                            <span>Цена</span>
                            <b>{`${price} руб.`}</b>
                        </div>
                        <button>
                            <img
                                className="plus"
                                onClick={addCart}
                                src={
                                    isAddedToCart(id)
                                        ? "/img/btn-checked.svg"
                                        : "/img/btn-plus.svg"
                                }
                                alt="Add"
                            />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
