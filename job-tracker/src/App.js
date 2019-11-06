import React from 'react'
import Layout from './components/Layout'
import JobCards from './components/JobCards'
import NewJobCard from './components/NewJobCard'


class App extends React.Component {

  constructor() {
    super() 
    this.state = {
        content: <JobCards />
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
      this.setState(
        {
          content: <NewJobCard />
      })
      // console.log('Hello')
  }

  render() { 
      return (
        <div className="App">
            <Layout content={this.state.content} addBtn={this.handleClick}/>
        </div>
      );
  }    
}

export default App;
