import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BookOpen, TrendingUp, Settings, Menu, X, LogOut } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'My Learning', path: '/learning', icon: BookOpen },
    { name: 'Progress', path: '/progress', icon: TrendingUp },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`sidebar-container ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <div className="logo-icon-sm">P</div>
            <span className="logo-text">Pathway</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} className="nav-icon" />
                <span className="nav-label">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="nav-item logout-item">
            <LogOut size={20} className="nav-icon" />
            <span className="nav-label">Logout</span>
          </Link>
        </div>
      </aside>

      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
};

export default Sidebar;
