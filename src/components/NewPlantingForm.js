import React, {useState} from "react"
import "../stylings/NewPlantingForm.css"
import {FaTimes} from "react-icons/fa"


const NewPlantingForm = ({closePlantingForm}) => {

    const INITIAL_STATE = {
        crop: "",
        spacing: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData)=> ({
            ...formData,
            [name]:value
        }));
        console.log(formData.title)
    }

    return (
        <div class="new-planting-form">
            <div className="form-heading">
                <h4>New Planting</h4>
                <FaTimes 
                    className="close-icon" 
                    onClick={closePlantingForm}
                />
            </div>
            <form>
                <div className="input-group">
                    <label htmlFor="crop">Crop</label>
                    <input 
                        className="planting-form-input"
                        type="text"
                        name="crop"
                        id="crop" 
                        placeholder="EG: tomato"
                        onChange={handleChange}
                        value={formData.crop}
                        autoFocus
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="spacing">Spacing</label>
                    <div>
                        <input 
                            className="planting-form-input"
                            type="number"
                            name="spacing"
                            id="spacing" 
                            placeholder="#"
                            onChange={handleChange}
                            value={formData.spacing}
                        />
                        <label htmlFor="spacing">inches</label>
                    </div>
                </div>
                <div>
                    <button className="submit-btn">Submit</button>
                    
                </div>
            </form>
        </div>
    )
}

export default NewPlantingForm;