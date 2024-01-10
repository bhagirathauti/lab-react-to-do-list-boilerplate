import React, { Component } from 'react'
import "./Todo.css"
import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export default class Todo extends Component {
    constructor(){
        super()
        this.state={
            textValue:"",
            todoList:[]
        }
    }
  render() {
    let {textValue,todoList} = this.state

    let handleChange=(event)=>{
        this.setState({textValue:event.target.value})
    }

    let handleClick=()=>{
        this.setState({todoList:[...todoList,textValue]})
        console.log(todoList)
        this.setState({textValue:""})
    }

    let handleUpdate=(index)=>{
        let newValue = prompt("Please enter new Todo")
        let updatedArray =  todoList.map((el,i)=>{
            if(i==index){
                return newValue;
            }else{
                return el;
            }
        })
        this.setState({todoList:updatedArray})
    }

    let handleDelete = (index)=>{
        let afterDeleting = todoList.filter((_,i)=>i!==index)
        this.setState({todoList:afterDeleting})
    }
    return (
      <>
      <div className="MyTodoApp">
      <div className='addTodo'>
        <input type="text" value={textValue} onChange={handleChange} placeholder='Enter your Task' />
        <button onClick={handleClick}>ADD</button>
      </div>
      <div className="myList">
        {
            todoList.map((el,i)=>(
                <div className='myTask' key={i}>
                    <p>{el}</p>
                    <div className="buttons">
                    <button onClick={()=>handleUpdate(i)}><MdModeEdit/></button>
                    <button onClick={()=>handleDelete(i)}> <MdDeleteForever/> </button>
                    </div>
                </div>
            ))
        }
      </div>
      </div>
      </>
    )
  }
}
