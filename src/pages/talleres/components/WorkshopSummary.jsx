import Image from "next/image";

const WorkshopSummary = ({ workshopInfo }) => {
    let summary, image, name;
    if (workshopInfo) {
        summary = workshopInfo.summary
        image = workshopInfo.summaryImage
        name = workshopInfo.name
    }
    return (
        <section className="bg-slate-100 py-[30px] sm:p-0">
            <div className="h-min flex items-center justify-around flex-col sm:flex-row">
                <p className="font-myFont font-medium text-black text-justify text-lg sm:text-xl mx-0 p-0 mt-[10px] mb-[30px]
                w-[80%] sm:w-[50%] sm:m-10 xl:text-2xl">
                    {summary}
                </p>

                <figure className="w-[80%] sm:w-[35%] m-0 aspect-w-2 sm:aspect-w-3 aspect-h-1 m-0 sm:mr-10">
                    <Image
                        src={image}
                        layout="fill"
                        objectFit="contain"
                        alt={name}
                    />
                </figure>
            </div>
        </section>
    );
};

export default WorkshopSummary;