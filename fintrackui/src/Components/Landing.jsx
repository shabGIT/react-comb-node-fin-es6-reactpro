import React from "react";
import { Home } from "./Home";
import { Navi } from "./Navi";
import { Subscribers } from "./Subscribers/Subscribers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "./Category/Category";
import { Card, CardContent } from "@mui/material";
import { Genders } from "./Gender/Genders";
import { Services } from "./Service/Services";
import { Cities } from "./City/Cities";
import { Registration } from "./Misc/Registration";
import { Payment } from "./Misc/Pyment";
import { Products } from "./Product/Products";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Card sx={{ bgcolor: "tan" }}>
          <CardContent>
            <Navi />
          </CardContent>
        </Card>

        <Routes>
          <Route path="/cities" element={<Cities />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gender" element={<Genders />} />
          <Route path="/category" element={<Category />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/pro" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
