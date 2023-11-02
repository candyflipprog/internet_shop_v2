const About = () => {
    return (
        <div className="flex flex-col font-Roboto">
            <div className="mt-[150px]">
                <p className="text-[40px] leading-9">Почему выбирают нас?</p>
            </div>
            <div className="flex justify-between mt-[94px] text-[#7D7D7D]">
                <div>
                    <span>Скидки постоянным <br /> клиентам от 5%
                        <svg className="w-7 h-7 fill-[#514A7E]" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_59_37)">
                                <circle cx="24" cy="20" r="14" />
                            </g>
                        </svg>
                    </span>
                </div>
                <div>
                    <span>Предлагаем самые <br /> выгодные цены</span>
                </div>
                <div>
                    <span>Наши покупатели всегда <br /> остаются довольны</span>
                </div>
                <div>
                    <span>Ширикий ассортимент <br /> товаров для всей семьи</span>
                </div>
            </div>
            <div className="flex justify-between mt-[98px] text-[#7D7D7D]">
                <div>
                    <svg className="w-[82px] h-[82px] cursor-pointer focus:w-[92px] focus:h-[92px] hover:transition-[.9s]" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => window.scroll({ top: 0, behavior: "smooth" })}>
                        <g filter="url(#filter0_d_180_2)">
                            <circle cx="46" cy="42" r="36" fill="#514A7E" />
                            <path d="M46.3536 28.6464C46.1583 28.4512 45.8417 28.4512 45.6464 28.6464L42.4645 31.8284C42.2692 32.0237 42.2692 32.3403 42.4645 32.5355C42.6597 32.7308 42.9763 32.7308 43.1716 32.5355L46 29.7071L48.8284 32.5355C49.0237 32.7308 49.3403 32.7308 49.5355 32.5355C49.7308 32.3403 49.7308 32.0237 49.5355 31.8284L46.3536 28.6464ZM46.5 55L46.5 29L45.5 29L45.5 55L46.5 55Z" fill="#FFFDF5" />
                        </g>
                    </svg>
                </div>
                <div>
                    <span>Возможность доставки в <br /> любой город Беларуси </span>
                </div>
                <div>
                    <span>Пункты выдачи заказов <br /> рядом с домом</span>
                </div>
                <div>

                </div>
            </div>
        </div >
    )
};

export default About;
