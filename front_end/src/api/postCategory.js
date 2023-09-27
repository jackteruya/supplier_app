import request from "./request";

export const sendCategory = async (data) => {
    const objConfig = {
        method: 'POST',
        url: 'http://127.0.0.1:8000/categories/',
        data: JSON.stringify(data)
    };
    try{
        const response = await request(objConfig);
        return JSON.parse(response)
    } catch(e) {
        console.log(e)
        return e
    };
}