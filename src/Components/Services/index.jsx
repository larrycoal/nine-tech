import React from 'react';
import { GiTeacher } from "react-icons/gi";
import { MdOutlineAccessTime } from "react-icons/md";
import { LuHelpingHand } from "react-icons/lu";
import { FaUserGraduate } from "react-icons/fa6";
import "./index.css"
import { BaImgOne, BaImgThree, BaImgTwo } from '../../assets';

const Services = () => {
    return (
        <div className='services_wrapper'>
            <h2 className='offer_header'>What We Offer</h2>
            <div className='offers'>
                <div className='offer-card'>
                    <p>
                        <span><GiTeacher />
                        </span>
                        <span style={{ color: "#FA7921" }}>Expert Instructor</span>
                    </p>
                    <p>
                        Expert instructor knowledgeable, experienced, and provides quality education and guidance
                    </p>
                    <a href='/'>Read More</a>
                </div>
                <div className='offer-card'>
                    <p>
                        <span>
                            <MdOutlineAccessTime />
                        </span>
                        <span style={{ color: "#FE9920" }}>24/7 Support Available</span>
                    </p>
                    <p>
                        Expert instructor knowledgeable, experienced, and provides quality education and guidance
                    </p>
                    <a href='/'>Read More</a>
                </div>
                <div className='offer-card'>
                    <p>
                        <span>
                            <LuHelpingHand />
                        </span>
                        <span style={{ color: "#B9A44C" }}>Mentorship opportunities</span>
                    </p>
                    <p>
                        Expert instructor knowledgeable, experienced, and provides quality education and guidance
                    </p>
                    <a href='/'>Read More</a>
                </div>
                <div className='offer-card'>
                    <p>
                        <span><FaUserGraduate />
                        </span>
                        <span style={{ color: "#566E3D" }}>Learn anywhere</span>
                    </p>
                    <p>
                        Expert instructor knowledgeable, experienced, and provides quality education and guidance
                    </p>
                    <a href='/'>Read More</a>
                </div>
            </div>
            <h2 className='program_header'>Our Top Programs</h2>
            <div className='programs'>
                <div className='program_container'>
                    <h2>Business Analysis Certification Training</h2>
                    <div className='program_card'>
                        <BaImgOne />
                        <p> Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Odio id quod libero quisquam
                            temporibus minus facilis veritatis, enim labor
                            iosam culpa consequuntur! Harum facilis optio exercitationem
                            similique labore rem, temporibus voluptatum!
                        </p>
                        <button>Enroll Now</button>
                    </div>
                </div>
                <div className='program_container'>
                    <h2>Business Analysis Incubator program</h2>
                    <div className='program_card'>
                        <BaImgTwo />
                        <p> Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Odio id quod libero quisquam
                            temporibus minus facilis veritatis, enim labor
                            iosam culpa consequuntur! Harum facilis optio exercitationem
                            similique labore rem, temporibus voluptatum!
                        </p>
                        <button>Enroll Now</button>
                    </div>
                </div>
                <div className='program_container'>
                    <h2>Project Management</h2>
                    <div className='program_card'>
                        <BaImgThree />
                        <p> Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Odio id quod libero quisquam
                            temporibus minus facilis veritatis, enim labor
                            iosam culpa consequuntur! Harum facilis optio exercitationem
                            similique labore rem, temporibus voluptatum!
                        </p>
                        <button>Enroll Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;