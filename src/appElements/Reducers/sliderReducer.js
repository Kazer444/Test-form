


let initialState={
    index:0
}


let sliderReducer=(state=initialState,action,id)=>{

    switch(action.type){
        case 'slide':
           if( action.action==='next'&&state.index<=8972){
               return {...state,
                index:state.index+1}
           }
           else if(action.action==='previous'&&state.index>0){
               return {...state,
                index:state.index-1}
           }
           else if (action.action==='selected') 
           return {...state,index:id}
        default:return state
    }
}

export default sliderReducer