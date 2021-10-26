import React from 'react';
import Carditem from './carditem';
import './cards.css';
// importing the images 
import Img1 from '../img/img-9.jpg';
import Img2 from '../img/img-2.jpg';
import Img3 from '../img/img-3.jpg';
import Img4 from '../img/img-4.jpg';
import Img5 from '../img/img-8.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check Out these Epic Destinations</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <Carditem
                            src={Img1}
                            text="Explore The Hidden Waterfall deep inside the Amazon Jungle"
                            label="adventure"
                            path="/services" />
                        <Carditem
                            src={Img2}
                            text="Travel throug the island of bali in a Private Cruise"
                            label="Luxury"
                            path="/services" />
                    </ul>
                    <ul className="cards__items">
                        <Carditem
                            src={Img3}
                            text="Explore The Hidden Waterfall deep inside the Amazon Jungle"
                            label="adventure"
                            path="/services" />
                        <Carditem
                            src={Img4}
                            text="Travel throug the island of bali in a Private Cruise"
                            label="Luxury"
                            path="/services" />
                            <Carditem
                            src={Img5}
                            text="Travel throug the island of bali in a Private Cruise"
                            label="Luxury"
                            path="/services" />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
