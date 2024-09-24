import React from "react";

const DashboardContent = () => {
  const data = [
    { id: 1, title: "2000", description: "Daily Views" },
    { id: 2, title: "100", description: "Sales" },
    { id: 3, title: "$9000", description: "Earnings" },
    { id: 4, title: "300", description: "Reviews" },
    { id: 5, title: "150%", description: "Market increase" },
  ];

  return (
    <main className="dashboard-content">
      <div className="dashboardOverlay">
        <h2>Dashboard Overview</h2>

        <div className="cards">
          {data.map((card) => (
            <div key={card.id} className="card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;
