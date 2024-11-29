import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function LinearLoaderBar() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 10)); // Reset progress when it reaches 100
  };

  return (
    <Box
      sx={{
        width: "50%",
        margin: "auto",
        mt: 4,
        textAlign: "center",
        padding: 2,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        backgroundColor: "#fff",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Loading Level: {progress}%
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 10, borderRadius: 5, mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={increaseProgress}>
        Increase Progress
      </Button>
    </Box>
  );
}
