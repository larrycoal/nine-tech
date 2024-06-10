import React from 'react';
import NineTechLogo from "../../assets/9tech-logo.svg"
import "./index.css"
const HeaderFooter = ({ children }) => {
    return (
        <>
            <header>
                <nav>
                    <img src={NineTechLogo} alt="nine tech logo" />
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/'>About</a>
                        </li>
                        <li>
                            <a href='/'>Courses</a>
                        </li>
                        <li>
                            <a href='/'>Blog</a>
                        </li>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                    </ul>
                    <button>Get started</button>
                </nav>
            </header>
            {children}
            <footer>
                footer
            </footer>
        </>
    );
};

export default HeaderFooter;