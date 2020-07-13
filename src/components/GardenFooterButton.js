import React from "react";
import "../stylings/GardenFooterButton.css"
import { BsGrid3X3 } from 'react-icons/bs';
import {FaArrowsAlt} from "react-icons/fa"
import {GiCarnivorousPlant} from "react-icons/gi"

const GardenFooterButton = ({title}) => {

    let iconImage;

    if (title=== "Set Dimensions") {
        iconImage = <FaArrowsAlt size={80} />
    } else if (title === "Change Grid Units") {
        iconImage = <BsGrid3X3 size={80}/>
    } else {
        iconImage = <GiCarnivorousPlant size={80} />
    }



    return (
        <div id="button-container">
            <div>
                <h5 id="icon-title">{title}</h5>
            </div>
            <div id="icon">
                {iconImage}
            </div>
        </div>
    )
};

export default GardenFooterButton;