import Image from "next/image";

const WorkshopBanner = ({ workshopInfo }) => {
    return (
        <section className="relative bg-black/20 h-[30vh] sm:h-screen">
            <figure className="h-full m-0 p-0 brightness-50 visible sm:invisible">
                <Image
                    src={workshopInfo.backgroundImage}
                    layout="fill"
                    objectFit="cover"
                    alt={workshopInfo.name}
                />
            </figure>

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center sm:justify-start">
                <h3 className="font-myFont font-medium text-white m-0 p-0 text-3xl sm:text-5xl sm:ml-[70px] xl:text-6xl ">
                    {workshopInfo.title}
                </h3>
            </div>
        </section>
    );
};

export default WorkshopBanner;