import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Display } from "../Display/Display";
import { AddCities } from "./AddCities";

export const Cities = () => {
  return (
    <>
      <Card sx={{ bgcolor: "grey" }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Display collName={"cities"} fields={["cityName"]} />
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <AddCities />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
