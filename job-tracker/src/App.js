import React from 'react'
import Layout from './components/Layout'
import JobCards from './components/JobCards'
import NewJobCard from './components/NewJobContainer'
import Message from './components/NoContent'
import jobData from './JobsData'

class App extends React.Component {

  constructor() {
    super() 
    this.state = {
        content:'',
        isAdding: true,
        isEditing: false,
        isEmpty: false,
        data: jobData
    }

    this.handleAdding = this.handleAdding.bind(this)
    this.handleCancel =this.handleCancel.bind(this)
  }

  handleAdding() {
     this.setState(
        {
        content: <NewJobCard />,
         isAdding: true
       })
  }

  handleCancel(e){
    e.preventDefault()
    this.setState({
      isAdding: false
    })
    this.handleContent()
  }


 handleContent() {

    if (this.state.isAdding) {
      this.setState({
         content: <NewJobCard />
       })
    } 
    else if (this.state.isEmpty) {
      this.setState({
        content: <Message addBtn={this.handleAdding}/>
    })
    } else {
      this.setState({
        content: <JobCards jobCards={this.state.data} addBtn={this.handleAdding}/>
      })
    }
  }

  componentDidMount() {
    if (this.state.data.length >= 1){
      this.setState({
        isEmpty: false
      })
    }
    this.handleContent()
  }

  // componentDidUpdate() {
  //   this.handleContent()
  // }

  render() { 
      return (
        <div>
            <Layout content={this.state.content}  addBtn={this.handleAdding}/>
        </div>
      );
  }    
}

export default App;
