import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

export default function DatePickerForVechicle({
  selectedDate,
  setSelectedDate,
  minDate,
  label,
}) {
  const handleDateChange = (newValue) => {
    setSelectedDate(newValue);
    console.log("Selected Date:", newValue?.toISOString());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={selectedDate}
        onChange={handleDateChange}
        minDate={minDate}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
