import {SEO} from "../../components";
import Gallery from './components/Gallery'
import {capitalize} from "src/utils";
import {driveImages} from "src/lib";
import {CarouselContextProvider} from "src/components";
import WorkshopBanner from "./components/WorkshopBanner";
import WorkshopSummary from "./components/WorkshopSummary";
import {workshops} from "src/data/workshops";

// Static Paths
export async function getStaticPaths() {
    return {
        paths: [
            {params: {workshop: 'manga'}},
            {params: {workshop: 'origami'}},
            {params: {workshop: 'papercraft'}},
            {params: {workshop: 'shogi'}}
        ],
        fallback: false, // others routes will be 404.html
    }
}

// Drive Images Json
export async function getStaticProps({params: {workshop}}) {
    const images = await driveImages(workshop)
    return {
        props: {
            images,
            workshop,
        }, // will be passed to the page component as props
    }
}

const Workshop = ({images, workshop}) => {
    const workshopCapitalized = capitalize(workshop)
    const workshopInfo = workshops[workshop];
    console.log(workshopInfo.background)

    return (
        <>
            <SEO pageTitle={`${workshopCapitalized} - CCAM`} pageDescription={`Taller de ${workshopCapitalized}`}/>

            <div
                style={{backgroundImage: `url(${workshopInfo.backgroundImage})`}}
                className="bg-no-repeat bg-fixed bg-cover bg-center"
            >
                <div className="bg-black/60">
                    <WorkshopBanner workshopInfo={workshopInfo}/>

                    <WorkshopSummary workshopInfo={workshopInfo}/>

                    <CarouselContextProvider>
                        <Gallery images={images}/>
                    </CarouselContextProvider>
                </div>
            </div>
        </>
    );
};

export default Workshop;