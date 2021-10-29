import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
// import {v4 as uuid} from "uuid";

function BoxList() {
    const [boxes, setBoxes] = useState([]);

    const addBox = box => {
        // let newBox = {...box, id: uuid()};
        setBoxes(boxes => [...boxes, box]);
    };

    const removeBox = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    };

    const allBoxes = boxes.map(box => (
        <Box 
            key = {box.id}
            id = {box.id}
            backgroundColor = {box.backgroundColor}
            width = {box.width}
            height = {box.height}
            handleRemove = {removeBox}
        />
    ));

    return (
        <div className="Boxlist">
            <NewBoxForm createBox={addBox}/>
            {allBoxes}
        </div>
    );
}

export default BoxList;