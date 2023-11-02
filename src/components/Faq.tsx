import { useState } from "react";
import faqItems from "../db/faqItems";
import { AiOutlinePlus } from "react-icons/ai";

const Faq = () => {
    const [selectedIds, setSelectedIds] = useState<string[]>([]);
    const [openedIds, setOpenedIds] = useState<string[]>([]);

    const toggleDescription = (id: string) => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter((itemId: any) => itemId !== id));
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
        <div className="mt-[150px] font-Roboto">
            <div>
                <span className="text-[40px]">Часто задаваемые вопросы</span>
                <p className="font-badScript ml-[539px] mt-[-10px] text-[40px] text-[#514A7E]">FAQ</p>
            </div>
            <div className="flex flex-col mt-[66px]">
                {faqItems.map((item) => (
                    <div key={item.id}>
                        <div className="flex items-center border-solid border-b w-[100%] border-[#7D7D7D] mb-[19px]">
                            <p className="flex items-center mb-[17px] mt-[6px] text-[20px]">
                                {item.title}
                            </p>
                            {openedIds.includes(item.id.toString()) ? (
                                <AiOutlinePlus
                                    className="block ml-auto mr-0 cursor-pointer rotate-45 transition-[.5s]"
                                    onClick={() => toggleDescription(item.id.toString())}
                                />
                            ) : (
                                <AiOutlinePlus
                                    className="block ml-auto mr-0 cursor-pointer transition-[.5s]"
                                    onClick={() => toggleDescription(item.id.toString())}
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
        </div>
    );
};

export default Faq;
