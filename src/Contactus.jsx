import React from 'react'
import locate from '../src/img/locate.jpg'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdPhone } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import Contactservice from '../src/Contactservice'
import { CgFacebook } from 'react-icons/cg'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaGooglePlusG } from 'react-icons/fa'
import Contactcontainer from '../src/Contactcontainer'

const ifaCheckSquare = <BsFillPersonFill size="3x" color="gray" />
const ifaCoffee = <MdPhone color="gray" size="3x" />
const iAiOutlineMail = <AiOutlineMail color="gray" size="3x" />
const facebook = <CgFacebook color="gray" size="45px" />
const twitter = <FaTwitter color="gray" size="45px" />
const Instgram = <FaInstagramSquare color="gray" size="45px" />
const fagoogle = <FaGooglePlusG color="gray" size="45px" />

function Contactus() {

    function Containetdata(val) {

        return (<>
            <Contactservice
                li1={val.li1}
                li2={val.li2}
                li3={val.li3}
                li4={val.li4}
                li5={val.li5}
                li6={val.li6}
                li7={val.li7}
            />
        </>)
    }
    return (<>
        <div className="contactus-container">
            <div className="contact-image">
                <div className="
                    contact-img">
                    <img src={locate} alt="Background"></img>
                </div>
                <div className="backcover">
                    <h1 className="backcover-h1">Let's Make Something awesome together.</h1>
                    <p className="backcover-p">Drop us a line,Or give us a heads up if you're interested in visiting us</p>
                    <button className="backcover-button" type="button">Click Now</button>
                </div>

                {/* Contact form start */}
            </div>
            <div className="contact-form">
                <div className="contact-form-heading">
                    <h1 className="contact-form-h1">Get in touch</h1>
                    <p className="contact-form-p">Let's talk about our project</p>
                </div>
                <div className="contact-form-input">
                    <form>
                        {/* name */}

                        <label for="fname">{ifaCheckSquare}</label>
                        <input type="text" name="FirstName" placeholder="your name"></input>
                        {/* phone Number  */}

                        <label for="fname">{ifaCoffee}</label>
                        <input type="number" name="FirstName" placeholder="your phone no"></input>
                        {/* your Email */}

                        <label for="fname">{iAiOutlineMail}</label>
                        <input type="Email" name="FirstName" placeholder="your Email"></input>


                    </form>
                </div>
                <div className="contact-form-textarea">
                    <label for="fname"></label>
                    <textarea type="text" name="FirstName" placeholder="your Message"></textarea>
                    <button className="contact-form-button" type="button">Submit</button>
                </div>
            </div>
            <div className="contact-page-footer">
                <div className="footer-txt">
                    <p className="footer-txt1">GET IN TOUCH</p>
                </div>
                <div className="footer-details">
                    <p className="footer-txt2">nitinthakur488@gmail.com</p>
                    <p className="footer-txt3">9654699111 </p>

                </div>

                <div className="footer-container">
                    {Contactcontainer.map(Containetdata)}
                </div>
                <div className="footer-symbols">
                    <div className="footer-logo">
                        <ul>
                            <li>{facebook}</li>
                            <li>{twitter}</li>
                            <li>{Instgram}</li>
                            <li>{fagoogle}</li>
                        </ul>
                        <p className="Footer-para">join hundred of Company using survicate</p>
                        <button className="footer-button">
                            SIGNUP
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </>)
}
export default Contactus
