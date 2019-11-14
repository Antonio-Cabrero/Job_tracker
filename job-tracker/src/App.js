import React, { useState } from 'react'
import JobCards from './components/JobCards'
import NewJobCard from './components/NewJobContainer'
import Message from './components/NoContent'
import jobData from './JobsData'
import MenuBar from './components/MenuBar'
import NavMenu from './components/NavMenu'
import EditJobCard from './components/EditJobCard'


function App(props) {

  const [hasData, setHasData] = useState(jobData.length)
  const [showJobForm, setShowJobForm] = useState(false) 
  const [editJobForm, setEditJobForm] = useState(false)
  const [editCard, setEditCard] = useState('')
  const [index, setIndex] = useState('')
  const [displayMenu, setDisplayMenu] = useState(false)

  const onAdd = (count) => {
      setHasData(count)
      setShowJobForm(true)
  }

  const onCancel = () => showJobForm? setShowJobForm(false)
        : editJobForm? setEditJobForm(false) : null


  const onEdit = (card) => {
    setIndex(card)
    setEditCard(jobData[card])
    setEditJobForm(true)
  }

  const onDelete = () => {
    jobData.pop(index)
    setHasData(jobData.length)
  }

  const onSubmit = () => showJobForm? setShowJobForm(false) 
    : editJobForm
        ? setEditJobForm(false) : null

  const onMenuDisplay = () => displayMenu? setDisplayMenu(false) : setDisplayMenu(true)

  const view = editJobForm? <EditJobCard 
                                data={editCard} 
                                index={index} 
                                handleSubmit={onSubmit} 
                                cancelBtn={onCancel} 
                                deleteBtn={onDelete}
                            />
  : showJobForm
      ? <NewJobCard handleSubmit={onSubmit} cancelBtn={onCancel} />
      : hasData
          ? <JobCards data={jobData} addBtn={onAdd} handleClick={onEdit}/>
          : <Message addBtn={onAdd} />

  return (
      <div>
          <MenuBar menuBtn={onMenuDisplay} toggleIcon={displayMenu}/>
          <NavMenu toggleDisplay={displayMenu}/>
          {view}
      </div>
  );
     
}

export default App;
