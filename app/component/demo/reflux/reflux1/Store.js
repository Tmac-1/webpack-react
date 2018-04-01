/*
 * @Author: Tmac-1 
 * @Date: 2018-04-01 23:09:26 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-01 23:22:24
 */

 import Reflux from 'reflux';
 import Action from './Action';

 class Store extends Reflux.Store{
      constructor(){
          super();
          this.listenables = Action;
          this.state ={
              num:0
          }
      }

      onAdd(){
          this.setState({ num:this.state.num + 1})
      }
 }

 export default Store;