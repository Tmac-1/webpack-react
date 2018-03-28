import { NetInfo } from 'react-native';
import {getStorage} from '../constant/myStorage'
import threeStorage from '../constant/threeStorage';
import requestName from './apiName'
//这里是请求方法

const methodsFunc=(path,options,callback,callbackFail)=>{
    console.log("请求路径"+path)
    console.log(options)
  fetch(path,options)
    .then((response) => { console.log(response);return response.json()})
    .then((response) => {
        console.log(response)
        callback&&callback(response)
    })
    .catch((error) => {
        console.log(error)
        callbackFail&&callbackFail()
    });
}
const Api = (method,path,params,callback,callbackFail) => {
    //这里定义option的内容，pathBase为最终请求路径，data最终要转化的参数
    let options = {},pathBase=requestName[path],data=[];
    // option的请求头
    options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    //option的方法
    options.method = method;
    //如果是form表单这种请求，把json形式的参数，做一个转化，
    //这里如果是json形式的请求的话，只需要在这里把传来的参数做一个JSON.stringify即可
    for(let key in params){
      data.push(key+"="+params[key])
    }
    if(method=="POST"){
        options.body =data.join("&");
    }
    if(method=="GET"){
        pathBase+=data.join("&");
    }

    return threeStorage._loadStorage("login",(result)=>{
        if(result){
            if(method=="POST"){
                options.body +=`&user_id=${result.userId}`;
            }
            if(method=="GET"){
                pathBase+=`&user_id=${result.userId}`
            }
        }
        return methodsFunc(pathBase,options,callback,callbackFail)
    },(err)=>{
        return methodsFunc(pathBase,options,callback,callbackFail)
        console.log(err)
    })
}
const apiRequest={
    get:(path,params,callback,callbackFail)=>Api("GET",path,params,callback,callbackFail),
    post:(path,params,callback,callbackFail)=>Api("POST",path,params,callback,callbackFail),
}
export default apiRequest;
