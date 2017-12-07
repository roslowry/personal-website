import React from 'react';
var cat;
import axios from 'axios';
import { hashHistory } from 'react-router';
export default class extends React.Component {

  constructor() {
    super()
    this.state = {
      name: '',
      _replyto: '',
      message: '',
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    const body = {
      name: this.state.name,
      _replyto: this.state._replyTo,
      message: this.state.message,
      _next: '/'
    }
    axios.post('https://formspree.io/you@email.com', body)
    .then(res => res.data)
    .then(()=>{
      this.state.submitted = true
    })

  }
  render() {
    return (
      <h3 className="contact">Please feel free to reach out to me at rlowry3@gmail.com!</h3>
  )
  }
}

//
// <div className="form-div">
//
//   <form action="https://formspree.io/your@email.com"
// method="POST" className="contact-form form-control">
//     <label htmlFor="name">Name: </label><input type="text" name="name" id="name" onChange={event=> this.setState({name: event.target.value})}/>
//     <label htmlFor="email">Email: </label><input type="email" name="_replyto" onChange={event=> this.setState({_replyto: event.target.value})}/>
//     <label htmlFor="message">Message: </label><input type="textarea" name="message" onChange={event => this.setState({message: event.target.value})} />
//     <input type="submit" value="Send"
//        onClick={this.handleSubmit}/>
//    </form>
//
// </div>
