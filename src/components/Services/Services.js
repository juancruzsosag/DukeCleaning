import "./Services.scss";
import React from "react"; 
import {ServicesList} from "./ServicesList/ServicesList"



export const Services = () =>{
    return(
        <div id="services">
            <h2>We offer <span>different types</span> of services:</h2>
            <div className="w-100 d-flex flex-row justify-content-center">
                <ServicesList />
            </div>
            
        </div>
    );
}