/*
 * @Author: Tmac-1 
 * @Date: 2018-04-01 22:46:29 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-01 22:52:38
 */

 import React from 'react';
 import Reflux from 'reflux';
 import Action from './Action';
 import Store from './Store';

 class Index extends Reflux.Component{
     constructor(props){
         super(props);
         this.store = Store;
     }

     render(){
         return(
             <div className='todoList'>
                   {this.state.num}
                   <button onClick={() => Action.add()}>+</button>
             </div>
         )
     }
 }

 export default Index;

