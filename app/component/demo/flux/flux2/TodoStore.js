/*
 * @Author: Tmac-1 
 * @Date: 2018-03-31 22:59:06 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-01 00:17:30
 */

import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoEditStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return {list: []};
    }

    reduce(state, action) {
        let list = state.list;
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:
                if (!action.text) {
                    alert('内容不能为空');
                    return state;
                }
                list.push({id: state.list.length + 1, title: action.text, status: 1});
                return {list};
            default:
                return state;
        }
    }
}

export default new TodoEditStore();