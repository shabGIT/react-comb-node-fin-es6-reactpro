import React from "react";
import { Card, CardContent } from "@mui/material";

export const SubscriberItem = ({ item }) => {
  return (
    <React.Fragment>
      <Card sx={{ bgcolor: "#AFEEEE" }}>
        <CardContent>
          {item.fname} {item.lname}
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
