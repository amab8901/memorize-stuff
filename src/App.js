import './App.css';
import React from "react"
import {v4 as uuidv4} from "uuid"
import initialList from "./dataLists/initialList"

import List from "./components/List"
import AddItem from "./components/AddItem"

export default function App() {
  
  const [list, setList] = React.useState(initialList)
  const [question, setQuestion] = React.useState('')
  const [answer, setAnswer] = React.useState('')

  function handleChangeQuestion(event) {
    const {value} = event.target
    if(
      value === "" ||
      value.search(/^[a-z0-9A-Z?.,!;%' +-]+$/)!==-1
    ){
      setQuestion(value)
    }
  }

  function handleChangeAnswer(event){
    const {value} = event.target
    if(
      value === "" ||
      value.search(/^[a-z0-9A-Z?.,!;%' +-]+$/)!==-1
      ){
      setAnswer(value)
      }
  }

  function handleAdd() {
    if(question&&answer){
      const newList = list.concat( [{   
        answer: answer, 
        id: uuidv4(),
        showQuestion: false,
        showAnswer: false,
        question: question,
      }] )

      setList(newList)
  
      setQuestion('')
      setAnswer('')
    }
  }

  function handleDelete(id) {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }

  function toggleShowQuestion(id) {
    setList(list.map((item) => ({
      ...item,
      showQuestion: item.id === id ? !item.showQuestion : item.showQuestion
    })))
  }

  function toggleShowAnswer(id) {
    setList(list.map((item) => ({
      ...item,
      showAnswer: item.id === id ? !item.showAnswer : item.showAnswer,
    })))
  }

  return (
    <div>
      <div className="app">
        <AddItem 
          type="text"
          question={question}
          answer={answer}
          name="input1"
          onChangeQuestion={handleChangeQuestion}
          onChangeAnswer={handleChangeAnswer}
          onAdd={handleAdd}
          value={question}
        />
        <List 
          list={list}
          handleDelete={handleDelete}
          toggleShowQuestion={toggleShowQuestion}
          toggleShowAnswer={toggleShowAnswer}
        />
      </div>
      <div className="bottom-margin"></div>
    </div>

  );
}

