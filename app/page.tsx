"use client";
import React, { useState } from "react";
import Header from "./components/Header";
import Square from "./components/Square";
import Sidebar from "./components/Sidebar";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="layout-root">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
        <Header onToggle={toggleSidebar} />
        <div id='container'>
          <Square bgColor="bg-red-200" />
          <Square bgColor="bg-blue-200" />
          <Square bgColor="bg-green-200" />
          <Square bgColor="bg-yellow-200" />
        </div>
      </div>
    </div>
  );
}

