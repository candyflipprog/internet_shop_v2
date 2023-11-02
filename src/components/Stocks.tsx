import React from "react";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import Star from "./Star";
import items from "../db/items";

const Stocks = () => {

    return (
        <div className="flex flex-col mt-[128px] font-Roboto">
            <div>
                <span className="text-[40px]">Успей купить!</span>
            </div>
            <div>
                <span className="font-badScript text-[40px] mt-[31px] ml-[268px] text-[#514A7E]">Акции</span>
            </div>
            <div className="flex justify-between items-center mt-[60px]">
                {items.map((item, index) => (
                    <div key={index}>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div>
                            <span>{item.price.toFixed(2)} р</span>
                            <span className="line-through text-[#7D7D7D] text-[12px] ml-[23px]">{item.discountPrice.toFixed(2)} р</span>
                        </div>
                        <div className="flex justify-end">
                            <span className="text-[12px] ml-0 mr-auto text-[#7D7D7D]">{item.name}</span>
                            <AiOutlineHeart className="mr-[15px]" />
                            <AiOutlineShopping />
                        </div>
                        <div>
                        </div>
                        <div className="flex">
                            <button className="group flex items-center gap-2 border-solid border border-[#121212] p-[14px] mt-[12px] w-[148px] h-[37px] hover:bg-[#514A7E] hover:text-[#FFFDF5] duration-300">Подробнее
                                <svg className="fill-[#514A7E]" width="26" height="4" viewBox="0 0 26 4" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:fill-[#FFFDF5]" d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212" />
                                </svg>
                            </button>
                            <div className="flex items-end ml-[75px]">
                                {
                                    (new Array(item.stars)).fill(0).map((item, index) => (
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

export default Stocks;
