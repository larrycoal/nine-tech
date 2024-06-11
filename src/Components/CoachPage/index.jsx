import React from 'react';
import harry from "../../assets/Harry.jpeg"
import "./index.css"
const index = () => {
    return (
        <div className='coachpage_wrapper'>
            <div className='left'>
                <img src={harry} alt='lead coach of nine tech' />
                <p><span>Lead Coach</span> <span>CEO/Founder NineTech</span></p>
            </div>
            <div className='right'>
                <h2>Meet The Coach</h2>
                <p>
                    Harry AKA <span>"The BA Priest"</span> is a Certified Business Analysis Professional (CBAP) with over
                    15 years experience offering IT services and products to business users
                    in various domains. He is recognized for his strong techno functional ability
                    and problem-solving skills. He has worked with various organizations from
                    small start-ups to global conglomerates....
                </p>
            </div>
        </div>
    );
};

export default index;