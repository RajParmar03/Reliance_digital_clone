import { PRODUCTS_GET } from "./products.type"


export const getProduct = () => {
    return {
        type : PRODUCTS_GET,
    }
}