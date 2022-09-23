import React, { useState, useEffect } from "react";
import { DisplayList } from "./DisplayList";
import axios from "axios";

export const Display = ({ collName, fields }) => {
  const [oData, setOData] = useState([]);

  const getData = async () => {
    const result = await axios.get(`http://localhost:3030/${collName}`);
    setOData(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <React.Fragment>
      <DisplayList oData={oData} fields={fields} />
    </React.Fragment>
  );
};
