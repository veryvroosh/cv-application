import '../styles/preview.css'
function Preview({ form, educations, skills, experiences, projects, zoomLevel }) {
    return(
        <div className='cv-preview' style={{transform: `scale(${zoomLevel})`, transformOrigin: 'top center'}}>
            <div className='general-info'>
                <h1>{form.firstName} {form.lastName}</h1>
                <div className='general-links'>

                    <p>
                        <a href={form.email} target='_blank' rel='noopener noreferrer'>Email</a> |
                        <a href={form.github} target='_blank' rel='noopener noreferrer'> GitHub</a> |
                        <a href={form.linkedin} target='_blank' rel='noopener noreferrer'> LinkedIn</a>
                    </p>

                </div>
                <p>{form.cityCountry}</p>
            </div>
            <br/>
            <h2 className='main-header'>Education</h2>
            <hr/>
            <div className='education'>
                {educations.map((edu, index) => (
                    <div className='education-item-prev' key={index}>
                        <div className='school-date'>
                            <p>{edu.school}</p>
                            <p>{edu.date}</p>
                        </div>
                        <p>{edu.degreeType} | {edu.degree}</p>
                        <br/>
                    </div>
                ))}
            </div>
            <h2 className='main-header'>Skills</h2>
            <hr/>
            {Object.entries(skills).map(([category, items]) => (
                <div className='skill-group' key={category}>
                    <p>{category.charAt(0).toUpperCase() + category.slice(1)}: {items.map((item, index) => (
                        <span key={index}>
                                {item}
                            {index < items.length - 1 && ' | '}
                            </span>
                    ))}
                    </p>
                </div>
            ))}
            <br/>
            <h2 className='main-header'>Experience</h2>
            <hr/>
            <div className='experience'>
                {experiences.map((exp, index) => (
                    <div className='experience-item-prev' key={index}>
                        <div className='exp-date'>
                            <p>{exp.title} | {exp.workplace}</p>
                            <p>{exp.fromDate} - {exp.toDate}</p>
                        </div>
                        <p className='exp-summary'>{exp.summary}</p>
                        <ul>
                            {exp.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                        <br/>
                    </div>
                ))}
            </div>
            <h2 className='main-header'>Projects</h2>
            <hr/>
            <div className='projects'>
                {projects.map((proj, index) => (
                    <div className='project-item-prev' key={index}>
                        <div className='proj-date'>
                            <p><a href={proj.link} target='_blank'
                                  rel='noopener noreferrer'>{proj.title}</a> | {proj.summary}</p>
                            <p>{proj.date}</p>
                        </div>
                        <ul>
                            {proj.description.map((desc, index) => (
                                <li key={index}>{desc}</li>
                            ))}
                        </ul>
                        <br/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Preview