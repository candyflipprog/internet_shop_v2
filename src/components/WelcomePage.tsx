import { Link } from "react-router-dom";
import Rectangle1 from "../images/Rectangle1.jpg";
import Rectangle2 from "../images/Rectangle2.png";

const WelcomePage = () => {
    return (
        <section className="flex flex-col font-Roboto ml-32 mr-32">
            <div className="flex justify-between mt-[50px]">
                <img src={Rectangle1} alt="" className="w-[278px] h-[242px] object-cover" />
                <img src={Rectangle2} alt="" className="w-[476px] h-[416px]" />
            </div>
            <div>
                <span className="text-6xl font-normal leading-[53px]"><p>Добро пожаловать</p>
                    в <span className="font-badScript text-[#514A7E] leading-[116%]">Cocteil</span>
                </span>
            </div>
            <div className="mt-[60px]">
                <span className="text-[#7D7D7D] text-[16px] leading-[118%] font-light">
                    <p>Экономим Ваше время!</p>
                    <p>Предлагаем лучшие цены!</p>
                    <p>Доставляем в кратчайшие сроки!</p>
                </span>
            </div>
            <div className="group flex items-center justify-center self-center w-[193px] h-[193px] rounded-full cursor-pointer border-solid border border-[#514A7E] hover:bg-[#514A7E] hover:duration-500">
                <Link to="/catalog">
                    <div className="flex flex-col">
                        <span className="ml-[-20px] text-[#514A7E] text-[20px] group-hover:text-[#FFFDF5]">Каталог</span>
                        <svg className="fill-[#514A7E] group-hover:fill-[#FFFDF5]" width="80" height="8" viewBox="0 0 80 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z" />
                        </svg>
                    </div>
                </Link>
            </div>
        </section >
    )
};

export default WelcomePage;
