/*
 * @Author: Tmac-1 
 * @Date: 2018-03-30 10:47:01 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-30 11:52:11
 */
import Main from './Main';
import {Container} from 'flux/utils';
import Actions from './Actions';
import Store from './Store';

function getStores(){
    return [
        Store
    ]
}


function getState(){
    return {
        state:Store.getState(),
        add:Actions.add,
    }
}

export default Container.createFunctional(Main,getStores,getState);


