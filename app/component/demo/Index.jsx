/*
 * @Author: Tmac-1 
 * @Date: 2018-03-26 23:15:40 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-30 11:57:43
 */

 import React from 'react';
 import {HashRouter,Route,NavLink} from 'react-router-dom';

 import Router from './router/Index';
 import ReFast from './refast/Index';
 import Flux from './flux/Index';
 import  '../../public/css/demo.pcss';


 const Index = ()=>
        <HashRouter>
             <div className='content'>
                    <div className='nav'>
                         <NavLink to='/Router' activeClassName='selected' >router</NavLink>
                         <NavLink to='/Refast' activeClassName='selected' >refast</NavLink>
                         <NavLink to='/Flux'   activeClassName='selected'>Flux</NavLink>
                    </div>
                     <br/>
                
                    <Route path='/Router' component={Router}/>
                    <Route path='/ReFast' component={ReFast}/>
                    <Route path='/Flux'   component={Flux}  />
             </div>
        </HashRouter>

 export default Index;               