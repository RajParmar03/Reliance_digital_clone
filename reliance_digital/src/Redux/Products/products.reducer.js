import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./products.type";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productsReducer = (state = productInitalState,action) => {
  const {type,payload} = action;

  switch(type) {
    case GET_PRODUCTS_LOADING : {
      return {...state , loading : true};
    }
    case GET_PRODUCTS_SUCCESS : {
      return {...state , loading : false , error : false , data : payload}
    }
    case GET_PRODUCTS_ERROR : {
      return {...state , error : true , loading : false};
    }
    default : return state;
  }
};
