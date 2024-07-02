import "../styles/globals.css";
import store from "../store/store";

function App({Component, pageProps}) {
    return <Component {...pageProps} />;
}

export default store.withRedux(App);