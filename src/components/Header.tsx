import { AiOutlineMenu, AiOutlineSearch, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const Header = () => {
    function openProfile() {
        return (
            <div className="flex flex-col items-center justify-center w-[211px h-[239px] bg-[#FFFDF5]">
                <img src="" alt="profile" />
                <button className="w-[109px] h-[26px] bg-[#514A7E] border-solid border border-[#514A7E]">Войти</button>
            </div>
        )
    };

    return (
        <div className="flex justify-between items-center font-Roboto">
            <AiOutlineMenu className="w-9 h-9" />
            <div className="flex justify-between items-center">
                <AiOutlineSearch className="w-5 h-5 mr-[19px]" />
                <input className="border-solid border-b border-gray-300 w-80 placeholder:text-[12px] placeholder:text-[#7D7D7D] placeholder:font-thin focus:outline-none" type="text" placeholder="Поиск" />
                <div className="flex justify-end ml-[39px]">
                    <BsPerson className="w-5 h-5 mr-[15px] cursor-pointer" />
                    <AiOutlineHeart className="w-5 h-5 mr-[15px]" />
                    <AiOutlineShopping className="w-5 h-5" />
                </div>
            </div>
        </div>
    )
}

export default Header;
