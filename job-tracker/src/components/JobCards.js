import React from 'react';
import css from '../styles/jobCards.module.css'
import jobsData from '../JobsData'
import JobCard from './JobCard';

class JobCards extends React.Component {
  constructor() {
    super()
    this.state = {
      jobCards: jobsData
    }
  }
  render() {
    const jobCards = this.state.jobCards.map((item, index) =>
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
        </div>
      )
  }
}

export default JobCards;