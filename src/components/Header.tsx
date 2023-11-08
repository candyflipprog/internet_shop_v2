import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart, AiOutlineShopping, AiOutlineEye } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import UserMenu from "./UserMenu";
import LeftSideBar from "./LeftSideBar";

const Header = () => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showSideBar, setShowSiderBar] = useState<boolean>(false);

    return (
        <header className="flex justify-between items-center font-Roboto ml-32 mr-32">
            <AiOutlineMenu className="w-9 h-9 cursor-pointer" onClick={() => setShowSiderBar(!showSideBar)} />
            {showSideBar && <span className="absolute mt-12"><LeftSideBar /></span>}
            <div className="flex justify-between items-center">
                <AiOutlineSearch className="w-5 h-5 mr-[19px]" />
                <input
                    className="border-solid border-b border-gray-300 w-80 placeholder:text-[12px] placeholder:text-[#7D7D7D] placeholder:font-thin focus:outline-none"
                    type="text"
                    placeholder="Поиск"
                />
                <div className="flex justify-end ml-[39px]">
                    <span>
                        <BsPerson className="w-5 h-5 mr-[15px] cursor-pointer" onClick={() => setShowUserMenu(!showUserMenu)} />
                        {showUserMenu ? <UserMenu /> : null}
                    </span>
                    <AiOutlineHeart className="w-5 h-5 mr-[15px]" />
                    <AiOutlineShopping className="w-5 h-5" />
                </div>
            </div>
        </header>
    );
};

export default Header;
