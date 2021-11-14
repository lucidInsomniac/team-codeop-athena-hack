import React, { useEffect, useState } from "react";
import { Button, Card, CardTitle } from "react-bootstrap";

const Dashboard = (props) => {
  useEffect(() => {
    getEntries();
  }, []);

  const [moodEntries, setMoodEntries] = useState([
    {
      date: "",
      mood: "",
      sleeping: "",
      substances: "",
      swings: "",
      friends: "",
    },
   
  ]);
 
  const [error, setError] = useState("");

  //GET
   const getEntries = async () =>{
       try{
  const response = await fetch("./mood");
  const entries = await response.json();
  entries.map((entry, i) =>{
  if(entry.mood === 1) return entry.mood ===0;
  if(entry.sleeping === "Y") return entry.sleeping === -1;
  if(entry.substances === "Y")return entry.substances === -1;
  if(entry.swings === "Y")return entry.swings === -1;
  if(entry.friends === "N") return entry.friends === -1;
  })
  setMoodEntries(entries);
       }
  catch(err){
         setError(err);
       }

   }
  const { mood, sleeping, substances, swings, friends } = moodEntries;


  return (
    <div className="calendar-summary container">
      <h1 className="text-bold">Start your journey to wellness</h1>
      <div className="row">
        {moodEntries &&
          moodEntries.map((entry, i) => (
            <Card key={i} className="col mx-2 p-2">
              <p>Day {i + 1}</p>
              <p className="">
                {+entry.mood +
                  +entry.sleeping +
                  +entry.substances +
                  +entry.swings +
                  +entry.friends ===
                -4 ? (
                  <span className="material-icons-outlined text-red big">
                    sick
                  </span>
                ) : +entry.mood +
                    +entry.sleeping +
                    +entry.substances +
                    +entry.swings +
                    +entry.friends ===
                  4 ? (
                  <span className="material-icons-outlined text-warning big">
                    sentiment_neutral
                  </span>
                ) : +entry.mood +
                    +entry.sleeping +
                    +entry.substances +
                    +entry.swings +
                    +entry.friends <
                  4 ? (
                  <span className="material-icons-outlined text-danger big">
                    sentiment_very_dissatisfied
                  </span>
                ) : (
                  <span className="material-icons-outlined text-success big">
                    sentiment_very_satisfied
                  </span>
                )}
              </p>
            </Card>
          ))}
      </div>
 
    </div>
  );
};

export default Dashboard;