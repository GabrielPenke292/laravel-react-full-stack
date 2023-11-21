export default () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <form action="" onSubmit={onSubmit}>
            <h1 className="title">Login into your accout</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="btn btn-block">Login</button>
            <p className="message">
                Not Registered? <a href="/signup">Create an account</a>
            </p>
        </form>
    );
};
