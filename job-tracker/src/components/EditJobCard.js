import React, { useState } from 'react'
import css from '../styles/form.module.css'

function EditJobCard(props) {

    const [position, setPosition] = useState(props.data.position)
    const [company, setCompany] = useState(props.data.company)
    const [date, setDate] = useState(props.data.dateApplied)
    const [jobBoard, setJobBoard] = useState(props.data.jobBoard)
    const [followUp , setFollowUp] = useState(props.data.hasFollowedUp)
    const [hadInterview, setHadInterview] = useState(props.data.hadInterview)
    
    function handleChange(e) {
        switch(e.target.name) {
            case 'position': return setPosition(e.target.value)
            case 'company': return setCompany(e.target.value)
            case 'jobBoard': return setJobBoard(e.target.value)
            case 'date': return setDate(e.target.value)
            case 'followUp': return setFollowUp(e.target.checked)
            case 'interviewed': return setHadInterview(e.target.checked)
            
            default: return 
        }
    }

    function handleSave(e) {
        props.data.position = position
        props.data.company = company
        props.data.dateApplied = date
        props.data.jobBoard = jobBoard
        props.data.hasFollowedUp = followUp
        props.data.hadInterview = hadInterview
    }

        return (
                <div className={css.Content_wrap}>
                    <div className={css.JobCard}>
                        <h3 className={css.FormTitle}>Edit Tracking</h3>
                        <form onSubmit={props.handleSubmit}>
                            <input 
                                name="position"
                                value={position}
                                onChange={handleChange} 
                                className={css.FormInput} 
                                type="text" 
                            placeholder="Job Position"
                            />
                            <input 
                                name="company"
                                value={company}
                                onChange={handleChange}
                                className={css.FormInput} 
                                type="text" 
                            placeholder="Company Name"
                            />

                            <div className={css.BtnWrap}>
                                <input 
                                    name="date"
                                    value={date}
                                    onChange={handleChange}
                                    className={css.FormInput} 
                                    type="text" 
                                placeholder="Date Applied(DD/MM/YYYY)"
                                />
                            </div>
                            <div className={css.BtnWrap}>
                                <label htmlFor="followUp">Follow Up</label>
                                <input 
                                    id="followUp" 
                                    name="followUp" 
                                    type="checkbox" 
                                    checked={followUp}
                                    onChange={handleChange}
                                />
                                <label htmlFor="interviewed">Interviewed</label>
                                <input 
                                    id="interviewed" 
                                    name="interviewed" 
                                    type="checkbox" 
                                    checked={hadInterview}
                                    onChange={handleChange}
                                />
                            </div>
                            <input 
                                name="jobBoard"
                                value={jobBoard}
                                onChange={handleChange}
                                className={css.FormInput} 
                                type="text"
                                placeholder="Job Board"
                                />
                            <div className={css.BtnWrap}>
                                <button onClick={handleSave} className={css.FormBtn}>Save</button>
                                <button type="button" onClick={props.cancelBtn} className={css.FormBtn_Cancel}>Cancel</button>
                            </div>
                            <button onClick={props.deleteBtn} className={css.FormBtn_delete}>Delete</button>
                        </form>
                    </div>
                </div>
        );
}


EditJobCard.propTypes = {

};

export default EditJobCard;