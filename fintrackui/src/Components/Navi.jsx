import React from "react";
import { Grid, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

export const Navi = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Link to="/" className="link">
            <Button variant="contained">Home</Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/subscribers" className="link">
            {" "}
            <Button variant="contained">Subscribers</Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/category" className="link">
            {" "}
            <Button variant="contained">Category</Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/gender" className="link">
            {" "}
            <Button variant="contained">Gender</Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/services" className="link">
            {" "}
            <Button variant="contained">Service</Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/cities" className="link">
            {" "}
            <Button variant="contained">City</Button>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link to="/registration" className="link">
            {" "}
            <Button variant="contained">Registration</Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/payments" className="link">
            <Button variant="contained">Payment</Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/pro" className="link">
            <Button variant="contained">Products</Button>
          </Link>
        </Grid>

        <Grid item xs={2}>
          {localStorage.getItem("username") ? (
            <b>{localStorage.getItem("username")}</b>
          ) : (
            <TextField
              label="user Name"
              variant="outlined"
              fullWidth
              onChange={(e) => localStorage.setItem("username", e.target.value)}
            ></TextField>
          )}
        </Grid>
        <Grid item={1}>
          <Button
            variant="contained"
            onClick={() => localStorage.clear("username")}
          >
            Logout
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
