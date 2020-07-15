import React, {useState} from "react"
import {FaTimes} from "react-icons/fa"
import "../stylings/SetDimensionsForm.css";

const SetDimensionsForm = ({closeFormBtn}) => {

    const INITIAL_STATE = {
        height: "",
        width: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData)=> ({
            ...formData,
            [name]:value
        }));
    }

    return (
    <div id="set-dimensions-form">
        <div className="form-heading">
            <h4>Set Dimensions</h4>
            <FaTimes 
                className="close-icon" 
                onClick={closeFormBtn}
            />
        </div>
        <form>
            <div className="input-group">
                <label htmlFor="width">Width</label>
                <input
                    className="form-input"
                    type="number"
                    name="width"
                    id="width"
                    placeholder="No. Columns"
                    onChange={handleChange}
                    value={formData.width}
                    autoFocus
                />
            </div>
            <div className="input-group">
                <label htmlFor="height">Height</label>
                <input
                    className="form-input"
                    type="number"
                    name="height"
                    id="height"
                    placeholder="No. Rows"
                    onChange={handleChange}
                    value={formData.height}
                    autoFocus
                />
            </div>
            <div>
                <button className="submit-btn">Submit</button> 
            </div>
        </form>
    </div>
    );
};

export default SetDimensionsForm;