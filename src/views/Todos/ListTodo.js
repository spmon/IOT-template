import React from "react";
import "./ListTodo.scss"
import AddTodo from "./AddTodo";
import {  toast } from 'react-toastify';
import Color from "../HOC/Color";

class ListTodo extends React.Component{
    state={
        listTodos:[
            {id:'todo1',title:'Doing homework'},
            {id:'todo2',title:'make video'},
            {id:'todo3',title:'fig code'}
        ],
        editTodo:{}

        
    }
    addNewTodo=(todo)=>{
        this.setState({
            listTodos:[...this.state.listTodos,todo]
        })
        toast.success("Wow so easy!");
    }
    handleDeleteTodo=(todo)=>{
        let currentTodos=this.state.listTodos;
        currentTodos=currentTodos.filter(item=>item.id!==todo.id)
        this.setState({
            listTodos:currentTodos
        })
        toast.success('Địt mẹ xóa rồi!')
    }
    HandleEditTodo=(todo)=>{
        let{editTodo,listTodos}=this.state;
        let isEmptyObj=Object.keys(editTodo).length===0;
        
        if(isEmptyObj===false && editTodo.id===todo.id){
            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex(item=>item.id === todo.id);
            
            //Update object's name property.
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos:listTodosCopy,
                editTodo:{}
            })
            toast.success("sua duoc roi")
            return;
        }
      
            this.setState({
                editTodo:todo
                
            })
        
        
    }
    HandleonChangeEditTodo=(event)=>{
        let editTodoCopy={...this.state.editTodo};
        editTodoCopy.title=event.target.value
        this.setState({
            editTodo:editTodoCopy
        })
    }
    render(){
        let {listTodos,editTodo}=this.state;
        let isEmptyObj=Object.keys(editTodo).length===0;
        console.log('check empty object',isEmptyObj)
        return(
            <>
            <p>
                                simple Todo Apps with reactjs
                            </p>
        <div className="list-todo-container"> 
            <AddTodo
            addNewTodo={this.addNewTodo}/>
            <div className="list-todo-content">
                {listTodos && listTodos.length>0 &&
                    listTodos.map((item,index) =>{ 
                        return(
                            <>
                            
                                <div className="todo-child" key={item.id}>
                                {isEmptyObj===true?
                                <span>{index+1}-{item.title}   </span>
                                :<>
                                {editTodo.id===item.id ?
                                <span>
                                {index+1}-<input 
                                value={editTodo.title}
                                    onChange={(event)=>this.HandleonChangeEditTodo(event)}
                                />
                                 </span>
                                 :
                                 <span>
                                    {index+1}-{item.title}
                                 </span>
                    }
                                 </>
                                
                                 }
                               
                                <button className="edit"
                                onClick={()=>this.HandleEditTodo(item)}
                                >
                                    {isEmptyObj===false && editTodo.id===item.id?
                                    'Save':'Edit'}
                                    </button>
                                 <button className="delete"
                                    onClick={()=>this.handleDeleteTodo(item)
                                        
                                    }
                                  >delete</button>
                                </div>
                                </>
                        )
                    })
                }
                
                
                
                
            </div>
        </div>
        </>
        )
    }
}
export default Color(ListTodo);