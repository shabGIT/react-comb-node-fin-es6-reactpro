import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, TextField, Button } from "@mui/material";

export const Registration = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleSubmit = () => {
    // sessionStorage.setItem("city", "pune");
    // sessionStorage.setItem("pet", "cat");
    sessionStorage.setItem("firstname", fname);
    sessionStorage.setItem("lastname", lname);
  };

  useEffect(() => {
    setFname(sessionStorage.getItem("firstname"));
    setLname(sessionStorage.getItem("lastname"));
  }, []);

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              First Name:
            </Grid>

            <Grid item xs={9}>
              <TextField
                value={fname}
                label="First Name"
                variant="outlined"
                fullWidth
                onChange={(e) => setFname(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={3}>
              Last Name:
            </Grid>
            <Grid item xs={9}>
              <TextField
                value={lname}
                label="Last Name"
                variant="outlined"
                fullWidth
                onChange={(e) => setLname(e.target.value)}
              ></TextField>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained">Cancel</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
