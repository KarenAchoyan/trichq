import "../styles/globals.css";
import store from "../store/store";
import {IntlProvider} from "react-intl";
import {useRouter} from "next/router";

import en from "../i18n/en.json"
import ru from "../i18n/ru.json"
import hy from "../i18n/hy.json"

const messages = {
    en,
    ru,
    hy
}
function App({Component, pageProps}) {
    const router = useRouter();
    const {locale} = router;

    return (
        <IntlProvider locale={locale} messages={(messages)[locale]}>
            <Component {...pageProps} />
        </IntlProvider>

    );
}

export default store.withRedux(App);