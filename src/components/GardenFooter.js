import React from "react"
import GardenFooterButton from "./GardenFooterButton"
import "../stylings/GardenFooter.css"

const GardenFooter = () => {
    return (
        <div id="footer">
            <GardenFooterButton title="Set Dimensions" />
            <GardenFooterButton title="Change Grid Units" />
            <GardenFooterButton title="Default Gardens" />
		</div>
    )
}

export default GardenFooter;