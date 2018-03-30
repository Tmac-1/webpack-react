/*
 * @Author: Tmac-1 
 * @Date: 2018-03-30 10:52:26 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-30 11:03:08
 */

 import React from 'react';
 import {HashRouter,Route,NavLink,Redirect} from 'react-router-dom';
 import Flux1 from './flux1/Index';

 const Index =({match}) =>
    <HashRouter>
        <div>
            <div className='nav'>
                <NavLink to='/Flux/Flux1' activeClassName='selected'>Flux1</NavLink>
            </div>

            <Route exact path={`${match.url}`}
                   render={()=>( <Redirect to={`${match.url}/Flux1`}/>)}
            />
            <Route path={`${match.url}/Flux1`} component={Flux1}/>
        </div>
    </HashRouter>


export default Index;
