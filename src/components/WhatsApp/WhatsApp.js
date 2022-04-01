import "./WhatsApp.scss";
import React from "react";
import WppIcon from "../WhatsApp/wpp-corner.svg";



export const WhatsApp = () =>{
    return(
        <div id="fixedTab">
            <a href="" title="WhatsApp" className="d-flex justify-content-end"> 
                <img src={WppIcon} className="w-75" alt="whatsapp" id="img-whatsapp"/>
            </a>
        </div>
    );
}
