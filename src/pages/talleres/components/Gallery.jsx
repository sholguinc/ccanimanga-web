import CardImage from "./CardImage";


const Gallery = ({ images }) => {
    let galleryCards = false;
    if (images) {
        galleryCards = true
    }

    return (
        <section>
            <div className="max-w-screen-2xl mx-auto px-5 py-8">
                <h2 className="m-0 pb-[25px] pl-[10px] font-myFont text-white text-3xl
                    sm:pl-[20px] sm:pb-[30px] sm:text-4xl xl:text-5xl xl:pl-[30px] xl:pb-[35px]"
                >
                    Trabajos Finales
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        galleryCards &&
                            images.map((image, index) => (
                            <CardImage image={image} key={index}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Gallery;