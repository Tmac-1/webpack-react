/*
 * @Author: Tmac-1 
 * @Date: 2018-03-23 00:36:27 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-04-01 16:24:16
 */
import React from 'react';

   
const LiCont = ({data,list,handleItemEdit,type}) =>
     <li>
         {data.title}
         <button onClick= {()=>handleItemEdit(data.id ,data.status ===1 ? 0 : 1)}
              className = {data.status ===1 ? 'del' : 'recovery'}
         >
                   {data.status ===1 ? '删除' :'恢复'}
         </button>
     </li>
  
const List = props =>
     <div className='list'>
         {
             props.list.map(
                 data =>[
                    props.type ===0 ?
                    <LiCont  data={data} {...props} key={data.id}/>
                    :
                    props.type ===1 && data.status ===1 ?
                    <LiCont data={data} {...props} key={data.id}/>
                    :
                    props.type ===2 && data.status ===0 ?
                    <LiCont data={data} {...props} key={data.id}/>
                    :
                    null
                 ]
             )
         }
     </div>

export default List ;



