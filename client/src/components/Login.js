import React from 'react';

const Login = () => {
    return (
        <div>
            <div>
            <h2>Sign Up section</h2>
            <form>
                <label htmlFor="userName">User Name</label><br />
                <input type="text" /> <br />
                <label htmlFor="userName">Password</label><br />
                <input type="text" /> <br />
            </form>
            </div>
            <div>
            <h2>Login section</h2>
            <form>
                <label htmlFor="userName">User Name</label><br />
                <input type="text" /> <br />
                <label htmlFor="userName">Password</label><br />
                <input type="text" /> <br />
            </form>
            </div>
        </div>
    );
};

export default Login;