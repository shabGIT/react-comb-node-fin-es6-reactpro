import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Display } from "../Display/Display";
import { AddServices } from "./AddServices";

export const Services = () => {
  return (
    <>
      <Card sx={{ bgcolor: "grey" }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Display collName={"services"} fields={["sName"]} />
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <AddServices />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
