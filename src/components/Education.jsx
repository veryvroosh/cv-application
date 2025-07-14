import {useState} from "react";

function EduSection({ form, setForm }) {

}

function Education() {
    const [showMore, setShowMore] = useState(false);
    const [form, setForm] = useState({

    })

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
            {showMore && <EduSection form={form} setForm={setForm}/>}
        </div>
    )
}

export default Education