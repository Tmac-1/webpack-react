/*
 * @Author: Tmac-1 
 * @Date: 2018-04-01 23:09:26 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-01 23:31:55
 */

 import Reflux from 'reflux';
 import Action from './Action';

 class Store extends Reflux.Store{
      constructor(){
          super();
          this.listenables = Action;
          this.state ={
            list:[]
          }
      }

      onAddTodo(title) {
        if (!title) {
            alert('内容不能为空');
        }else {
            let list = this.state.list;
            list.push({id: list.length + 1, title: title, status: 1});
            this.setState({list: list});
        }
    }
 }

 export default Store;