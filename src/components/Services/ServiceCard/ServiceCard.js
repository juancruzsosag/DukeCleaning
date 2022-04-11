import "./ServiceCard.scss";
import React from "react"; 


export const ServiceCard = ({title,description,img}) =>{

    const cardName = title.replace(/ /g, "");
    return(
        <div id={"card-"+cardName} className="serviceCard">
            <div className="cardContent">
                <img src={img} alt={title} />
                <div className="cardTitle">{title}</div>
                <p className="cardDescription">{description}</p>
            </div>
        </div>
    );
}