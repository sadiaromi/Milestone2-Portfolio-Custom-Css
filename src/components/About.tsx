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
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis unde molestias, nobis vero sint commodi quae, adipisci accusamus cumque saepe porro laborum maiores praesentium, dolorum ea voluptas delectus repellendus?
                        </p>
                </div>

            </div>
        </div>
    );
}
export default About
 