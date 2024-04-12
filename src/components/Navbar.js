import { useState } from "react"
import Sidebar from "./Sidebar"

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const links = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'recipes',
      path: '/recipes'
    },
    {
      name: 'settings',
      path: "/settings"
    }
  ]
  return (
    <><div className="navbar container">
      <a href="#!" className="logo">F<span>oo</span>diesHub</a>
      <div className="nav-links">
        {links.map(link)} 33333333333 start from here mittro
        {/* <a href="#!">Home</a>
        <a href="#!">Recipes</a>
        <a href="#!">Settings</a> */}
      </div>
      <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
      <Sidebar /></>
  )
} 