import { combineReducers } from "redux";
import categoryReducer from "store/category/reducer";
import blogReducer from "store/blog/reducer";
import contactReducer from "store/about/reducer";
import productReducer from "./products/reducer";
import slideReducer from "./slides/reducer";
import reviewReducer from "./reivews/reducer";
import tourReducer from "./tour/reducer";


const rootReducer = combineReducers({
    category: categoryReducer,
    blog:blogReducer,
    contact:contactReducer,
    product:productReducer,
    slide:slideReducer,
    review:reviewReducer,
    tour:tourReducer
});

export default rootReducer;
