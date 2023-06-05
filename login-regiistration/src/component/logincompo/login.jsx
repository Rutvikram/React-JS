import React, { useState } from 'react';
import "./login.css"
import CustomHook from "./../Hooks/customHooks"
import { Link } from "react-router-dom";

const login = () => {
    const { handleChange, inp, error } = CustomHook({}, { "usernameError": "" }, { "passwordError": "" });
    // const [form, setForm]= useState({})
    console.log(inp);
    const newUser = (event) => {
        event.preventDefault()
        console.log(login);
        // fetch(`http://localhost:5000/posts?username=${login.usernameError}&password=${login.passwordError}`).
        //     then((res) => res.json()).then((response) => { console.log(response); })
        const response = fetch("http://localhost:5000/posts", {
            method: "POST",
            // headers: {
            //     "Content-Type": "application/json"
            // },
            body: JSON.stringify(inp)
        });
    }
    // console.log(handleChange);
    return (
        <>
            <section className='login-set'>
                <div id="container">
                    {/* Cover Box */}
                    <div id="cover">
                        <Link className='position-absolute z-index-1 end-0 p-2' to="/"><i className='fa fa-home'></i></Link>
                        {/* Sign Up Section */}
                        <h1 className="sign-up">Hello, Friend!</h1>
                        <p className="sign-up">
                            Enter your personal details
                            <br /> and start a journey with us
                        </p>
                        <a className="button sign-up" href="#cover">
                            Sign Up
                        </a>
                        {/* Sign In Section */}
                        <h1 className="sign-in">Welcome Back!</h1>
                        <p className="sign-in">
                            To keep connected with us please
                            <br /> login with your personal info
                        </p>
                        <br />
                        <a className="button sub sign-in" href="#">
                            Sign In
                        </a>
                    </div>form action=""
                    {/* Login Box */}
                    <div id="login">
                        <h1>Sign In</h1>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-google"></i></a>
                        <a href="#"><i className="fa-brands fa-apple apple"></i></a>
                        <p>or use your email account:</p>
                        {JSON.stringify(inp)}
                        {/* {JSON.stringify(error.usernameError)} */}
                        <form className='setform' action=''>
                            <input type="text" name='username' onBlur={handleChange} placeholder="Username or E-mali" autoComplete="off" required />
                            {error.usernameError ? <span style={{ color: "red" }}>username is required !</span> : ""}
                            {/* {error.reqaid} */}
                            {/* {this.error} */}
                            <input type="password" name='password' onBlur={handleChange} placeholder="Password" autoComplete="off" required />
                            {/* {JSON.stringify(error.passwordError)} */}
                            {error.passwordError ? <span style={{ color: "red" }}>password is required !</span> : ""}
                            <br />
                            <a id="forgot-pass" href="#">Forgot your password?</a>
                            <br />
                            {/* <input className="submit-btn" type="submit" defaultValue="Sign In" /> */}
                            <button className="submit-btn" defaultValue="Sign In"> Login</button>
                        </form>
                    </div>
                    {/* Register Box */}
                    <div id="register">
                        <h1>Create Account</h1>
                        <a href="#"><i className="fa-brands fa-facebook"></i></a>
                        <a href="#"><i className="fa-brands fa-google"></i></a>
                        <a href="#"><i className="fa-brands fa-apple apple"></i></a>
                        <p>or use your email for registration:</p>
                        <form className='setform' action=''>
                            <input name='username' type="username" onBlur={handleChange} placeholder="Username" autoComplete="off" required />
                            <br />
                            <input name='email' type="email" onBlur={handleChange} placeholder="E-mali" autoComplete="off" required />
                            <br />
                            <input name='password' type="password" onBlur={handleChange} placeholder="Password" autoComplete="off" required />
                            <br />
                            <input className="submit-btn" onClick={newUser} type="submit" defaultValue="Sign Up" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default login;