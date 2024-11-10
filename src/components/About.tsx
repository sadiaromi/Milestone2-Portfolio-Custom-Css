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
                        Hi, I am roman sadia, a budding front-end developer with a strong passion for web development. 
                        Although I am just starting my journey and don't have professional experience yet. I've gained 
                        a solid foundation in HTML, CSS, and JavaScript through personal projects and online learning. 
                        I love creating visually appealing, responsive, and user-friendly websites, and  I am excited 
                        to continue growing in this field while contributing to meaningful projects.
                        </p>
                </div>

            </div>
        </div>
    );
}
export default About;
 