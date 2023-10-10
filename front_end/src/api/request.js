const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        if(obj.data){
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(obj.data)
        } else {
            xhr.send()
        }
        

        xhr.addEventListener('load', () => {
            if(xhr.status  >= 200 && xhr.status < 300) {
                resolve({"status": xhr.status, "data": JSON.parse(xhr.responseText)})
            } else {
                reject(xhr.statusText)
            }
        })
    });
}

export default request;