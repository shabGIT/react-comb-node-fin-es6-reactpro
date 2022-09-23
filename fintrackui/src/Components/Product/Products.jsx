import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Grid } from "@mui/material";

export const Products = () => {
  const [prod, setProd] = useState("");
  const [pet, setPet] = useState("");

  const dispatch = useDispatch();
  const handleAdd = () => {
    // logic for diapatch to store
    dispatch({
      type: "ADD_PRODUCTS",
      data: prod,
    });
  };
  const handleClick = () => {
    dispatch({
      type: "ADD_PET",
      data: pet,
    });
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            label="Add Product"
            fullWidth
            onChange={(e) => setProd(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleAdd} fullWidth>
            Add
          </Button>
        </Grid>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            label="Add Pet"
            fullWidth
            onChange={(e) => setPet(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button onClick={handleClick} variant="contained" fullWidth>
            Add
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
