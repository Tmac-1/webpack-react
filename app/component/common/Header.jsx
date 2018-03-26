/*
 * @Author: Tmac-1 
 * @Date: 2018-03-26 23:18:32 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-27 00:21:39
 */
import React from 'react';
import '../../public/css/common.pcss';

class Header extends React.Component{
    constructor(props){
       super(props);
       this.state={};
       this.pathname = window.location.pathname;
    }

    handleNavClassName(name,index){
        if( this.pathname.indexOf(name+'.html') !== -1){
            return 'selected'
        }else{
            return null
        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <div className='header'>
                <i className='ico-header-logo'></i>
                <div className='nav'>
                    <a href="/index.html" className={this.handleNavClassName('index',1)}>首页</a>
                    <a href="/shop.html" className={this.handleNavClassName('shop',1)}>商城</a>
                    <a href="/demo.html" className={this.handleNavClassName('demo',1)}>demo演示</a>
                </div>
            </div>
        )
    }

}

export default Header;






