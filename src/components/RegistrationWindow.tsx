import { useState } from "react";
import LoginWindow from "./LoginWindow";

const RegistrationWindow = () => {
    const [showLoginWindow, setShowLoginWindow] = useState<boolean>(false);
    const [SNL, setSNL] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<string | number>();
    const [index, setIndex] = useState<number>();
    const [address, setAddress] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [comment, setComment] = useState<string>();
    const [check, setCheck] = useState<boolean>(false);

    return (
        <div className="font-Roboto">
            <div className={`mt-[110px] ml-[136px]  ${showLoginWindow ? "hidden" : "flex flex-col"}`} >
                <div>
                    <span className="text-[#121212] text-[40px] font-light">Регистрация</span>
                </div>
                <div className="flex items-center gap-12">
                    <div className="flex flex-col">
                        <input type="text" placeholder="ФИО" className="w-[260px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[75px] outline-none" onChange={(event) => setSNL(event.target.value)}/>
                        <input type="text" placeholder="Контактный телефон" className="w-[260px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[46px] outline-none" onChange={(event) => setPhoneNumber(event.target.value)}/>
                        <input type="text" placeholder="Индекс" className="w-[260px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[46px] outline-none" onChange={(event) => setIndex(parseInt(event.target.value))}/>
                    </div>
                    <div className="flex flex-col">
                        <input type="text" placeholder="Ваш полный адрес(только РБ)" className="w-[372px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[75px] outline-none" onChange={(event) => setAddress(event.target.value)}/>
                        <input type="email" placeholder="Электронная почта" className="w-[372px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[46px] outline-none" onChange={(event) => setEmail(event.target.value)}/>
                        <input type="text" placeholder="Комментарий" className="w-[372px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[46px] outline-none" onChange={(event) => setComment(event.target.value)}/>
                    </div>
                </div>
                <div className="flex items-center mt-3">
                    <input type="checkbox" name="checkbox" className="w-4 h-4 appearance-none rounded-full border-solid border border-[#514A7E] cursor-pointer checked:bg-[#514A7E]" onClick={() => setCheck(!check)}/>
                    <label htmlFor="accept" className="ml-1 text-[#7D7D7D] text-xs">Даю согласие на обработку персональных данных</label>
                </div>
                <div className="mt-[61px]">
                    <button className="bg-[#514A7E] w-[148px] h-[37px] text-[#FFFDF5]">Отправить</button>
                    <button className="w-[148px] h-[37px] border-solid border-1 border-[#514A7E]" onClick={() => setShowLoginWindow(!showLoginWindow)}>Войти в кабинет</button>
                </div>
            </div>
            {showLoginWindow ? <LoginWindow /> : null}
        </div >
    )
};

export default RegistrationWindow;
