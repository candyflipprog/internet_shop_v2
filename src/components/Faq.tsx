import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
    const faqItems = [
        {
            id: 1,
            title: "Как сделать заказ?",
            description: "Чтобы сделать заказ пользователь переходит в каталог сайта, выбирает нужный товар, отпраляет его в коризину, выбрав нужный размер и цвет, и нажимает кнопку “заказать”. Выбирает способ оплаты и доставки и покупает товар. "
        },
        {
            id: 2,
            title: "Способы оплаты",
            description: "Почему шрек жёлтый?"
        },
        {
            id: 3,
            title: "Доставка",
            description: "Красный слон"
        },
        {
            id: 4,
            title: "Сроки доставки",
            description: "Утиные истории"
        },
        {
            id: 5,
            title: "Как сделать обмен?",
            description: "Если на вас напал медведь, вам уже не спастись"
        },
        {
            id: 6,
            title: "Как сделать возврат?",
            description: "123123123"
        },
        {
            id: 7,
            title: "Куда и когда вернутся деньги за возвращённый товар?",
            description: "123123123"
        }
    ];

    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [openedIds, setOpenedIds] = useState<string[]>([]);

    const toggleDescription = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        };

        if (openedIds.includes(id)) {
            setOpenedIds(openedIds.filter((itemId) => itemId !== id));
        } else {
            setOpenedIds([...openedIds, id]);
        };
    };

    return (
        <section className="mt-[150px] font-Roboto ml-32 mr-32">
            <div>
                <span className="text-[40px]">Часто задаваемые вопросы</span>
                <p className="font-badScript ml-[539px] mt-[-10px] text-[40px] text-[#514A7E]">FAQ</p>
            </div>
            <div className="flex flex-col mt-[66px]">
                {faqItems.map((item) => (
                    <div key={item.id} className="cursor-pointer" onClick={() => toggleDescription(item.id.toString())}>
                        <div className={`flex items-center w-full mb-[19px] ${selectedIds.includes(item.id.toString()) ? 'border-none' : 'border-b border-solid border-[#7D7D7D]'}`}>
                            <p className="flex items-center mb-[17px] mt-[6px] text-[20px]">
                                {item.title}
                            </p>
                            {openedIds.includes(item.id.toString()) ? (
                                <AiOutlinePlus
                                    className="block ml-auto mr-0 cursor-pointer rotate-45 transition-[.5s]"
                                />
                            ) : (
                                <AiOutlinePlus
                                    className="block ml-auto mr-0 cursor-pointer transition-[.5s]"
                                />
                            )}
                        </div>
                        {selectedIds.includes(item.id.toString()) && (
                            <p className="mb-[16px] text-[18px] text-[#7D7D7D]">
                                {item.description}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Faq;
