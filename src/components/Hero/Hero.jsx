import React from "react";
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2 className="my-name">Nisha Poonia</h2>
                <p>Hello! I'm Nisha Poonia, a frontend developer proficient in C++, Java, DBMS, DSA, OOPs, OS, and React. With strong skills in backend development and database management, I craft efficient and scalable applications. My expertise in algorithms and data structures ensures seamless functionality. Leveraging React, I create captivating user interfaces that drive user engagement. Let's collaborate to bring your ideas to life and deliver exceptional digital experiences.</p>
            </div>
            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/img01.png" alt="" />
                    </div>
                    <img src="./assets/images/img11.png" alt="" />
                </div>
                <div>
                    <div className="tech-icon">
                        <img src="./assets/images/img02.png" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/img03.png" />
                    </div>
                    <div className="tech-icon">
                        <img src="./assets/images/img04.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;