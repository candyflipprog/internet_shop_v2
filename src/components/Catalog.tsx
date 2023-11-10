import Header from "./Header";
import { Link } from "react-router-dom";

interface CatalogProps {
    onSearch?: (searchValue: string) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onSearch }) => {
    const onLogout = () => {
        localStorage.removeItem("auth");
    };

    const handleSearchChange = (searchValue: string) => {
        if(onSearch) { 
            onSearch(searchValue);
        }
    };

    return (
        <div className="flex flex-col font-Roboto">
            <Header onSearch={handleSearchChange} />
            <div className="mt-[144px] ml-32">
                <div>
                    <span className="text-[#121212] text-[40px] font-light">Каталог</span>
                </div>
                <div className="text-[#121212] text-[14px] font-light mt-[60px] cursor-pointer">
                    <div>
                        <span>Корзина</span>
                    </div>
                    <div className="border-solid border-b border-[#7D7D7D] w-[178px] mt-5 mb-5"></div>
                    <Link to="/catalog/favorites">
                        <div>
                            <span>Избранное</span>
                        </div>
                    </Link>
                    <div className="mt-5">
                        <span>Просмотренные</span>
                    </div>
                    <div className="border-solid border-b border-[#7D7D7D] w-[178px] mt-5 mb-5"></div>
                    <div>
                        <span>Бонусы</span>
                    </div>
                    <div className="mt-5 mb-5">
                        <span>Личные данные</span>
                    </div>
                    <div>
                        <span>История покупок</span>
                    </div>
                    <div className="border-solid border-b border-[#7D7D7D] w-[178px] mt-5 mb-5"></div>
                    <Link to="/">
                        <div onClick={onLogout}>
                            <span className="cursor-pointer hover:bg-red-500">Выйти</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Catalog;
