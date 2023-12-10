import React from "react";

export const App = () => {
    //prettier-ignore
    return (
        <div className="wrapper clear ">
            <header className="d-flex justify-between align-center ">
                <div className="d-flex align-center">
                    <img className="mr-15" width={40} height={40} src="/img/logo.png"
                    />
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div>
                    <ul className="d-flex">
                        <li className="mr-30">
                            <img width={18} height={18} src="/img/cart.svg" />
                            <span>1205 руб.</span>
                        </li>
                        <li>
                            <img width={18} height={18} src="/img/account.svg"
                            />
                        </li>
                    </ul>
                </div>
            </header>
            <div className="content pt-40">
                <h1>Все кроссовки</h1>
				<div className="sneakers d-flex">
				<div className="card">
					<img width={133} height={122} src="/img/Sneakers/1.jpg" alt="" />
					<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column" >
							<span>Цена</span>
							<b>12 999 руб.</b>
						</div>
					<button className="button">
						<img width={11} height={11} src="/ing/plus.svg" alt="" />
					</button>
					</div>
				</div>
				<div className="card">
					<img width={133} height={122} src="/img/Sneakers/2.jpg" alt="" />
					<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column" >
							<span>Цена</span>
							<b>12 999 руб.</b>
						</div>
					<button className="button">
						<img width={11} height={11} src="/ing/plus.svg" alt="" />
					</button>
					</div>
				</div>
				<div className="card">
					<img width={133} height={122} src="/img/Sneakers/3.jpg" alt="" />
					<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column" >
							<span>Цена</span>
							<b>12 999 руб.</b>
						</div>
					<button className="button">
						<img width={11} height={11} src="/ing/plus.svg" alt="" />
					</button>
					</div>
				</div>
				<div className="card">
					<img width={133} height={122} src="/img/Sneakers/4.jpg" alt="" />
					<h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
					<div className="d-flex justify-between align-center">
						<div className="d-flex flex-column" >
							<span>Цена</span>
							<b>12 999 руб.</b>
						</div>
					<button className="button">
						<img width={11} height={11} src="/ing/plus.svg" alt="" />
					</button>
					</div>
				</div>
				</div>
            </div>
        </div>
    );
};
