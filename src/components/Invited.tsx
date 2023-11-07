const Invited = () => {
    const inputs = [
        {
            id: 1,
            input: <input type="text" placeholder="Ваше имя" className="focus:outline-none bg-[#FFFDF5]" />
        },
        {
            id: 2,
            input: <input type="text" placeholder="Номер телефона" className="focus:outline-none bg-[#FFFDF5]" />
        },
        {
            id: 3,
            input: <input type="email" placeholder="Электронная почта" className="focus:outline-none bg-[#FFFDF5]" />
        }
    ];

    return (
        <section className="mt-[151px] w-[1050px] h-[500px] bg-[#514A7E] py-9">
            <div className="w-[850px] h-[420px] bg-[#FFFDF5] ml-32 flex flex-col">
                <div className="ml-[51px]">
                    <div className="mb-[55px] mt-[35px]">
                        <span className="text-[20px] text-[#121212] font-normal leading-6">Приглашаем  к сотрудничеству производителей и поставщиков одежды, обуви и аксессуаров</span>
                    </div>
                    <form action="">
                        {inputs.map((item, index) => (
                            <div key={index} className="border-solid border-b border-[#7D7D7D] w-[228px] mb-[25px]">
                                {item.input}
                            </div>
                        ))}
                        <div className="flex items-center">
                            <input type="checkbox" name="accept" className="w-4 h-4 appearance-none rounded-full border-2 border-[#514A7E] cursor-pointer checked:bg-[#514A7E]" />
                            <label className="text-[12px] text-[#7D7D7D] leading-[9.5px] ml-1" htmlFor="accept">Даю согласие на обработку персональных данных</label>
                        </div>
                        <button className="flex items-center bg-[#514A7E] w-[148px] h-[37px] mt-[41px] hover:w-[172px] hover:h-[43px] hover:transition-[.5s]" type="submit">
                            <span className="ml-[25px] text-sm text-[#FFFDF5] font-normal">Отправить</span>
                            <svg className="ml-[9px]" width="26" height="5" viewBox="0 0 26 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.1768 2.83693C25.2744 2.7393 25.2744 2.58101 25.1768 2.48338L23.5858 0.892389C23.4882 0.794758 23.3299 0.794758 23.2322 0.892389C23.1346 0.99002 23.1346 1.14831 23.2322 1.24594L24.6464 2.66016L23.2322 4.07437C23.1346 4.172 23.1346 4.33029 23.2322 4.42792C23.3299 4.52555 23.4882 4.52555 23.5858 4.42792L25.1768 2.83693ZM0 2.91016H25V2.41016H0V2.91016Z" fill="#FFFDF5" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
};

export default Invited;
