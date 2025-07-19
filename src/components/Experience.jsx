import {useState} from "react";
import '../styles/experience.css'

function ExperienceItem({ index, exp, setExperiences }) {

    const [isEditing, setIsEditing] = useState(exp.title === '');
    const [newExp, setNewExp] = useState('');

    function handleChange(e) {
        const {name, value} = e.target;
        setExperiences(prev => {
            const updated = [...prev];
            updated[index] = {...updated[index], [name]: value };
            return updated;
        })
    }

    function handleDescChange(e, index) {
        const inputValue = e.target.value;
        setExperiences(prev => {
            const updated = [...prev];
            const expItem = {...updated[index]};
            const updatedDescs = [...expItem.description];
            updatedDescs[index] = inputValue;
            expItem.description = updatedDescs;
            updated[index] = expItem;
            return updated;
        })
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!newExp.trim()) return;

            setExperiences(prev => {
                const updated = [...prev];
                const expItem = { ...updated[index] };
                expItem.description = [...expItem.description, newExp.trim()];
                updated[index] = expItem;
                return updated;
            });
            setNewExp('');
        }
    }

    function handleDescDelete(descIndex) {
        setExperiences(prev => {
            const updated = [...prev];
            const expItem = { ...updated[index] };
            const newDescriptions = [...expItem.description];
            newDescriptions.splice(descIndex, 1);
            expItem.description = newDescriptions;
            updated[index] = expItem;
            return updated;
        });
    }


    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(!isEditing)
    }

    function handleDelete() {
        setExperiences(prev =>
            [
                ...prev.slice(0, index), ...prev.slice(index + 1)
            ]
        )
    }

    if(!isEditing) {
        return (
            <div className='experience-item'>
                <h3>{exp.title} - {exp.workplace}</h3>
                <div className='experience-edit-buttons'>
                    <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        )
    }

    return (
        <div className="experience-toggled">
            <form className="experience-form" onSubmit={handleSubmit}>
                <label>
                    Title:{' '}
                    <input
                        name="title"
                        value={exp.title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Workplace:{' '}
                    <input
                        name="workplace"
                        value={exp.workplace}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    From Date:{' '}
                    <input
                        name="fromDate"
                        value={exp.fromDate}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    To Date:{' '}
                    <input
                        name="toDate"
                        value={exp.toDate}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:{' '}
                    {exp.description.map((desc, index) => (
                        <div className='desc-input-div' key={index}>
                            <input
                                value={desc}
                                onChange={(e) => handleDescChange(e, index)}
                            />
                            <button type='button' onClick={e => handleDescDelete(index)}>Del</button>
                        </div>
                    ))}
                    <input
                        className='new-input'
                        value={newExp}
                        onChange={e => setNewExp(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </label>
                <button className='apply-button' type='submit'>OK</button>
            </form>
        </div>
    )
}

function ExpSection({experiences, setExperiences}) {

    function addExp() {
        const newEntry =
            {
                title: '',
                workplace: '',
                fromDate: '',
                toDate: '',
                description: []
            }
        setExperiences(prev => [...prev, newEntry])
    }

    return (
        <div className='experience-list'>
            {experiences.map((exp, index) => (
                <>
                    <ExperienceItem
                        key={index}
                        index={index}
                        exp={exp}
                        setExperiences={setExperiences}
                    />
                    <hr />
                </>
            ))}
            <button className='apply-button' onClick={addExp}>ADD</button>
        </div>
    )
}

function Experience() {
    const [showMore, setShowMore] = useState(false);
    const [experiences, setExperiences] = useState([
        {
            title: 'Web Developer',
            workplace: 'The Odin Project',
            fromDate: 'Sep 2024',
            toDate: 'Present',
            description: ["Developed several full-stack web applications using HTML, CSS, JavaScript"]
        }
    ])

    function handleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <div className="edit-card">
            <div className="main-card">
                <h2>Experience</h2>
                <button onClick={handleShowMore}>
                    {showMore ? 'Hide' : 'Show'}
                </button>
            </div>
            {showMore && <ExpSection experiences={experiences} setExperiences={setExperiences}/>}
        </div>
    )
}

export default Experience