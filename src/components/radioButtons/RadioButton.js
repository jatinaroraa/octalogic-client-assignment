import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RadioButtonsGroup({ list, value, setValue }) {
  const handleChange = (e) => {
    console.log("change", e.target.value);
    setValue(e.target.value);
  };
  return (
    <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue="female"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        {list.map((items) => {
          return (
            <FormControlLabel
              value={items.value}
              control={<Radio />}
              label={items.label}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}
