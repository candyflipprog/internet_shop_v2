import { useState } from "react";
import { AiFillHeart, AiOutlineShopping } from "react-icons/ai";
import Catalog from "./Catalog";
import Star from "./Star";

interface Item {
    id: string;
    image: string;
    price: number;
    discountPrice: number;
    name: string;
    stars: number;
};

const Favorites: React.FC = () => {

    const favoriteItems = JSON.parse(localStorage.getItem("favorites") || "[]") as Item[];
    const [filteredItems, setFilteredItems] = useState(favoriteItems);


    const removeFavoriteItem = (id: string) => {
        const updatedItems = filteredItems.filter(item => item.id !== id);
        setFilteredItems(updatedItems);
        localStorage.setItem("favorites", JSON.stringify(updatedItems));
    };

    const handleSearch = (searchValue: string) => {
        const filtered = favoriteItems.filter(item =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    return (
        <div className="flex flex-col">
            <Catalog onSearch={handleSearch} />
            <div className="relative top-[-500px] px-[520px] flex gap-16 items-center mt-[60px]">
                {filteredItems.map((item, index) => (
                    <div key={index}>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <span>{item.price.toFixed(2)} р</span>
                            <span className="line-through text-[#7D7D7D] text-[12px] ml-[23px]">{item.discountPrice.toFixed(2)} р</span>
                        </div>
                        <div className="flex justify-end gap-2">
                            <span className="text-[12px] ml-0 mr-auto text-[#7D7D7D]">{item.name}</span>
                            <AiFillHeart onClick={() => removeFavoriteItem(item.id)} className="cursor-pointer"/>
                            <AiOutlineShopping />
                        </div>
                        <div className="flex">
                            <button className="group flex items-center gap-2 border-solid border border-[#121212] p-[14px] mt-[12px] w-[148px] h-[37px] hover:bg-[#514A7E] hover:text-[#FFFDF5] duration-300">Подробнее
                                <svg className="fill-[#514A7E]" width="26" height="4" viewBox="0 0 26 4" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:fill-[#FFFDF5]" d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212" />
                                </svg>
                            </button>
                            <div className="flex items-end ml-[75px]">
                                {
                                    (new Array(item.stars)).fill(0).map((_, index) => (
                                        <Star className="ml-[5px]" key={index} width={12} height={12} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
};

export default Favorites;
