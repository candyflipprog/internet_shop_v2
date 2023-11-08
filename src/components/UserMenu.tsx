import { useState } from "react";
import { AiOutlineShopping, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import LoginWindow from "./LoginWindow";

const UserMenu = () => {
    const [showLoginWindow, setShowLoginWindow] = useState<boolean>(false);

    return (
        <div className="absolute w-52 h-64 ml-[-120px] mt-[22px] bg-stone-50 text-[#121212] text-[12px] flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/800px-Windows_10_Default_Profile_Picture.svg.png" alt="profile" className="w-10 h-10 mt-[18px]" />
            <div className="mt-[15px]">
                <button className="w-[109px] h-[26px] bg-[#514A7E] text-[#FFFDF5]" onClick={() => setShowLoginWindow(!showLoginWindow)}>Войти</button>
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
            </div>
            {showLoginWindow ? <LoginWindow /> : null}
        </div>
    )
};

export default UserMenu;
