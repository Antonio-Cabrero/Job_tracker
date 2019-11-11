import React from 'react';
import css from '../styles/jobCard.module.css'

function JobCard(props) {
    return (
        <div className={css.JobCard}>
            <h4 className={css.JobCard_title}>{props.position}</h4>
            <span className={css.JobCard_subTitle}>{props.company}</span>
            <div className={css.JobCard_info}>
                <span>{props.jobBoard}</span>
                <span>{props.dateApplied}</span>
            </div>
            <div className={css.JobCard_status}>
               <div>
                <h5>Followed up:</h5> 
                <span>{props.hasFollowedUp === true? "Yes" : "No"}</span>  
               </div>
               <div>
                <h5>Interviewd:</h5> 
                <span>{props.hadInterview === true? "Yes" : "No"}</span>
               </div>
            </div>
        </div>
    );
}

export default JobCard;