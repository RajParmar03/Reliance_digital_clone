import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { Authreducer } from "./Auth/auth.reducer";
import { productsReducer } from "./Products/products.reducer";
import { SingleProductReducer } from "./SingleProduct/SingleProduct.reducer";
import CartReducer from "./Cart/cart.reducer";

const rootReducer = combineReducers({
  AuthManager: Authreducer,
  singleProduct: SingleProductReducer,
  product: productsReducer,
  cart: CartReducer,
});

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composer(applyMiddleware(thunk))
);
