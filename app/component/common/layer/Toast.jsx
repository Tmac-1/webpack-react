/*
 * @Author: Tmac-1 
 * @Date: 2018-03-28 17:08:01 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-28 17:42:45
 */

 import React from 'react';

 class Toast extends React.Component{
      constructor(props){
          super(props);
          this.state ={
              show:false,
              text:''
          }
      }

      show(text){
         this.setState({show:true,text:text},
          () =>setTimeout( ()=> this.setState({show:false}) ,2000)
        )
      }

      render(){
          let {show,text} = this.state;
          return [
             show ?
             <div className='layer toast' key='toast'>{text}</div>
             :
             null
          ]
      }
 }


 export default Toast;