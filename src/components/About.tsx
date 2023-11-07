const About = () => {
    const aboutItems = [
        { description: "Скидки постоянным клиентам от 5%" },
        { description: "Предлагаем самые выгодные цены" },
        { description: "Наши покупатели всегда остаются довольны" },
        { description: "Широкий ассортимент товаров для всей семьи" }
    ];

    return (
        <section className="flex flex-col font-Roboto ml-32 mr-32">
            <div className="mt-[150px]">
                <p className="text-[40px] leading-9">Почему выбирают нас?</p>
            </div>
            <div className="flex justify-between mt-[94px] text-[#7D7D7D]">
                <svg className="absolute ml-[120px] mt-4" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_59_37)">
                        <circle cx="24" cy="20" r="14" fill="#514A7E" />
                    </g>
                    <defs>
                        <filter id="filter0_d_59_37" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.31816 0 0 0 0 0.289236 0 0 0 0 0.495833 0 0 0 0.4 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_59_37" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_59_37" result="shape" />
                        </filter>
                    </defs>
                </svg>
                {aboutItems.map((item, index) => (
                    <div key={index} className="w-[175px]">
                        <span>{item.description}</span>
                    </div>
                ))}
                <svg className="absolute ml-[1120px] mt-[-24px]" width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_59_44)">
                        <circle cx="33.5" cy="29.5" r="23.5" fill="#514A7E" />
                    </g>
                    <defs>
                        <filter id="filter0_d_59_44" x="0" y="0" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.31816 0 0 0 0 0.289236 0 0 0 0 0.495833 0 0 0 0.4 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_59_44" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_59_44" result="shape" />
                        </filter>
                    </defs>
                </svg>
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
                    <svg className="absolute ml-[170px] top-[1450px]" width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_59_48)">
                            <circle cx="33.5" cy="29.5" r="23.5" fill="#514A7E" />
                        </g>
                        <defs>
                            <filter id="filter0_d_59_48" x="0" y="0" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.31816 0 0 0 0 0.289236 0 0 0 0 0.495833 0 0 0 0.4 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_59_48" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_59_48" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div>
                    <span>Пункты выдачи заказов <br /> рядом с домом</span>
                    <svg className="absolute ml-44 mt-[-55px]" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_59_51)">
                            <circle cx="24" cy="20" r="14" fill="#514A7E" />
                        </g>
                        <defs>
                            <filter id="filter0_d_59_51" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.31816 0 0 0 0 0.289236 0 0 0 0 0.495833 0 0 0 0.4 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_59_51" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_59_51" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    )
};

export default About;
