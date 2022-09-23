import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Display } from "../Display/Display";
import { AddGender } from "./AddGenders";

export const Genders = () => {
  return (
    <>
      <Card sx={{ bgcolor: "grey" }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Display collName={"genders"} fields={["genName"]} />
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <AddGender />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
