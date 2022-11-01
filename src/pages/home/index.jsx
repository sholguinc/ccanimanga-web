import {SEO} from "../../components";
import Activities from "./components/Activities";
import SectionTitle from "./components/SectionTitle";

const Home = () => {
    return (
        <>
            <SEO pageTitle="Centro Cultural Anime y Manga - CCAM" pageDescription="Centro Cultural Anime y Manga" />
            {/*<SectionTitle />*/}
            <Activities/>
        </>

    );
};

export default Home