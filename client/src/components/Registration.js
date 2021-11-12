import React from 'react';

const Registration = () => {

    return (

        <div className="registration">
            <h1>Registration</h1>
            <form>
                <label>Username</label>
                <input 
                type="text"
                name="username"
                required
                />
                <label>Email</label>
                <input 
                type="email"
                name="email"
                required
                />
                <label>Password</label>
                <input 
                type="password"
                name="password"
                required
                />
                <label>Repeat Password</label>
                <input 
                type="password"
                name="repeat_password"
                required
                />
                <button type="submit"></button>
            </form>
        </div>
    );
}

export default Registration;
