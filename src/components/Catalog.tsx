import { useState } from "react";
import { AiFillHeart, AiOutlineShopping } from "react-icons/ai";
import Header from "./Header";
import Star from "./Star";
import { Link } from "react-router-dom";

interface Item {
    image: string;
    price: number;
    discountPrice: number;
    name: string;
    stars: number;
};

const Catalog: React.FC = () => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites") || "{}");
    const itemsArray = Array.isArray(favoriteItems) ? favoriteItems : [];
    const [filteredItems, setFilteredItems] = useState<Item[]>(itemsArray);

    const handleSearch = (searchValue: string) => {
        const filtered = itemsArray.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredItems(filtered);
    };

    const onLogout = () => {
        localStorage.removeItem("auth");
    };

    return (
        <div className="flex flex-col font-Roboto">
            <Header onSearch={handleSearch} />
            <div className="mt-[144px] ml-32">
                <div>
                    <span className="text-[#121212] text-[40px] font-light">Просмотренные товары</span>
                </div>
                <div className="text-[#121212] text-[14px] font-light mt-[60px]">
                    <div>
                        <span>Корзина</span>
                    </div>
                    <div className="border-solid border-b border-[#7D7D7D] w-[178px] mt-5 mb-5"></div>
                    <div>
                        <span>Избранное</span>
                    </div>
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
                    <div className="mt-96">
                        <svg className="w-[82px] h-[82px] cursor-pointer focus:w-[92px] focus:h-[92px] hover:transition-[.9s]" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.scroll({ top: 0, behavior: "smooth" })}>
                            <g filter="url(#filter0_d_180_2)">
                                <circle cx="46" cy="42" r="36" fill="#514A7E" />
                                <path d="M46.3536 28.6464C46.1583 28.4512 45.8417 28.4512 45.6464 28.6464L42.4645 31.8284C42.2692 32.0237 42.2692 32.3403 42.4645 32.5355C42.6597 32.7308 42.9763 32.7308 43.1716 32.5355L46 29.7071L48.8284 32.5355C49.0237 32.7308 49.3403 32.7308 49.5355 32.5355C49.7308 32.3403 49.7308 32.0237 49.5355 31.8284L46.3536 28.6464ZM46.5 55L46.5 29L45.5 29L45.5 55L46.5 55Z" fill="#FFFDF5" />
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="absolute py-52 px-96 gap-16 flex justify-around items-center mt-[60px] sm:flex">
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
                            <AiFillHeart />
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

export default Catalog;
