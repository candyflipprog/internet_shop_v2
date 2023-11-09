import { useState, useEffect } from "react";
import LoginWindow from "./LoginWindow";

const RegistrationWindow = () => {
    const [showLoginWindow, setShowLoginWindow] = useState(false);
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [check, setCheck] = useState(false);

    const user = {
        fullName: fullName,
        phone: phoneNumber,
        email: email,
    };

    const onRegister = () => {
        if (check) {
            localStorage.setItem("user", JSON.stringify(user));
        } else return <></>
    };

    return (
        <section className="w-[1440px] h-[530px]">
            <div className={`font-Roboto mt-[110px] ml-[136px]  ${showLoginWindow ? "hidden" : "flex flex-col"}`} >
                <div>
                    <span className="text-[#121212] text-[40px] font-light">Регистрация</span>
                </div>
                <div className="flex items-center gap-12">
                    <div className="flex flex-col">
                        <input type="text" placeholder="ФИО" className="w-[260px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[75px] outline-none" onChange={(event) => setFullName(event.target.value)} />
                        <input type="text" placeholder="Контактный телефон" className="w-[260px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[46px] outline-none" onChange={(event) => setPhoneNumber(event.target.value)} />
                        <input type="text" placeholder="Индекс" className="w-[260px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[46px] outline-none" />
                    </div>
                    <div className="flex flex-col">
                        <input type="text" placeholder="Ваш полный адрес(только РБ)" className="w-[372px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[75px] outline-none" />
                        <input type="email" placeholder="Электронная почта" className="w-[372px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[46px] outline-none" onChange={(event) => setEmail(event.target.value)} />
                        <input type="text" placeholder="Комментарий" className="w-[372px] border-solid border-b border-[#7D7D7D] bg-stone-50 mt-[46px] outline-none" />
                    </div>
                </div>
                <div className="flex items-center mt-3">
                    <input type="checkbox" name="checkbox" className="w-4 h-4 appearance-none rounded-full border-solid border border-[#514A7E] cursor-pointer checked:bg-[#514A7E]" onClick={() => setCheck(!check)} />
                    <label htmlFor="accept" className="ml-1 text-[#7D7D7D] text-xs">Даю согласие на обработку персональных данных</label>
                </div>
                <div className="mt-[61px]">
                    <button className="bg-[#514A7E] w-[148px] h-[37px] text-[#FFFDF5]" onClick={onRegister}>Отправить</button>
                    <button className="w-[148px] h-[37px] border-solid border-1 border-[#514A7E]" onClick={() => setShowLoginWindow(!showLoginWindow)}>Войти в кабинет</button>
                </div>
            </div >
            {showLoginWindow ? <LoginWindow /> : null}
        </section>
    )
};

export default RegistrationWindow;
