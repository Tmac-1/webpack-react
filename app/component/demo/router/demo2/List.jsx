/*
 * @Author: Tmac-1 
 * @Date: 2018-03-23 00:36:27 
 * @Last Modified by: Tmac-1
 * @Last Modified time: 2018-03-24 21:48:16
 */
import React from 'react';


// const List = (props) =>{
//     const {list,handleItemDel,type,handleItemRecovery}=props;
//     return(
//         <div className='list'>
//         {
//             list.map(data => [
//                 type === 0 ?
//                      <li key={data.id}>
//                           {data.title}
//                          {
//                             data.status === 1 ?
//                              <div>
//                                    <button onClick={()=>handleItemDel(data.id,0)} className='del'>删除</button>
//                                    <button>test</button>
//                              </div>
//                               :
//                               <button onClick={()=>handleItemRecovery(data.id,1)} className='recovery'>恢复</button>
//                          }     
//                            </li>
                         
//                      :
//                 type === 1 && data.status === 1 ?
//                 <li key={data.id}>
//                           {data.title}
//                           <button onClick={()=>handleItemDel(data.id,0)} className='del'>删除</button>
//                 </li>
//                     :
//                 type === 2 && data.status === 0 ?
//                 <li key={data.id}>
//                          {data.title}
//                          <button onClick={()=>handleItemRecovery(data.id,1)} className='recovery'>恢复</button>
//                 </li>   
//                     :
//                  null                   
//             ])
           
//         }
//     </div>

//     )
// }
   
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



