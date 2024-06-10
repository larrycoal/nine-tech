import React from 'react';
import { BckSvgOne, HeroStudent, StudentBck } from '../../assets';
import { GiGraduateCap } from "react-icons/gi";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { LiaCertificateSolid } from "react-icons/lia";

import "./index.css"

const HeroPage = () => {
    return (
        <div className='hero_wrapper'>
            <div className='right'>
                <h2>Grow your skills,</h2>
                <h1>Build your <span>Future</span></h1>
                <p>We collaborate to ensure every student achieves academic,
                    social, and emotional success by working together and
                    providing comprehensive support
                </p>
                <button>Get Started</button>
            </div>
            <div className='left'>
                <HeroStudent  />
                <div className="cards" id='card_one'>
                    <div><GiGraduateCap /></div>
                    <div>
                        <p>1K+</p>
                        <p>Trainings Completed</p>
                    </div>
                </div>
                <div className="cards" id='card_two'>
                    <MdOutlinePeopleAlt />
                    <div>
                        <p>5K+</p>
                        <p>Satisfied Clients</p>
                    </div>
                </div>
                <div className="cards" id='card_three'>
                    <LiaCertificateSolid />
                    <div>
                        <p>25+</p>
                        <p> Years Of Experience</p>
                    </div>

                </div>
            </div>
            <BckSvgOne />
        </div>
    );
};

export default HeroPage;