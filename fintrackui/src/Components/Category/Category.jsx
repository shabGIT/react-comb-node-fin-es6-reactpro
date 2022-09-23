import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { Display } from "../Display/Display";
import { CategoryAdd } from "../Subscribers/CategoryAdd";

export const Category = () => {
  return (
    <>
      <Card sx={{ bgcolor: "pink" }}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Display collName={"categories"} fields={["catName"]} />
            </Grid>
            <Grid item xs={6}>
              <Card>
                <CardContent>
                  <CategoryAdd />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};
