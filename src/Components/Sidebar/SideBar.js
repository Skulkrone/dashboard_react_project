import React from 'react'
import iconDashboard from './analytics.svg'
import './Sidebar.css'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav>
      <nav className="sidenav">
        <img src={iconDashboard} alt="icone analytiques" />
        <Link to="/">FINANCES</Link>
        <Link to="/dashboardEmployees">EMPLOI</Link>
      </nav>
    </nav>
  )
}
