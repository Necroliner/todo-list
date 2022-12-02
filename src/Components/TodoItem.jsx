import { useState } from "react";
import "./TodoItem.css";

function TodoItem({id, title, completed, deleteTodo, editing, toddgleEdit, editTodoTitle}) {

    const [editTitle, setEditTitle] = useState('');

    function handleEdit(){
        toddgleEdit(id); 
        if(editing){
            editTodoTitle(id, editTitle);
        }
        
    }

    return (
        <div className="todoItem" id={id}>
            <input type="checkbox" defaultChecked={completed}/>
            {editing ? <input type="text" onChange={(e) => setEditTitle(e.target.value)} defaultValue={title}/> : <p>{title}</p>}
            <div className="buttons">  
                <div className="editButton" onClick={handleEdit} >{editing ? '✔' : '🖊' }</div>
                <div className="deleteButton" onClick={(e) => deleteTodo(id)}>✖</div>  
            </div>
        </div>
    );
}

export default TodoItem;