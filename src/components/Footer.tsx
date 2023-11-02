import CoctailLogo from "../images/coctail_logo.png";

const Footer = () => {
    const titlesItems = [
        { title: 'Информация' },
        { title: 'Мой кабинет' },
        { title: 'Контактная информация' },
        { title: 'Соц. сети' }
    ];

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

    return (
        <div className="w-[100%] h-[100%] mt-[150px] bg-[#514A7E]">
            <div className="flex justify-between">
                {titlesItems.map((item, index) => (
                    <div key={index}>
                        <span className="text-[20px] text-[#FFFDF5] font-normal">{item.title}</span>
                    </div>
                ))}
            </div>
            <div className="mt-[20px]">
                {infoItems.map((item, index) => (
                    <div key={index}>
                        <span className="mt-[10px] text-[12px] text-[#FFFDF5] font-normal">{item.description}</span>
                    </div>
                ))}
            </div>
            <div>
                {cabinetItems.map((item, index) => (
                    <div key={index}>
                        <span>{item.description}</span>
                    </div>
                ))}
            </div>
            <div className="flex">
                <img src={CoctailLogo} alt="" className="w-[84px] h-[84px] flex-shrink-0" />
            </div>
        </div>
    )
};

export default Footer;
