import one from "./Icons/one.png";
import two from "./Icons/two.png";
import three from "./Icons/three.png";
import React, {useState} from 'react';
import "./Registration.css";


const Registration = (props) => {
const [user, setUser] = useState({avatar_group: "", username: "", email: "", password: "", repeat_password: ""})
const [error, setError] = useState("");
const handleInputChange = (event) => {
event.preventDefault();
 const {value, name} = event.target;
setUser((state) => ({...state, [name]: value}))
}
const handleSubmit = (event) => {
event.preventDefault();
register();
// to test until the get is not working props.onDoneCb(user)
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
      props.onDoneCb(newUser);
      
   //Where is this data going 
    } catch (error) {
      setError(error.message);
    }
}
const {avatar_group, username, email, password, repeat_password} = user;
 
    return (
        <div className="registration">
            <div className="container mt-4">
            <h1>Registration</h1>
             <h3>Choose your avatar</h3>
            <form id="registrationform" onSubmit={handleSubmit}>
            <div className="row mt-4">
               <div id="1" className="card-body">
                    <label htmlFor="flor">
                    <img src={one} alt="avatar_1" className="img-fluid" id="one"/></label>
                     <input id="flor" type="radio" name="avatar_group" value="1" checked={avatar_group === "1" ? true : false} onChange={(e)=>handleInputChange(e)}/> 
                  </div>

     <div id="2" className="card-body">
                 <label htmlFor="hoja">
                     <img src={two} alt="avatar_2" className="img-fluid" id="two"/></label>
                     <input id="hoja" type="radio" name="avatar_group" value="2" checked={avatar_group === "2" ? true : false} onChange={(e)=>handleInputChange(e)}/> 
                     </div> 

                  <div id="3" className="card-body">
                    <label htmlFor="arbol">
                    <img src={three} alt="avatar_3" className="img-fluid" id="three"/></label>
                    <input id="arbol" type="radio" name="avatar_group" value="3" checked={avatar_group === "3" ? true : false} onChange={(e)=>handleInputChange(e)} />
                  </div>
                </div>

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
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e)=>handleInputChange(e)} />
  <label className="form-check-label" htmlFor="flexCheckDefault">
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
