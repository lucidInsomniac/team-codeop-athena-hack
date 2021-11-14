import React, { useContext } from 'react';
import context from "../context";


const ProfilePage = () => {
    let {user} = useContext(context);
    return (
        <div>
            {
              user ? 
              (
                <div className="center-profile">
                <div className="profile-page">
                    <div className="profile-card">
                      <div>
                    <h1>Profile Page</h1>
                    </div>
                   <img src={`/images/1.png`} alt="profile avatar" className="img-thumbnail"/>
                   <h5> Hey, {user.username} !</h5>
                   <div className="profile-card"></div>
                  <div>Name: {user.username}</div>
                  <div>Email address: {user.email}</div>
                  <div>Member since: {user.createdOn.substring(0, 10)}</div>
                  </div>
                </div>
                </div>
              )  : (null)
            }
        </div>
    
    );
}

export default ProfilePage;
