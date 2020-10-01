import React, { Component } from 'react';
import "./App.css";

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            wish: "",
            model: "",
            why: "",
            steps: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    render() {
        const { handleSignUp } = this.props;
        return (
            <div className="wrapper">
                <blockquote>
                    “If you want to be happy, set a goal that commands your thoughts, liberates your energy and inspires your hopes.” —Andrew Carnegie
                </blockquote>
                <div className="signUp">
                    <div className="text">
                        <input type="text" name="wish" id="wish" value={this.state.wish} onChange={this.handleChange} />
                        <label htmlFor="wish">Your Wish/ Goal/ Requirement</label>
                    </div>
                    <div className="text" >
                        <input type="text" name="model" id="model" value={this.state.model} onChange={this.handleChange} />
                        <label htmlFor="model">Your Role Model</label>
                    </div>
                    <div className="text">
                        <input type="text" name="why" id="why" value={this.state.why} onChange={this.handleChange} />
                        <label htmlFor="why">Why is that a wish</label>
                    </div>
                    <div className="text">
                        <textarea name="steps" id="steps" cols="30" rows="10" value={this.state.steps} onChange={this.handleChange} ></textarea>
                        {/* <input type="text" name="steps" id="steps" value={this.state.steps} onChange={this.handleChange} /> */}
                        <label htmlFor="steps">Steps to reach your goal</label>
                    </div>
                    <button onClick={(event) => handleSignUp(event, this.state.wish, this.state.model, this.state.why, this.state.steps)}>Submit</button>
                    <button onClick={this.props.handleReset}>Sign Out</button>
                </div>
            </div>
        )
    }
}

export default SignUp
