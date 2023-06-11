import React, {useState} from "react";
import './Navbar.css';
import {MdOutlineTravelExplore} from "react-icons/md";
import {AiFillCloseCircle} from "react-icons/ai";
import {TbGridDots} from "react-icons/tb";





const Navbar = () => {
    

    const [active, setActive] = useState('navBar')
    //Function to toggle Navbar
    const showNav =() => {
        setActive('navBar activeNavbar')
    }
    //Function to remove Navbar
    const removeNavbar =() => {
        setActive('navBar')
    }

    return (
        <section className="navBarsection">
            <header className="header flex">
                <div className="logo_div">
                    <a href="#" className="logo flex">
                        <h1> <MdOutlineTravelExplore className="icon"/>TravelGO</h1>
                    </a>
                </div>
                <div className={active}>
                    <ul className="nav_lists">
                        <li className="nav_item">
                            <a href="#" className="nav_link">Home</a>
                        </li>

                        <li className="nav_item">
                            <a href="#" className="nav_link">Packages</a>
                        </li>

                        <li className="nav_item">
                            <a href="#" className="nav_link">Shop</a>
                        </li>

                        <li className="nav_item">
                            <a href="#" className="nav_link">About</a>
                        </li>

                        <li className="nav_item">
                            <a href="#" className="nav_link">Pages</a>
                        </li>

                        <li className="nav_item">
                            <a href="#" className="nav_link">News</a>
                        </li>

                        <li className="nav_item">
                            <a href="#" className="nav_link">Contact</a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>
                    </ul>
                </div>
                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}
 export default Navbar;