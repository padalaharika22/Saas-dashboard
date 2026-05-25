iimport { useEffect, useState } from "react";
import axios from "axios";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://saas-backend-hnjl.onrender.com/api/analytics/admin")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const chartData = [
    { day: "Mon", revenue: 4000, orders: 24 },
    { day: "Tue", revenue: 3000, orders: 18 },
    { day: "Wed", revenue: 5000, orders: 30 },
    { day: "Thu", revenue: 7000, orders: 40 },
    { day: "Fri", revenue: 6000, orders: 35 },
  ];

  return (
    <div style={{
      fontFamily: "Arial",
      background: "#f4f6f8",
      minHeight: "100vh",
      padding: "20px"
    }}>
      <h1>📊 SaaS Admin Dashboard</h1>
      <p>Multi-Tenant E-Commerce Analytics</p>

      {/* CARDS */}
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px", flex: 1 }}>
          <h3>💰 Revenue</h3>
          <h2>{loading ? "Loading..." : data?.totalRevenue}</h2>
        </div>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px", flex: 1 }}>
          <h3>📦 Orders</h3>
          <h2>{loading ? "Loading..." : data?.totalOrders}</h2>
        </div>

        <div style={{ background: "white", padding: "20px", borderRadius: "10px", flex: 1 }}>
          <h3>🏪 Vendors</h3>
          <h2>18</h2>
        </div>

      </div>

      {/* LINE CHART */}
      <div style={{ marginTop: "30px", background: "white", padding: "20px", borderRadius: "10px" }}>
        <h3>📈 Revenue Analytics</h3>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* BAR CHART */}
      <div style={{ marginTop: "30px", background: "white", padding: "20px", borderRadius: "10px" }}>
        <h3>📊 Orders Analytics</h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* VENDOR TABLE */}
      <div style={{ marginTop: "30px", background: "white", padding: "20px", borderRadius: "10px" }}>
        <h3>🏪 Vendor Dashboard</h3>

        <table width="100%" cellPadding="10">
          <thead>
            <tr>
              <th align="left">Vendor</th>
              <th align="left">Sales</th>
              <th align="left">Orders</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Vendor A</td>
              <td>$5000</td>
              <td>120</td>
            </tr>
            <tr>
              <td>Vendor B</td>
              <td>$3200</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Vendor C</td>
              <td>$2100</td>
              <td>60</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;