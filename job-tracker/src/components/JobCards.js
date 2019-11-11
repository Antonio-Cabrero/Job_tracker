import React from 'react';
import css from '../styles/jobCards.module.css'
import AddBtn from './AddBtn'
import JobCard from './JobCard';

function JobCards(props)  {
 
    const jobCards = props.data.map((item, index) =>
            <JobCard 
                key={index}
                position={item.position}
                company={item.company}
                dateApplied={item.dateApplied}
                jobBoard={item.jobBoard}
                hasFollowedUp={item.hasFollowedUp}
                hadInterview={item.hadInterview}
          />)

      return (
        <div className={css.JobCards_Wrap}>
          {jobCards}
          <AddBtn handleClick={props.addBtn}/>
        </div>
      )
  }


export default JobCards;