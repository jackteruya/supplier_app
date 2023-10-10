import request from "../request";

export const sendProduct = async (data) => {
    const objConfig = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/products/',
        data: JSON.stringify(data)
    };
    try{
        const response = await request(objConfig);
        return response
    } catch(e) {
        console.log(e)
        return e
    };
}