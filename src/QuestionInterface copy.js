import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import c from './QuestionInterfeys.module.css'


let QuestionInterface = (props) => {



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
                debugger
                return props.question(d.id, fields.answered),
                    console.log(d.id, fields.answered)


            }}
        >

            {props => {
                return <div>




                    <Form className={c.form}  >
                       
                        <Field as="select" name="general" id={d.id} className={c.general} onChange={()=>{return console.log(props)}} >
                            <option  value={d.general} >Foundations of Internal Auditing</option>
                            <option  value="two">Independence, Objectivity, Proficiency, Care, and Quality</option>
                            <option value="three">Governance</option>
                            <option value="four">Risk Management</option>
                            <option value="four">Controls: Types and Frameworks</option>
                            <option value="four">Controls: Application</option>
                            <option value="four">Fraud Risks and Controls</option>
                        </Field>
                       
                        <div>
                            <Field as="select" name="topicName" id={d.id} className={c.topicName}>
                                <option value={d.general}>Applicable Guidance</option>
                                <option value="two">Codes of Ethical Conduct for Professionals</option>
                                <option value="three">Internal Audit Ethics -- Introduction and Principles</option>
                                <option value="four">Internal Audit Ethics -- Integrity</option>
                                <option value="four">Internal Audit Ethics -- Objectivity</option>
                                <option value="four">Internal Audit Ethics -- Confidentiality</option>
                                <option value="four">Internal Audit Ethics -- Competency</option>
                                <option value="four">Internal Audit Charter</option>
                            </Field>
                        </div>
                       
                        <div className={c.question}>{d.q}</div>

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
        <div>{a[props.state.slider.index]}</div>
        <div>
            <button className={c.previous} onClick={() => { return props.slider('previous') }} >Previous </button>
            <button className={c.next} onClick={() => { return props.slider('next') }}>Next </button>
        </div>

    </div>

}

export default QuestionInterface