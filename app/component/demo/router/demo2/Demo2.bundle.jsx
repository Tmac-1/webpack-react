/*
 * @Author: Tmac-1 
 * @Date: 2018-03-26 15:37:07 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-26 16:07:13
 */
import React from 'react';
import TodoList from './TodoList';
import {Route,NavLink,Redirect} from 'react-router-dom';

const Index = ({match}) =>
    {
        console.log(match)
        return(
        <div>
            <div className='nav'>
                <NavLink to={`${match.url}/demo2-1`} activeClassName='selected' exact>demo2-1</NavLink>
                {/* <NavLink to={`${match.url}/demo2-2`} activeClassName='selected' exact>demo2-2</NavLink> */}
                <NavLink to={{
                    pathname:`${match.url}/demo2-2`,
                    search:'?sort=this-sort',
                    hash:'#the-hash',
                    state:{fromDashboard:'222'}
                }} activeClassName='selected' exact> demo2-2 </NavLink>
            </div>
            <Route exact path={`${match.url}`} render={()=>(<Redirect to={`${match.url}/demo2-1`}/>)}/>
            <Route path={`${match.url}/demo2-1`} component={TodoList}/>
            <Route path={`${match.url}/demo2-2`} component={TodoList}/> 
        </div>
        )
 
    }
export default Index;







