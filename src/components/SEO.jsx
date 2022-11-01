import Head from "next/head";

const SEO = ({pageTitle, pageDescription}) => (
    <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription}/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
              rel="stylesheet"/>
    </Head>
);

export default SEO;