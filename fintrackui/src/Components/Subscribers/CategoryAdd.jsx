import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const CategoryAdd = () => {
  const [cat, setCat] = useState("");

  const handleAdd = () => {
    axios.post("http://localhost:3030/addcategory", {
      catId: uuidv4(),
      catName: cat,
      isActive: true,
    });
    setCat("");
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextField
            label="Add Category"
            variant="outlined"
            value={cat}
            fullWidth
            onChange={(e) => setCat(e.target.value)}
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
