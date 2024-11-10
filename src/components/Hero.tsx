import "../style/Hero.css";
import Image from "next/image";

function Hero() {
    return (
        <div className="header-container">
            <div className="header-boxes-container">
                {/* left */}
                <div>
                <Image
                      className="header-image"
                      src={"/profile.picture.png"} 
                      width={200}
                      height={200}
                      alt="Profile image"/> 
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">I am Roman Sadia 
                    Front-end Developer</h1>
                        <p className="description-hero">
                               I am a front-end developer eager to start my career, with foundational skills in HTML,
                              CSS, and Typescript. Although I have no professional experience yet, I am passionate 
                              about web development and committed to learning and improving. I&apos;m excited to contribute 
                              to projects, build user-friendly websites, and grow as a developer.
                        </p>
                        <button className="hero-btn">Hire Me</button>
                </div>

            </div>
        </div>
    );
}
export default Hero;
