import "./Form.scss";
import React from "react"; 
import formPhoto from "./formPhoto.svg";
import {IoPaperPlane} from "react-icons/io5";


export const Form = () =>{
    return(
        <div id="formSection">
            <div>
                <h2 id="section-title">Give us a call or fill<br/> out the form <span>today</span>!</h2>
                <img src={formPhoto} />
            </div>

            <form>
                <p className="form-title">Get your cleaning quote</p>
                <input
                    name="company-name"
                    type="text"
                    placeholder="Company Name"
                />
                <hr />
            
                <input
                    name="name"
                    type="text"
                    placeholder="Name"
                />
                <hr />
            
                <input
                    name="last-name"
                    type="text"
                    placeholder="Last Name"
                />
                <hr />
            
                <input
                    name="email"
                    type="text"
                    placeholder="E-mail"
                />
                <hr/>
            
                <input
                    name="phone-number"
                    type="text"
                    placeholder="Phone number"
                />
                <hr />

                <input
                    name="address"
                    type="text"
                    placeholder="Address"
                />
                <hr />
            
                <input
                    name="message"
                    type="text-area"
                    placeholder="Message or additional info"
                />
                <hr />

                <button type="submit" className="btn btn-submit-form" id="btn-submit-form"> <IoPaperPlane/> Submit</button>
            </form>
        </div>
        
    );
}