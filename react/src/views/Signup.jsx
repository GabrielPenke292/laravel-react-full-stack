import React from "react";

const Signup = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <h1 className="title">Sign up for free</h1>
                <form action="" onSubmit={onSubmit}>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input
                        type="password"
                        placeholder="Password confirmation"
                    />
                    <button className="btn btn-block">Sign Up</button>
                    <p className="message">
                        Already Registered? <a href="/login">Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
