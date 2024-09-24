import React from "react";

const Sidebar = () => {
  const menuItems = ["Home", "Message", "Orders", "Contacts", "Settings"];

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
