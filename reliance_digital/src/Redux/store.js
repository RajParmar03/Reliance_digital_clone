import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./Products/products.reducer";
import { SingleProductReducer } from "./SingleProduct/SingleProduct.reducer";

const rootReducer = combineReducers({
  
  product : productsReducer,
  singleProduct : SingleProductReducer
 
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(rootReducer , composer(applyMiddleware(thunk)));
