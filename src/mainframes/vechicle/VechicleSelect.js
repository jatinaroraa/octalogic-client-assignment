import React from "react";
import "./vechicleforrent.css";
import RadioButtonsGroup from "../../components/radioButtons/RadioButton";
import { Button } from "@mui/material";
export default function VechicleSelect({ type, setType }) {
  const clicked = () => {
    //
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
    <div className="VechicleSelect-main">
      <div className="VechicleSelect-container">
        <h3>select your vechile </h3>
        <RadioButtonsGroup
          list={vechiclesList}
          value={type}
          setValue={setType}
        />
        <Button variant="contained" onClick={clicked}>
          Booked
        </Button>
      </div>
    </div>
  );
}
