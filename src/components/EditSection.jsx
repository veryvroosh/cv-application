import General from "./General.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";

function EditSection({
    form,
    setForm,
    educations,
    setEducations,
    skills,
    setSkills,
    experiences,
    setExperiences,
    projects,
    setProjects
    }) {
    return (
        <div className="edit-section-container">
            <General form={form} setForm={setForm} />
            <Education educations={educations} setEducations={setEducations} />
            <Skills skills={skills} setSkills={setSkills} />
            <Experience experiences={experiences} setExperiences={setExperiences} />
            <Projects projects={projects} setProjects={setProjects} />
        </div>
    );
}

export default EditSection;
