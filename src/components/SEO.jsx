import Head from "next/head";

const SEO = ({pageTitle, pageDescription}) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription}/>
    </Head>
);

export default SEO;