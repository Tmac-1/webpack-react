/*
 * @Author: Tmac-1 
 * @Date: 2018-03-26 23:15:40 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-28 18:16:13
 */

 import React from 'react';
 import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';

 import {BundleFun} from '../common/Bundle';
 import Dome1 from './demo1/Demo1.bundle';
 import Dome2 from './demo2/Demo2.bundle';
 import Dome3 from './demo3/Index';
 import Dome4 from './demo4/Index';
 import Dome5 from './demo5/Index';
 import Dome6 from './demo5/Index';
 import  '../../public/css/demo.pcss';


 const Index = ()=>
        <HashRouter>
             <div className='content'>
                    <div className='nav'>
                         <NavLink to='/Dome1' activeClassName='selected' exact>demo1</NavLink>
                         <NavLink to='/Dome2' activeClassName='selected' >demo2</NavLink>
                         <NavLink to='/Dome3' activeClassName='selected' >demo3</NavLink>
                         <NavLink to='/Dome4' activeClassName='selected' >demo4</NavLink>
                         <NavLink to='/Dome5' activeClassName='selected' >demo5</NavLink>
                         <NavLink to='/Dome6' activeClassName='selected' >demo6</NavLink>
                    </div>
                    <Route exact path='/' render={() => (<Redirect to='/Dome1'/>)} />
                    <Route path='/Dome1' component={
                        ()=>BundleFun(Dome1)
                        }/>
                    <Route path='/Dome2' component={
                        (props) =>
                            BundleFun(Dome2,props)
                        
                    }/>
                    <Route path='/Dome3' component={Dome3}/>
                    <Route path='/Dome4' component={Dome4}/>
                    <Route path='/Dome5' component={Dome5}/>
                    <Route path='/Dome6' component={Dome6}/>
             </div>
        </HashRouter>

 export default Index;               