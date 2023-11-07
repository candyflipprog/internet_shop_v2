const LoginWindow = () => {
    return (
        <div className="absolute block ml-auto mr-auto">
            <div>
                <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_125_4630)">
                        <circle cx="33.5" cy="29.5" r="23.5" fill="#514A7E" />
                    </g>
                    <defs>
                        <filter id="filter0_d_125_4630" x="0" y="0" width="67" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_125_4630" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_125_4630" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>

            <div>
                <span>Вход в личный кабинет</span>
            </div>

            <div className="w-[372px]">
                <input type="email" placeholder="Электронная почта" className="border border-b border-[#7D7D7D]"/>
                <input type="password" placeholder="Пароль" className="border border-b border-[#7D7D7D]"/>
                <span>Не помню пароль</span>
            </div>

            <div>
                <button>Войти в личный кабинет</button>
                <button>Регистрация</button>
            </div>
        </div>
    )
};

export default LoginWindow;
