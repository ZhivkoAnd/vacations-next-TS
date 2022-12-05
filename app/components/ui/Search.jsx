import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

export default function InputWithIcon({ inputQuery, setInputQuery }) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Input
        sx={{ color: "white" }}
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <AccountCircle sx={{ color: "white" }} />
          </InputAdornment>
        }
        placeholder="Search vacation…"
        inputProps={{ "aria-label": "search" }}
        value={inputQuery}
        onChange={(e) => setInputQuery(e.target.value)}
        className="material-input"
      />
    </Box>
  );
}
