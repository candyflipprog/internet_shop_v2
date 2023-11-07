import advantagesItems from "./AdvantagesItems";

const Cooperation = () => {
    const cooperationItems = [
        {
            title: "Становись партнёром",
            description: "Регистрируйтесь и переходите в свой кабинет"
        },
        {
            title: "Рекламируйте товары",
            description: "Рекламируйте наши товары на форумах, сайтах, в социальных сетях"
        },
        {
            title: "Приводите покупателей",
            description: "Приводите покупателей на наш сайт по уникальной ссылке"
        },
        {
            title: "Получайте бонусы",
            description: "Копите бонусы от каждого оплаченного заказа"
        }
    ];

    return (
        <section className="mt-[150px] font-Roboto ml-32 mr-32">
            <div>
                <span className="text-[40px] font-light">Сотрудничество с нами</span>
            </div>
            <div className="mt-[73px]">
                <span className="text-[#7D7D7D] font-light text-[16px] leading-5 flex-shrink-0 not-italic">Наша компания постоянно растёт и расширяет рынок, поэтому мы заинтересованы в новых партнёрах и рассматриваем новые проекты, которые могут быть привлекательны и интересны с коммерческой точки зрения. </span>
            </div>

            <div className="flex justify-between items-center self-start mt-[63px] text-center text-[20px] font-normal not-italic">
                {cooperationItems.map((item, index: number) => (
                    <div key={index}>
                        <div className="text-center">
                            <span>{item.title}</span>
                        </div>
                        <div>
                            <span className="flex justify-between items-center text-center text-[12px] text-[#7D7D7D] not-italic font-light leading-4">{item.description}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-[60px]">
                <span className="text-[#121212] text-[20px] not-italic font-normal leading-5">Это выгодно. Какие преимущества?</span>
            </div>
            <div className="mt-[66px] flex justify-between items-center text-center">
                {advantagesItems.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <div>
                            <span className="w-[30px] h-[30px]">{item.img}</span>
                        </div>
                        <div className="flex justify-between text-center width-[174px]">
                            <span className="mt-[20px] text-[14px] leading-4 text-[#7D7D7D] font-light">{item.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Cooperation;
