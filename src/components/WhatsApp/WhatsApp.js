import "./WhatsApp.scss";
import React,{ useState } from "react";
import WppIcon from "../../assets/wpp-corner.svg";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import MessageLogo from "../../assets/messagelogo.svg";
import { BsTelephoneFill } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdWavingHand } from 'react-icons/md'

export const WhatsApp = () =>{

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(

        <div id="whatsapp-section">
            <div id="fixedTab">
                <Button onClick={handleShow} className="nextButton d-flex justify-content-center border-0 bg-transparent" id="wpp-fixed">
                    <img src={WppIcon} className="w-75" alt="whatsapp" id="img-whatsapp"/>
                </Button>
            </div>

            <Modal show={show} onHide={handleClose} centered >
                <Modal.Header >
                    <Modal.Title>
                        <div id="modal-title-popup" className="">
                            <div className="">
                                <a href="tel:+17865532884" className="tel-link">786-553-2884</a>
                                <p className="tel-language">(ENGLISH)</p>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            
                            <div>
                                <a href="tel:+17865460411" className="tel-link">786-546-0411</a>
                                <p className="tel-language">(ESPAÑOL)</p>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <img src={MessageLogo} id="message-logo" alt="Logo"/> */}
                    <MdWavingHand color="#41826C"  fontSize="3rem"/>
                    <h3>Hi there!</h3>
                    <h4>Ask us anything</h4>
                    <p className="m-0">Call us now or send a message</p>
                    <p >We will reply as soon as possible</p>

                    <div className="" id="modal-button-section">
                        <a href="https://api.whatsapp.com/send?phone=17865532884&text=Hello,%20Duke%20Rey%20Cleaning!%0AI%20want%20to%20get%20some%20information%20about…" className="" id="modal-wpp-a" target="_blank" rel="noreferrer">
                            <Button  id="btn-modal-wpp">
                                <RiWhatsappFill className="btn-icon"/>
                                WhatsApp
                            </Button>
                        </a>
                        <a href="tel:+17865532884" data-rel="external" >
                            <Button  id="btn-modal-call">
                                <BsTelephoneFill className="btn-icon"/>
                                Call us
                            </Button>
                        </a>
                    </div>

                </Modal.Body>
            </Modal>
        </div>

    );
}
