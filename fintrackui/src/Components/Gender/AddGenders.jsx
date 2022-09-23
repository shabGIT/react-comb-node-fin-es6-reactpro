import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const AddGender = () => {
  const [gen, setGen] = useState("");

  const handleAdd = () => {
    axios.post("http://localhost:3030/addgenders", {
      genId: uuidv4(),
      genName: gen,
      isActive: true,
    });
    setGen("");
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextField
            label="Add Gender"
            variant="outlined"
            value={gen}
            fullWidth
            onChange={(e) => setGen(e.target.value)}
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
