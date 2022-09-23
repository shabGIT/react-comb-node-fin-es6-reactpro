import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const DisplayItem = ({ item, fields }) => {
  return (
    <React.Fragment>
      {fields.map((fld) => (
        <Grid item xs={12 / fields.length}>
          <Card sx={{ bgcolor: "teal", color: "white" }}>
            <CardContent>{item[fld]}</CardContent>
          </Card>
        </Grid>
      ))}
    </React.Fragment>
  );
};
