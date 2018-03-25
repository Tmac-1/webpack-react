/*
 * @Author: Tmac-1 
 * @Date: 2018-03-25 00:57:43 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-25 22:29:51
 */
// 管理接口文件
import cookie from 'react-cookie';

                        
if(process.env.NODE_ENV === 'develpment'){
    require('../../../mock/todoList')
}

let token = cookie.load('token');
let postApi = (path,mock) =>{
    return path + (mock ? '' :'.mock')+'?token=' + token;
}

export default {
    'newList1':postApi('http://data.xinxueshuo.cn/nsi-0.9/Class_Course_api?whereFrom=showInformation',1),
    'newList2':postApi('http://data.xinxueshuo.cn/nsi-0.9/Class_Course_api?whereFrom=showInformation',1),
    "todoList":postApi("/todoList",0)
}