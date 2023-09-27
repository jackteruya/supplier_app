import request from "./request";

export const loadProducts = async () => {
    const objConfig = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/products/'
    };
    try{
        const response = await request(objConfig);
        return JSON.parse(response)
    } catch(e) {
        console.log(e)
        return e
    };
}