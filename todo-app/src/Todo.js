import React from "react";

function Todo({ id, handleRemove, task }) {
    const remove = () => handleRemove(id);
    
    return (
        <div>
            <div>
                {task}
            </div>
            <button onClick={remove}>X</button>
        </div> 
    );
}
  
  export default Todo;
  