import React from 'react'



 let QuestionInterface = (props) => {
    let questionMap = props.state.testBank.main.map(d =>
        <div>
  
            <div>Question №{d.id}</div>
            <div>{d.q}</div>
            <div><input type='radio'  name={d.id} onChange={()=>{return props.question(d.id, d.answer[0].id)}} />{d.answer[0].id}{d.answer[0].A}</div>
            <div><input type='radio'  name={d.id} onChange={()=>{return props.question(d.id, d.answer[1].id)}} />{d.answer[1].id}{d.answer[1].B}</div>
            <div><input type='radio'  name={d.id} onChange={()=>{return props.question(d.id, d.answer[2].id)}} />{d.answer[2].id}{d.answer[2].C}</div>
            <div><input type='radio'  name={d.id} onChange={()=>{return props.question(d.id, d.answer[3].id)}} />{d.answer[3].id}{d.answer[3].D}</div>
            <div >{d.Result ? 'true' : 'false'}</div>
        </div>)


    return (
        <div>
            {questionMap}
        </div>

    )
}



// export let QuestionInterface = (props) => {

//     let questionMap = props.state.testBank.main.map(d =>
//         <div>
//             <div>Question №{d.id}</div>
//             <div>{d.q}</div>
//             <div><input type='radio'  name={d.id} onChange={()=>{return props.question(d.id, d.answer[0].id)}} />{d.answer[0].id}{d.answer[0].A}</div>
//             <div><input type='radio'  name={d.id} onChange={()=>{return props.question(d.id, d.answer[1].id)}} />{d.answer[1].id}{d.answer[1].B}</div>
//             <div><input type='radio'  name={d.id} onChange={()=>{return props.question(d.id, d.answer[2].id)}} />{d.answer[2].id}{d.answer[2].C}</div>
//             <div><input type='radio'  name={d.id} onChange={()=>{return props.question(d.id, d.answer[3].id)}} />{d.answer[3].id}{d.answer[3].D}</div>
//             <input type='submit' value='submit'/>
//             <div >{d.Result ? 'true' : 'false'}</div>
//         </div>)


//     return (
//         <div>
//             {questionMap}
//         </div>

//     )
// }

