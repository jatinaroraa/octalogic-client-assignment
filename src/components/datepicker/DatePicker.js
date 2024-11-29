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
  datesFilter,
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
        shouldDisableDate={(date) => {
          // List of dates to disable
          const disabledDates = datesFilter;

          // Convert both dates to only the date part in ISO format
          const formattedDate = date.toISOString().split("T")[0];
          const formattedDisabledDates = disabledDates.map(
            (d) => d.split("T")[0]
          );

          // Disable the date if it matches any in the list
          return formattedDisabledDates.includes(formattedDate);
        }}
      />
    </LocalizationProvider>
  );
}
