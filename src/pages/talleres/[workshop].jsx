import {SEO} from "../../components";
import Gallery from './components/Gallery'
import { capitalize } from "src/utils";

// Static Paths
export async function getStaticPaths() {
    return {
        paths: [
            { params: { workshop: 'manga' } },
            { params: { workshop: 'origami' } },
            { params: { workshop: 'papercraft' } },
            { params: { workshop: 'shogi' } }
        ],
        fallback: false, // can also be true or 'blocking'
    }
}

// Drive Images Json
export async function getStaticProps({params: { workshop }}) {
    const url = `${process.env.API_URL}/api/drive-images/${workshop}`
    const response = await fetch(url);
    const images = await response.json();
    return {
        props: {
            images,
            workshop,
        }, // will be passed to the page component as props
    }
}

const Workshop = ({ images, workshop }) => {
    const workshopCapitalized = capitalize(workshop)
    return (
        <>
            <SEO pageTitle={`${workshopCapitalized} - CCAM`} pageDescription={`Taller de ${workshopCapitalized}`} />
            <Gallery images={images}/>
        </>
    );
};

export default Workshop;