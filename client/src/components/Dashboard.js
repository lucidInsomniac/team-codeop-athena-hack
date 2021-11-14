import React, { useEffect, useState } from "react";
import { Button, Card, CardTitle } from "react-bootstrap";

const Dashboard = (props) => {
  useEffect(() => {
    getSummary();
  }, []);

  const [moodEntries, setMoodEntries] = useState([
    {
      date: "",
      mood: "-5",
      sleeping: "0",
      substances: "0",
      swings: "0",
      friends: "1",
    },
    {
      date: "",
      mood: "1",
      sleeping: "0",
      substances: "0",
      swings: 0,
      friends: 1,
    },
    {
      date: "",
      mood: 3,
      sleeping: 0,
      substances: 0,
      swings: 0,
      friends: 1,
    },
    {
      date: "",
      mood: 6,
      sleeping: 0,
      substances: 0,
      swings: 0,
      friends: 1,
    },
  ]); //esto lo recibimos
  const [summary, setSummary] = useState({}); //lo que {procesamos}
  const [error, setError] = useState("");
  //GET
  //  const getEntries = async () =>{
  //      try{
  // const response = await fetch("./entries");
  //   const data = await response.json();
  //   setMoodEntries(data);
  //      }
  //      catch(err){
  //      }

  //  }
  const { mood, sleeping, substances, swings, friends } = moodEntries;
  const getSummary = () => {};

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