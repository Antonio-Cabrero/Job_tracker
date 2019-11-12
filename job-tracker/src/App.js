import React, { useState } from 'react'
import JobCards from './components/JobCards'
import NewJobCard from './components/NewJobContainer'
import Message from './components/NoContent'
import jobData from './JobsData'
import MenuBar from './components/MenuBar'
import EditJobCard from './components/EditJobCard'


function App(props) {

  const [hasData, setHasData] = useState(jobData.length)
  const [showJobForm, setShowJobForm] = useState(false) 
  const [editJobForm, setEditJobForm] = useState(false)
  const [editFormIndex, setEditFormIndex] = useState(0)
 

  const onAdd = (count) => {
      setHasData(count)
      setShowJobForm(true)
  }
  const onCancel = () => showJobForm? setShowJobForm(false)
        : editJobForm? setEditJobForm(false) : null


  const onEdit = (e) => {
    const dataPosition = jobData
    for (let i=0; i<dataPosition.length;i++){
      if (dataPosition[i].position === e.target.parentNode.title) {
        return setEditFormIndex(i)
      }
    }
    setEditJobForm(true)
  }
  const onSubmit = () => showJobForm? setShowJobForm(false) 
    : editJobForm? setEditJobForm(false) : null


    const view = editJobForm? <EditJobCard data={jobData[editFormIndex]} handleSubmit={onSubmit} cancelBtn={onCancel}/>
    : showJobForm
        ? <NewJobCard handleSubmit={onSubmit} cancelBtn={onCancel} />
        : hasData
            ? <JobCards data={jobData} addBtn={onAdd} handleClick={onEdit}/>
            : <Message addBtn={onAdd} />

  return (
      <div>
          <MenuBar />
          {view}
      </div>
  );
     
}

export default App;
