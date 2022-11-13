import "../styles/App.scss";
import {Layout, Loading} from "../components";


function MyApp({ Component, pageProps }) {
  return (
      <>
          <Loading/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </>
  );
}

export default MyApp
