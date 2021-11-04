import React, { Component } from 'react';
import image1 from'../Assets/look-left.jpeg'
import image2 from'../Assets/look-right.jpeg'
//import images

class ChallengeOne extends Component {
  //declare the state here
  state = {
    image: image1

  };


  //click left/right button handler goes here
  clickLeft = ()=>{
    this.setState({
      image:image1
    })
  }

  clickRight = ()=>{
    this.setState({
      image:image2
    })
  }

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img
            className="ch1"
            src={this.state.image}
            alt=""
          />
        </div>
        <button className="btn" onClick={this.clickLeft}>⭠</button>
        <button className="btn" onClick={this.clickRight}>⭢</button>
      </>
    );
  }
}

export default ChallengeOne;