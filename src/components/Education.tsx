import "../style/Education.css";

function Education () {
    return (
        <main className="edu-main">
            <div className="edu-text">
            <h1>Education</h1>
            <p>
            I have recently completed my Intermediate in Pre-Medical from Liaquat Govt.Girls College Malir, Karachi
            and I am currently enrolled in an ongoing GIAIC course at Governor House, where I am expanding my 
            knowledge in AI technologies and their applications.
            </p>
            </div>
            <div className="box-con-edu">
                <div>
                    <h1 className="college-name">Liaquat Govt.Girls College</h1>
                    <span>Completed (2022-2024)</span>
                </div>
                <div className="Intermediate">
                    <h1>Intermediate in Pre-Medical</h1>
                    <p>
                    I recently completed my Intermediate studies in Pre-Medical, where I developed strong analytical
                    and problem-solving skills. While my background is in science, my interest in technology and web
                    development has driven me to explore new areas, and I am now focused on building my career as a 
                    front-end developer.
                    </p>
                </div>
            </div>
            {/* box 2 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="school-name">Bahria Model School </h1>
                    <span>Completed (2020-2022)</span>
                </div>
                <div className="Matric">
                    <h1>Matric in Science</h1>
                    <p>
                    I completed my matric studies in Science, where I developed strong analytical
                    and problem-solving skills. While my background is in science, my interest in technology and web
                    development has driven me to explore new areas, and I am now focused on building my career as a 
                    front-end developer.
                    </p>
                </div>
            </div>
            {/* box 3 */}
            <div className="box-con-edu">
                <div>
                    <h1 className="governor-name">Governor House</h1>
                    <span>Student (2024)</span>
                </div>
                <div className="GIAIC">
                    <h1>GIAIC (ongoing)</h1>
                    <p>
                     I am currently enrolled in the GIAIC course at the Governor House. This program provides training, 
                     mentorship, and resources to help entrepreneurs turn innovative ideas into successful businesses. 
                     It focuses on areas like business strategy, funding, and technology integration. The course is 
                     helping me enhance my entrepreneurial skills and gain valuable insights to scale my startup.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default Education