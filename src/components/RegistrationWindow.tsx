const RegistrationWindow = () => {
    return (
        <div className="flex">
            <div>
                <span>Регистрация</span>
            </div>

            <div className="flex flex-col">
                <div>
                    <input type="text" placeholder="ФИО"/>
                    <input type="text" placeholder="Контактный телефон"/>
                    <input type="text" placeholder="Индекс"/>
                </div>
                <div>
                    <input type="text" placeholder="Ваш полный адрес (только РБ)"/>
                    <input type="email" placeholder="Электронная почта"/>
                    <input type="text" placeholder="Комментарий"/>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" name="accept" />
                    <label htmlFor="accept">Даю согласие на обработку персональных данных</label>
                </div>
            </div>

            <div className="flex flex-col"></div>

            <div className="flex">
                <button>Отправить</button>
                <button>Войти в кабинет</button>
            </div>
        </div>
    )
};

export default RegistrationWindow;
