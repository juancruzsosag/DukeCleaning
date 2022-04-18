import "./Form.scss";
import React , { useRef, useState, useEffect } from "react"; 
import formPhoto from "../../assets/formPhoto.svg";
import {IoPaperPlane} from "react-icons/io5";
import { validateForm } from '../../helpers/validateForm';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert'
import ReactTooltip from 'react-tooltip';
init("ObIADgxeZKslCGMo_");


export const Form = () =>{
    const form = useRef();

    const [values, setValues] = useState({
        company: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        address: '',
        message: '',
    });

    const [status, setStatus] = useState(''); 
    useEffect(() =>{
        if(status){
            setTimeout(() =>{
                setStatus('');
            }, 2000)
        }
    }, [status]);


    const renderAlert = (variant) =>{
        let alertMessage;
    
        if(variant === "success"){
            alertMessage = "Your message submitted succesfully";
        } else if (variant === "warning"){
            alertMessage = "Error: please check your connection and try again";
        } else if (variant === "danger"){
            alertMessage = "Please fill all the required fields before submitting";
        }

        return(
            <Alert variant={variant} id="form-alert">
                <p> {alertMessage} </p>
            </Alert>
        );
    };

    const handleInputChange = (e) => {        
        setValues(values => ({
            ...values,
            [e.target.name]: [e.target.value]
        }))
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if(values.firstName=="" || values.lastName=="" || values.email=="" || values.phoneNumber=="" || values.message==""){
            setStatus('danger');
            return;
        }

        emailjs.sendForm('pruebaEmail', 'template_test_duke', form.current,'ObIADgxeZKslCGMo_')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                setValues({
                    company: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneNumber: '',
                    address: '',
                    message: '',
                });
                setStatus('success');
            }, function(error) {
                console.log('FAILED...', error);
                setStatus('warning')
            });
    }

    return(
        <div id="formSection">
            <div className="form-title-img">
                <h2 id="section-title">Give us a call or fill<br/> out the form <span>today</span>!</h2>
                <img src={formPhoto} alt="Cleaning team illustration" />
            </div>


            <form onSubmit={sendEmail} ref={form} >
                <p className="form-title" data-tip="hello world">Get your cleaning quote</p>
                <ReactTooltip effect="solid" place="right" />
                {status && renderAlert(status)}

                    <input
                        name="company"
                        type="text"
                        placeholder="Company Name"
                        onChange={handleInputChange}
                        value={values.company}
                    />
                    <hr />
                
                    <input
                        name="firstName"
                        type="text"
                        placeholder="Name"
                        onChange={handleInputChange}
                        value={values.firstName}
                        required
                    />
                    <hr />
                
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last name"
                        onChange={handleInputChange}
                        value={values.lastName}
                        required
                    />
                    <hr />
                
                    <input
                        name="email"
                        type="email"
                        placeholder="E-mail"
                        onChange={handleInputChange}
                        value={values.email}
                        required
                    />
                    <hr/>

                    <input
                        name="phoneNumber"
                        type="tel"
                        placeholder="Phone number"
                        onChange={handleInputChange}
                        value={values.phoneNumber}
                        required
                    />
                    <hr />

                    <input
                        name="address"
                        type="text"
                        placeholder="Address"
                        onChange={handleInputChange}
                        value={values.address}
                    />
                    <hr />
                
                    <textarea name="message" rows={1} onChange={handleInputChange}
                        value={values.message}
                        required placeholder="Message or additional info">
                    </textarea>
                    <hr />

                <button type="submit" className="btn btn-submit-form" id="btn-submit-form"> <IoPaperPlane/> Submit</button>
            </form>
        </div>
        
    );
}