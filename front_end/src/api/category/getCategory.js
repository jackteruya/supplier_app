import request from "../request";

export const loadCategories = async (limit, offset) => {
    const objConfig = {
        method: 'GET',
        url: `http://127.0.0.1:8000/categories/?limit=${limit}&offset=${offset}`
    };
    try{
        const response = await request(objConfig);
        return response
    } catch(e) {
        console.log(e)
        return e
    };
}