import axios from 'axios';
import React, {useState} from 'react'
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function Addtodo({value, setValue}) {
    // const [value,setValue] = useState({
    //     task:"",
    //     description:""
    // })
const [submitted, setSubmitted] = useState(false);
var data = {
    todotitle : value.task,
    description: value.description
};
console.log(data);

const addTask = async() => {
    // updates data
    const id = value.id
    if(value?.update){
        const response = await axios.put("http://localhost:8000/todo/"+id,data);
        if(response.data.sucess===true){
            
        }
    }
    const response = await axios.post("http://localhost:8000/todo/",data);
    if(response.data.sucess===true) {
        setSubmitted(true);
        window.location.reload(false);
    }
    else {
        alert("error");
    }
}

const listOfItems = async(e) => {
    addTask();
    
};

return (
    <div className="todo-container my-3">
            <h3>Add a Todo</h3>
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Todo Title</Form.Label>
                <Form.Control type="text" placeholder="Add a Item" name="task" 
                value={value?.task} 
                onChange={(e)=>setValue({...value,task:e.target.value})} 
                />
                <Form.Text className="text-muted" ></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                 <Form.Label>Todo Description</Form.Label>
                 <Form.Control type="text" name="description"
                  value= {value?.description} 
                  placeholder="Add description about your item......" 
                onChange={(e)=>setValue({...value,description:e.target.value})} 
                  />
            </Form.Group>
            
                <Button className="todo-btn" variant="success" type="submit" 
                onClick={listOfItems}> 
                {/* button changes after clicking edit buttom */}
                {value?.update? "Update Todo":"Add Todo"} 
                </Button>
        </Form>
        <div className="todoheading-container">
                 <h1 className="todolist-heading">Todo List</h1>
            <div className="upperline"><hr></hr></div>
        </div>
        
    </div>
)}

export default Addtodo
