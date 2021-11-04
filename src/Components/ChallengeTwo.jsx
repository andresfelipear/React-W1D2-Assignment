import React, { Component } from 'react'

const studentList = [
  'Randall Malfoy',
  'Kvothe Black',
  'Chun Zorander',
  'Leomund Ridcully',
  'Rary Stibbons',
  'Gandalf Dresden',
  'Zeddicus Doom',
]

export default class ChallengeTwo extends Component {
  //declare the states
  state = {
    arr: []
  }

  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    setTimeout(()=>{this.setState({
      arr: ['Randall Malfoy',
      'Kvothe Black',
      'Chun Zorander',
      'Leomund Ridcully',
      'Rary Stibbons',
      'Gandalf Dresden',
      'Zeddicus Doom'
    ]
    })}, 3000)
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state
    studentList.sort(() => Math.random() - 0.5)
    this.setState({
      arr: studentList
    })

  }

  render() {
    const printArray = this.state.arr.map((result,index)=>{
      return(
        <li key={index}>{result}</li>
      )
    });
    return (
      <>
        <h2>Challenge 2</h2>
        <div className='msg'>
          <ul>
            {printArray}
          </ul>
        </div>
        <button className='btn large' onClick={this.randomize}>Randomize</button>
      </>
    )
  }
}
