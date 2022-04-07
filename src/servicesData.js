import React from "react"; 
import SpecialDeepClean from "./assets/specialdeepclean.svg";
import PressureClean from "./assets/pressureclean.svg";
import Janitorial from "./assets/janitorial.svg";
import CommercialDisinfection from "./assets/disinfection.svg";
import WindowClean from "./assets/windowclean.svg";
import PostRefurbishing from "./assets/postrefurbishing.svg";

export const services = [
    {
        name: "Special Deep Cleaning",
        description: "Special attention to details",
        img: SpecialDeepClean,
    },
    {
        name: "Pressure Cleaning",
        description: "Floors and front of the restaurant",
        img: PressureClean,
    },
    {
        name: "Janitorial Services",
        description: "We provide  professionalism and expertise to deliver exceptional results",
        img: Janitorial,
    },
    {
        name:"Commercial Disinfection Services",
        description:"We thoroughly clean and disinfect your facility",
        img: CommercialDisinfection,
    },
    {
        name:"Commercial Window Cleaning",
        description:"Shop window cleaning",
        img: WindowClean,
    },
    {
        name:"Post Refurbishing Cleaning",
        description:"Thorough dust removal from floors, ceilings, walls, A/C pipes, etc.",
        img: PostRefurbishing,
    },
]