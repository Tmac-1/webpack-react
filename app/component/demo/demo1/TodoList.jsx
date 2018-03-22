/*
 * @Author: Tmac-1 
 * @Date: 2018-03-22 21:58:11 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-22 22:35:25
 */
import React from 'react';
import '../../../public/css/todoList.pcss'; 

class TodoList extends React.Component{
    constructor(props){
         super(props);
         this.state ={
             list:[
                 {
                     id:1,
                     title:'前端人人01',
                     status:1,/* 0删除，1正常*/
                
                 },
                 {
                    id:2,
                    title:'前端人人02',
                    status:1,/* 0删除，1正常*/
               
                }
             ]
         }
         this.handleAdd = this.handleAdd.bind(this)
    }

    componentDidMount(){}
    handleAdd(){
        let item = this.refs['todoInput'].value;
        if(item){
            let list = this.state.list;
            list.push({id:list.length + 1 , title:item , status:1});
            this.setState(
                {list:list},
                () => console.log(this.state.list)
            )
        }else{
            alert('不能为空')
        }
    }
    handleItemDel(id){
        let list = this.state.list;
        list.find(data => data.id ===id).status = 0;
        this.setState({list:list})  
    }
    render(){
        let {list} = this.state;
        return (
            <div className='todoList'>
                <input type="text" ref='todoInput'/>
                <button onClick={ this.handleAdd }>添加</button>
                <div className='list'>
                     {
                         list.map(data =>{

                             if(data.status ===1 ){
                                 return(
                                     <li key={data.id}> {data.title}
                                           <button onClick={()=>this.handleItemDel(data.id)}>删除</button>
                                     </li>)
                             
                             }else{
                                 return false
                             }
                         
                         })
                        
                    }
                </div>
            </div>
        )
    }
}

export default TodoList;













