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
                    <h1 className="title-hero">I'm Roman Sadia 
                    Front-end Developer</h1>
                        <p className="description-hero">
                       I am a passionate and eager-to-learn front-end developer with a strong foundation in HTML, CSS, and JavaScript. eager to build responsive and user-friendly websites. Though new to the field, I am committed to learning and growing in the ever-evolving world of web development. 
</p>
                        <button className="hero-btn">Hire Me</button>
                </div>

            </div>
        </div>
    );
}
export default Hero;
 