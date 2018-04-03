/*
 * @Author: Tmac-1 
 * @Date: 2018-04-02 23:15:42 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-02 23:25:10
 */

 import React from 'react';
 import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
 import Redux1 from './redux1/Index';

 const Index =({match})  =>
     <HashRouter>
           <div>
               <div className='nav'>
                   <NavLink to='/Redux/Redux1' activeClassName='selected'>Redux1</NavLink>
               </div>
               <Route exact path={`${match.url}`}
                   render={()=>( <Redirect to={`${match.url}/Redux1`}/>)}
               />
               <Route path={`${match.url}/Redux1`} component={Redux1}/>
           </div>
     </HashRouter>

 export default Index;    