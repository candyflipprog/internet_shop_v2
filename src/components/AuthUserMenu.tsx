import { AiOutlineShopping, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { HiOutlineDocument } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { LiaCoinsSolid } from "react-icons/lia";

const AuthUserMenu = () => {
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

    return (
        <div className="absolute w-52 h-[450px] ml-[-120px] mt-[22px] bg-stone-50 text-[#121212] text-[12px] flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/800px-Windows_10_Default_Profile_Picture.svg.png" alt="profile" className="w-10 h-10 mt-[18px]" />
            <div className="mt-[15px]">
                <span className="w-[109px] h-[26px] text-[#121212] text-[14px]">{JSON.parse(localStorage.getItem("auth") || "{}").name}</span>
            </div>
            <div className="flex flex-col w-[100%] ml-6">
                <div className="flex items-center mt-[22px]">
                    <AiOutlineShopping className="w-5 h-5" /> <span className="ml-2">Корзина</span>
                </div>
                <div className="border-solid border-b border-[#7D7D7D] mt-[19px]"></div>
                <div className="flex items-center mt-[15px]">
                    <AiOutlineHeart className="w-5 h-5" /> <span className="ml-2">Избранное</span>
                </div>
                <div className="flex items-center mt-[26px]">
                    <AiOutlineEye className="w-5 h-5" /> <span className="ml-2">Просмотренные</span>
                </div>
                <div className="border-solid border-b border-[#7D7D7D] mt-[19px]"></div>
                <div className="flex items-center mt-5">
                    <LiaCoinsSolid className="w-5 h-5" /><span className="ml-2">Бонусы</span>
                </div>
                <div className="flex items-center mt-[21px]">
                    <IoPersonOutline className="w-5 h-5" /><span className="ml-2">Личные данные</span>
                </div>
                <div className="flex items-center mt-[26px]">
                    <HiOutlineDocument className="w-5 h-5" /><span className="ml-2">История покупок</span>
                </div>
                <div className="border-solid border-b border-[#7D7D7D] mt-[19px]"></div>
                <div className="flex items-center mt-[15px] cursor-pointer hover:text-red-500" onClick={onLogOut}>
                    <BiLogOut className="w-5 h-5 cursor-pointer"/><span className="ml-2">Выйти</span>
                </div>
            </div>
        </div>
    )
};

export default AuthUserMenu;
