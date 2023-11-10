import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import UserMenu from "./UserMenu";
import LeftSideBar from "./LeftSideBar";
import AuthUserMenu from "./AuthUserMenu";
import { Link } from "react-router-dom";

interface Props {
    onSearch: (searchValue: string) => void;
};

const Header: React.FC<Props> = ({ onSearch }) => {
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [showSideBar, setShowSideBar] = useState(false);
    const [auth, setAuth] = useState(false);

    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const authData = JSON.parse(localStorage.getItem("auth") || "{}").auth;
        setAuth(authData);
    }, []);

    const handleUserMenuClick = () => {
        setShowUserMenu(!showUserMenu);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value;
        setSearchValue(searchValue);
        onSearch(searchValue);
    };

    return (
        <header className="flex justify-between items-center font-Roboto ml-32 mr-32">
            <AiOutlineMenu className="w-9 h-9 cursor-pointer" onClick={() => setShowSideBar(!showSideBar)} />
            {showSideBar && <span className="absolute mt-12"><LeftSideBar /></span>}
            <div className="flex justify-between items-center">
                <AiOutlineSearch className="w-5 h-5 mr-[19px]" />
                <input
                    className="border-solid border-b border-gray-300 w-80 placeholder:text-[12px] placeholder:text-[#7D7D7D] placeholder:font-thin focus:outline-none"
                    type="text"
                    placeholder="Поиск"
                    onChange={handleSearchChange}
                    value={searchValue}
                />
                <div className="flex justify-end ml-[39px]">
                    <span>
                        {auth ? (
                            showUserMenu ? <AuthUserMenu /> : null
                        ) : (
                            showUserMenu ? <UserMenu /> : null
                        )}
                    </span>
                    <BsPerson className="w-5 h-5 mr-[15px] cursor-pointer" onClick={handleUserMenuClick} />
                    <Link to="/catalog/favorites">
                        <AiOutlineHeart className="w-5 h-5 mr-[15px]" />
                    </Link>
                    <Link to="/catalog">
                        <AiOutlineShopping className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
