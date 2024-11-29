import React from "react";
import TextField from "@mui/material/TextField";
import "./Userinfo.css";
import { Button } from "@mui/material";
export default function UserInfo({ name, setName, setStep }) {
  const clicked = () => {
    console.log(name, "name");
    setStep(2);
  };
  const handleChange = (event) => {
    setName({ ...name, firstName: event.target.value });
  };
  return (
    <div className="userinfo-main">
      <div className="userinfo-container">
        <TextField
          id="outlined-controlled"
          label="firstName"
          value={name?.firstName}
          onChange={handleChange}
        />
        <TextField
          id="outlined-controlled"
          label="lastName"
          value={name?.lastName}
          onChange={(event) => {
            setName({ ...name, lastName: event.target.value });
          }}
        />
        <Button variant="contained" onClick={clicked}>
          Next
        </Button>
      </div>
    </div>
  );
}
