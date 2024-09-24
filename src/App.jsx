import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/Dashboard";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <Sidebar />
        <DashboardContent />
      </div>
      <Footer />
    </div>
  );
}

export default App;
