import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cpu, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, openAuth, setDemoModalOpen } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="uptake-header" style={{
      width: "100%",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e5e7eb",
      position: "sticky",
      top: "0",
      zIndex: "1000"
    }}>
      <div className="header-areas desktop-width" style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "15px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }}>
        
        {/* ===== LOGO ===== */}
        <div className="logo">
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #165ffb, #00d084)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff"
            }}>
              <Cpu style={{ width: "20px", height: "20px" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{
                fontFamily: "'Outfit', 'Inter', sans-serif",
                fontWeight: "900",
                fontSize: "20px",
                color: "#111827",
                letterSpacing: "-0.5px"
              }}>
                Mach<span style={{ color: "#165ffb" }}>PdM</span><span style={{ fontSize: "12px", marginLeft: "4px", backgroundColor: "#eff6ff", color: "#165ffb", padding: "2px 6px", borderRadius: "4px", fontWeight: "700" }}>AI</span>
              </span>
            </div>
          </Link>
        </div>

        {/* ===== MENU TOGGLE (Mobile) ===== */}
        <div className="menu-toggle-area" style={{ display: "none" }}>
          <div className="menu-toggle" onClick={toggleMenu} style={{ cursor: "pointer", fontSize: "24px", color: "#111827" }}>
            {!isMenuOpen ? <Menu style={{ width: "28px", height: "28px" }} /> : <X style={{ width: "28px", height: "28px" }} />}
          </div>
        </div>

        {/* ===== NAVIGATION ===== */}
        <div className="menu-area" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <nav className="main-navigation">
            <ul className="menu" style={{
              display: "flex",
              listStyle: "none",
              margin: "0",
              padding: "0",
              gap: "0",
              alignItems: "center"
            }}>
              
              {/* Products Dropdown */}
              <li className="menu-item has-children" style={{ position: "relative" }}>
                <Link to="/products" style={{
                  display: "block",
                  padding: "10px 16px",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "'Inter', sans-serif"
                }}>Products ▾</Link>
                <ul className="sub-menu" style={{
                  display: "none",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  borderRadius: "8px",
                  padding: "8px 0",
                  minWidth: "200px",
                  listStyle: "none",
                  margin: "0",
                  border: "1px solid #f3f4f6"
                }}>
                  <li><Link to="/solutions" style={subMenuItemStyle}>Fleet</Link></li>
                  <li><Link to="/products/defense" style={subMenuItemStyle}>Defense</Link></li>
                  <li><Link to="/products/tires" style={subMenuItemStyle}>Tires</Link></li>
                  <li><Link to="/products/custom-software" style={subMenuItemStyle}>Custom Software</Link></li>
                </ul>
              </li>

              {/* Industries Dropdown */}
              <li className="menu-item has-children" style={{ position: "relative" }}>
                <Link to="/industries" style={{
                  display: "block",
                  padding: "10px 16px",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "'Inter', sans-serif"
                }}>Industries ▾</Link>
                <ul className="sub-menu" style={{
                  display: "none",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  borderRadius: "8px",
                  padding: "8px 0",
                  minWidth: "200px",
                  listStyle: "none",
                  margin: "0",
                  border: "1px solid #f3f4f6"
                }}>
                  <li><Link to="/industries/buses" style={subMenuItemStyle}>Buses</Link></li>
                  <li><Link to="/industries/concrete" style={subMenuItemStyle}>Concrete</Link></li>
                  <li><Link to="/industries/construction" style={subMenuItemStyle}>Construction</Link></li>
                  <li><Link to="/federal" style={subMenuItemStyle}>Federal</Link></li>
                  <li><Link to="/industries/heavy-trucks" style={subMenuItemStyle}>Heavy Trucks</Link></li>
                  <li><Link to="/industries/medium-trucks" style={subMenuItemStyle}>Medium Trucks</Link></li>
                  <li><Link to="/industries/mining" style={subMenuItemStyle}>Mining</Link></li>
                </ul>
              </li>

              {/* Features Dropdown */}
              <li className="menu-item has-children" style={{ position: "relative" }}>
                <Link to="/features" style={{
                  display: "block",
                  padding: "10px 16px",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "'Inter', sans-serif"
                }}>Features ▾</Link>
                <ul className="sub-menu" style={{
                  display: "none",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  borderRadius: "8px",
                  padding: "8px 0",
                  minWidth: "240px",
                  listStyle: "none",
                  margin: "0",
                  border: "1px solid #f3f4f6"
                }}>
                  <li><Link to="/features/dashboards" style={subMenuItemStyle}>Fleet Insight Dashboards</Link></li>
                  <li><Link to="/features/maintenance-optimization" style={subMenuItemStyle}>Maintenance Value Optimization</Link></li>
                  <li><Link to="/features/data-hub" style={subMenuItemStyle}>Mixed Fleet Data Hub</Link></li>
                  <li><Link to="/features/remote-diagnostics" style={subMenuItemStyle}>Remote Diagnostics</Link></li>
                  <li><Link to="/features/risk-explorer" style={subMenuItemStyle}>Risk Explorer</Link></li>
                  <li><Link to="/features/sensor-insights" style={subMenuItemStyle}>Sensor Insights</Link></li>
                  <li><Link to="/features/warranty" style={subMenuItemStyle}>Warranty</Link></li>
                </ul>
              </li>

              {/* Become a Partner */}
              <li className="menu-item">
                <Link to="/partners" style={{
                  display: "block",
                  padding: "10px 16px",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "'Inter', sans-serif"
                }}>Become a Partner</Link>
              </li>

              {/* Resources Dropdown */}
              <li className="menu-item has-children" style={{ position: "relative" }}>
                <Link to="/resources" style={{
                  display: "block",
                  padding: "10px 16px",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "'Inter', sans-serif"
                }}>Resources ▾</Link>
                <ul className="sub-menu" style={{
                  display: "none",
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  borderRadius: "8px",
                  padding: "8px 0",
                  minWidth: "200px",
                  listStyle: "none",
                  margin: "0",
                  border: "1px solid #f3f4f6"
                }}>
                  <li><Link to="/news" style={subMenuItemStyle}>Blog</Link></li>
                  <li><Link to="/cases" style={subMenuItemStyle}>Case Studies</Link></li>
                  <li><Link to="/resources/ebooks" style={subMenuItemStyle}>eBooks</Link></li>
                  <li><Link to="/resources/videos" style={subMenuItemStyle}>Videos</Link></li>
                  <li><Link to="/resources/webinars" style={subMenuItemStyle}>Webinars</Link></li>
                  <li><Link to="/news" style={subMenuItemStyle}>White Papers</Link></li>
                </ul>
              </li>

              {/* Contact Us */}
              <li className="menu-item">
                <Link to="/contact" style={{
                  display: "block",
                  padding: "10px 16px",
                  textDecoration: "none",
                  color: "#111827",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily: "'Inter', sans-serif"
                }}>Contact Us</Link>
              </li>

            </ul>
          </nav>

          {/* Action Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              onClick={() => setDemoModalOpen(true)}
              style={{
                padding: "8px 18px",
                borderRadius: "6px",
                backgroundColor: "#165ffb",
                color: "#ffffff",
                border: "none",
                fontWeight: "700",
                fontSize: "14px",
                cursor: "pointer"
              }}
            >
              Request Demo
            </button>

            {user ? (
              <button
                onClick={logout}
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                  backgroundColor: "#ffffff",
                  color: "#374151",
                  fontWeight: "600",
                  fontSize: "14px",
                  cursor: "pointer"
                }}
              >
                Sign Out
              </button>
            ) : (
              <button
                onClick={() => openAuth('login')}
                style={{
                  padding: "8px 16px",
                  borderRadius: "6px",
                  border: "1px solid #165ffb",
                  backgroundColor: "#ffffff",
                  color: "#165ffb",
                  fontWeight: "700",
                  fontSize: "14px",
                  cursor: "pointer"
                }}
              >
                Sign In
              </button>
            )}
          </div>
        </div>

      </div>

      {/* ===== MOBILE MENU DRAWER ===== */}
      {isMenuOpen && (
        <div style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e5e7eb",
          padding: "16px 20px",
          maxHeight: "80vh",
          overflowY: "auto"
        }}>
          <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
            <li style={mobileItemStyle}><Link to="/products" onClick={toggleMenu} style={mobileLinkStyle}>Products (Fleet, Defense, Tires)</Link></li>
            <li style={mobileItemStyle}><Link to="/industries" onClick={toggleMenu} style={mobileLinkStyle}>Industries (Buses, Mining, Trucks)</Link></li>
            <li style={mobileItemStyle}><Link to="/features" onClick={toggleMenu} style={mobileLinkStyle}>Features (Dashboards, Risk Explorer)</Link></li>
            <li style={mobileItemStyle}><Link to="/partners" onClick={toggleMenu} style={mobileLinkStyle}>Become a Partner</Link></li>
            <li style={mobileItemStyle}><Link to="/resources" onClick={toggleMenu} style={mobileLinkStyle}>Resources (Blog, Case Studies)</Link></li>
            <li style={mobileItemStyle}><Link to="/contact" onClick={toggleMenu} style={mobileLinkStyle}>Contact Us</Link></li>
          </ul>
        </div>
      )}

      {/* CSS Styles for hover dropdowns & responsiveness */}
      <style>{`
        @media (max-width: 991px) {
          .menu-toggle-area {
            display: block !important;
          }
          .menu-area {
            display: none !important;
          }
        }

        @media (min-width: 992px) {
          .menu-toggle-area {
            display: none !important;
          }
          .menu-area {
            display: flex !important;
          }
        }

        .menu-item:hover > .sub-menu {
          display: block !important;
        }

        .menu-item > a:hover {
          color: #165ffb !important;
        }
      `}</style>
    </header>
  );
}

const subMenuItemStyle = {
  display: "block",
  padding: "8px 20px",
  textDecoration: "none",
  color: "#374151",
  fontSize: "14px",
  fontFamily: "'Inter', sans-serif"
};

const mobileItemStyle = {
  padding: "10px 0",
  borderBottom: "1px solid #f3f4f6"
};

const mobileLinkStyle = {
  textDecoration: "none",
  color: "#111827",
  fontSize: "15px",
  fontWeight: "600"
};