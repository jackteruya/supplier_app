import request from "../request";

export const deleteCategoryByID= async (id) => {
    const objConfig = {
        method: 'DELETE',
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