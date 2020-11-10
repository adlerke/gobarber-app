import React from "react";

const Dashboard: React.FC = () => {
  localStorage.clear();
  setTimeout(() => {
    window.location.reload();
  }, 3000);
  return <h1>DashBoard</h1>;
};

export default Dashboard;
