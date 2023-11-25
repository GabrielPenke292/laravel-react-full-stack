import React, { useRef } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const { setUser, setToken } = useStateContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: nameRef.current.value,
            password: nameRef.current.value,
            password_Confirmation: nameRef.current.value,
        };

        axiosClient
            .post("/signup", payload)
            .then(({ data }) => {
                setToken(data.token);
                setUser(data.user);
            })
            .catch((err) => {
                const response = err.response;
                console.log(err);
                if (response && response.status === 422) {
                    console.log(response.data.errors);
                }
            });
    };

    return (
        <form action="" onSubmit={onSubmit}>
            <h1 className="title">Sign up for free</h1>
            <input ref={nameRef} type="text" placeholder="Full Name" />
            <input ref={emailRef} type="email" placeholder="Email Address" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <input
                ref={passwordConfirmationRef}
                type="password"
                placeholder="Password confirmation"
            />
            <button className="btn btn-block">Sign Up</button>
            <p className="message">
                Already Registered? <a href="/login">Sign In</a>
            </p>
        </form>
    );
};

export default Signup;
