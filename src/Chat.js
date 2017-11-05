import React, { Component } from 'react';
import MessageProvider from './MessageProvider.js'
import firebase from './firebase.js'
import './Chat.css';

class Chat extends Component{
  constructor(props){
    super(props);
    this.state = {value: '', messages:[]};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(e) {
    this.setState({value: e.target.value});
  }
  handleSubmit(e){
    e.preventDefault();
    const mProv = new MessageProvider();
    mProv.sendMessage(this.props.msgGroup, {text: this.state.value})
  }
  componentDidMount(){
    const thisRef = firebase.database().ref(`/messages/${this.props.msgRef}`)
    thisRef.once('value').then((datasnapshot) => {
        this.setState({messages: datasnapshot.val()});
    })
  }
  render(){
    console.log(this.state.messages)
    if(this.state.messages){
      return (
        <section  className=" col-md-offset-3 col-md-9">
          <h2>Chat</h2>
          <div id="chat">
          <ul>
            {
              this.state.messages.map((x) => {
                return(<Message time={x.time} msg={x.text} />)
            })}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <label>
              Message:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form> 
          </div>
        </section>
      )
    }else {
      return (
        <section  className="clearfix col-md-offset-3 col-md-9">
          <h2>Chat</h2>
          <div id="chat">
          <form onSubmit={this.handleSubmit}>
            <label>
              Message:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form> 
          </div>
        </section>
      )
    }
  }
}

class Message extends Component{
  render(){
    return(
      <li data={this.props.time}>{this.props.msg}</li>
    )
  }
}

export default Chat;