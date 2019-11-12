import React, { useState } from 'react'
import jobsData from '../JobsData'
import css from '../styles/form.module.css'


function NewJobCard(props) {

    const [position, setPosition] = useState('')
    const [company, setCompany] = useState('')
    const [date] = useState(printDate())
    const [jobBoard, setJobBoard] = useState('')
    
    function handleChange(e) {
        switch(e.target.name) {
            case 'position': return setPosition(e.target.value)
            case 'company': return setCompany(e.target.value)
            case 'jobBoard': return setJobBoard(e.target.value)
            default: return 
        }
    }

    function handleSave(e) {
        jobsData.push({
            position: position,
            company: company,
            dateApplied: date,
            jobBoard: jobBoard,
            hasFollowedUp: false,
            hadInterview: false,
        })
    }

    function printDate () {
        let today = new Date()
        let day = today.getDate()
        let month = today.getMonth() + 1
        let year = today.getFullYear()
        const fullDate = day + "/" + month + "/" + year
        return fullDate
    }

    
return (
        <div className={css.Content_wrap}>
            <div className={css.JobCard}>
                <h3 className={css.FormTitle}>New Tracking</h3>
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
                        <span>Date:</span>
                        <span>{date}</span>
                    </div>
                    
                    <span>Optional</span>

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
                        <button onClick={props.cancelBtn} className={css.FormBtn_Cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
        );
    
}



export default NewJobCard;