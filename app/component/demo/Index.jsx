/*
 * @Author: Tmac-1 
 * @Date: 2018-03-26 23:15:40 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-27 01:00:36
 */

 import React from 'react';
 import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
 import Dome1 from '../demo/demo1/Index';
 import Dome2 from '../demo/demo2/Index';
 import  '../../public/css/demo.pcss';

 const Index = ()=>
        <HashRouter>
             <div className='content'>
                    <div className='nav'>
                         <NavLink to='/Dome1' activeClassName='selected' exact>demo1</NavLink>
                         <NavLink to='/Dome2' activeClassName='selected' >demo2</NavLink>
                    </div>
                    <Route exact path='/' render={() => (<Redirect to='/Dome1'/>)} />
                    <Route path='/Dome1' component={Dome1}/>
                    <Route path='/Dome2' component={Dome2}/>
             </div>
        </HashRouter>

 export default Index;               