import Link from "next/link";
import Image from "next/image";
import {homeGrid} from "../../../data";


const Activities = () => {
    return (
        <section className="workshops">
            {/* Grid Container */}
            <div className="grid grid-cols-1 xsm:grid-cols-2 sm:grid-cols-5">
                {/* Grid Elements */}
                {
                    homeGrid.map((workshop, index) => (
                        <Link href={workshop.path}>
                            <div key={index} className={
                                `group relative overflow-hidden m-0 cursor-pointer aspect-w-4 aspect-h-2 xsm:aspect-w-2 xsm:aspect-h-2 sm:aspect-w-2 sm:aspect-h-3
                                ${ workshop.name === "Otros" ? "xsm:max-md:aspect-h-1 xsm:max-sm:col-span-2" : "" }`
                            }>
                                <figure className="m-0 group-hover:brightness-[0.3] group-hover:scale-[1.15] transition duration-500 ease-in-out">
                                    <Image
                                        src={workshop.background}
                                        layout="fill"
                                        objectFit="cover"
                                        alt={workshop.name}
                                    />
                                </figure>

                                <div className="absolute w-full h-full flex items-center justify-center">
                                    <p className="opacity-0 font-myfont font-medium text-2xl m-0 text-white group-hover:opacity-100
                                    transition duration-500 ease-in-out">
                                        {workshop.name}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    );
};

export default Activities;