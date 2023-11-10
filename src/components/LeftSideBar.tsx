import { useState } from "react";
import NeonLogo from "../images/logo-neon.png";

interface MenuItem {
    id: number;
    link: string
};

const LeftSideBar: React.FC = () => {
    const [menuItemId, setMenuItemId] = useState<number | null>(null);

    const menuItems: MenuItem[] = [
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

    const subMenuItems: { [key: number]: string[] } = {
        1: ["Майки",
            "Костюмы",
            "Брюки",
            "Джинсы",
            "Юбки",
            "Шорты",
            "Свитшот, худи",
            "Блузки и рубашки",
            "Пиджаки и джакеты",
            "Платья и сарафаны",
            "Верхняя одежда"
        ],
        2: [
            "T-shirt",
            "Штаны"
        ]
    };

    return (
        <div>
            <div className={`flex flex-col absolute bg-[#121212] shrink-0 ${menuItemId ? "w-96" : "w-72"} h-[895px]`}>
                <img src={NeonLogo} alt="neon-logo" className="w-[118px] h-[118px] ml-0" />
                <ol className="flex flex-col text-[#FFFDF5] ml-[18px]">
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className="mt-5 text-[14px] cursor-pointer font-light"
                            onClick={() => setMenuItemId(item.id)}
                        >
                            {item.link}
                        </li>
                    ))}
                </ol>
                {menuItemId !== null && (
                    <ol className="fixed py-32 px-44 text-[#FFFDF5] ml-[18px]">
                        {subMenuItems[menuItemId].map((subMenuItem, index) => (
                            <li key={index} className="text-[14px] cursor-pointer font-light mt-5">
                                {subMenuItem}
                            </li>
                        ))}
                    </ol>
                )}
            </div>
        </div >
    );
};

export default LeftSideBar;
