import CardImage from "./CardImage";


const Gallery = ({ images }) => {
    return (
        <section className="bg-[url('/images/gallery/background.jpg')] bg-no-repeat bg-cover bg-fixed">
            <div className="max-w-screen-2xl mx-auto px-5 py-12">
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