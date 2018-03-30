/*
 * @Author: Tmac-1 
 * @Date: 2018-03-30 11:15:56 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-30 11:18:26
 */

 import React from 'react';

 const Main = (props) =>
        <div className='todoList'>
            {props.state || 0} <button onClick={props.add.bind(this,1)}>+</button>
        </div>


export default Main;