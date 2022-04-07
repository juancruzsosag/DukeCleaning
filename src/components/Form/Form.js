import "./Form.scss";
import React , { useRef } from "react"; 
import formPhoto from "../../assets/formPhoto.svg";
import {IoPaperPlane} from "react-icons/io5";
import emailjs from '@emailjs/browser';
import { validateForm } from '../../helpers/validateForm'


export const Form = () =>{

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
        });
    };

    return(
        <div id="formSection">
            <div>
                <h2 id="section-title">Give us a call or fill<br/> out the form <span>today</span>!</h2>
                <img src={formPhoto} alt="Cleaning team illustration" />
            </div>

            <form ref={form} onSubmit={sendEmail}>
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