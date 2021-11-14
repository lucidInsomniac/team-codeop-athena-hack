import React, {useState} from 'react';

const Login = (props) => {

let [alert, setAlert] = useState("")
let [login, setLogin] = useState({username: "", password: ""});

const handleInputChange = (e) => {
    e.preventDefault();
    const {value, name} = e.target;
    setLogin((state) => ({...state, [name]: value}))

}

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login)
    loginUser(login);


}

const loginUser = async (login) => {
    if (login.username && login.password) {
        try {
            const res = await fetch(`/user/${login.username}`);
            const user = await res.json();
            props.onLoginCb(user);
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

        <div className="login container">
            <h1>Login</h1>
            <form className="container-sm" onSubmit={(e) => handleSubmit(e)}>
                <div className="mb-3">
                
                    <label className="form-label">Username</label>
                    <input 
                    className="form-control"
                    type="text"
                    name="username"
                    value={login.username}
                    required 
                    onChange={(e) => handleInputChange(e)}
                    />
                </div>
                <div className="mb-3">

                    <label className="form-label">Password</label>
                    <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={(e) => handleInputChange(e)}
                    required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div className="mb-3"><a href="#" >Forgot my password</a></div>
            <div className="mb-3">{alert && 
                <p>{alert}</p>
            
            }</div>
        </div>
    );
}

export default Login;
