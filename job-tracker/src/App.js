import React, { useState } from 'react'
import JobCards from './components/JobCards'
import NewJobCard from './components/NewJobContainer'
import Message from './components/NoContent'
import jobData from './JobsData'
import MenuBar from './components/MenuBar'


function App() {

  const [data, setData] = useState(jobData.length)
  const [content, setContent] = 
      useState(jobData.length > 0? <JobCards data={jobData} addBtn={handleAdd}/>:
                                   <Message addBtn={handleAdd}/>)

  function handleAdd() {
    setContent(<NewJobCard handleCards={handleCards} cancelBtn={handleCancel}/>)
  }
               
  function handleCancel() {
    setContent(jobData.length > 0? <JobCards data={jobData} addBtn={handleAdd}/>:
      <Message addBtn={handleAdd}/>)
  }

  function handleCards(){
    if(data < jobData.length) {
      setData(jobData.length)
      setContent( <JobCards data={jobData} addBtn={handleAdd}/>)
    }
  }

  console.log(data)
      console.log(jobData.length)
      return (
        
        <div>
            <MenuBar />
            {content}
        </div>
      );
     
}

export default App;
