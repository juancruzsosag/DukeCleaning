import "./ServicesFrequency.scss";
import React from "react"; 
import { FrequencyItem } from "./FrequencyItem";
import TwiceMonth from "../../assets/Frequency/TwoPerMonth.svg";
import TwiceWeek from "../../assets/Frequency/TwoPerWeek.svg";
import OneTime from "../../assets/Frequency/OneTime.svg";
import Daily from "../../assets/Frequency/Daily.svg";
import Weekly from "../../assets/Frequency/Weekly.svg";

export const ServicesFrequency = () =>{
    return(
        <div id="ServicesFrequency">
            <h2 id="section-title" className="text-center">Our team adapts to cover your <span>specific needs</span>.</h2>
            <div className="frequency-container">
                <div className="row">
                    <FrequencyItem title="Daily" img={Daily}  />
                    <FrequencyItem title="Twice a week" img={TwiceWeek}  />
                    <FrequencyItem title="Weekly" img={Weekly}  />
                </div>
                <div className="row">
                    <FrequencyItem title="Twice a month" img={TwiceMonth}  />
                    <FrequencyItem title="One-time deep cleaning" img={OneTime}  />
                </div>

            </div>
        </div>
    );
}