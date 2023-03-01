import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { DisplayCar } from "../../API/api";
import "./UserDashboard.scss";

const UserDashboard = () => {
  const [carData, setCarData] = useState([]);

  // mycar GET------------------

  useEffect(() => {
    // const ac = new AbortController();

    (async () => {
      try {
        const display = await DisplayCar();
        setCarData(display.data.data);
      } catch (err) {
        console.warn(err.message);
      }
    })();

    // return () => ac.abort();
  }, []);
  return (
    <>
      <div className="user_dashboard_page">
        <div className="banner">
          <h2>Most View Cars</h2> <hr />
        </div>
        <div className="innerContent">
          <BarChart width={730} height={250} data={carData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="brandName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="buyingPrice" fill="#8884d8" />
            <Bar dataKey="sellPrice" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
