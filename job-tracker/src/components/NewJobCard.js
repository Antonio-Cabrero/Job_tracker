import React, { Component } from 'react'
import css from "../styles/form.module.css"
import jobsData from '../JobsData'


class NewJobCard extends Component {

   constructor() {
       super()
       this.state= {
            position: "",
            company: "",
            dateApplied: "",
            jobBoard: "",
            hasFollowedUp: false,
            hadInterview: false
       }

      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)

   }
    
   handleChange(event) {
       const {name , value} = event.target
        this.setState({
                [name] : value
            })
    }

    handleClick(e) {
        e.preventDefault()
        console.log(this.state)
    }

    

    componentDidMount(){
        
        function printDate () {
            let today = new Date()
            let day = today.getDate()
            let month = today.getMonth() + 1
            let year = today.getFullYear()
            
            const fullDate = day + "/" + month + "/" + year
    
            return fullDate
        }

       this.setState({
            dateApplied: printDate()
       })
        
    }
    
    render() {
        return (
            <div className={css.Content_wrap}>
                <div className={css.JobCard}>
                    <h3 className={css.FormTitle}>New Tracking</h3>
                    <form>
                        <input 
                            name="position"
                            value={this.state.position}
                            onChange={this.handleChange} 
                            className={css.FormInput} 
                            type="text" 
                        placeholder="Job Position"
                        />
                        <input 
                            name="company"
                            value={this.state.company}
                            onChange={this.handleChange}
                            className={css.FormInput} 
                            type="text" 
                        placeholder="Company Name"
                        />

                        <div className={css.BtnWrap}>
                            <span>{this.state.dateApplied}</span>
                            <button className={css.FormBtn}>Change</button>
                        </div>
                        
                        <span>Optional</span>

                        <input 
                            name="jobBoard"
                            value={this.state.jobBoard}
                            onChange={this.handleChange}
                            className={css.FormInput} 
                            type="text"
                            placeholder="Job Board"
                            />
                        <div className={css.BtnWrap}>
                            <button onClick={this.handleClick} className={css.FormBtn}>Save</button>
                            <button className={css.FormBtn_Cancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>   
        );
    }
}



export default NewJobCard;