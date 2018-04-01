/*
 * @Author: Tmac-1 
 * @Date: 2018-03-30 11:34:38 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-30 11:39:09
 */

 import ActionTypes from './ActionTypes';
 import Dispatcher from './Dispatcher';

 const Actions ={
     add(text){
         Dispatcher.dispatch({
             type:ActionTypes.ADD,
             text,
         })
     }
 }


 export default Actions;