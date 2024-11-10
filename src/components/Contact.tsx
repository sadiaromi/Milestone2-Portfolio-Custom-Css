import "../style/Contact.css";

function Contact () {
    return(
        <main className="contact-main">
            <div className="form-container">
                <h1 className="con-title">Contact Me</h1>
                <form action="" className="form">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="Enter Your Email"/>
                    <input className="msg" type="text" placeholder="Your message"/>
                </form>
                <button className="btn-sub">Submit</button>
            </div>
        </main>
    );
}

export default Contact