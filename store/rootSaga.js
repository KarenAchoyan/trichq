import {all} from "redux-saga/effects";
import blogSaga from "store/blog/saga";
import {contactSaga} from "store/about/saga";
import {productSaga} from "./products/saga";
import {slideSaga} from "./slides/saga";
import reviewSaga from "./reivews/saga";
import tourSaga from "./tour/saga";

function* rootSaga() {
    yield all([
        blogSaga(),
        contactSaga(),
        productSaga(),
        slideSaga(),
        reviewSaga(),
        tourSaga()
    ]);
}

export default rootSaga;
