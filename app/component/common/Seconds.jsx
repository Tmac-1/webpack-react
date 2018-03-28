import React from 'react';
import SecondsTop from './SecondsTop';
import SecondsBottom from './SecondsBottom';
import {ajax} from 'jquery';

class Seconds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0,one:1,isShow:true};
        console.log(123)
    }
     
    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        let state = this.state;
        // console.log(this.props)
        return (
            <div className="cont">
               <SecondsTop  {...this.props}/>
                {/* 三种传值得方法 */}
               {/* <SecondsBottom seconds={this.state.seconds} /> */}
               {/* <SecondsBottom seconds={state.seconds}/> */}
               <SecondsBottom {...state}/>
               <div ref="div1">1242</div> 
            
               <button onClick={()=>{ajax({
                     url:'http://data.xinxueshuo.cn/nsi-0.9/Class_Course_api?whereFrom=showInformation',
                    // url:'http://192.168.1.110:3000',
                    type:'get',
                    contentType:'application/x-www-form-urlencoded;charset/utf-8',
                    data: {type:1},
                    success(msg){
                      console.log(msg)
                    },
                    error(err){
                        console.log(err)
                        alert(123)
                    }
               } 
                 
               )}}>test</button>
            </div>
        );
    }
}

export default Seconds;