import {all} from "redux-saga/effects";
import blogSaga from "store/blog/saga";
import {contactSaga} from "store/about/saga";
import {productSaga} from "./products/saga";
import {slideSaga} from "./slides/saga";
import reviewSaga from "./reivews/saga";
import tourSaga from "./tour/saga";
import {gallerySaga} from "./gallery/saga";

function* rootSaga() {
    yield all([
        blogSaga(),
        contactSaga(),
        productSaga(),
        slideSaga(),
        reviewSaga(),
        tourSaga(),
        gallerySaga()
    ]);
}

export default rootSaga;
