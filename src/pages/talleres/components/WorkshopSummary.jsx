import Image from "next/image";

const WorkshopSummary = ({ workshopInfo }) => {
    return (
        <section className="bg-slate-100 py-[30px] sm:p-0">
            <div className="h-[70vh] flex items-center justify-around flex-col sm:flex-row">
                <p className="font-myFont font-medium text-black text-justify text-lg sm:text-xl m-0 p-0
                w-[80%] sm:w-[50%] sm:mx-10 xl:text-2xl">
                    {workshopInfo.summary}
                </p>

                <figure className="w-[80%] sm:w-[35%] m-0 aspect-w-2 aspect-h-1 m-0 sm:mr-10">
                    <Image
                        src={workshopInfo.summaryImage}
                        layout="fill"
                        objectFit="contain"
                        alt={workshopInfo.name}
                    />
                </figure>
            </div>
        </section>
    );
};

export default WorkshopSummary;