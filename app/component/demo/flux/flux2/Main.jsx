/*
 * @Author: Tmac-1 
 * @Date: 2018-03-31 19:45:14 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-01 16:35:08
 */

import React from 'react';
import '../../../../public/css/todoList.pcss';

class Input extends React.Component {
    render() {
        let {addTodo} = this.props;
        return (
            <div className="todoList">
                <input type="text" ref="todoInput"/>
                <button onClick={() => addTodo(this.refs['todoInput'].value)}>添加
                </button>
            </div>
        );
    }
}

class List extends React.Component {
    render() {
        let {list} = this.props.state;
        return (
            <div>
                {
                    list.length > 0 && list.map(data =>
                        <li key={data.id}>
                            {data.title}
                        </li>
                    )
                }
            </div>
        );
    }
}

const Index = (props) =>
    <div className="todoList">
        <Input {...props}/>
        <List {...props}/>
    </div>
;
export default Index;
