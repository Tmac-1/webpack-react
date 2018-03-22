import React from 'react';
import SecondsTop from './SecondsTop';
import SecondsBottom from './SecondsBottom';

class Seconds extends React.Component {
    constructor(props) {
        super(props);
        this.state = {seconds: 0,one:1,};
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
        // console.log(state)
        // console.log(this.props)
        return (
            <div className="cont">
               <SecondsTop  {...this.props}/>
                {/* 三种传值得方法 */}
               <SecondsBottom seconds={this.state.seconds} />
               <SecondsBottom seconds={state.seconds}/>
               <SecondsBottom {...state}/>
              
            </div>
        );
    }
}

export default Seconds;