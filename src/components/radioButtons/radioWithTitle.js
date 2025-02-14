import React from "react";
// import "./vechicleforrent.css";
import RadioButtonsGroup from "../../components/radioButtons/RadioButton";
import { Button } from "@mui/material";
import "./radio.css";
import { toast } from "react-toastify";
export default function RadioWithTitle({
  type,
  setType,
  title,
  list,
  buttonTitle,
  setStep,
  stepNumber,
  callFunction,
}) {
  const clicked = () => {
    //
    if (!type) {
      return toast.error("Please select the option!");
    }
    setStep(stepNumber);
    // callFunction(type);
  };
  const vechiclesList = [
    {
      label: "Car",
      value: "car",
    },
    {
      label: "Bike",
      value: "bike",
    },
  ];
  return (
    <div className="vechileforrent-main">
      <div className="vechileforrent-container">
        <h3>{title}</h3>
        <RadioButtonsGroup list={list} value={type} setValue={setType} />

        <Button variant="contained" onClick={clicked}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
}
