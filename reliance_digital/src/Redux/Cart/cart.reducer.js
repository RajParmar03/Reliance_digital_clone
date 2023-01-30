import { CartError, CartLoading, CartSuccess } from "./cart.types";

let initialData = {
  loading: false,
  data: [],
  error: false,
  dataLength: 0,
  totalPrice: 0,
  paybalPrice: 0,
  coupon: 0,
};

const CartReducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case CartLoading: {
      return {
        ...state,
        loading: true,
      };
    }
    case CartSuccess: {
      let finallyTotalArray = payload.map((elem) => {
        let newArray = elem.price.split(".");
        newArray.pop();
        let finalArray = newArray[0].split(",");

        let finalPrice = "";
        for (let i = 0; i < finalArray.length; i++) {
          finalPrice += finalArray[i];
        }

        finalPrice = Number(finalPrice);
        return finalPrice;
      });
      console.log("this is finaly total Array", finallyTotalArray);

      let finallyTotal = finallyTotalArray.reduce((acc, elem) => {
        return elem + acc;
      }, 0);

      return {
        ...state,
        loading: false,
        data: payload,
        error: false,
        dataLength: payload.length,
        totalPrice: finallyTotal,
        paybalPrice: finallyTotal,
      };
    }
    case CartError: {
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
        dataLength: 0,
        totalPrice: 0,
      };
    }
    case "code": {
      let finalprice = 0;
      if (state.paybalPrice >= 1000 && payload === "MASAI40") {
        finalprice = state.paybalPrice - 500;
      }
      return {
        ...state,
        paybalPrice: finalprice,
        coupon: 500,
      };
    }
    case "priceIncrease": {
      return {
        ...state,
        totalPrice: state.paybalPrice + payload,
        paybalPrice: state.paybalPrice + payload,
      };
    }
    case "priceDecrease": {
      return {
        ...state,
        totalPrice: state.paybalPrice - payload,
        paybalPrice: state.paybalPrice - payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default CartReducer;
