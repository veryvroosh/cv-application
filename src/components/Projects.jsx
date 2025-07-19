import {useState} from "react";
import '../styles/projects.css'

function ProjectItem({ index, proj, setProjects }) {

    const [isEditing, setIsEditing] = useState(proj.title === '');
    const [newProj, setNewProj] = useState('');

    function handleChange(e) {
        const {name, value} = e.target;
        setProjects(prev => {
            const updated = [...prev];
            updated[index] = {...updated[index], [name]: value };
            return updated;
        })
    }

    function handleDescChange(e, index) {
        const inputValue = e.target.value;
        setProjects(prev => {
            const updated = [...prev];
            const projItem = {...updated[index]};
            const updatedDescs = [...projItem.description];
            updatedDescs[index] = inputValue;
            projItem.description = updatedDescs;
            updated[index] = projItem;
            return updated;
        })
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (!newProj.trim()) return;

            setProjects(prev => {
                const updated = [...prev];
                const projItem = { ...updated[index] };
                projItem.description = [...projItem.description, newProj.trim()];
                updated[index] = projItem;
                return updated;
            });
            setNewProj('');
        }
    }

    function handleDescDelete(descIndex) {
        setProjects(prev => {
            const updated = [...prev];
            const projItem = { ...updated[index] };
            const newDescriptions = [...projItem.description];
            newDescriptions.splice(descIndex, 1);
            projItem.description = newDescriptions;
            updated[index] = projItem;
            return updated;
        });
    }


    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(!isEditing)
    }

    function handleDelete() {
        setProjects(prev =>
            [
                ...prev.slice(0, index), ...prev.slice(index + 1)
            ]
        )
    }

    if(!isEditing) {
        return (
            <div className='project-item'>
                <h3>{proj.title}</h3>
                <div className='project-edit-buttons'>
                    <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        )
    }

    return (
        <div className="project-toggled">
            <form className="project-form" onSubmit={handleSubmit}>
                <label>
                    Title:{' '}
                    <input
                        name="title"
                        value={proj.title}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Link:{' '}
                    <input
                        name="link"
                        value={proj.link}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Date:{' '}
                    <input
                        name="date"
                        value={proj.date}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Description:{' '}
                    {proj.description.map((desc, index) => (
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
                        value={newProj}
                        onChange={e => setNewProj(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </label>
                <button className='apply-button' type='submit'>OK</button>
            </form>
        </div>
    )
}


function ProjSection({projects, setProjects}) {

    function addProj() {
        const newEntry =
            {
                title: '',
                link: '',
                date: '',
                description: []
            }
        setProjects(prev => [...prev, newEntry])
    }

    return (
        <div className='projects-list'>
            {projects.map((proj, index) => (
                <>
                    <ProjectItem
                        key={index}
                        index={index}
                        proj={proj}
                        setProjects={setProjects}
                    />
                    <hr />
                </>
            ))}
            <button className='apply-button' onClick={addProj}>ADD</button>
        </div>
    )
}

function Projects() {
    const [showMore, setShowMore] = useState(false);
    const [projects, setProjects] = useState([
        {
            title: 'myLibrary',
            link: 'github.com/Melovii/myLibrary',
            date: 'May 2025',
            description: ["A simple Node.js + Express + MySQL project to manage your library of books"]
        }
    ])

    function handleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <div className="edit-card">
            <div className="main-card">
                <h2>Projects</h2>
                <button onClick={handleShowMore}>
                    {showMore ? 'Hide' : 'Show'}
                </button>
            </div>
            {showMore && <ProjSection projects={projects} setProjects={setProjects}/>}
        </div>
    )
}

export default Projects