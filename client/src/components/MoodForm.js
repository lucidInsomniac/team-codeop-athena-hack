import React from "react";
import { FormControl, FormGroup, FormLabel, Form } from "react-bootstrap";
import ReactDOM from "react-dom";
// import InputRange from 'react-input-range';

const MoodForm = () => {
  return (
    <div className="moodform">
      <h1>How are you feeling today?</h1>
      <Form>
        <FormGroup controlId="formFile" className="mb-3">
          <FormLabel>Default file input example</FormLabel>
          <FormControl type="file" />
        </FormGroup>
        <FormLabel>Range</FormLabel>
        {/* <FormRange /> */}
        {/* <InputRange
        maxValue={20}
        minValue={0}
        value={this.state.value}
        onChange={value => this.setState({ value })} /> */}
      </Form>
    </div>
  );
};

export default MoodForm;
