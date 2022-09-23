import React, { useEffect, useState } from "react";
import { Grid, Button, Card, CardContent, TextField } from "@mui/material";

export const Payment = () => {
  const [pay, setPay] = useState("");

  const handleSubmit = () => {
    sessionStorage.setItem("payment", pay);
    setPay(sessionStorage.getItem("payment"));
  };
  // sessionStorage.setItem("userInfo", {
  //   useName: "name",
  //   Phone: 9815454656,
  //   Email: "jdbfjdb@gmail.com", 
  // });
  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              FullName:
            </Grid>
            <Grid item xs={9}>
              <h2>
                {" "}
                {sessionStorage.getItem("firstname")}{" "}
                {sessionStorage.getItem("lastname")}
              </h2>
            </Grid>

            <Grid item xs={3}>
              Payment:
            </Grid>
            <Grid item xs={9}>
              <TextField
                onChange={(e) => setPay(e.target.value)}
                label="payment"
                variant="outlined"
                fullWidth
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
