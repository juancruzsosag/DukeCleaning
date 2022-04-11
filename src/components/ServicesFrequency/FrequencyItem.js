import "./ServicesFrequency.scss";
import React from "react"; 




export const FrequencyItem = ({title,img}) =>{

    const frequencyName = title.replace(/ /g, "");
    return(
        <div id={"card-"+frequencyName} className="frequencyItem">
            <div className="frequencyContent">
                <img src={img} alt={title} className="frequencyImg"/>
                <p className="frequencyTitle">{title}</p>
            </div>
        </div>
    );
}