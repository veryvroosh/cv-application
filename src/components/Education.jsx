import {useState} from "react";
import '../styles/education.css'

function EducationItem({ index, edu, setEducations }) {

    const [isEditing, setIsEditing] = useState(false);

    function handleChange(e) {
        const {name, value} = e.target;
        setEducations(prev => {
            const updated = [...prev];
            updated[index] = {...updated[index], [name]: value };
            return updated;
        })
    }

    function handleSubmit() {

    }

    if(!isEditing) {
        return (
            <div className='education-item'>
                <h3>{edu.degreeType} - {edu.degree}</h3>
                <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            </div>
        )
    }

    return (
        <div className="education-toggled">
            <form className="education-form" onSubmit={handleSubmit}>
                <label>
                    School:{' '}
                    <input
                        name="school"
                        value={edu.school}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Degree Type:{' '}
                    <input
                        name="degreeType"
                        value={edu.degreeType}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Degree:{' '}
                    <input
                        name="degree"
                        value={edu.degree}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Due Date:{' '}
                    <input
                        name="date"
                        value={edu.date}
                        onChange={handleChange}
                    />
                </label>
                <button className='apply-button' type='submit'>OK</button>
            </form>
        </div>
    )
}

function EduSection({educations, setEducations}) {
    return (
        <div className='education-list'>
            {educations.map((edu, index) => (
                <EducationItem
                    key={index}
                    index={index}
                    edu={edu}
                    setEducations={setEducations}
                />
            ))}
            <button className='apply-button'>ADD</button>
        </div>
    )
}

function Education() {
    const [showMore, setShowMore] = useState(false);
    const [educations, setEducations] = useState([
        {
            school: 'Istanbul Aydin University',
            degreeType: 'Bachelors',
            degree: 'Computer Engineering',
            date: 'Est. June 2027'
        }
    ])

    function handleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <div className="edit-card">
            <div className="main-card">
                <h2>Education</h2>
                <button onClick={handleShowMore}>
                    {showMore ? 'Hide' : 'Show'}
                </button>
            </div>
            {showMore && <EduSection educations={educations} setEducations={setEducations}/>}
        </div>
    )
}

export default Education