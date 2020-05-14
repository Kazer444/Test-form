import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import c from './QuestionInterfeys.module.css'


let QuestionInterface = (props) => {
debugger


    let a = props.state.testBank.main.map(d =>


        <Formik initialValues={{
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

                return <Form  >
                    <div>{d.id}.{d.q}</div>

                    <div>
                        <Field
                            id={props.values.answered}
                            type='radio'
                            name='answer'
                            checked={props.values.answered === 1}
                            onChange={() => props.setFieldValue("answered", 1)}
                        />
                        <label htmlFor='answer1'>{d.answer[0].text}</label>
                    </div>

                    <div>
                        <Field
                            id={props.values.answered}
                            type='radio'
                            name='answer'
                            checked={props.values.answered === 2}
                            onChange={() => props.setFieldValue("answered", 2)}
                        />
                        <label htmlFor='answer2'>{d.answer[1].text}</label>
                    </div>

                    <div>
                        <Field
                            id={props.values.answered}
                            type='radio'
                            name='answer'
                            checked={props.values.answered === 3}
                            onChange={() => props.setFieldValue("answered", 3)} />
                        <label htmlFor='answer3'>{d.answer[2].text}</label>
                    </div>

                    <div>
                        <Field
                            id={props.values.answered}
                            type='radio'
                            name='answer'
                            checked={props.values.answered === 4}
                            onChange={() => props.setFieldValue("answered", 4)} />
                        <label htmlFor='answer4'>{d.answer[3].text}</label>
                    </div>

                    <div>
                        <button id={d.id} type='submit' >Select</button>
                    </div>
                    {d.AnswerVisible ? <div key={d.id} className={d.Result ? c.true : c.wrong}>
            {d.Result ? <div>true</div>  : <div>false{d.explanation}</div>}
                    </div> : null}


                </Form>
            }
            }
        </Formik>)

    return <div>
        <div>{a[props.state.slider.index]}</div>
        <div>
            <button onClick={() => { return props.slider('previous') }} >Previous </button>
            <button onClick={() => { return props.slider('next') }}>Next </button>
        </div>  
        {/* <input id='a' type='text' placeholder='Select the question'/>
        <button onClick={() => { return props.slider('selected',) }} >Select </button> */}
    </div>

}

export default QuestionInterface