import General from "./General.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";

function EditSection() {
    return (
        <div className="edit-section-container">
            <General />
            <Education />
            <Skills />
            <Experience />
            <Projects />
        </div>
    )
}

export default EditSection