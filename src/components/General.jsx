import { useState } from 'react';
import '../styles/general.css'

function ToggledGeneral({ form, setForm }) {

    function handleSubmit() {

    }

    return (
        <div className="general-toggled">
            <form className="general-form" onSubmit={handleSubmit}>
                <label>
                    First Name:{' '}
                    <input
                        value={form.firstName}
                        onChange={e => setForm({...form, firstName: e.target.value})}
                    />
                </label>
                <label>
                    Last Name:{' '}
                    <input
                        value={form.lastName}
                        onChange={e => setForm({...form, lastName: e.target.value})}
                    />
                </label>
                <label>
                    City & Country:{' '}
                    <input
                        value={form.cityCountry}
                        onChange={e => setForm({...form, cityCountry: e.target.value})}
                    />
                </label>
                <label>
                    E-Mail:{' '}
                    <input
                        value={form.email}
                        onChange={e => setForm({...form, email: e.target.value})}
                    />
                </label>
                <label>
                    Github:{' '}
                    <input
                        value={form.github}
                        onChange={e => setForm({...form, github: e.target.value})}
                    />
                </label>
                <label>
                    LinkedIn:{' '}
                    <input
                        value={form.linkedin}
                        onChange={e => setForm({...form, linkedin: e.target.value})}
                    />
                </label>
                <button className='apply-button' type='submit'>Apply</button>
            </form>
        </div>
    )
}

function General() {

    const [showMore, setShowMore] = useState(false);
    const [form, setForm] = useState({
        firstName: 'Zaid',
        lastName: 'Safadi',
        cityCountry: 'Istanbul, Turkey',
        email: 'veryvroosh@gmail.com',
        github: 'github.com/veryvroosh',
        linkedin: 'linkedin.com/in/mhd-zaid-safadi/'
    })

    function handleShowMore() {
        setShowMore(!showMore)
    }

    return (
        <div className="edit-card">
            <div className="main-card">
                <h2>General</h2>
                <button onClick={handleShowMore}>
                    {showMore ? 'Hide' : 'Show'}
                </button>
            </div>
            {showMore && <ToggledGeneral form={form} setForm={setForm}/>}
        </div>
    )
}

export default General