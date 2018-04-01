/*
 * @Author: Tmac-1 
 * @Date: 2018-03-31 22:51:38 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-01 22:16:56
 */

import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import apiRequestAsync from '../../../../public/js/apiRequestAsync';

const Actions = {
  async postList(){
    let todoList = await apiRequestAsync.post('todoList');
    TodoDispatcher.dispatch({
        type: TodoActionTypes.POST_LIST,
        todoList,
    });
},
  addTodo(text) {
      TodoDispatcher.dispatch({
      type: TodoActionTypes.ADD_TODO,
      text,
    });
  },
  ItemEdit(obj){
     TodoDispatcher.dispatch({
       type:TodoActionTypes.ITEM_EDIT,
       obj,
     })
  }
};

export default Actions;
