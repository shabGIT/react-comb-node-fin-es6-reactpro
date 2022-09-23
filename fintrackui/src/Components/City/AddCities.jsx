import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const AddCities = () => {
  const [cit, setCit] = useState("");

  const handleAdd = () => {
    axios.post("http://localhost:3030/addcities", {
      cityId: uuidv4(),
      cityName: cit,
      isActive: true,
    });
    setCit("");
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextField
            label="Add City"
            variant="outlined"
            value={cit}
            fullWidth
            onChange={(e) => setCit(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleAdd} fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
