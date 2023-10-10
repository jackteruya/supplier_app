import request from "../request";

export const loadCategories = async () => {
    const objConfig = {
        method: 'GET',
        url: 'http://127.0.0.1:8000/categories/'
    };
    try{
        const response = await request(objConfig);
        return JSON.parse(response)
    } catch(e) {
        console.log(e)
        return e
    };
}