import React from 'react';
import "./App.css";

const Login = (props) => {

        return (
            <div className="login">
                <div className="text">
                    <input type="text" name="wish" id="wish" value={props.wish} />
                    <label htmlFor="wish">Your Wish/ Goal/ Requirement</label>
                </div>
                <div className="text">
                    <input type="text" name="model" id="model" value={props.model} />
                    <label htmlFor="model">Your Role Model</label>
                </div>
                <div className="text">
                    <input type="text" name="why" id="why" value={props.why}/>
                    <label htmlFor="why">Why is that a wish</label>
                </div>
                <div className="text">
                    <textarea name="steps" id="steps" cols="30" rows="10" value={props.steps} ></textarea>
                    <input type="text" name="steps" id="steps" value={props.steps} />
                </div>
                <button onClick={() => window.location.reload()}>Sign Out</button>
            </div>
        )
}

export default Login
