import {useState} from "react";
import '../styles/education.css'

function EducationItem({ index, edu, setEducations }) {

    const [isEditing, setIsEditing] = useState(edu.school === '');

    function handleChange(e) {
        const {name, value} = e.target;
        setEducations(prev => {
            const updated = [...prev];
            updated[index] = {...updated[index], [name]: value };
            return updated;
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(!isEditing)
    }

    function handleDelete() {
        setEducations(prev =>
            [
                ...prev.slice(0, index), ...prev.slice(index + 1)
            ]
        )
    }

    if(!isEditing) {
        return (
            <div className='education-item'>
                <h3>{edu.degreeType} - {edu.degree}</h3>
                <div className='education-edit-buttons'>
                    <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>

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

    function addEdu() {
        const newEntry =
            {
                school: '',
                degreeType: '',
                degree: '',
                date: ''
            }
        setEducations(prev => [...prev, newEntry])
    }

    return (
        <div className='education-list'>
            {educations.map((edu, index) => (
                <>
                    <EducationItem
                        key={index}
                        index={index}
                        edu={edu}
                        setEducations={setEducations}
                    />
                    <hr />
                </>
            ))}
            <button className='apply-button' onClick={addEdu}>ADD</button>
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