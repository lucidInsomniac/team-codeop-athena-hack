import React from 'react';

const Login = () => {

    return (

        <div className="login">
            <h1>Login</h1>
            <form>
                <label>Username</label>
                <input 
                type="text"
                name="username"
                required />
                
                <label>Password</label>
                <input
                type="password"
                name="password"
                required />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
