import Image from "next/image";
import {useState} from "react";
import {concat} from "src/utils";
import driveImages from "../../../utils/driveImages";


const myLoader = ({ src }) => {
    return `https://drive.google.com/uc?export=view&id=${src}`
}

const CardImage = () => {
    const [isLoading, setLoading] = useState(true)
    // console.log(driveImages())

    return (
        <div className="group">
            <figure className="m-0 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                    loader={myLoader}
                    src="1AbEv-moICRY-Utta1nRVBAXkG_4lWfbT"
                    layout="fill"
                    objectFit="cover"
                    alt="some-image"
                    className={concat(
                        "group-hover:opacity-75 duration-700 ease-in-out",
                        isLoading
                            ? 'grayscale blur-2xl scale-110'
                            : 'grayscale-0 blur-0 scale-100'
                    )}
                    onLoadingComplete={() => setLoading(false)}
                    placeholder="blur"
                    blurDataURL="/images/gallery/blur.jpg"
                />
            </figure>

            <h3 className="mt-4 text-sm text-gray-700">Someone</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">@someone</p>
        </div>
    )
}


const Gallery = () => {
    return (
        <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-6 xl-gap-x-8">
                <CardImage/>
            </div>
        </section>
    );
};

export default Gallery;