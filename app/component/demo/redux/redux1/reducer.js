/*
 * @Author: Tmac-1 
 * @Date: 2018-04-02 23:53:30 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-03 00:04:59
 */

 export default 
 ( state = {num:0}, action ) => {
     switch ( action.type){
         case "ADD":
         return { num:state.num + action.num};
         default:
         return state;
     }
 }