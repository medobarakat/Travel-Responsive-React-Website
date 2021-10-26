import React from 'react';
import '../App.css';    
import { Button } from './button';
import './herosection.css';

function Herosection() {
    return (
        <div className="hero-container">
            <h1>Adventure Awaits</h1>
            <p>what are you waiting for</p>
            <div className="hero-btn">
                <Button 
                className="btns" 
                buttonStyle='btn--outline' 
                buttonSize='btn--large'>
                 Get Started
                    </Button>
                    <Button 
                className="btns" 
                buttonStyle='btn--primary' 
                buttonSize='btn--large'>
                 Watch Trailer <i className='far fa-play-circle'></i>
                    </Button>
            </div>
        </div>
    )
}

export default Herosection
