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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatem iste nesciunt expedita commodi et, dolorem laudantium provident repellat voluptas omnis doloribus similique aspernatur officia reiciendis! Consectetur perferendis rerum error.
</p>
                        <button className="hero-btn">Hire Me</button>
                </div>

            </div>
        </div>
    );
}
export default Hero
 