import CoctailLogo from "../images/coctail_logo.png";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { MdWifiCalling3 } from "react-icons/md";

const Footer = () => {
    const infoItems = [
        { description: 'Главная' },
        { description: 'Акции' },
        { description: 'Каталог' },
        { description: 'Возврат' },
        { description: 'Доставка' },
        { description: 'Партнёрам' },
        { description: 'Способы оплаты' },
        { description: 'Как сделать заказ?' }
    ];

    const cabinetItems = [
        { description: "Мои заказы" },
        { description: "Мои адреса" },
        { description: "Мои скидки" },
        { description: "Моя информация" }
    ];

    const socialMediaIcons = [
        { icon: <BiLogoTelegram /> },
        { icon: <AiOutlineInstagram /> },
        { icon: <AiOutlineMail /> },
        { icon: <MdWifiCalling3 /> }
    ];

    return (
        <div className="w-[100%] h-[100%] mt-[150px] bg-[#514A7E]">
            <div className="flex justify-between ml-[135px] mr-[133px]">
                <div className="flex flex-col mt-[82px]">
                    <span className="text-[20px] text-[#FFFDF5] font-normal leading-normal mb-[20px]">Информация</span>
                    {infoItems.map((item, index) => (
                        <div key={index} className="mb-[10px]">
                            <span className="text-[12px] text-[#FFFDF5] font-light leading-normal">{item.description}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col mt-[82px]">
                    <span className="text-[20px] text-[#FFFDF5] font-normal leading-normal mb-[20px]">Мой кабинет</span>
                    {cabinetItems.map((item, index) => (
                        <div key={index} className="mb-[10px]">
                            <span className="text-[14px] text-[#FFFDF5] font-light leading-normal">{item.description}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col w-[250px] mt-[82px]">
                    <span className="text-[20px] text-[#FFFDF5] font-normal leading-normal mb-[20px]">Контактная информация</span>
                    <p className="text-[14px] text-[#FFFDF5] font-light leading-normal">ИП Вишневский Иван Сергеевич
                        государственная регистрация №690867884 от 31.07.2020.
                        Логойским горисполкомом
                        Защита прав потребителей +375259990755</p>
                </div>
                <div className="flex flex-col mt-[82px]">
                    <span className="text-[20px] text-[#FFFDF5] font-normal leading-normal mb-[20px]">Соц. сети</span>
                    <div className="flex">
                        {socialMediaIcons.map((item, index) => (
                            <span className="mr-[10px] text-[#FFFDF5]" key={index}>{item.icon}</span>
                        ))}
                    </div>
                    <span className="text-[14px] text-[#FFFDF5] font-light leading-normal mt-[31px]">+375255990755</span>
                    <span className="text-[14px] text-[#FFFDF5] font-light leading-normal mt-[32px]">круглосуточно, без выходных</span>
                </div>
                <div className="mt-[220px] ml-[97px]">
                    <img src={CoctailLogo} alt="" className="w-[84px] h-[84px]" />
                </div>
            </div>
        </div>
    )
};

export default Footer;
