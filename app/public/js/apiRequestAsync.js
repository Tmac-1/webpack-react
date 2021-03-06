/*
 * @Author: Tmac-1 
 * @Date: 2018-03-25 23:35:38 
 * @Last Modified by:   Tmac-1 
 * @Last Modified time: 2018-03-25 23:35:38 
 */

import xmlNative from './xmlNative'
import apiManager from './apiManager'

const ajax = (url, method, data) => {
    let dataJson = {
        version: "1.0.0",
        data: data
    };
    return xmlNative({
        method: method,
        url: url,
        data: dataJson
    }, 1);
};
const apiRequestAsync = {
    get: (apiName, data) => ajax(apiManager[apiName], "get", data),
    post: (apiName, data) => ajax(apiManager[apiName], "post", data)
};
export default apiRequestAsync;