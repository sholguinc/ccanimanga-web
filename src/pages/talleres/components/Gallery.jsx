import { useContext } from "react";
import CardImage from "./CardImage";
import Carousel from "./Carousel";
import { CarouselContext } from "src/components";
import { concat } from 'src/utils'

const Gallery = ({ images }) => {
    const { gallery } = useContext(CarouselContext);
    let galleryCards = false;
    if (images) {
        galleryCards = true
    }

    return (
        <section>
            <div className="max-w-screen-2xl mx-auto px-5 py-12 sm:py-14 xl:py-28">
                <h2 className="m-0 pb-[25px] pl-[10px] font-myFont text-white text-3xl
                    sm:pl-[20px] sm:pb-[30px] sm:text-4xl xl:text-5xl xl:pl-[30px] xl:pb-[60px]"
                >
                    Trabajos Finales
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        galleryCards &&
                            images.map((image, index) => (
                            <CardImage image={image} key={index} index={index}/>
                        ))
                    }
                </div>
            </div>

            <div className={concat(
                "max-sm:hidden",
                gallery ? 'visible' : 'invisible transition-[visibility] delay-100 duration-0'
            )}>
                <Carousel slides={images} />
            </div>
        </section>
    );
};

export default Gallery;