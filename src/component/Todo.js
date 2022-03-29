import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Button } from 'react-bootstrap';



const Todo=({setValue}) =>{
    const [todoList, setTodoList] = useState([])
    const [hitapi, setHitapi] = useState(true);
    const[edit, setEdited] = useState("");
    
    
    const fetchData = async()=>{
        const response = await axios.get("http://localhost:8000/todo")
       
          if(response.data.sucess===true){
              setTodoList(response.data.data)
           }else if(todoList&&todoList){
               setHitapi(
                   hitapi.map((todo)=>{
                       if(todo === edit){//load main page after update button clicked
                           return{...todo,name:todoList}
                       }
                       return todo;
                   })
               )


           }
           else{
            alert("error")
    }
}

useEffect(() => {
        if(hitapi){
            fetchData()
        }
        setHitapi(false)
    }, );



const deleteItem = async(id) => {
     const response = await axios.delete(`http://localhost:8000/todo/${id}`);

     if(response.data.sucess === true) {
         alert("deleted bro");
         window.location.reload(false);
        }
    }

const editItem = (id) =>{
    let newEditItem = todoList.find((todo) => {
         return todo.id === id
    });
    console.log(newEditItem)
    setTodoList(newEditItem.name); //naya input field ma purauxa
    // pre fill
    setValue({
        task: newEditItem.todotitle,
        description: newEditItem.description,
        id:id,
        update:true
    })
    setEdited(id);
}

return (
        <div className="todo-list">
            {todoList&&todoList.map((todo)=>
                <div className="todo-cont">
                    <div className="text-cont">
                        <div className="title">
                               <h1 className="list">{todo.todotitle}</h1>
                        </div>
                        <div className="descript"> 
                               <h1 className="des">{todo.description}</h1>
                        </div>
                    </div>
                    <div className="button-cont">
                        <div className="edit">
                               <Button className="edit-btn" variant="primary" type="submit" name="update" 
                               onClick={()=> editItem(todo.id)}
                               >Edit</Button>
                        </div>
                    
                        <div className="del">
                               <Button className="delete-btn" variant="danger" type="submit" name="delete" onClick={()=>deleteItem(todo.id)}>Delete</Button>
                        </div>
                    </div> 
                    <div className="list-line">
                         <hr></hr>
                    </div>
                </div>
                
            )}
        </div>
    )
}

export default Todo
