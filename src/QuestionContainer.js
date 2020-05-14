
import { connect } from 'react-redux'
import QuestionInterface from './QuestionInterface copy';




let mapStateToProps=(state)=>{
    return{state:state}
};

let slider=(action,id)=>({type:'slide',action:action,id:id})
let question=(questionId,AnswerId)=>({type:'answer', questionId:questionId,AnswerId:AnswerId});


export let QuestionContainer=connect(mapStateToProps,{question,slider})(QuestionInterface);