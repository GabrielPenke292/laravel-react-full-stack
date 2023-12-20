import React, { useEffect, useState } from "react";
import { Form, useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";

const UserForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(null);
    const [user, setUser] = useState({
        id: null,
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    if (id) {
        // setLoading(true);
        useEffect(() => {
            axiosClient
                .get(`/users/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setUser(data.data);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (user.id) {
            axiosClient
                .put(`/users/${user.id}`, user)
                .then(() => {
                    navigate("/users");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        } else {
            axiosClient
                .post(`/users`, user)
                .then(() => {
                    navigate("/users");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        }
    };

    return (
        <>
            {user.id && <h1>Update User: {user.name}</h1>}
            {!user.id && <h1>New User</h1>}

            <div className="card animated fadeInDown">
                {loading && <div className="text-center">Loading...</div>}

                {errors && (
                    <div className="alert alert-danger">
                        {Object.keys(errors).map((key) => (
                            <p key={key}>{errors[key][0]}</p>
                        ))}
                    </div>
                )}

                {!loading && (
                    <form onSubmit={onSubmit}>
                        <input
                            value={user.name}
                            onChange={(ev) =>
                                setUser({ ...user, name: ev.target.value })
                            }
                            type="text"
                            placeholder="name"
                        />
                        <input
                            value={user.email}
                            onChange={(ev) =>
                                setUser({ ...user, email: ev.target.value })
                            }
                            type="email"
                            placeholder="Email"
                        />
                        <input
                            onChange={(ev) =>
                                setUser({ ...user, password: ev.target.value })
                            }
                            type="password"
                            placeholder="Password"
                        />
                        <input
                            onChange={(ev) =>
                                setUser({
                                    ...user,
                                    password_confirmation: ev.target.value,
                                })
                            }
                            type="password"
                            placeholder="Password Confirmation"
                        />
                        <button className="btn">Save</button>
                    </form>
                )}
            </div>
        </>
    );
};

export default UserForm;
