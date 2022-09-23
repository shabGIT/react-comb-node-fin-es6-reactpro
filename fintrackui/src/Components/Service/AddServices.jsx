import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const AddServices = () => {
  const [ser, setSer] = useState("");

  const handleAdd = () => {
    axios.post("http://localhost:3030/addservices", {
      sId: uuidv4(),
      sName: ser,
      isActive: true,
    });
    setSer("");
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextField
            label="Add Service"
            variant="outlined"
            value={ser}
            fullWidth
            onChange={(e) => setSer(e.target.value)}
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
