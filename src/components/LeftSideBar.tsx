import { useState } from "react";
import NeonLogo from "../images/logo-neon.png";

const LeftSideBar = () => {
    const [menuItemId, setMenuItemId] = useState<number | null>(null);

    const menuItems = [
        { id: 1, link: "Женщинам" },
        { id: 2, link: "Мужчинам" },
        { id: 3, link: "Детям" },
        { id: 4, link: "Обувь" },
        { id: 5, link: "Обувь" },
        { id: 6, link: "Игрушки" },
        { id: 7, link: "Акссесуары" },
        { id: 8, link: "Большие размеры" },
        { id: 9, link: "Дополнительно" },
        { id: 10, link: "Акции" }
    ];

    const subMenuItems = [
        { itemId: 1},
        { itemText: "Майки" },
        { itemText: "Костюмы" },
        { itemText: "Брюки" },
        { itemText: "Джинсы" },
        { itemText: "Юбки" },
        { itemText: "Шорты" },
        { itemText: "Свитшот, худи" },
        { itemText: "Блузки и рубашки" },
        { itemText: "Пиджаки и джакеты" },
        { itemText: "Платья и сарафаны" },
        { itemText: "Верхняя одежда" }
    ];

    return (
        <div>
            <div className={`flex flex-col absolute bg-[#121212] shrink-0 w-72 h-[895px]`}>
                <img src={NeonLogo} alt="neon-logo" className="w-[118px] h-[118px] ml-0" />
                <ol className="flex flex-col text-[#FFFDF5] ml-[18px]">
                    {menuItems.map((item, index) => (
                        <li key={index} className="mt-5 text-[14px] cursor-pointer font-light" onClick={() => setMenuItemId(item.id)}>{item.link}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
};

export default LeftSideBar;
