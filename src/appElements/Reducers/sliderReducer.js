


let initialState={
    index:1
}


let sliderReducer=(state=initialState,action,id)=>{
debugger
    switch(action.type){
        case 'slide':
           if( action.action==='next'&&state.index<=8972){
               return {...state,
                index:Number(state.index)+1}
           }
           else if(action.action==='previous'&&state.index>0){
               return {...state,
                index:Number(state.index)-1}
           }
       
        case 'numSelector':
            {return {...state,
            index:action.action}}
            
            default:return state
    }
   
        
}

export default sliderReducer