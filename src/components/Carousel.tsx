import useEmblaCarousel from "embla-carousel-react";
import { FC, ReactNode, useCallback } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

interface Props {
    className?: string;
    children: ReactNode | ReactNode[];
}

const Carousel: FC<Props> = ({ children, className }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel();

    const scrollPrev = useCallback(() => {
        if (emblaApi !== undefined) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi !== undefined) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <section className={className}>
            <button className="shrink-0" onClick={scrollPrev}>
                <BsChevronLeft />
            </button>
            <div className="min-w-0 overflow-clip" ref={emblaRef}>
                {children}
            </div>
            <button className="shrink-0" onClick={scrollNext}>
                <BsChevronRight />
            </button>
        </section>
    );
};

export default Carousel;
