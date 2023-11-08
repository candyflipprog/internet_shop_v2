import { useState } from "react";
import RegistrationWindow from "./RegistrationWindow";

const LoginWindow = () => {
    const [showRegistrationWindow, setShowRegistrationWindow] = useState<boolean>(false);

    return (
        <div className={`fixed top-64 left-[525px] bg-[#FFFDF5] w-[900px] h-[470px] z-auto font-Roboto`}>
            <div className={`ml-[113px] mt-[137px] ${showRegistrationWindow ? "flex-none" : null}`}>
                <div>
                    <span className="text-[#121212] text-[40px] font-light leading-9">Вход в личный кабинет</span>
                </div>
                <div className="flex flex-col w-[372px]">
                    <input type="email" placeholder="Электронная почта" className="border-solid border-b border-[#7D7D7D] outline-none mt-[60px] bg-[#FFFDF5]" />
                    <input type="password" placeholder="Пароль" className="border-solid border-b border-[#7D7D7D] outline-none mt-[34px] bg-[#FFFDF5]" />
                    <label htmlFor="forget_password" className="text-[14px] text-[#514A7E] mt-[23px]">Не помню пароль</label>
                </div>
                <div className="mt-[25px]">
                    <button className="w-[148px] h-[37px] bg-[#514A7E] text-[#FFFDF5] border-solid border border-[#514A7E]">Войти в кабинет</button>
                    <button className="w-[150px] h-[37px] border-solid border border-[#514A7E] ml-[46px]" onClick={() => setShowRegistrationWindow(!showRegistrationWindow)}>Регистрация</button>
                </div>
            </div>
            {showRegistrationWindow ? <RegistrationWindow /> : null}
        </div>
    )
};

export default LoginWindow;
