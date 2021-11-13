import React from "react";
import {
  FormControl,
  FormGroup,
  FormLabel,
  Form,
  FormCheck,
  Button,
} from "react-bootstrap";
import { useState } from "react";
// import Button from "@restart/ui/esm/Button";
// import ReactDOM from "react-dom";
// import InputRange from 'react-input-range';

const MoodForm = (props) => {
  let [moodData, setMoodData] = useState({
    userid: 1,
    dateadded: "",
    mood: "",
    sleeping: "",
    substances: "",
    swings: "",
    friends: "",
  });
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const { dateadded, mood, sleeping, substances, swings, friends } = moodData;
    setMoodData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(moodData);
    addMood(moodData);
    props.onEntryCb(moodData);
    
  };

  const { dateadded, mood, sleeping, substances, swings, friends } = moodData;
  const addMood = async (moodData) => {
    
    props.onEntryCb(moodData);
    try {
      console.log(moodData);
      const res = await fetch("/moodform/1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(moodData),
      });
      if (!res.ok) throw new Error("There was an error");

      const data = await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="moodform">
      <h1>How are you feeling today?</h1>
      <Form className="container" onSubmit={(e) => handleSubmit(e)}>
        <FormGroup className="row">
          Today is:
          <FormControl
            type="date"
            value={dateadded}
            name="dateadded"
            onChange={(e) => handleInputChange(e)}
            className="m-auto"
          ></FormControl>
        </FormGroup>
        <FormGroup className="row">
          {/* <FormLabel>
            Range 1= <span class="material-icons-outlined">sick</span>- 2={" "}
            <span class="material-icons-outlined">
              sentiment_very_dissatisfied
            </span>
            - 3={" "}
            <span class="material-icons-outlined">sentiment_dissatisfied</span>-
            4= <span class="material-icons-outlined">sentiment_neutral</span>-
            5={" "}
            <span class="material-icons-outlined">
              sentiment_very_satisfied
            </span>
          </FormLabel> */}
          <FormCheck
            label={
              <span class="material-icons-outlined text-primary">sick</span>
            }
            name="mood"
            value="1"
            type="radio"
            id={`inline-radio-1`}
            checked={mood === "1" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
          <FormCheck
            label={
              <span class="material-icons-outlined text-secondary">
                sentiment_very_dissatisfied
              </span>
            }
            name="mood"
            value="2"
            type="radio"
            id={`inline-radio-2`}
            checked={mood === "2" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
          <FormCheck
            label={
              <span class="material-icons-outlined text-danger">
                sentiment_dissatisfied
              </span>
            }
            name="mood"
            value="3"
            type="radio"
            id={`inline-radio-3`}
            checked={mood === "3" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
          <FormCheck
            label={
              <span class="material-icons-outlined text-warning">
                sentiment_neutral
              </span>
            }
            name="mood"
            value="4"
            type="radio"
            id={`inline-radio-4`}
            checked={mood === "4" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
          <FormCheck
            label={
              <span class="material-icons-outlined text-success">
                sentiment_very_satisfied
              </span>
            }
            name="mood"
            value="5"
            type="radio"
            id={`inline-radio-5`}
            checked={mood === "5" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
        </FormGroup>
        <FormGroup className="row">
          <FormLabel>Are you sleeping properly? </FormLabel>
          <Form.Check
            inline
            label="Yes"
            name="sleeping"
            value="Yes"
            type="radio"
            id={`inline-radio-1`}
            checked={sleeping === "Yes" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
          <Form.Check
            inline
            label="No"
            name="sleeping"
            type="radio"
            value="No"
            id={`inline-radio-2`}
            checked={sleeping === "No" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
        </FormGroup>
        <FormGroup className="row">
          <FormLabel> abuse of substances </FormLabel>
          <Form.Check
            inline
            label="Yes"
            name="substances"
            type="radio"
            id={`inline-radio-1`}
            value="Yes"
            checked={substances === "Yes" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
          <Form.Check
            inline
            label="No"
            name="substances"
            type="radio"
            id={`inline-radio-2`}
            value="No"
            checked={substances === "No" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
        </FormGroup>
        <FormGroup className="row">
          <FormLabel>mood swings - frustration etc </FormLabel>
          <Form.Check
            inline
            label="Yes"
            name="swings"
            type="radio"
            id={`inline-radio-1`}
            value="Yes"
            checked={swings === "Yes" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
          <Form.Check
            inline
            label="No"
            name="swings"
            type="radio"
            id={`inline-radio-2`}
            value="No"
            checked={swings === "No" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
        </FormGroup>
        <FormGroup className="row">
          <FormLabel>
            are you reaching out with your friends less or more than usual
          </FormLabel>
          <Form.Check
            inline
            label="Yes"
            name="friends"
            type="radio"
            id={`inline-radio-1`}
            value="Yes"
            checked={friends === "Yes" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
          <Form.Check
            inline
            label="No"
            name="friends"
            type="radio"
            id={`inline-radio-2`}
            value="No"
            checked={friends === "No" ? true : false}
            onChange={(e) => handleInputChange(e)}
          />
        </FormGroup>
        {/* <FormRange /> */}
        {/* <InputRange
            maxValue={20}
            minValue={0}
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
          /> */}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default MoodForm;
