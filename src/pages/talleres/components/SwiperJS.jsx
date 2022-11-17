import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useContext } from "react";
import { CarouselContext } from "./CarouselContext";

import "swiper/css";
import "swiper/css/navigation";

const myLoader = ({ src }) => {
    return `https://drive.google.com/uc?export=view&id=${src}`
}

const SwiperJS = ({slides, prevRef, nextRef}) => {
    const { setSwiperInstance } = useContext(CarouselContext);

    let swiperSliders = false;
    if (slides) {
        swiperSliders = true
    }

    const handleClick = (e) => {
        e.stopPropagation()
    }

    return (
        <Swiper
            onSwiper={setSwiperInstance}
            // install Swiper modules
            modules={[Navigation]}
            navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
            }}
            speed={300}
            slidesPerView={1}
            loop={true}
            className="w-[100%] h-[100%]"
        >
            {
                swiperSliders &&
                slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center w-[100%] h-[100%] p-[40px] box-border m-auto max-w-[648px] md:px-[80px] md:py-[70px] md:max-w-[728px]">
                            <div
                                className="w-[100%] m-0"
                            >
                                <figure className="w-full m-0 aspect-w-2 aspect-h-2">
                                    <Image
                                        loader={myLoader}
                                        src={slide.id}
                                        layout="fill"
                                        objectFit="contain"
                                        alt={slide.name}
                                        onClick={(e)=>{handleClick(e)}}
                                    />
                                </figure>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
};

export default SwiperJS;