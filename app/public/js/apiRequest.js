/*
 * @Author: Tmac-1 
 * @Date: 2018-03-24 22:48:49 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-25 23:30:30
 */
import xmlNative from './xmlNative';
import apiManager from './apiManager';



const ajax = (url, method, data, successCB, errorCB) => {
    let dataJson = {
        version: "1.0.0",
        data: data
    };
    return xmlNative({
        method: method,
        url: url,
        data: dataJson,
        success: (data, status) => {
            if (data.code === 0) {
                successCB && successCB(data, status)
            } else {
                if (errorCB) {
                    errorCB(data, status)
                } else {
                    console.log(data, status);
                }
            }
        },
        error: (data, status) => {
            console.log(status, status)
        }
    });
};


const apiRequest = {
    get: (apiName, data, successCB, errorCB) => {
        return ajax(apiManager[apiName], "get", data,
            (data, status, xhr) => successCB && successCB(data.data, data.systemDate),
            errorCB);
    },
    post: (apiName, data, successCB, errorCB) => {
        return ajax(apiManager[apiName], "post", data,
            (data, status, xhr) => successCB && successCB(data.data, data.systemDate),
            errorCB);
    }
};

export default apiRequest;