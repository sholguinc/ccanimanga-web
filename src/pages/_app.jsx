import "../styles/App.scss";
import {Layout, Loading} from "../components";
import {MenuContextProvider} from "../components";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <MenuContextProvider>
              <Loading/>
              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </MenuContextProvider>
      </>
  );
}

export default MyApp
