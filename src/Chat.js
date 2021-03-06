import React, { Component } from 'react';
import MessageProvider from './MessageProvider.js'
import firebase from './firebase.js'
import './css/Chat.css';


class Chat extends Component{
  constructor(){
    super();
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
    mProv.sendMessage(this.props.msgGroup, {text: this.state.value}, this.props.currUser)
    this.setState({value: ""})
  }
  componentWillMount(){
    const itemsRef = firebase.database().ref(`/messages/${this.props.msgGroup}`)
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({ key: item,
                        text: items[item].text, 
                        time: items[item].time,
                        user: items[item].user});
      }
      this.setState({messages: newState.reverse()});
    }).bind(this);
  }
  render(){
    if(this.state.messages){
      return (
        <div id="chat" className="clearfix">
          <h2>Chat</h2>
          <ul>
            {
              this.state.messages.map((x) => {
                return(<Message key={x.key} time={x.time} msg={x.text} user={x.user} />)
            })}
          </ul>
          <div className="form-group">
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
            <label className="col-xs-3 control-label">
              Send a Message:
            </label>
            <div className="col-xs-7 text-box">
              <input  id="chat-input" type="text" value={this.state.value} onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-sm btn-success"><i className="glyphicon glyphicon-send"></i></button>
            </form> 
          </div>
        </div>

      )
    }else {
      return (
        <section  className="clearfix col-md-offset-3 col-md-9">
          <h2>Chat</h2>
          <div id="chat">
          <div class="form-group">
            <form id="chat-input" onSubmit={this.handleSubmit}>
            <label>
              Send a Message to the group:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form> 
          </div>         
          </div>
        </section>
      )
    }
  }
}

class Message extends Component{
  render(){
    return(
      <li data={this.props.time}>{this.props.user}: {this.props.msg}
        <br/> <span className="chatTimeStamp"> {this.props.time}</span>
      </li>
    )
  }
}

export default Chat;