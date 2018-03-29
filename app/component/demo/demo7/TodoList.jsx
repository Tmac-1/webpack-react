/*
 * @Author: Tmac-1 
 * @Date: 2018-03-22 21:58:11 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-29 16:09:20
 */
import React from 'react';
// 使用 Refast 的 Component 替代 React 的 Component
import Refast,{Component} from 'refast';
import LogicRender , {connect} from 'refast-logic-render';
import {Toast} from '../../common/layer'
// 引入logic.js
import logic from './logic';
import List from './List';
import '../../../public/css/todoList.pcss'; 



// @connect
class TodoList extends Component{
    constructor(props){
         super(props,logic)      
    }

    render(){
        let {list,isLoading,isEmpty} = this.state,{dispatch} = this;
      
        // console.log(this)
        return (
            <div className='todoList'>
                <Toast ref={e => Refast.use('fn',{Toast:e})}/>
                <input type="text" ref='todoInput'/>
                <button onClick={()=>this.dispatch('handleAdd',this.refs['todoInput'].value)}>添加</button>

                <LogicRender 
                    action={'getTodoList'}
                    isLoading={isLoading}
                    Loading={()=><div>加载中...</div>}
                    isEmpty={isEmpty}
                    Empty={()=><div> 暂无数据</div>}
                >             
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
                </LogicRender>

            </div>
        )
    }
}

export default connect(TodoList);













