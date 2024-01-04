import { Card } from "../Components/Card";
import { RootContext } from "../App";
import { useContext } from "react";

export function Favorites({ onAddToCart, onAddToFavorit }) {
    const { favorites } = useContext(RootContext);

    return (
        <div className="content pt-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Избранное</h1>
            </div>

            <div className="sneakers d-flex flex-wrap">
                {favorites.map((item) => {
                    return (
                        <Card
                            key={item.id}
                            onPlus={(obj) => onAddToCart(obj)}
                            onFavorit={(obj) => onAddToFavorit(obj)}
                            isFavorite={true}
                            {...item}
                        />
                    );
                })}
            </div>
        </div>
    );
}
