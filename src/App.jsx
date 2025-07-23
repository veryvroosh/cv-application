import EditSection from './components/EditSection.jsx'
import PreviewSection from './components/PreviewSection.jsx'
import './styles/app.css'
import {useState} from "react";

function App() {

    const [form, setForm] = useState({
        firstName: 'Zaid',
        lastName: 'Safadi',
        cityCountry: 'Istanbul, Turkey',
        email: 'veryvroosh@gmail.com',
        github: 'https://github.com/veryvroosh',
        linkedin: 'https://linkedin.com/in/mhd-zaid-safadi/'
    });
    const [educations, setEducations] = useState([
        {
            school: 'Istanbul Aydin University',
            degreeType: 'Bachelors',
            degree: 'Computer Engineering',
            date: 'Est. June 2027'
        }
    ]);
    const [skills, setSkills] = useState({
        expertise: ["Version Control"],
        software: ["Github"],
        languages: ["JavaScript"]
    });
    const [experiences, setExperiences] = useState([
        {
            title: 'Web Developer',
            summary: 'Building full-stack web apps to develop and showcase web development skills',
            workplace: 'The Odin Project',
            fromDate: 'Sep 2024',
            toDate: 'Present',
            description: ["Developed several full-stack web applications using HTML, CSS, JavaScript"]
        }
    ]);
    const [projects, setProjects] = useState([
        {
            title: 'myLibrary',
            summary: 'Book Library Database',
            link: 'https://github.com/Melovii/myLibrary',
            date: 'May 2025',
            description: ["A simple Node.js + Express + MySQL project to manage your library of books"]
        }
    ]);
    const [zoomLevel, setZoomLevel] = useState(0.9);

    return (
      <div className={"app"}>
          <EditSection
              form={form}
              setForm={setForm}
              educations={educations}
              setEducations={setEducations}
              skills={skills}
              setSkills={setSkills}
              experiences={experiences}
              setExperiences={setExperiences}
              projects={projects}
              setProjects={setProjects}
              zoomLevel={zoomLevel}
              setZoomLevel={setZoomLevel}
          />
          <PreviewSection
              form={form}
              educations={educations}
              skills={skills}
              experiences={experiences}
              projects={projects}
              zoomLevel={zoomLevel}
          />
      </div>
    )
}

export default App
