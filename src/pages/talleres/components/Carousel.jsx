import {useContext, useRef} from "react";
import SwiperJS from "./SwiperJS";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { CarouselContext } from "src/components";
import {
    faAngleLeft,
    faAngleRight,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = ({slides}) => {
    const swiperNavPrevRef = useRef(null);
    const swiperNavNextRef = useRef(null);

    const {gallery, showGallery} = useContext(CarouselContext);

    return (
        <section className="fixed top-0 left-0 w-[calc(100%-80px)] h-[100%] z-50">
            <div
                className={
                    gallery
                        ? "relative z-100 bg-black/80 w-[100%] h-[100%] cursor-grab flex items-center transition duration-1000 ease-out"
                        : "relative bg-black/[0] w-[100%] h-[100%] flex items-center transition duration-500 ease-out"
                }
                onClick={showGallery}
            >
                <div
                    className={
                        gallery
                            ? "z-200 w-[100%] h-[100%] m-auto box-border px-[30px] opacity-100 transition-[transform, opacity] duration-500 ease-out"
                            : "transition-transform duration-500 scale-0 opacity-0 m-auto box-border px-[30px]"
                    }
                >
                    <SwiperJS
                        slides={slides}
                        prevRef={swiperNavPrevRef}
                        nextRef={swiperNavNextRef}
                    />
                </div>
            </div>
            <FontAwesomeIcon
                icon={faXmark}
                className={
                    `z-[1000] absolute w-[30px] h-[30px] text-white top-5 right-5 cursor-pointer md:top-10 md:right-10 
                    transition - [top, right] duration-300 ease-linear 
                    ${gallery
                        ? "opacity-100 transition-[opacity] duration-1000 ease-out"
                        : "opacity-0 transition-[opacity]  duration-500 ease-out"
                    }`
                }
                onClick={showGallery}
            />
            <FontAwesomeIcon
                ref={swiperNavPrevRef}
                icon={faAngleLeft}
                className={
                    `absolute z-[1000] w-[26px] h-[26px] text-white top-[calc(50%-13px)] left-10 cursor-pointer md:left-[35px]
                     transition-[left] duration-300 ease-linear
                     ${gallery
                        ? "opacity-100 transition-[opacity] duration-1000 ease-out"
                        : "opacity-0 transition-[opacity]  duration-500 ease-out"
                    }`
                }
            />
            <FontAwesomeIcon
                ref={swiperNavNextRef}
                icon={faAngleRight}
                className={
                    `absolute z-[1000] w-[26px] h-[26px] text-white top-[calc(50%-13px)] right-10 cursor-pointer md:right-[35px]
                    transition-[right] duration-300 ease-linear
                    ${gallery
                        ? "opacity-100 transition-[opacity] duration-1000 ease-out"
                        : "opacity-0 transition-[opacity]  duration-500 ease-out"
                    }`
                }
            />
        </section>
    );
};
export default Carousel;
