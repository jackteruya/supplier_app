import request from "../request";

export const loadCategoryByID= async (id) => {
    const objConfig = {
        method: 'GET',
        url: `http://127.0.0.1:8000/categories/${id}`
    };
    try{
        const response = await request(objConfig);
        return response
    } catch(e) {
        console.log(e)
        return e
    };
}