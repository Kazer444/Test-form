import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import c from './QuestionInterfeys.module.css'


let QuestionInterface = (props) => {

const [state, setstate] = useState('')

    let a = props.state.testBank.main.map(d =>


        <Formik initialValues={{
            general: d.General,
            id: props.state.slider.index,
            questionId: d.id,
            question: d.q,
            answer1: d.answer[0].text,
            answer2: d.answer[1].text,
            answer3: d.answer[2].text,
            answer4: d.answer[3].text,
            correct: d.Correct,
            result: d.result,
        }}

            onSubmit={(fields) => {
               
                return props.question(d.id, fields.answered),
                    console.log(d.id, fields.answered)
            }}
        >

            {props => {
                return <div>

                    <Form className={c.form}  >

                        {/* <Field as="select" name="general" id={d.id} className={c.general} onChange={(e) => { return console.log(e.target.value) }}>
                            <option value="1" >Foundations of Internal Auditing</option>
                            <option value="2">Independence, Objectivity, Proficiency, Care, and Quality</option>
                            <option value="3">Governance</option>
                            <option value="4">Risk Management</option>
                            <option value="5">Controls: Types and Frameworks</option>
                            <option value="6">Controls: Application</option>
                            <option value="7">Fraud Risks and Controls</option>
                        </Field>
                        <div>
                            <Field as="select" name="topicName" id={d.id} className={c.topicName}>
                                <option checked={props.values.answered === 1} value={d.general}>Applicable Guidance</option>
                                <option checked={props.values.answered === 2} value="two">Codes of Ethical Conduct for Professionals</option>
                                <option checked={props.values.answered === 3} value="three">Internal Audit Ethics -- Introduction and Principles</option>
                                <option checked={props.values.answered === 4} value="four">Internal Audit Ethics -- Integrity</option>
                                <option checked={props.values.answered === 5} value="four">Internal Audit Ethics -- Objectivity</option>
                                <option checked={props.values.answered === 6} value="four">Internal Audit Ethics -- Confidentiality</option>
                                <option checked={props.values.answered === 7} value="four">Internal Audit Ethics -- Competency</option>
                                <option checked={props.values.answered === 8} value="four">Internal Audit Charter</option>
                            </Field>
                        </div> */}

                    <div className={c.question}>{d.id}.{d.q}</div>

                        <div className={c.answer}>
                            <Field
                                id={props.values.answered}
                                type='radio'
                                name='answer'
                                checked={props.values.answered === 1}
                                onChange={() => props.setFieldValue("answered", 1)}
                            />
                            <label htmlFor='answer1'>{d.answer[0].text}</label>
                        </div>

                        <div className={c.answer}>
                            <Field
                                id={props.values.answered}
                                type='radio'
                                name='answer'
                                checked={props.values.answered === 2}
                                onChange={() => props.setFieldValue("answered", 2)}
                            />
                            <label htmlFor='answer2'>{d.answer[1].text}</label>
                        </div>

                        <div className={c.answer}>
                            <Field
                                id={props.values.answered}
                                type='radio'
                                name='answer'
                                checked={props.values.answered === 3}
                                onChange={() => props.setFieldValue("answered", 3)} />
                            <label htmlFor='answer3'>{d.answer[2].text}</label>
                        </div>

                        <div className={c.answer}>
                            <Field
                                id={props.values.answered}
                                type='radio'
                                name='answer'
                                checked={props.values.answered === 4}
                                onChange={() => props.setFieldValue("answered", 4)} />
                            <label htmlFor='answer4'>{d.answer[3].text}</label>
                        </div>

                        <div>
                            <button className={c.select} id={d.id} type='submit' >Select</button>
                        </div>
                        {d.AnswerVisible ? <div key={d.id} className={d.Result ? c.true : c.wrong}>
                            {d.Result ? <div>Правильно, умничка, гений, вперееееед, порвем этот экзамен!!!</div> : <div>Dubikseeeen buba,yaxşı fikirləş</div>}
                        </div> : null}


                    </Form></div>
            }
            }
        </Formik>)

    return <div>
        <div>{a[props.state.slider.index-1]}</div>
        <div>
            <button className={c.previous} onClick={() => { return props.slider('previous') }} >Previous </button>
            <button className={c.next} onClick={() => { return props.slider('next') }}>Next </button>
           <div><input  type="number" placeholder='question №' onChange={e=>setstate(e.currentTarget.value)}/></div>
           <div><button onClick={()=>{return props.numSelector(state)}}>Select</button></div> 
        </div>

    </div>

}

export default QuestionInterface