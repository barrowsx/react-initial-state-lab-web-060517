import React from 'react'

class Bomb extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render(){
    let val = `${this.state.secondsLeft} seconds left before I go boom!`
    if(this.state.secondsLeft === 0){
      val = 'Boom!'
    }
    return (
      <h1>{val}</h1>
    )
  }
}

export default Bomb
