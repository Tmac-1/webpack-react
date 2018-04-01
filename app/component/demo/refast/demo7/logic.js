// Refast 使用logic.js 中的defaults 方法的返回值初始化组件的state
import apiRequestAsync from '../../../public/js/apiRequestAsync';

export default{
    // defaults的参数 props是组件初始化时的props
    // defaults的函数返回的对象是会用来初始化组件的 state
    defaults(props){
        return{
            list:[],
            isLoading:true,
            isEmpty:false
        }
    },

    handleAdd({getState,setState},title) {
        if(title){
            let list = getState().list;
            list.push({id: list.length + 1, title: title, status: 1});
            setState({
                list:list,
                step:getState().step + 1,
                back:false
            })
        }else{
            alert('不能为空')
        }
    },
    
    handleItemEdit({getState,setState}, someState) {
        let {id,status} = someState, list = getState().list;
        list.find(data =>data.id ===id).status = status;
        setState({
            list:list,
            step:getState().step + 1,
            back:false
        })
    },

    async getTodoList({setState,fn}){
        let todoList = {}
        try {
            
            todoList =  await apiRequestAsync.post('todoList');
            setTimeout(()=>{
                // todoList.list = []  //测试空数据
                if(todoList.list.length > 0){
                    fn.Toast.show('操作成功')
                    setState({
                        isLoading:false,
                        list:todoList.list  
                    })
                }else{
                    fn.Toast.show('暂无数据');
                    setState({
                        isLoading:false,
                        isEmpty:true
                    })
                }
            },2000)
            
        }catch(error){
            fn.Toast.show(error)
        }
        
         
    }
}
