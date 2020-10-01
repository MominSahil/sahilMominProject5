import React from 'react';
import "./App.css";

const Login = (props) => {

        return (
            <div className="wrapper">
                <blockquote>“Goals. There’s no telling what you can do when you get inspired by them. There’s no telling what you can do when you believe in them. And there’s no telling what will happen when you act upon them.” —Jim Rohn</blockquote>
                <div className="login">
                    <div className="text">
                        <input type="text" name="wish" id="wish" value={props.wish} readOnly/>
                        <label htmlFor="wish">Your Wish/ Goal/ Requirement</label>
                    </div>
                    <div className="text">
                        <input type="text" name="model" id="model" value={props.model} readOnly/>
                        <label htmlFor="model">Your Role Model</label>
                    </div>
                    <div className="text">
                        <input type="text" name="why" id="why" value={props.why} readOnly/>
                        <label htmlFor="why">Why is that a wish</label>
                    </div>
                    <div className="text">
                        <textarea name="steps" id="steps" cols="30" rows="10" value={props.steps} readOnly></textarea>
                        <input type="text" name="steps" id="steps" value={props.steps} />
                    </div>
                    <button onClick={props.handleReset}>Sign Out</button>
                </div>
            </div>
        )
}

export default Login
