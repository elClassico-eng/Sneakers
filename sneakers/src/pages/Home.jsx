import { Card } from "../Components/Card";

export function Home({
    items,
    searchIValue,
    setSearchValue,
    onAddToCart,
    onAddToFavorit,
    loading,
}) {
    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchIValue.toLowerCase())
        );
        return loading
            ? [...Array(10)]
            : filteredItems.map((item) => (
                  <Card
                      key={item.id}
                      onPlus={(obj) => onAddToCart(obj)}
                      onFavorit={(obj) => onAddToFavorit(obj)}
                      isLoading={loading}
                      {...item}
                  />
              ));
    };

    return (
        <div className="content pt-40">
            <div className="d-flex align-center justify-between mb-40">
                {searchIValue ? (
                    <h1>Поиск по: "{searchIValue}"</h1>
                ) : (
                    <h1>Все кроссовки</h1>
                )}

                <div className="search-block d-flex align-center justify-center">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
                            stroke="#242424"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                    <input
                        onInput={(e) => setSearchValue(e.target.value)}
                        placeholder="Поиск..."
                    />
                </div>
            </div>

            <div className="sneakers d-flex flex-wrap">{renderItems()}</div>
        </div>
    );
}
