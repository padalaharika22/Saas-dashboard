import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://saas-backend-hnjl.onrender.com/api/analytics/admin")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f4f6f8",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>📊 SaaS Admin Dashboard</h1>
      <p>Multi-Tenant E-Commerce Analytics</p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>💰 Revenue</h3>
          <h2>{data ? data.totalRevenue : "Loading..."}</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>📦 Orders</h3>
          <h2>{data ? data.totalOrders : "Loading..."}</h2>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            flex: 1,
          }}
        >
          <h3>🏪 Vendors</h3>
          <h2>{data ? data.totalVendors : "Loading..."}</h2>
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h3>API Status</h3>
        <p>Backend Connected Successfully 🚀</p>
      </div>
    </div>
  );
}

export default App;