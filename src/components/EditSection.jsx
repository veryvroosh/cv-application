import General from "./General.jsx";
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Projects from "./Projects.jsx";
import {useState} from "react";

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
    setProjects,
    zoomLevel,
    setZoomLevel
    }) {
    return (
        <div className="edit-section-container">
            <General form={form} setForm={setForm}/>
            <Education educations={educations} setEducations={setEducations}/>
            <Skills skills={skills} setSkills={setSkills}/>
            <Experience experiences={experiences} setExperiences={setExperiences}/>
            <Projects projects={projects} setProjects={setProjects}/>
            <input
                type="range"
                min="0.9"
                max="1.3"
                step="0.2"
                value={zoomLevel}
                onChange={(e) => setZoomLevel(parseFloat(e.target.value))}
            />
        </div>
    );
}

export default EditSection;
