import { INC, DEC, TOTALPRICE } from "./cart.types";

const initialValue = {
  count: 1,
  totalPrice: 0,
};

export const cartReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case INC:{
        return {
            ...state,
            count:state.count+1
        }
    }
    case DEC:{
        return {
            ...state,
            count:state.count-1
        }
    }
    case TOTALPRICE:{
        return{
            ...state,
            totalPrice:state.totalPrice+(state.count*payload)
        }
    }
    
    default: {
      return state;
    }
  }
};

