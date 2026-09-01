// src/pages/PartnersPage.jsx
import React from "react";

export default function PartnersPage() {
  return (
    <div className="partners-page" style={{ 
      fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#ffffff",
      color: "#000000"
    }}>
      
      {/* ===== SPACER ===== */}
      <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== HERO SECTION ===== */}
      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        width: "100%",
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "47.5%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <div className="wp-block-cover" style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "400px",
            overflow: "hidden"
          }}>
            <img 
              src="https://uptake.com/wp-content/uploads/2025/02/partners-hero-2023_edited.png"
              srcSet="https://uptake.com/wp-content/uploads/2025/02/partners-hero-2023_edited.png 1369w, https://uptake.com/wp-content/uploads/2025/02/partners-hero-2023_edited-300x169.png 300w, https://uptake.com/wp-content/uploads/2025/02/partners-hero-2023_edited-1024x576.png 1024w, https://uptake.com/wp-content/uploads/2025/02/partners-hero-2023_edited-768x432.png 768w"
              fetchPriority="high"
              decoding="async"
              width="1369"
              height="770"
              className="wp-block-cover__image-background"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: "0",
                left: "0"
              }}
            />
            <div className="wp-block-cover__background" style={{
              backgroundColor: "#606263",
              opacity: "0.3",
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              zIndex: "1"
            }}></div>
            <div className="wp-block-cover__inner-container" style={{
              position: "relative",
              zIndex: "2",
              padding: "40px",
              width: "100%",
              textAlign: "center"
            }}>
              <div className="uptake-heading scroll-activated">
                <div className="preheading" style={{
                  color: "#ffffff",
                  fontSize: "18px",
                  fontWeight: "400",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  marginBottom: "10px"
                }}>Partnerships</div>
                <h2 style={{
                  color: "#ffffff",
                  fontSize: "48px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  marginBottom: "20px"
                }}>
                  <span>BECOME AN UPTAKE PARTNER</span>
                </h2>
              </div>
              <div style={{ height: "55px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-columns is-layout-flex" style={{
                display: "flex",
                flexWrap: "nowrap",
                gap: "2em",
                justifyContent: "center"
              }}>
                <div className="wp-block-column is-layout-flow" style={{
                  flexGrow: 1,
                  minWidth: 0,
                  overflowWrap: "break-word",
                  wordBreak: "break-word"
                }}>
                  <div className="wp-block-buttons is-content-justification-center" style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5em"
                  }}>
                    <div className="wp-block-button">
                      <a className="wp-block-button__link has-blue-background-color has-background has-text-align-center wp-element-button" 
                         href="/contact-partners"
                         style={{
                           backgroundColor: "#165ffb",
                           color: "#fff",
                           borderRadius: "9999px",
                           padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                           fontSize: "1.125em",
                           textDecoration: "none",
                           display: "inline-block",
                           cursor: "pointer",
                           borderWidth: "0"
                         }}>Partner With Us</a>
                    </div>
                  </div>
                </div>
                <div className="wp-block-column is-layout-flow" style={{
                  flexGrow: 1,
                  minWidth: 0,
                  overflowWrap: "break-word",
                  wordBreak: "break-word"
                }}>
                  <div className="wp-block-buttons is-content-justification-center" style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5em"
                  }}>
                    <div className="wp-block-button is-style-fill">
                      <a className="wp-block-button__link wp-element-button" 
                         href="/submit-a-referral"
                         target="_blank"
                         rel="noreferrer noopener"
                         style={{
                           backgroundColor: "#32373c",
                           color: "#fff",
                           borderRadius: "9999px",
                           padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                           fontSize: "1.125em",
                           textDecoration: "none",
                           display: "inline-block",
                           cursor: "pointer",
                           borderWidth: "0"
                         }}>Submit a Referral</a>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: "40px" }} aria-hidden="true" className="wp-block-spacer"></div>
            </div>
          </div>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "5%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "47.5%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <div className="wp-block-group">
            <div className="wp-block-group__inner-container">
              {/* Partner Logos Grid */}
              <div className="wpcp-carousel-wrapper" style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                padding: "10px"
              }}>
                {/* Blue Arrow */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://bluearrowtelematics.com/" target="_blank" rel="external noopener noreferrer">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/08/Blue-Arrow.png"
                      alt="Blue Arrow"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* Diesel Laptops */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://www.diesellaptops.com/" target="_blank" rel="external noopener noreferrer">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/02/diesel.jpg"
                      alt="diesel"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* TruckSuite */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/trucksuite-1.jpg"
                    alt="trucksuite"
                    style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                  />
                </div>
                
                {/* Positive Edge */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/positiveedge.jpg"
                    alt="positiveedge"
                    style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                  />
                </div>
                
                {/* Intellishift */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://uptake.com/partners/intellishift/" target="_blank">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/02/intellishift-small-edit-edited.png"
                      alt="intellishift-small-edit"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* GPS Fleet Management */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://uptake.com/partners/gps-fleet-management-solutions/" target="_blank">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/02/gpsfms_partner_logo.jpg"
                      alt="gpsfms_partner_logo"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* Samsara */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/samsara.webp"
                    alt="samsara"
                    style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                  />
                </div>
                
                {/* Daimler */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/daimler.webp"
                    alt="daimler"
                    style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                  />
                </div>
                
                {/* Pedigree */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://uptake.com/partners/pedigree/" target="_blank">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/03/Pedigree-Technologies-Final-Logo-Horizontal-Color-1-768x194.png"
                      alt="Pedigree Technologies Final Logo Horizontal Color"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* AWS */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://aws.amazon.com/marketplace/seller-profile?id=bc9298f1-d1e8-4e61-a0ed-c60d8a5d3042" target="_blank" rel="external noopener noreferrer">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/02/aws.webp"
                      alt="aws"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* Trimble */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/trimble.jpg"
                    alt="trimble"
                    style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                  />
                </div>
                
                {/* ISAAC */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://uptake.com/partners/isaac-instruments-3/" target="_blank">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/05/Logo_ISAAC_Blue_RGB-1-768x181.jpg"
                      alt="Logo_ISAAC_Blue_RGB (1)"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* Car IQ */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://uptake.com/partners/car-iq/" target="_blank">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/08/Car-IQ.png"
                      alt="Car IQ"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* Argos */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://uptake.com/partners/argos-connected-solutions/" target="_blank">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/02/partnership-logo-argos-connected-solutions.jpg"
                      alt="partnership-logo-argos-connected-solutions"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* Fleetio */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://uptake.com/partners/fleetio/" target="_blank">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/08/Fleetio-1.png"
                      alt="Fleetio"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* Somewear */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://somewearlabs.com/sensor-integrations/" target="_blank" rel="external noopener noreferrer">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/09/Somewear_Labs_Logo-768x405.jpg"
                      alt="Somewear_Labs_Logo"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* DGI */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/08/DGI-1.png"
                    alt="DGI"
                    style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                  />
                </div>
                
                {/* Platform Science */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://uptake.com/partners/platform-science/" target="_blank">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/02/platform-science_partner-spotlight.jpg"
                      alt="platform-science_partner-spotlight"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
                
                {/* CalAmp */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/calamp.jpg"
                    alt="calamp"
                    style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                  />
                </div>
                
                {/* Geotab */}
                <div className="wpcp-single-item" style={{
                  backgroundColor: "#f9f9f9",
                  border: "1px solid #dddddd",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "120px"
                }}>
                  <a href="https://marketplace.geotab.com/solutions/uptake/" target="_blank" rel="external noopener noreferrer">
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/02/geotab.webp"
                      alt="geotab"
                      style={{ maxWidth: "100%", height: "auto", maxHeight: "80px" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== WHY PARTNER SECTION ===== */}
      <div className="wp-block-group mid-width" style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "0 20px"
      }}>
        <div className="wp-block-group__inner-container">
          <div style={{ height: "88px" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <h2 className="wp-block-heading has-text-align-center" style={{
            fontSize: "4em",
            textAlign: "center",
            fontWeight: "700",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          }} id="h-why-partner-with-uptake">
            <strong>Why Partner with Uptake?</strong>
          </h2>
          
          <div className="wp-block-columns is-layout-flex" style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "2em",
            width: "100%"
          }}>
            <div className="wp-block-column is-layout-flow" style={{
              flexBasis: "20%",
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}></div>
            <div className="wp-block-column is-layout-flow" style={{
              flexBasis: "60%",
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                textAlign: "center"
              }}>We enable our partners to shape the future of industry worldwide. Together, we build seamless experiences that connect data, accelerate intelligence, and drive transformative outcomes.</p>
            </div>
            <div className="wp-block-column is-layout-flow" style={{
              flexBasis: "20%",
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}></div>
          </div>
          
          <div className="wp-block-columns is-layout-flex" style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "2em",
            width: "100%"
          }}>
            {/* Extend Your Capabilities */}
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              textAlign: "center"
            }}>
              <div className="wp-block-image">
                <figure className="aligncenter size-full is-resized">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/Ag_icon-6.svg"
                    decoding="async"
                    width="100"
                    height="96"
                    alt=""
                    className="wp-image-292"
                    style={{ width: "108px", height: "auto", maxWidth: "100%" }}
                  />
                </figure>
              </div>
              <h4 className="wp-block-heading has-text-align-center" style={{
                textAlign: "center",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-extend-your-capabilities">
                <strong>Extend Your Capabilities</strong>
              </h4>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>Utilize software that solves customer's pressing pain points with faster time to value.</p>
            </div>

            {/* Boost Your Revenue */}
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              textAlign: "center"
            }}>
              <div className="wp-block-image">
                <figure className="aligncenter size-full is-resized">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/Ag_icon-5.svg"
                    decoding="async"
                    width="100"
                    height="96"
                    alt=""
                    className="wp-image-293"
                    style={{ width: "108px", height: "auto", maxWidth: "100%" }}
                  />
                </figure>
              </div>
              <h4 className="wp-block-heading has-text-align-center" style={{
                textAlign: "center",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-boost-your-revenue">
                <strong>Boost Your Revenue</strong>
              </h4>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>Expand your customer base and gain new momentum for growing your business.</p>
            </div>

            {/* Increase Speed to Value */}
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              textAlign: "center"
            }}>
              <div className="wp-block-image">
                <figure className="aligncenter size-full is-resized">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/blurb-icon-large.svg"
                    decoding="async"
                    width="673"
                    height="621"
                    alt=""
                    className="wp-image-294"
                    style={{ width: "108px", height: "auto", maxWidth: "100%" }}
                  />
                </figure>
              </div>
              <h4 className="wp-block-heading has-text-align-center" style={{
                textAlign: "center",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-increase-speed-to-value">
                <strong>Increase Speed to Value</strong>
              </h4>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>Unlock value <em>for your customers</em> faster through product partnerships.</p>
            </div>
          </div>
          
          <div style={{ height: "37px" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <div className="wp-block-buttons is-content-justification-center" style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5em"
          }}>
            <div className="wp-block-button">
              <a className="wp-block-button__link has-small-font-size has-custom-font-size wp-element-button" 
                 href="https://uptake.com/contact-partners/"
                 style={{
                   backgroundColor: "#32373c",
                   color: "#fff",
                   borderRadius: "9999px",
                   padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                   fontSize: "0.85em",
                   textDecoration: "none",
                   display: "inline-block",
                   cursor: "pointer",
                   borderWidth: "0"
                 }}>Get Started</a>
            </div>
          </div>
          
          <div style={{ height: "142px" }} aria-hidden="true" className="wp-block-spacer"></div>

          {/* ===== HOW TO PARTNER SECTION ===== */}
          <h2 className="wp-block-heading has-text-align-center" style={{
            fontSize: "4em",
            textAlign: "center",
            fontWeight: "700",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          }} id="h-how-to-partner-with-uptake">
            <strong>How to Partner with Uptake</strong>
          </h2>
          
          <div style={{ height: "25px" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <div className="wp-block-columns is-layout-flex" style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "2em",
            width: "100%"
          }}>
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}></div>
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div className="wp-block-buttons has-custom-font-size has-small-font-size is-content-justification-center" style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button" id="h-affinity">
                  <a className="wp-block-button__link has-small-font-size has-custom-font-size wp-element-button" 
                     href="#type-affinity"
                     style={{
                       backgroundColor: "#32373c",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Affinity</a>
                </div>
              </div>
            </div>
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div className="wp-block-buttons is-content-justification-center" style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button">
                  <a className="wp-block-button__link has-small-font-size has-custom-font-size wp-element-button" 
                     href="#type-promotion"
                     style={{
                       backgroundColor: "#32373c",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Promotion</a>
                </div>
              </div>
            </div>
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div className="wp-block-buttons has-custom-font-size has-small-font-size is-content-justification-center" style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button is-style-fill">
                  <a className="wp-block-button__link has-small-font-size has-custom-font-size wp-element-button" 
                     href="#type-referral"
                     style={{
                       backgroundColor: "#32373c",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Referral</a>
                </div>
              </div>
            </div>
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div className="wp-block-buttons has-custom-font-size has-small-font-size is-content-justification-center" style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button">
                  <a className="wp-block-button__link has-small-font-size has-custom-font-size wp-element-button" 
                     href="#type-technology"
                     style={{
                       backgroundColor: "#32373c",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Technology</a>
                </div>
              </div>
            </div>
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}></div>
          </div>
          
          <div style={{ height: "100px" }} aria-hidden="true" id="type-affinity" className="wp-block-spacer"></div>

          {/* ===== AFFINITY SECTION ===== */}
          <div className="wp-block-media-text has-media-on-the-right is-stacked-on-mobile" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            alignItems: "center"
          }}>
            <div className="wp-block-media-text__content">
              <h2 className="wp-block-heading" style={{
                fontSize: "4em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-affinity">
                <strong>Affinity</strong>
              </h2>
              <h3 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-what-is-it">
                <strong>What is it?</strong>
              </h3>
              <ul className="wp-block-list" style={{
                paddingLeft: "20px",
                color: "#000000"
              }}>
                <li className="has-black-color has-text-color has-link-color" style={{ color: "#000000" }}>Provide Uptake Data Science Insights directly to Partner</li>
                <li className="has-black-color has-text-color has-link-color" style={{ color: "#000000" }}>Partner displays and uses in their own product and/or user interface</li>
              </ul>
              <h3 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-value">
                <strong>Value</strong>
              </h3>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>With Uptake, you can accelerate market entry, strengthen your solutions with predictive insights, and stay in full control of customer relationships. Our behind-the-scenes support helps you engage customers, grow revenue, reduce churn, and increase lifetime value. Leverage custom models, flexible support, and cutting-edge technology to outpace competitors, lower costs, and drive innovation in the maintenance revolution.</p>
              <div style={{ height: "20px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-buttons is-content-justification-center" style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button">
                  <a className="wp-block-button__link has-small-font-size has-custom-font-size wp-element-button" 
                     href="https://uptake.com/contact-partners/"
                     style={{
                       backgroundColor: "#32373c",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Get Started</a>
                </div>
              </div>
            </div>
            <figure className="wp-block-media-text__media">
              <img 
                src="https://uptake.com/wp-content/uploads/2025/02/Q3_2024_blog_thumbnail-1024x576.jpg"
                srcSet="https://uptake.com/wp-content/uploads/2025/02/Q3_2024_blog_thumbnail-1024x576.jpg 1024w, https://uptake.com/wp-content/uploads/2025/02/Q3_2024_blog_thumbnail-300x169.jpg 300w, https://uptake.com/wp-content/uploads/2025/02/Q3_2024_blog_thumbnail-768x432.jpg 768w, https://uptake.com/wp-content/uploads/2025/02/Q3_2024_blog_thumbnail-1536x864.jpg 1536w, https://uptake.com/wp-content/uploads/2025/02/Q3_2024_blog_thumbnail.jpg 1920w"
                decoding="async"
                width="1024"
                height="576"
                alt=""
                className="wp-image-272 size-full"
                sizes="(max-width: 1024px) 100vw, 1024px"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </figure>
          </div>

          <div style={{ height: "111px" }} aria-hidden="true" id="type-promotion" className="wp-block-spacer"></div>

          {/* ===== PROMOTION SECTION ===== */}
          <div className="wp-block-media-text is-stacked-on-mobile" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            alignItems: "center"
          }}>
            <figure className="wp-block-media-text__media">
              <img 
                src="https://uptake.com/wp-content/uploads/2025/02/future-tech-300x270-1.jpg"
                decoding="async"
                width="300"
                height="270"
                alt=""
                className="wp-image-1313 size-full"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </figure>
            <div className="wp-block-media-text__content">
              <h2 className="wp-block-heading" style={{
                fontSize: "4em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-promotion">
                <strong>Promotion</strong>
              </h2>
              <h3 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-what-is-it-0">
                <strong>What is it?</strong>
              </h3>
              <ul className="wp-block-list" style={{
                paddingLeft: "20px",
                color: "#000000"
              }}>
                <li className="has-black-color has-text-color has-link-color" style={{ color: "#000000" }}>Companies that target same addressable market but are non-competitive</li>
                <li className="has-black-color has-text-color has-link-color" style={{ color: "#000000" }}>Do not want to be part of a Uptake Referral Program</li>
              </ul>
              <h3 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-value-0">
                <strong>Value</strong>
              </h3>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>By co-partnering on industry events, trade shows, and content initiatives like blogs and webinars, our partners gain access to a broader set of customers and benefit from shared marketing costs. These collaborations provide valuable competitive insights, enhance brand exposure, and create new opportunities for growth. Together, we strengthen the ecosystem, helping our partners engage more effectively in the market and drive meaningful business results.</p>
              <div style={{ height: "20px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-buttons is-content-justification-center" style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button">
                  <a className="wp-block-button__link has-small-font-size has-custom-font-size wp-element-button" 
                     href="https://uptake.com/contact-partners/"
                     style={{
                       backgroundColor: "#32373c",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Get Started</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: "110px" }} aria-hidden="true" id="type-referral" className="wp-block-spacer"></div>

          {/* ===== REFERRAL SECTION ===== */}
          <div className="wp-block-media-text has-media-on-the-right is-stacked-on-mobile" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            alignItems: "center"
          }}>
            <div className="wp-block-media-text__content">
              <h2 className="wp-block-heading" style={{
                fontSize: "4em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-referral">
                <strong>Referral</strong>
              </h2>
              <h3 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-what-is-it-2">
                <strong>What is it?</strong>
              </h3>
              <ul className="wp-block-list" style={{
                paddingLeft: "20px",
                color: "#000000"
              }}>
                <li className="has-black-color has-text-color has-link-color" style={{ color: "#000000" }}>Non-Competitive</li>
                <li className="has-black-color has-text-color has-link-color" style={{ color: "#000000" }}>Companies that target same addressable market and industriesface</li>
              </ul>
              <h3 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-value-2">
                <strong>Value</strong>
              </h3>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>Earn 12% commission on first contracts and 5% on renewals. Equip your sales team with fresh talking points to engage new and existing customers, while Uptake drives the sales process and connects with key decision-makers. Benefit from co-marketing opportunities, shared event investments, and collaborative branding through blogs, thought leadership, and industry activities.</p>
              <div style={{ height: "20px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-buttons is-content-justification-center" style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button">
                  <a className="wp-block-button__link has-small-font-size has-custom-font-size wp-element-button" 
                     href="https://uptake.com/contact-partners/"
                     style={{
                       backgroundColor: "#32373c",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Get Started</a>
                </div>
              </div>
            </div>
            <figure className="wp-block-media-text__media">
              <img 
                src="https://uptake.com/wp-content/uploads/2025/03/AdobeStock_850156114-1024x574.jpeg"
                srcSet="https://uptake.com/wp-content/uploads/2025/03/AdobeStock_850156114-1024x574.jpeg 1024w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_850156114-300x168.jpeg 300w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_850156114-768x430.jpeg 768w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_850156114-1536x861.jpeg 1536w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_850156114-2048x1148.jpeg 2048w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_850156114-scaled.jpeg 1920w"
                decoding="async"
                width="1024"
                height="574"
                alt=""
                className="wp-image-1938 size-full"
                sizes="(max-width: 1024px) 100vw, 1024px"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </figure>
          </div>

          <div style={{ height: "111px" }} aria-hidden="true" id="type-technology" className="wp-block-spacer"></div>

          {/* ===== TECHNOLOGY SECTION ===== */}
          <div className="wp-block-media-text is-stacked-on-mobile" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
            alignItems: "center"
          }}>
            <figure className="wp-block-media-text__media">
              <img 
                src="https://uptake.com/wp-content/uploads/2025/03/AdobeStock_1024037214-1-1024x574.jpeg"
                srcSet="https://uptake.com/wp-content/uploads/2025/03/AdobeStock_1024037214-1-1024x574.jpeg 1024w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_1024037214-1-300x168.jpeg 300w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_1024037214-1-768x430.jpeg 768w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_1024037214-1-1536x861.jpeg 1536w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_1024037214-1-2048x1148.jpeg 2048w, https://uptake.com/wp-content/uploads/2025/03/AdobeStock_1024037214-1-scaled.jpeg 1920w"
                decoding="async"
                width="1024"
                height="574"
                alt=""
                className="wp-image-1876 size-full"
                sizes="(max-width: 1024px) 100vw, 1024px"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </figure>
            <div className="wp-block-media-text__content">
              <h2 className="wp-block-heading" style={{
                fontSize: "4em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-technology">
                <strong>Technology</strong>
              </h2>
              <h3 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-what-is-it-4">
                <strong>What is it?</strong>
              </h3>
              <ul className="wp-block-list" style={{
                paddingLeft: "20px",
                color: "#000000"
              }}>
                <li className="has-black-color has-text-color has-link-color" style={{ color: "#000000" }}>Companies that target same addressable market</li>
                <li className="has-black-color has-text-color has-link-color" style={{ color: "#000000" }}>Telematics Connectors, Transportation Management Information Systems (TMIS) and Enterprise Asset Management (EAM)</li>
              </ul>
              <h3 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontWeight: "700",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
              }} id="h-value-4">
                <strong>Value</strong>
              </h3>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>Tap into a powerful ecosystem of predictive analytics to unlock new revenue opportunities and stay ahead of the competition. As predictive capabilities become increasingly essential in new deals and RFPs, this program gives your sales team fresh ways to engage both existing and prospective customers. Plus, take advantage of co-branding and co-promotion opportunities to boost your market presence and drive growth.</p>
              <div style={{ height: "20px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-buttons is-content-justification-center" style={{
                display: "flex",
                justifyContent: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button">
                  <a className="wp-block-button__link has-small-font-size has-custom-font-size wp-element-button" 
                     href="https://uptake.com/contact-partners/"
                     style={{
                       backgroundColor: "#32373c",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Get Started</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: "4rem" }} aria-hidden="true" className="wp-block-spacer"></div>
          <div style={{ height: "4rem" }} aria-hidden="true" className="wp-block-spacer"></div>

          {/* ===== BLUE CTA SECTION ===== */}
          <div className="wp-block-group has-white-color has-blue-background-color has-text-color has-background has-link-color" style={{
            backgroundColor: "#165ffb",
            color: "#fff",
            padding: "40px 20px",
            textAlign: "center"
          }}>
            <div className="wp-block-group__inner-container">
              <div style={{ height: "2rem" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-columns are-vertically-aligned-center" style={{
                display: "flex",
                flexWrap: "nowrap",
                gap: "2em",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <div className="wp-block-column is-vertically-aligned-center" style={{
                  flexGrow: 1,
                  minWidth: 0,
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                  alignSelf: "center",
                  textAlign: "center"
                }}>
                  <h2 className="wp-block-heading has-text-align-center" style={{
                    fontSize: "2em",
                    textAlign: "center",
                    color: "#fff",
                    fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
                  }} id="h-interested-in-partnering-with-us">Interested in partnering with us?</h2>
                  <div className="wp-block-buttons is-content-justification-center" style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "0.5em"
                  }}>
                    <div className="wp-block-button">
                      <a className="wp-block-button__link has-white-color has-black-background-color has-text-color has-background has-link-color has-text-align-center wp-element-button" 
                         href="/contact-partners"
                         style={{
                           backgroundColor: "#000",
                           color: "#fff",
                           borderRadius: "9999px",
                           padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                           fontSize: "1.125em",
                           textDecoration: "none",
                           display: "inline-block",
                           cursor: "pointer",
                           borderWidth: "0",
                           textAlign: "center"
                         }}>Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: "2rem" }} aria-hidden="true" className="wp-block-spacer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}