import React, { useState, useEffect } from "react";
import { DisplayList } from "./DisplayList";
import axios from "axios";

export const DisplayCat = () => {
  const [oData, setOData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:3030/categories");
    setOData(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <DisplayList oData={oData} fields={["catId", "catName"]} />
    </React.Fragment>
  );
};
