/*
 * @Author: Tmac-1 
 * @Date: 2018-04-02 23:29:08 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-03 00:28:34
 */

 import React from 'react';
 import {createStore} from 'redux';
 import {Provider,connect} from 'react-redux';
 import reducer from './reducer';

 const store = createStore(reducer)

 class Index extends React.Component{
     constructor(props){
         super(props);
         this.state ={}
     }

     conponentDidMount(){

     }

     render(){
         return(
             <div>
                 {this.props.storeState.num}
                 <button onClick={()=> this.props.dispatch({type:'ADD',num:1})}>+</button>
             </div>
         )
     }
 }

 const mapStateToProps = state => ({storeState:state})
 const Main = connect(
     mapStateToProps
 )(Index)

 export default ()=>
   <Provider store={store}>
       <Main/>
   </Provider>   
 ;