import "./ServicesFrequency.scss";
import React from "react"; 
import { FrequencyItem } from "./FrequencyItem";
import TwiceMonth from "./FrequencyImg/twoPerMonth.svg";
import TwiceWeek from "./FrequencyImg/twoPerWeek.svg";
import OneTime from "./FrequencyImg/oneTime.svg";
import Daily from "./FrequencyImg/daily.svg";
import Weekly from "./FrequencyImg/weekly.svg";

export const ServicesFrequency = () =>{
    return(
        <div id="ServicesFrequency">
            <h2 id="section-title">Our team adapts to cover your <span>specific needs</span>.</h2>
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