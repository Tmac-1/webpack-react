import React from 'react';
import "../../public/css/shop.pcss";

class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[
                {id:1,title:"HOUSTON ROCKETS-01"},
                {id:2,title:"HOUSTON ROCKETS-02"},
                {id:3,title:"HOUSTON ROCKETS-03"},
                {id:4,title:"HOUSTON ROCKETS-04"},
                {id:5,title:"HOUSTON ROCKETS-05"},

                {id:6,title:"HOUSTON ROCKETS-06"},
                {id:7,title:"HOUSTON ROCKETS-07"},
                {id:8,title:"HOUSTON ROCKETS-08"},
                {id:9,title:"HOUSTON ROCKETS-10"}
            ]
        }
    }
    handleItemDel(id){
        console.log(id)
        let list = this.state.list;
        list.splice(list.findIndex(data =>data.id ==id),1)
        this.setState({list:list})
    }
    render(){
        let {list} = this.state;
        return(
            <div className='content'>
                  {
                     list.map(data=>
                             <li key={data.id}>{data.title} <button onClick = {this.handleItemDel.bind(this,data.id)}>删除</button></li>
                      )
                  }
            </div>
        )
    } 
}


export default Index;




















