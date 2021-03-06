import './App.css';
import React from "react"
import {v4 as uuidv4} from "uuid"

import List from "./components/List"
import AddItem from "./components/AddItem"

export default function App() {
  
  const [list, setList] = React.useState(JSON.parse(localStorage.getItem("list")))
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

  React.useEffect(()=>{
    localStorage.setItem("list", JSON.stringify(list))
  },[list])

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
        id: uuidv4(),
        answer: answer, 
        showQuestion: false,
        showAnswer: false,
        question: question,
      }] )

      setList(newList)
  
      setQuestion('')
      setAnswer('')
    }
  }

  function handleClear() {
    localStorage.setItem("list", JSON.stringify([]))
    setList(JSON.parse(localStorage.getItem("list")))
  }

  function handleDelete(id) {
    const newList = list.filter((item) => item.id !== id)

    setList(newList)
  }

  function handleShuffle() {
    let newList = shuffle(list) 
    localStorage.setItem("list", JSON.stringify(newList))
    setList(JSON.parse(localStorage.getItem("list")))
    
  }

  function shuffle(array) {
    let currentIndex = array.length, randomIndex

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      
      [array[currentIndex], array[randomIndex]] = 
        [array[randomIndex], array[currentIndex]]
    }
    return array
  }

  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  shuffle(arr)

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
          handleClear={handleClear}
          handleShuffle={handleShuffle}
        />
      </div>
      <div className="bottom-margin"></div>
    </div>

  );
}

