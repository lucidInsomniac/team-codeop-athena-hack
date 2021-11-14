import React from "react";
import './MoodForm.css'
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
      <Form className="moodform-container" onSubmit={(e) => handleSubmit(e)}>
        <FormGroup className="row" id="calendar-row">
          Select Date:
          <div id="calendar-div">
          <FormControl
            id="calendar-input"
            type="date"
            value={dateadded}
            name="dateadded"
            onChange={(e) => handleInputChange(e)}
            className="m-auto"
          />
          </div>
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
          <div id="emoji-row">
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
          </div>
        </FormGroup>
        <FormGroup className="row" id="question-row">
          <div id="form-question">
          <FormLabel>Are you sleeping properly? </FormLabel>
          </div>
          <div  id="radio">
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
          </div>
          <div  id="radio">
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
          </div>
        </FormGroup>
        <FormGroup className="row" id="question-row">
          <div id="form-question">
          <FormLabel> Any abuse of substances ? </FormLabel>
          </div>
          <div  id="radio">
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
          </div>
          <div  id="radio">
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
          </div>
        </FormGroup>
        <FormGroup className="row" id="question-row">
          <div id="form-question">
          <FormLabel>Mood swings ? (...frustration, anxiety, etc.) </FormLabel>
          </div>
          <div  id="radio">
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
          </div>
          <div  id="radio">
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
          </div>
        </FormGroup>
        <FormGroup className="row" id="question-row">
        <div id="form-question">
          <FormLabel>Are you reaching out to your friends?</FormLabel>
          </div>
          <div  id="radio">
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
          </div>
          <div  id="radio">
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
          </div>
        </FormGroup>
        {/* <FormRange /> */}
        {/* <InputRange
            maxValue={20}
            minValue={0}
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
          /> */}
          <div id="moodform-btn">
        <Button type="submit" id="mood-btn" data-toggle="modal" data-target="#exampleModal">Submit</Button>
        </div>
        <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Entrt Complete</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Head to Your Dashboard</p>
      </div>
      <div class="modal-footer">
       
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </Form>
      <div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Entrt Complete</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Head to Your Dashboard</p>
      </div>
      <div class="modal-footer">
       
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default MoodForm;
