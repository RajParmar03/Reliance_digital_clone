import { GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_LOADING, GET_SINGLE_PRODUCT_SUCCESS } from "./SingleProduct.type";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: {},
};

export const SingleProductReducer = (state = productInitalState,action) => {
  const {type,payload} = action;

  switch(type) {
    case GET_SINGLE_PRODUCT_LOADING : {
      return {...state , loading : true};
    }
    case GET_SINGLE_PRODUCT_SUCCESS : {
      return {...state , loading : false , error : false , data : payload}
    }
    case GET_SINGLE_PRODUCT_ERROR : {
      return {...state , error : true , loading : false};
    }
    default : return state;
  }
};
