
import { connect } from 'react-redux'
import QuestionInterface from './QuestionInterface copy';




let mapStateToProps=(state)=>{
    return{state:state}
};

let slider=(action,id)=>({type:'slide',action:action,id:id})
let question=(questionId,AnswerId)=>({type:'answer', questionId:questionId,AnswerId:AnswerId})
let general=(action)=>({type:'general', action:action})
let numSelector=(action)=>({type:'numSelector',action:action})


export let QuestionContainer=connect(mapStateToProps,{question,slider,general,numSelector})(QuestionInterface);