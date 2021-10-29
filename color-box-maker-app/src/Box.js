import React from "react";

function Box({ id, handleRemove, backgroundColor="red", width=5, height=5 }) {
    
    return (
        <div>
            <div
                style={{
                    backgroundColor: backgroundColor,
                    width: `${width}px`,
                    height: `${height}px`
                }} 
            />
            <button onClick={() => handleRemove(id)} data-testid="add-button">X</button>
        </div> 
    );
}
  
  export default Box;
  