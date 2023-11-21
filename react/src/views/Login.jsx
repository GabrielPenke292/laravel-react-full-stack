export default () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <h1 className="title">Login into your accout</h1>
                <form action="" onSubmit={onSubmit}>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered? <a href="/signup">Create an account</a>
                    </p>
                </form>
            </div>
        </div>
    );
};
