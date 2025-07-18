import {useState} from "react";
import '../styles/skills.css'

function SkillCategory({ value, skills, setSkills }) {

    const [newSkill, setNewSkill] = useState('');
    const selectedSkill = skills[value];

    function handleChange(e, index) {
        const inputValue = e.target.value;
        setSkills(prev => {
            const updated = {...prev};
            updated[value] = [...updated[value]]
            updated[value][index] = inputValue;
            return updated;
        })
    }

    function handleKeyDown(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
            if(!newSkill.trim()) return;

            setSkills(prev => {
                const updated = {...prev};
                updated[value] = [...updated[value], newSkill.trim()];
                setNewSkill('');
                return updated;
            });
        }
    }

    function handleDelete(index) {
        setSkills(prev => {
            const updated = { ...prev };
            updated[value] = [...updated[value]];
            updated[value].splice(index, 1);
            return updated;
        });
    }

    return (
        <div className='skills-toggled'>
            <form className='skill-form'>
                <label>
                    {value.toString().charAt(0).toUpperCase() + value.toString().slice(1)}:{' '}
                    {selectedSkill.map((skill, index) => (
                        <div className='skill-input-div' key={index}>
                            <input
                                name={value}
                                value={skill}
                                onChange={(e) => handleChange(e, index)}
                            />
                            <button type='button' onClick={e => handleDelete(index)}>Del</button>
                        </div>
                    ))}
                    <input
                        className='new-input'
                        name={value}
                        value={newSkill}
                        onChange={e => setNewSkill(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </label>
            </form>
        </div>
    )
}

function SkillsSection({skills, setSkills}) {
    return (
        <div className='skills-list'>
            <SkillCategory value='expertise' skills={skills} setSkills={setSkills}/>
            <hr/>
            <SkillCategory value='software' skills={skills} setSkills={setSkills}/>
            <hr/>
            <SkillCategory value='languages' skills={skills} setSkills={setSkills}/>
        </div>
    )
}

function Skills() {

    const [showMore, setShowMore] = useState(false);
    const [skills, setSkills] = useState({
        expertise: ["Version Control"],
        software: ["Github"],
        languages: ["JavaScript"]
    })

    function handleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <div className="edit-card">
            <div className="main-card">
                <h2>Skills</h2>
                <button onClick={handleShowMore}>
                    {showMore ? 'Hide' : 'Show'}
                </button>
            </div>
            {showMore && <SkillsSection skills={skills} setSkills={setSkills}/>}
        </div>
    )
}

export default Skills