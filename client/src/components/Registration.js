import React, {useState} from 'react';
// import one from "../public/one.png";
// import two from "../public/two.png";
// import three from "../public/three.png";


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
            <form className="form-control" onSubmit={handleSubmit}>

                <label className="form-label">Choose an avatar</label>
                <div className="row mt-4">
                  <span id="1" className="card-body">
                    <img src="#" alt="avatar_1"/>
                     <input type="radio" name="avatar_group" value="1" checked={avatar_group === "1" ? true : false} onChange={(e)=>handleInputChange(e)}/> 
                  </span>
                  
           
               <span id="2" className="card-body">
                     <img src="#" alt="avatar_2"/>
                     <input type="radio" name="avatar_group" value="2" checked={avatar_group === "2" ? true : false} onChange={(e)=>handleInputChange(e)}/> 
                     </span> 

                  <span id="3" className="card-body">
                    <img src="#" alt="avatar_3"/>
                    <input type="radio" name="avatar_group" value="3" checked={avatar_group === "3" ? true : false} onChange={(e)=>handleInputChange(e)} />
                  </span>
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
