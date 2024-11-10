import Image from "next/image";
import "../style/Hero.css"; 
import "../style/About.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function About() {
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
                      alt="About image"/>
                     <div className="social-icon">
                     <FaGithub className="s-icon1"/>
                     <FaLinkedin className="s-icon2"/>
                     <FaFacebook  className="s-icon3"/> 
                     </div> 
                </div>
                {/* right */}
                <div className="hero-right-div">
                    <h1 className="title-hero">About Me</h1>
                        <p className="description-hero">
                            I am a front-end developer with a strong interest in web development. Although I have no any professional experience yet, I have learned HTML, CSS, and Typescript and continue to improve my skills. I enjoy creating websites that are both visually appealing and easy to use. My goal is to keep improving and build websites that are useful for everyone.
                        </p>
                </div>

            </div>
        </div>
    );
}
export default About
 