import React, { useEffect, useState, useContext } from "react";
import { RootContext } from "../App";

import { Card } from "../Components/Card";
import axios from "axios";

export function Orders() {
    const { onAddToCart, onAddToFavorit } = useContext(RootContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    "https://657c99bc853beeefdb99afd3.mockapi.io/Orders"
                );
                setOrders(
                    data.reduce((prev, obj) => [...prev, ...obj.items], [])
                );
                setLoading(false);
            } catch (error) {
                alert(
                    "Не удалось вывести список ваших заказов... Я уже работаю над этим 🙄"
                );
                console.log(`${error}`);
            }
        })();
    }, []);

    return (
        <div className="content pt-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>

            <div className="sneakers d-flex flex-wrap">
                {loading
                    ? [...Array(10)]
                    : orders.map((item) => (
                          <Card
                              key={item.id}
                              onPlus={(obj) => onAddToCart(obj)}
                              onFavorit={(obj) => onAddToFavorit(obj)}
                              isLoading={loading}
                              {...item}
                          />
                      ))}
            </div>
        </div>
    );
}
