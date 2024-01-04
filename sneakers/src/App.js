import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import { Route, Routes } from "react-router-dom";

import { Header } from "./Components/Header";
import { Drawer } from "./Components/Drawer/Drawer";
import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";
import { Orders } from "./pages/Orders";

export const RootContext = createContext({}); //Создание контекста вызова

export const App = () => {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchIValue, setSearchValue] = useState("");
    const [openCart, setOpenCart] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                setLoading(true); //Идет загрузка
                const [itemsResponse, cartResponse, favResponse] =
                    await Promise.all([
                        axios.get(
                            "https://6578b758f08799dc8045ed26.mockapi.io/Items"
                        ),
                        axios.get(
                            "https://6578b758f08799dc8045ed26.mockapi.io/cart"
                        ),
                        axios.get(
                            "https://657c99bc853beeefdb99afd3.mockapi.io/Favorits"
                        ),
                    ]);

                setLoading(false); //Загрузка завершена
                setItems(itemsResponse.data);
                setCartItems(cartResponse.data);
                setFavorites(favResponse.data);
            } catch (error) {
                alert("Ошибка при запросе данных. Попробуйте позже 😕");
                console.error(`${error}`);
            }
        })();
    }, []);

    //prettier-ignore
    const onAddToCart = async (obj) => { 
        try {
            const findItem = cartItems.find((cart) => +cart.parentID === +obj.id)
            if (findItem) {
                setCartItems((prevState) => prevState.filter((item) => +item.parentID !== +obj.id));
                axios.delete(`https://6578b758f08799dc8045ed26.mockapi.io/cart/${findItem.id}`);                
            } else {
                const {data} = await axios.post("https://6578b758f08799dc8045ed26.mockapi.io/cart",obj);
                setCartItems([...cartItems, data]);
            }
        } catch (error) {
            alert("Не удалось добавить товар в корзину...");
            console.error(`${error}`)
        }
    };

    //prettier-ignore
    const onAddToFavorit = async (obj) => {
        try {
            if (favorites.find((favorite) => Number(favorite.id) === Number(obj.id)) ){
                axios.delete(`https://657c99bc853beeefdb99afd3.mockapi.io/Favorits/${obj.id}`);
                setFavorites((prev) => prev.filter((item) => +item.id !== +obj.id));
            } else {
                const {data} = await axios.post("https://657c99bc853beeefdb99afd3.mockapi.io/Favorits",obj);
                setFavorites((prevFavorites) => [...prevFavorites, data]);
            }
        } catch(error) {
            alert('Не удалось добавить в избранное. Работаем над этим☺')
            console.error(`${error}`)
        }
    };

    const onRemoveCartItems = (id) => {
        try {
            axios.delete(
                `https://6578b758f08799dc8045ed26.mockapi.io/cart/${id}`
            );
            setCartItems((prev) => prev.filter((item) => +item.id !== +id));
        } catch (error) {
            alert("Не удалось удалить товар из корзины. Попробуйте позднее");
            console.error(`${error}`);
        }
    };

    const isAddedToCart = (id) => {
        return cartItems.some((obj) => +obj.parentID === +id); //true or false
    };

    //prettier-ignore
    return (
        <RootContext.Provider value={{items, cartItems, favorites, isAddedToCart, setOpenCart, setCartItems, onAddToCart, onAddToFavorit}}>
            <div className="wrapper clear ">

                <Drawer cartItems={cartItems} onClose={() => setOpenCart(false)} onRemove={onRemoveCartItems} opened={openCart}/>
                <Header onOpenCart={() => setOpenCart(true)} />

                <Routes>
                    <Route path="/" element={
                        <Home
                            cartItems={cartItems}
                            searchIValue={searchIValue}
                            items={items}
                            onAddToCart={onAddToCart}
                            onAddToFavorit={onAddToFavorit}
                            setSearchValue={setSearchValue}
                            loading={loading}
                            />
                        }
                    ></Route>

                    <Route path="/favorites" element={
                        <Favorites  onAddToCart={onAddToCart} onAddToFavorit={onAddToFavorit}/>}
                    ></Route>

                    <Route path="/orders" element={
                        <Orders />}
                    ></Route>
                </Routes>
            </div>
        </RootContext.Provider>
    );
};
