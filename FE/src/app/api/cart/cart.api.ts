import { axiosPrivate } from "../configHttp"

export const addProductToCart = async (data: any) => {
    return await axiosPrivate.post("/cart/add", data)
}