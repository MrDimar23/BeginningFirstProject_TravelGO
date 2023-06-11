import React, {useEffect} from "react";
import './Footer.css';

import {AiFillYoutube} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {BsTelegram} from 'react-icons/bs';
import{BiChevronRight} from 'react-icons/bi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    useEffect(() =>{
        Aos.init({duration: 2500})
    }, [])

    return (
        <section className="footer">

            <div className="sec_content">
                <div className="contact_div">
                    <div data-Aos='fade-up' className="text">
                        <h2>Travel with us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Repudiandae iusto provident plaUnde laudantium corrupti voluptatum commodi error? Odio, quo!</p>
                    </div>
                    <div className="input_div">
                        <div className="footer_soc">
                            <AiOutlineTwitter className="icons"/>
                            <AiFillYoutube className="icons"/>
                            <AiFillInstagram className="icons"/>
                            <BsTelegram className="icons"/>
                        </div>
                        <div data-Aos='fade-up'  className="link_group">
                            <div  className="title_links">
                                <span>OUR AGENCY</span>
                                <li className="footerlist"><BiChevronRight/> Services</li>
                                <li className="footerlist"><BiChevronRight/> Insurance</li>
                                <li className="footerlist"><BiChevronRight/> Agency</li>
                                <li className="footerlist"><BiChevronRight/> Tourism</li>
                                <li className="footerlist"><BiChevronRight/> Payment</li>
                            </div>
                            <div className="title_links">
                                <span>OUR PARTNERS</span>
                                <li className="footerlist"><BiChevronRight/> Booking</li>
                                <li className="footerlist"><BiChevronRight/> Rentcars</li>
                                <li className="footerlist"><BiChevronRight/> Trivago</li>
                                <li className="footerlist"><BiChevronRight/> Apple</li>
                                <li className="footerlist"><BiChevronRight/> Bank of America</li>
                            </div>
                            <div className="title_links">
                                <span>LAST MINUTE</span>
                                <li className="footerlist"><BiChevronRight/> London</li>
                                <li className="footerlist"><BiChevronRight/> Dubai</li>
                                <li className="footerlist"><BiChevronRight/> Mexico</li>
                                <li className="footerlist"><BiChevronRight/> Paris</li>
                                <li className="footerlist"><BiChevronRight/> Madrid</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
 export default Footer;