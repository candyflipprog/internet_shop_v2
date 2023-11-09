import { useState } from "react";
import RegistrationWindow from "./RegistrationWindow";

interface Props {
    className?: string;
}

const LoginWindow: React.FC<Props> = ({ className }) => {
    const [showRegistrationWindow, setShowRegistrationWindow] = useState(false);
    const [email, setEmail] = useState('');

    const userItem = localStorage.getItem("user") || '{}';
    
    console.log(JSON.parse(userItem).email);
    console.log("bobrik", email);

    const auth = {
        auth: true,
        name: JSON.parse(userItem).fullName
    };

    const onLogin = () => {
        if (JSON.parse(userItem).email === email) {
            localStorage.setItem("auth", JSON.stringify(auth));
        } else return <></>;
    };

    return (
        <section className={`flex flex-col fixed top-64 left-[480px] bg-stone-50 w-[1000px] h-[530px] z-50 font-Roboto}`}>
            <div className={`ml-[113px] mt-[137px] ${showRegistrationWindow ? "hidden" : "flex flex-col"}`}>
                <div>
                    <span className="text-[#121212] text-[40px] font-light leading-9">Вход в личный кабинет</span>
                </div>
                <div className="flex flex-col w-[372px]">
                    <input type="email" placeholder="Электронная почта" className="border-solid border-b border-[#7D7D7D] outline-none mt-[60px] bg-stone-50" onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder="Пароль" className="border-solid border-b border-[#7D7D7D] outline-none mt-[34px] bg-stone-50" />
                    <label htmlFor="forget_password" className="text-[14px] text-[#514A7E] mt-[23px] cursor-pointer">Не помню пароль</label>
                </div>
                <div className="mt-[25px]">
                    <button className="w-[148px] h-[37px] bg-[#514A7E] text-[#FFFDF5] border-solid border border-[#514A7E]" onClick={onLogin}>Войти в кабинет</button>
                    <button className="w-[150px] h-[37px] border-solid border border-[#514A7E] ml-[46px]" onClick={() => setShowRegistrationWindow(!showRegistrationWindow)}>Регистрация</button>
                </div>
            </div>
            {showRegistrationWindow ? <RegistrationWindow /> : null}
        </section>
    )
};

export default LoginWindow;
