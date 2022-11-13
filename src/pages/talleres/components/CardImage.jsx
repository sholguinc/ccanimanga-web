import Image from "next/image";
import { useState } from "react";
import { concat } from "src/utils";

const myLoader = ({ src }) => {
    return `https://drive.google.com/uc?export=view&id=${src}`
}

const CardImage = ( {image} ) => {
    // Image Loading
    const [isLoading, setLoading] = useState(true)

    return (
        <div className="group">
            <figure className="m-0 aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
                <Image
                    loader={myLoader}
                    src={image.id}
                    layout="fill"
                    objectFit="cover"
                    alt={image.name}
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

            <h3 className="mt-4 text-sm text-gray-700 break-words">{image.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">@someone</p>
        </div>
    )
}

export default CardImage;