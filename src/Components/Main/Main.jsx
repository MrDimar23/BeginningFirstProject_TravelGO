import React, { useEffect } from "react";
import './Main.css';
import {BsFillClipboard2CheckFill} from 'react-icons/bs'
import img from '../../Assets/img.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
    id:1,
    img_scr: img,
    dest_title: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '700$',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the World.'
    }
,

    {
    id:2,
    img_scr: img2,
    dest_title: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '600$',
    description: 'Huaynu Picchu is a mountain in Peru'
    }
,
    {
    id:3,
    img_scr: img3,
    dest_title: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '1600$',
    description: '45 Million people visit Turkey each year, and from that about 2 million coe to visit Cappadocia'
    }
]

const Main = () => {
    useEffect(() =>{
        Aos.init({duration: 1500})

    }, [])

    return (
        <section className="main_container">
            <div className="sec_title">
                <div data-aos='fade-right' className="title">
                    <h3>Most visited distination</h3>
                </div>
            </div>
            <div className="sec_content">
                {
                 Data.map(({id, img_scr, dest_title,location, grade, fees, description}) => {
                    return (
                        <div key={id} 
                        data-Aos= 'fade-up'
                        className="single_distination">
                            <div className="image_div">
                                <img src={img_scr} alt={dest_title} />
                            </div>
                            <div className="card_info">
                                <h4 className="dest_title">
                                    {dest_title}
                                </h4>
                                <span className="continent">
                                    <span className="location"> Location:{location}</span>
                                </span>

                                <div className="fees">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                </div>
                                <div className="price">
                                        <h5>{fees}</h5>
                                </div>
                                    
                                <div className="dest">
                                        <p>{description}</p>
                                </div>
                                <button className="btn">
                                    Details
                                    <BsFillClipboard2CheckFill className='iconsecCon'/>
                                </button>
                                </div>
                            </div>
                        </div>
                    )
                 })
                }         
            </div>
        </section>
    )
}
 export default Main;