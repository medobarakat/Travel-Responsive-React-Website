import React, { useState , useEffect } from "react";
import { Link } from 'react-router-dom';
import './navbar.css';
import {Button} from './button.js';

function Navbar() {
    const [Click , setClick]=useState(false);
    const [Butto , setButto]=useState(true);
    let handleClick =()=>{setClick(!Click)};
    let Closethemenu =()=> {setClick(false)};
    const showButton =()=>{
        if(window.innerWidth <=960){
            setButto(false);
        }else{
            setButto(true);
        }
    }
    window.addEventListener('resize',showButton);
    useEffect(()=>{
        showButton()
    },[])
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={Closethemenu}>
                TRVL <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={Click ?'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={Click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={Closethemenu} >
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Services' className="nav-links" onClick={Closethemenu} >
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Products' className="nav-links" onClick={Closethemenu} >
                            Products
                        </Link>
                    </li>
                     <li className='nav-item'>
                        <Link to='/Sign-up' className="nav-links-mobile" onClick={Closethemenu} >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {Butto && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
        </>
    )
}

export default Navbar