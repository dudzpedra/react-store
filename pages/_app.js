import { GlobalProvider } from "../components/Store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp;
