/*
 * @Author: Tmac-1 
 * @Date: 2018-03-22 21:58:11 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-28 22:57:44
 */
import React from 'react';
// 使用 Refast 的 Component 替代 React 的 Component
import Refast,{Component} from 'refast';
import {Toast} from '../../common/layer'
// 引入logic.js
import logic from './logic';
import List from './List';
import '../../../public/css/todoList.pcss'; 
// function next(){

// }
// function logState(ctx){
//     return function (next){
//             return function (...args) {
//                     next(...args)
//             }
//     }
// }

const logState = ctx => next => (...args) => {


    console.log('######### PRINT STATE LOG #########');
    console.log('ctx:', ctx, new Date().getTime());
    console.log('args:', args, new Date().getTime());
    // 如果不执行 next， 则中止组件 state 更新
    console.log(next)

    next(...args);
};
// logState 可以是一个函数
// 也可以是一个函数组, 从前到后依次执行

Refast.use('middleware', [logState]);


class TodoList extends Component{
    constructor(props){
         super(props,logic)      
    }

    componentDidMount(){
        this.dispatch('getTodoList')
    }
    render(){
        let {list} = this.state,{dispatch} = this;
        // console.log(this)
        return (
            <div className='todoList'>
                <input type="text" ref='todoInput'/>
                <button onClick={()=>this.dispatch('handleAdd',this.refs['todoInput'].value)}>添加</button>
                <div className='cont'>
                    <div className='box'>
                          全部
                          <List type={0} list={list} dispatch={dispatch}/>
                    </div>
                    <div className='box'>
                          未删除
                          <List type={1} list={list} dispatch={dispatch}/>
                    </div>
                    <div className='box'>
                          已删除123
                          <List type={2} list={list} dispatch={dispatch}/>
                    </div>
                </div>
             
                <Toast ref={e => Refast.use('fn',{Toast:e})}/>
            </div>
        )
    }
}

export default TodoList;













