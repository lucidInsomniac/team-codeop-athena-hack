import React from 'react';

const Dashboard = (props) => {

    return (

        <div className="dashboard">
            <h1>Dashboard</h1>
         
           <div>
               {
                   props.calendarEntries.map((e) => {
                      return  <h1>{e.friends}</h1>
                   })
               }
           </div>


        </div>
    );
}

export default Dashboard;
