import React from 'react';
import '../../public/css/index.pcss';
import Seconds from "../common/Seconds";

const Index = () => <Seconds title="首页"/>

// class Index extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { seconds : 0 }
//     }

//     tick(){
//         this.setState( prevState =>({
//             seconds:prevState.seconds + 1
//         }))
//     }

//     componentDidMount(){
//         this.interval = setInterval( ()=>{
//             this.tick()
//         },1000)
//     }

//     componentWillUnmount(){
//         clearInterval(this.interval)
//     }

//     render(){
//         return(
//             <div className="cont">
//                <div className="top">
//                    <i className="bd_logo1"></i>
//                    这是首页1,哈哈
//                </div>
//                 <div className="bottom">
//                       seconds：{this.state.seconds}
//                 </div>
              
//             </div>
//         )
//     }
// }

export default Index;




















