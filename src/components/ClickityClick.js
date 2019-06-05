// Code ClickityClick Component Here
import React from 'react'
//lets say we have a component with a button and a bit of text to indicate
//whether that button was been pressed yet

export default class ClickityClick extends React.Component {
  //use constructor when you need to initialize your state, or bind some event-listener-function
  constructor(props) {
  //super() must be called in subclasses when you want to access some variables from the parent
  //by passing props in super() will make props available across the component through this.props
  super(props)
    this.state = { //initialize local state by assigning an {} to this.state
      status: {
        // address: '1623 W Grand Ave',
        hasBeenClicked: false
      }
    }
  }

  handleClick = () => {
  //to update our state we use this.setState() and we pass in an object
  //this object will get merged with the current state
    this.setState({
      status: {...this.state.status, hasBeenClicked: true}
      // status: Object.assign({}, this.state.status, {hasBeenClicked: true})

      //when we update state we do not have to pass in the entire state
      //we pass in just the property we want to update
    }, () => console.log(this.state.status))

  }

  render() { //render is kind of a lifecycle method which is invoked whenever the component needs to update
    return ( //what is rendered, what is the actual output
      <div>
        <p>I have {this.state.status.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
