import React from "react";
import './Home.css';
import{AiOutlineInstagram} from 'react-icons/ai';
import {FiFacebook} from 'react-icons/fi';
import{AiOutlineYoutube} from 'react-icons/ai';

const Home = () => {

    return(
        <section className="home">
        <h1 className="home_title">Search your Holiday
        </h1>
        <div className="card_div">
            <div className="destination_input">
                <label htmlFor="city">Search your destination
                </label>
                <div className="input">
                    <input type="text" placeholder="Enter name here" />
                </div>
                <label htmlFor="city">Select your date
                </label>
                <div className="input">
                    <input type="date" placeholder="Enter date" />
                </div>
                <div className="price_input">
                    <div className="total_label">
                        <label htmlFor="price">Max Price: $5000
                        </label>
                        <div className="input">
                            <input type="range" max={5000} min={1000} />
                        </div>
                    </div>
                </div>
                <div className="more_filter">
                    <span>More Filters</span>
                </div>

            </div>
        </div>
        <div className="home_footer_icon">
            <AiOutlineInstagram className='soc_icon' />
            <FiFacebook className='soc_icon' />
            <AiOutlineYoutube className='soc_icon' />
        </div>

    </section>
    )
}
    

 export default Home;