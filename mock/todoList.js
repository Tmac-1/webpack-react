/*
 * @Author: Tmac-1 
 * @Date: 2018-03-25 02:07:41 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-25 18:27:09
 */
import Mock from 'mockjs';

Mock.mock(/\/todoList.mock/,{
    "code":0,
    "data":{
        "list|1-10":[{
            // 属性id是个自增数，初始值1，每次增1
            "id|+1":1,
            "title":"TMAC-@id",
            "status":1
        }]
    },
    "message":"操作成功",
    "systemDate":new Date().getTime()
})

