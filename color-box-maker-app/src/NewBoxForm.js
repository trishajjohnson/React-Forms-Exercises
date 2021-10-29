import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const NewBoxForm = ({createBox}) => {
    const INITIAL_STATE = {height: "", width: "", backgroundColor: ""};
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBox( {...formData, id: uuid() });
        setFormData(INITIAL_STATE);
    }

    return (
        <form>
            <label htmlFor="height">Box Height</label>
            <input 
              id="height" 
              type="text" 
              name="height"
              value={formData.height} 
              onChange={handleChange} 
            />

            <label htmlFor="width">Box Width</label>
            <input 
              id="width" 
              type="text" 
              name="width"
              value={formData.width} 
              onChange={handleChange} 
            />

            <label htmlFor="backgroundColor">Box Color</label>
            <input 
              id="backgroundColor" 
              type="text" 
              name="backgroundColor"
              value={formData.backgroundColor} 
              onChange={handleChange} 
            />

            <button onClick={handleSubmit}>Add Box</button>
        </form>
    );
}

export default NewBoxForm;