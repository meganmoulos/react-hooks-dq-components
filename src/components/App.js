import React from "react";
import SideMenu from './SideMenu.js'
import MainContent from './MainContent.js'
import TopMenu from './TopMenu'

function App() {
  return (
  <div className="app-container">
    <SideMenu />
    <TopMenu />
    <MainContent />
  </div>
  )
}

export default App;
