import Header from "./Header";

const Catalog = () => {
    return (
        <div className="flex flex-col font-Roboto">
            <Header />
            <div>
                <span className="text-[#121212] text-[40px] font-light">Просмотренные товары</span>
            </div>
            <div className="flex flex-col text-[#121212] text-[12px] font-light">
                <div>
                    <span>Корзина</span>
                </div>
                <div>
                    <span>Избранное</span>
                </div>
                <div>
                    <span>Просмотренные</span>
                </div>
                <div>
                    <span>Бонусы</span>
                </div>
                <div>
                    <span>Личные данные</span>
                </div>
                <div>
                    <span>История покупок</span>
                </div>
                <div>
                    <span>Выйти</span>
                </div>
            </div>
        </div>
    )
};

export default Catalog;
