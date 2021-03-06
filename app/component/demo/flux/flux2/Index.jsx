/*
 * @Author: Tmac-1 
 * @Date: 2018-03-31 19:22:08 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-01 00:06:34
 */

import Main from './Main';
import {Container} from 'flux/utils';
import TodoActions from './TodoActions';
import TodoStore from './TodoStore';

function getStores() {
    return [
        TodoStore
    ];
}

function getState() {
    return {
        state: TodoStore.getState(),
        addTodo: TodoActions.addTodo,
    };
}

export default Container.createFunctional(Main, getStores, getState);