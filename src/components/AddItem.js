import React from "react"

export default function AddItem(props) {
    const [type, question, answer, onChangeQuestion, onChangeAnswer, onAdd] = 
    [props.type, props.question, props.answer, props.onChangeQuestion, props.onChangeAnswer, props.onAdd]
    
    return(
        <div className="add-item">
            <h1>
                Memorize things
            </h1> 
            <div className="break"></div>
            <input 
                type={type}
                value={question}
                name={question}
                onChange={onChangeQuestion}
                placeholder="Question"
                className="add-item--input"
                maxlength="100"
            ></input>
            <div className="break"> </div>
            <input 
                type={type}
                value={answer}
                name={answer}
                onChange={onChangeAnswer}
                placeholder="Answer"
                className="add-item--input"
                maxlength="100"
            ></input>
            <div className="break"> </div>
            <button type="button" onClick={onAdd} className="add-item--addQA">
                Add Q&A
            </button>

        </div>
    )
}
