import CardImage from "./CardImage";


const Gallery = ({ images }) => {
    return (
        <section>
            <div className="max-w-screen-2xl mx-auto px-5 py-8">
                <h2 className="m-0 pb-[25px] pl-[10px] font-myFont text-black text-3xl
                    sm:pl-[20px] sm:pb-[30px] sm:text-4xl xl:text-5xl xl:pl-[30px] xl:pb-[35px]"
                >
                    Trabajos Finales
                </h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        images.map((image, index) => (
                            <CardImage image={image} key={index}/>
                        ))
                    }
                </div>
            </div>
        </section>
        // <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        //     <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-6 xl-gap-x-8">
        //         {
        //             images.map((image, index) => (
        //                 <CardImage image={image} key={index}/>
        //             ))
        //         }
        //     </div>
        // </section>
    );
};

export default Gallery;