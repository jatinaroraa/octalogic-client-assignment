import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioButtonsGroup from "../../components/radioButtons/RadioButton";
import { Button } from "@mui/material";
import "./vechicleforrent.css";
import DatePickerForVechicle from "../../components/datepicker/DatePicker";
import dayjs from "dayjs";
export default function VechicleForRent({
  type,
  setType,

  setStep,
}) {
  let date = new Date();
  const minDate = dayjs(date);
  const clicked = () => {
    //
    setStep(3);
  };
  const vechiclesList = [
    {
      label: "Car",
      value: 4,
    },
    {
      label: "Bike",
      value: 2,
    },
  ];
  return (
    <div className="vechileforrent-main">
      <div className="vechileforrent-container">
        <h3>No of wheels</h3>
        <RadioButtonsGroup
          list={vechiclesList}
          value={type}
          setValue={setType}
        />

        <Button variant="contained" onClick={clicked}>
          Next
        </Button>
      </div>
    </div>
  );
}
