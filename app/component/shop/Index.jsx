/*
 * @Author: Tmac-1 
 * @Date: 2018-03-22 22:00:11 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-25 01:06:36
 */
import React from 'react';
import utils from '../../public/js/utils';
import apiRequest from '../../public/js/apiRequest';
import "../../public/css/shop.pcss";
// import apiManager from '../../public/js/apiManager';

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
        list.splice(list.findIndex(data =>data.id === id),1)
        this.setState({list:list})
    }
    componentDidMount(){
        apiRequest.post('newList1', {
            start: 0,
            end: 20
        }, data => console.log(data), data => console.log(data))
    }
    render(){
        let {list} = this.state;
        return(
            <div className='content'>
                 <div>获取url中参数name的值：{utils.urlParam('name')}</div>
                 <div>15910678888：这{utils.isMobile('15910678888') ? '是':'不是'}手机号</div>
                 <div>11111111111：这{utils.isMobile('11111111111') ? '是':'不是'}手机号</div>
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




















