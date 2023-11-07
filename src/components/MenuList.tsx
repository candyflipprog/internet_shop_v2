const MenuList = () => {
    const menuItems = [
        { itemText: "Женщинам" },
        { itemText: "Мужчинам" },
        { itemText: "Детям" },
        { itemText: "Обувь" },
        { itemText: "Обувь" },
        { itemText: "Игрушки" },
        { itemText: "Акссесуары" },
        { itemText: "Большие размеры" },
        { itemText: "Дополнительно" },
        { itemText: "Акции" }
    ];

    return (
        <section className="absolute mr-32 flex flex-col h-[900px] w-[300px] mt-32 bg-[#121212]">
            <div>
                {menuItems.map((item, index) => (
                    <p key={index} className="text-[#FFFDF5]">{item.itemText}</p>
                ))}
            </div>
        </section>
    )
};

export default MenuList;
