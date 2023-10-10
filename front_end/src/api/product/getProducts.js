import request from "../request";

export const loadProducts = async (limit, offset) => {
    const objConfig = {
        method: 'GET',
        url: `http://127.0.0.1:8000/products/?limit=${limit}&offset=${offset}`
    };
    console.log(objConfig)
    try{
        const response = await request(objConfig);
        return response
    } catch(e) {
        console.log(e)
        return e
    };
}