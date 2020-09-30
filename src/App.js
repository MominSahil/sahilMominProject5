import React, { Component } from 'react';
import './App.css';
import firebase from './firebase';
import Login from './Login';
import SignUp from './SignUp';

class App extends Component {
  constructor()
  {
    super();
    this.state = {
      username: "",
      password: "",
      wish: "",
      model: "",
      why: "",
      steps: "",
      userList: [],
      showLogin: false,
      showSignUp: false,
      loginId: "",
      pass: "",
      showHide: true,
      counter: 0
    }
  }
  componentDidMount()
  {
    // create reference to firebase
    const dbRef = firebase.database().ref();
    dbRef.on("value", (response) => {
        // organizing data in firebase
        const newState = [];
        const data = response.val();
        for (const key in data) {
            newState.push({
                key: key,
                title: data[key],
                username: data[key].username,
                password: data[key].password,
                model: data[key].model,
                wish: data[key].wish,
                why: data[key].why,
                steps: data[key].steps
            });
        }
        // update React state for new user
        this.setState({
            userList: newState
        });
    })
  }

  // grabbing value in input field on change
  handleChange = (e) => {
    this.setState({
     [e.target.id] : e.target.value
    });
  }
  
  // checking if user exists and then getting data from firebase
  login = (e) => {
    e.preventDefault();
    for (const key in this.state.userList) {
      if (this.state.loginId === "" || this.state.pass === ""){
        alert("Username/password necessary for logging in.");
        return false;
      } else if (this.state.loginId === this.state.userList[key].username) {
        if (this.state.pass === this.state.userList[key].password) {
          this.setState ({
            username: this.state.userList[key].username,
            wish: this.state.userList[key].wish,
            model: this.state.userList[key].model,
            steps: this.state.userList[key].steps,
            why: this.state.userList[key].why,
            showLogin: true,
            showSignUp: false
          });
          return null;
        } else {
          this.setState ({
            showLogin: false,
            showSignUp: false
          })
          alert("Username/password does not match. Please try again.");
          return null;
        }
      }
    }
    alert("Username/password does not match. Please try again.");
  }

  // checking for signUp
  signUp = (e) => {
    e.preventDefault();
    for (const key in this.state.userList) {
      if (this.state.loginId === "" || this.state.pass === ""){
        alert("Username/password necessary for signing up.");
        return false;
      }
      if (this.state.loginId === this.state.userList[key].username) {
          alert("Username already exist. Please try different username");
          return false;
      }
    }
    const username = this.state.loginId;
    const password = this.state.pass;
    this.setState({
      username,
      password,
      showLogin: false,
      showSignUp: true
    })
  }

  // Do something here
  // hideOnSubmit = (event) => {
  //   event.preventDefault();
  //   if (this.state.showLogin === true || this.state.showSignUp === true) {
  //     this.setState ({
  //       showHide: false
  //     })
  //   }
  // }

  // submit the data from user to firebase
  newSignUp = (event, wish, model, why, steps) => {
    event.preventDefault();
    // counter used to stop user from resubmitting
    if (this.state.counter !== 0) {
      alert("already submited. Can't resubmit.")
      return null;
    }
    const newObject = {
      username: this.state.username,
      password: this.state.password,
      wish,
      model,
      why,
      steps
    }
    this.setState ({
      counter: 1
    })
    const dbRef = firebase.database().ref();
    // add new record to Firebase
    dbRef.push(newObject);
    alert("Now any time you feel lost, visit Room of Requirement to remind you of your path.")
  }

  
  render(){
    return (
      <div className="App wrapper">
        <h1>Room of Requirement</h1>
        {this.state.showLogin ? null : (
        <form action="submit" className="mainForm" onSubmit={this.hideOnSubmit}>
          <input type="text" id="loginId" placeholder="username" onChange={this.handleChange} value={this.state.loginId}/>
          <input type="password" id="pass" placeholder="password" onChange={this.handleChange} value={this.state.pass}/>
          <div>
            <button onClick={this.login}>Login</button>
            <button onClick={this.signUp}>SignUp</button>
          </div>
        </form>
        )}
        <form action="submit">
          {this.state.showLogin ? (<Login 
          wish={this.state.wish}
          steps={this.state.steps}
          model={this.state.model}
          why={this.state.why}
          />) : null}
          {this.state.showSignUp ? <SignUp handleSignUp={this.newSignUp}/> : null}
        </form>
        <footer><p>Created by Sahil Momin <a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer">@ Juno College</a></p></footer>
      </div>
    );
  }
}

export default App;