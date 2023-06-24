import React from "react";

interface SidebarLayoutProps {
  isOpen: boolean;
}

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ isOpen }) => {
  return (
    <div>
      {isOpen ? <h1>Sidebar Open</h1> : <h1>Sidebar Closed</h1>}
      {/* Add your sidebar content here */}
    </div>
  );
};

export default SidebarLayout;
