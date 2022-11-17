import { createContext, useState } from "react";

const defaultValue = {
    gallery: false,
};

export const CarouselContext = createContext(defaultValue);

export function CarouselContextProvider(props) {
    const [gallery, setGallery] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState();

    const showGallery = () => {
        setGallery(!gallery);
    };

    const openGallery = (current_image) => {
        swiperInstance?.slideTo(current_image + 1, 0);
        showGallery();
    };

    return (
        <CarouselContext.Provider
            value={{
                gallery,
                showGallery,
                openGallery,
                setSwiperInstance,
            }}
        >
            {props.children}
        </CarouselContext.Provider>
    );
}
