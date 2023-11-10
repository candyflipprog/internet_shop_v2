import Star from "./Star";
import avatar1 from "../images/avatar1.png";
import avatar2 from "../images/avatar2.png";

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            image: avatar1,
            stars: 5,
            review: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
            name: "Анна",
            surname: "Котлова",
            publicationDate: "23.05.2023"
        },
        {
            id: 2,
            image: avatar2,
            stars: 4,
            review: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
            name: "Анна",
            surname: "Котлова",
            publicationDate: "23.05.2023"
        },
        {
            id: 2,
            image: avatar2,
            stars: 4,
            review: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
            name: "Анна",
            surname: "Котлова",
            publicationDate: "23.05.2023"
        },
        {
            id: 2,
            image: avatar2,
            stars: 4,
            review: "Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна.",
            name: "Анна",
            surname: "Котлова",
            publicationDate: "23.05.2023"
        }
    ];

    return (
        <section className="flex flex-col mt-[150px] font-Roboto ml-32 mr-32">
            <div>
                <span className="text-[40px]">Отзывы наших покупателей</span>
            </div>
            <div className="flex">
                <div className="flex mt-[60px]">
                    {reviews.slice(0, 2).map((item, index) => (
                        <div key={index} className="flex w-[460px] h-[205px] bg-[#FFFDF5] mr-[80px]">
                            <img src={item.image} alt="" className="block mt-auto mb-auto w-[94px] h-[94px] ml-[24px]" />
                            <div className="flex ml-[49px] mt-[47px] h-[10px]">
                                {new Array(item.stars).fill(0).map((_, idx) => (
                                    <Star className="ml-[5px]" key={idx} width={12} height={12} />
                                ))}
                            </div>
                            <div className="block mt-auto mb-auto ml-[-82px] w-[270px] h-[70px]">
                                <span className="text-[12px] text-[#7D7D7D] mt-[14px]">{item.review}</span>
                                <br />
                                <span className="text-[12px] text-[#121212] mt-[50px]">{item.name} {item.surname}</span>
                                <span className="text-[12px] text-[#514A7E]">{item.publicationDate}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="block mt-auto mb-auto w-[92px] h-[92px] border-solid border border-[#514A7E] rounded-full ml-[80px]">
                    <div className="cursor-pointer">
                        <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="46" cy="46" r="45.5" stroke="#514A7E" />
                            <path d="M65.159 47.8619C65.3543 47.6666 65.3543 47.35 65.159 47.1547L61.9771 43.9728C61.7818 43.7775 61.4652 43.7775 61.27 43.9728C61.0747 44.168 61.0747 44.4846 61.27 44.6799L64.0984 47.5083L61.27 50.3367C61.0747 50.532 61.0747 50.8486 61.27 51.0438C61.4652 51.2391 61.7818 51.2391 61.9771 51.0438L65.159 47.8619ZM27.1475 48.0083H64.8055V47.0083H27.1475V48.0083Z" fill="#514A7E" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="mt-[30px]">
                <button className="text-[#FFFDF5] bg-[#514A7E] w-[150px] h-[37px] cursor-pointer">Добавить отзыв</button>
            </div>
        </section >
    )
};

export default Reviews;
