import Image from "next/image";
import { useState } from "react";
import { concat } from "src/utils";

const myLoader = ({ src }) => {
    return `https://drive.google.com/uc?export=view&id=${src}`
}

const CardImage = ( {image} ) => {
    // Image Loading
    const [isLoading, setLoading] = useState(true)

    // parameters
    let imageID, imageName;
    if (image) {
        imageID = image.id
        imageName = image.name
    }

    return (
        <div className="group cursor-pointer">
            <figure className="m-0 aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
                <Image
                    loader={myLoader}
                    src={imageID}
                    layout="fill"
                    objectFit="cover"
                    alt={imageName}
                    className={concat(
                        "transition duration-500 ease-in-out",
                        isLoading
                            ? 'grayscale blur-2xl scale-110'
                            : 'grayscale-0 blur-0 scale-100'
                    )}
                    onLoadingComplete={() => setLoading(false)}
                    placeholder="blur"
                    blurDataURL="/images/gallery/blur.jpg"
                />

                <div className={concat(
                    "bg-gradient-to-t from-black/60 to-transparent",
                    "opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out",
                    isLoading
                        ? 'invisible'
                        : 'visible'
                )}>
                    <div className={concat(
                        "h-[25%] opacity-0 group-hover:opacity-100 translate-y-[300%]",
                        "transition duration-300 ease-in-out"
                    )}>
                        <div className="h-full flex justify-center items-center">
                            <h3 className="m-0 text-lg text-white break-words w-[70%] text-center font-myFont">{imageName}</h3>
                        </div>
                    </div>
                </div>
            </figure>
        </div>
    )
}

export default CardImage;