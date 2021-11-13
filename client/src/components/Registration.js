import React, {useState} from 'react';


const Registration = () => {

const [user, setUser] = useState({avatar: "", username: "", email: "", password: "", repeat_password: ""})
const [error, setError] = useState("");

const handleInputChange = (event) => {
event.preventDefault();
 const {value, name} = event.target;
setUser((state) => ({...state, [name]: value}))
}

const handleSubmit = (event) => {
event.preventDefault();
register();

}

const register = async () => {
     try {
        const response = await fetch("/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      const newUser = await response.json();
      
   //Where is this data going 
    } catch (error) {
      setError(error.message);
    }
}

const {avatar, username, email, password, repeat_password} = user;

    /*email
username
password
password x2
checkbox agree to terms
submit button
avatar
alert component - fill all the inputs!

handleChange
handleSubmit
alert component - successfully registered */

    return (

        <div className="registration">
            <div className="container mt-4">
            <h1>Registration</h1>
            <form className="form-control" onSubmit={handleSubmit}>

                
                <label className="form-label">Choose an avatar</label>
            


                <div className="col-6 mt-4">
                <label className="form-label mt-4">Username</label>
                <input 
                className="form-control"
                type="text"
                name="username"
                value={username}
                required
                onChange={(e)=>handleInputChange(e)}
                />
                </div>

                <div className="col-6 mt-4">
                <label className="form-label mt-4">Email</label>
                <input
                className="form-control"
                type="email"
                name="email"
                value={email}
                required
                 onChange={(e)=>handleInputChange(e)}
                />
                </div>

                <div className="col-6 mt-4">
                <label className="form-label mt-4">Password</label>
                <input 
                className="form-control"
                type="password"
                name="password"
                value={password}
                required
                 onChange={(e)=>handleInputChange(e)}
                />
                </div>

                <div className="col-6 mt-4">
                <label className="form-label mt-4">Repeat Password</label>
                <input 
                className="form-control"
                type="password"
                name="repeat_password"
                value={repeat_password}
                required
                 onChange={(e)=>handleInputChange(e)}
                />
                </div>

                <div className="col-6 mt-4">
                <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault" >
    I agree with Terms of Use
  </label>
</div>
</div>
<div className="col-6 mt-4">
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
            </form>
            
            </div>
        </div>
    );
}

export default Registration;
