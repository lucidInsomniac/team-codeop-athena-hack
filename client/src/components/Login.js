import React, {useState} from 'react';

const Login = () => {

let [username, setUsername] = useState("")
let [password, setPassword] = useState("")
let [alert, setAlert] = useState("")
let [user, setUser] = useState(null);

const handleChangeUsername = (e) => setUsername(e.target.value);
const handleChangePassword = (e) => setPassword(e.target.value);
const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
}

const loginUser = async () => {
    if (username && password) {
        try {
            const res = await fetch(`/user/${username}`);
            const user = await res.json();
            setUser(user);
            console.log(user)

        } catch (error) {
            console.log(error[0])
            setAlert(error[0]);
        }

    } else {
        setAlert("Please fill all the inputs.")
    }
}
    return (

        <div className="login">
            <h1>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Username</label>
                <input 
                type="text"
                name="username"
                value={username}
                required 
                onChange={(e) => handleChangeUsername(e)}
                />
                
                <label>Password</label>
                <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => handleChangePassword(e)}
                required 
                />

                <button type="submit">Login</button>
            </form>
            <div><a href="#" >Forgot my password</a></div>
            <div>{alert && 
                <p>{alert}</p>
            
            }</div>
        </div>
    );
}

export default Login;
