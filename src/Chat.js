import React, { Component } from 'react';
import './Chat.css';

class Chat extends Component{
  render(){
    return (
<<<<<<< HEAD
      <section  className="clearfix col-md-offset-3 col-md-9">
        <h2>Chat</h2>
        <div id="chat">
        <ul>
          {this.props.messages.map((x) => {
            return(<Message time={x.time} msg={x.message} />)
=======
      <section id="chat" className="row">
        <div className="col-md-10">
        <h2>Chat</h2>
        <ul>
          {this.props.messages.map((x) => {
            return(<Message time= {x.time} msg={x.message} />)
>>>>>>> a6472cde4a3738491d6e74285982378310d553c1
          })}
        </ul>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form> 
        </div>
      </section>
    )
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