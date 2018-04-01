/*
 * @Author: Tmac-1 
 * @Date: 2018-03-26 23:15:40 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-01 23:22:04
 */

 import React from 'react';
 import {HashRouter,Route,NavLink} from 'react-router-dom';

 import Router from './router/Index';
 import ReFast from './refast/Index';
 import Flux from './flux/Index';
 import ReFlux from './reflux/Index';
 import  '../../public/css/demo.pcss';


 const Index = ()=>
        <HashRouter>
             <div className='content'>
                    <div className='nav'>
                         <NavLink to='/Router' activeClassName='selected' >router</NavLink>
                         <NavLink to='/Refast' activeClassName='selected' >refast</NavLink>
                         <NavLink to='/Flux'   activeClassName='selected'>Flux</NavLink>
                         <NavLink to='/ReFlux'   activeClassName='selected'>ReFlux</NavLink>
                    </div>
                     <br/>
                
                    <Route path='/Router' component={Router}/>
                    <Route path='/ReFast' component={ReFast}/>
                    <Route path='/Flux'   component={Flux}  />
                    <Route path='/ReFlux'   component={ReFlux}  />
             </div>
        </HashRouter>

 export default Index;               