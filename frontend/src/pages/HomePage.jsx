// src/pages/HomePage.jsx
import React from "react";

export default function HomePage() {
  return (
    <div className="homepage" style={{ fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" }}>
      
      {/* ===== HERO SECTION ===== */}
      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        marginBottom: "1.75em",
        width: "100%"
      }}>
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "25%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "50%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <div style={{ height: "135px" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <h2 className="wp-block-heading has-text-align-center" style={{
            fontStyle: "normal",
            textAlign: "center",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "28px",
            lineHeight: "1.3",
            fontWeight: "500",
            textTransform: "none"
          }} id="h-your-fleet-data-can-do-more">Your Fleet Data Can Do More</h2>
          
          <div style={{ height: "25px" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <h2 className="wp-block-heading has-text-align-center" style={{
            fontStyle: "normal",
            textAlign: "center",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "28px",
            lineHeight: "1.3",
            fontWeight: "500",
            textTransform: "none"
          }} id="h-we-ll-help-you-get-there">We'll Help You Get There</h2>
          
          <div style={{ height: "22px" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <h3 className="wp-block-heading has-text-align-center has-blue-color has-text-color has-link-color" style={{
            textAlign: "center",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "20px",
            lineHeight: "1.4",
            fontWeight: "500",
            textTransform: "none",
            color: "#165ffb"
          }} id="h-uptake-powers-predictive-maintenance">Uptake powers predictive maintenance</h3>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "25%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
      </div>

      {/* ===== SUBTITLE AND CTA ===== */}
      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        marginBottom: "1.75em",
        width: "100%"
      }}>
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "25%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "35%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p className="override-font wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "16px",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px"
          }}>From insights to action, we partner with you to boost reliability, cut downtime, and keep your fleet moving. Your fleet holds the data to stay unstoppable. We turn it into intelligence that prevents downtime and powers performance.</p>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "15%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <div style={{ height: "43px" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <div className="wp-block-buttons is-layout-flex" style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.5em"
          }}>
            <div className="wp-block-button">
              <a className="wp-block-button__link has-blue-background-color has-background has-small-font-size has-custom-font-size wp-element-button" 
                 href="https://calendly.com/d/cndn-pt9-ks6/uptake-fleet-demo"
                 style={{
                   backgroundColor: "#165ffb",
                   color: "#fff",
                   borderRadius: "9999px",
                   padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                   fontSize: "0.85em",
                   textDecoration: "none",
                   display: "inline-block",
                   cursor: "pointer",
                   borderWidth: "0"
                 }}
                 target="_blank"
                 rel="external noopener noreferrer">Get A Demo</a>
            </div>
          </div>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "25%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
      </div>

      <div style={{ height: "143px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== FEATURES SECTION ===== */}
      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        marginBottom: "1.75em",
        width: "100%"
      }}>
        {/* Feature 1: Sensor Analytics */}
        <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word",
          alignSelf: "center"
        }}>
          <div className="wp-block-image">
            <figure className="aligncenter size-full">
              <a href="https://uptake.com/features/sensor-insights/">
                <img 
                  src="https://uptake.com/wp-content/uploads/2025/11/sensor_analytics-e1763067857914.png"
                  decoding="async"
                  width="82"
                  height="105"
                  alt=""
                  className="wp-image-3739"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </figure>
          </div>
          <p className="has-text-align-center override-font has-medium-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            fontStyle: "normal",
            fontWeight: "700",
            textAlign: "center"
          }}>
            <a href="https://uptake.com/features/sensor-insights/" style={{ color: "inherit" }}>Sensor<br />Analytics</a>
          </p>
        </div>

        {/* Feature 2: Risk Explorer */}
        <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word",
          alignSelf: "center"
        }}>
          <div className="wp-block-image">
            <figure className="aligncenter size-full">
              <a href="https://uptake.com/features/risk-explorer/">
                <img 
                  src="https://uptake.com/wp-content/uploads/2025/11/anomoly-detection-1-e1763067799432.png"
                  decoding="async"
                  width="100"
                  height="102"
                  alt=""
                  className="wp-image-3744"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </figure>
          </div>
          <p className="has-text-align-center override-font has-medium-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            fontStyle: "normal",
            fontWeight: "700",
            textTransform: "capitalize",
            textAlign: "center"
          }}>
            <a href="https://uptake.com/features/risk-explorer/" style={{ color: "inherit" }}>Risk<br />Explorer</a>
          </p>
        </div>

        {/* Feature 3: Remote Diagnostics */}
        <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word",
          alignSelf: "center"
        }}>
          <div className="wp-block-image">
            <figure className="aligncenter size-full">
              <a href="https://uptake.com/features/remote-diagnostics/">
                <img 
                  src="https://uptake.com/wp-content/uploads/2025/11/asset_inventory-e1763067790264.png"
                  decoding="async"
                  width="100"
                  height="102"
                  alt=""
                  className="wp-image-3755"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </figure>
          </div>
          <p className="has-text-align-center override-font has-medium-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            fontStyle: "normal",
            fontWeight: "700",
            textAlign: "center"
          }}>
            <a href="https://uptake.com/features/remote-diagnostics/" style={{ color: "inherit" }}>Remote<br />Diagnostics</a>
          </p>
        </div>

        {/* Feature 4: Warranty */}
        <div className="wp-block-column is-vertically-aligned-top is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word",
          alignSelf: "flex-start"
        }}>
          <div className="wp-block-image">
            <figure className="aligncenter size-full">
              <a href="https://uptake.com/features/warranty/">
                <img 
                  src="https://uptake.com/wp-content/uploads/2025/11/asset_details-e1763067782951.png"
                  decoding="async"
                  width="100"
                  height="105"
                  alt=""
                  className="wp-image-3757"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </figure>
          </div>
          <p className="has-text-align-center override-font has-medium-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            fontStyle: "normal",
            fontWeight: "700",
            textAlign: "center"
          }}>
            <a href="https://uptake.com/features/warranty/" style={{ color: "inherit" }}>Warranty</a>
          </p>
        </div>

        {/* Feature 5: Mixed Fleet Data Hub */}
        <div className="wp-block-column is-vertically-aligned-top is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word",
          alignSelf: "flex-start"
        }}>
          <div className="wp-block-image">
            <figure className="aligncenter size-full is-resized">
              <a href="https://uptake.com/features/mixed-fleet-data-hub/">
                <img 
                  src="https://uptake.com/wp-content/uploads/2025/11/filtering-e1763067736770.png"
                  decoding="async"
                  width="100"
                  height="110"
                  alt=""
                  className="wp-image-3758"
                  style={{ width: "100px", height: "auto", maxWidth: "100%" }}
                />
              </a>
            </figure>
          </div>
          <p className="has-text-align-center override-font has-medium-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            fontStyle: "normal",
            fontWeight: "700",
            textAlign: "center"
          }}>
            <a href="https://uptake.com/features/mixed-fleet-data-hub/" style={{ color: "inherit" }}>Mixed Fleet<br />Data Hub</a>
          </p>
        </div>

        {/* Feature 6: Easy to Use Dashboards */}
        <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word",
          alignSelf: "center"
        }}>
          <div className="wp-block-image">
            <figure className="aligncenter size-full">
              <a href="https://uptake.com/features/fleet-insight-dashboards/">
                <img 
                  src="https://uptake.com/wp-content/uploads/2025/11/dashboard-e1763068460446.png"
                  decoding="async"
                  width="125"
                  height="85"
                  alt=""
                  className="wp-image-3768"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </a>
            </figure>
          </div>
          <p className="has-text-align-center override-font has-medium-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            fontStyle: "normal",
            fontWeight: "700",
            textAlign: "center"
          }}>
            <a href="https://uptake.com/features/fleet-insight-dashboards/" style={{ color: "inherit" }}>Easy to<br />Use Dashboards</a>
          </p>
        </div>
      </div>

      {/* ===== FEATURE DESCRIPTIONS ===== */}
      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        marginBottom: "1.75em",
        width: "100%"
      }}>
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p className="has-text-align-center override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            textAlign: "center"
          }}>Predictive analytics with external insights, compatible with major fleets.</p>
        </div>
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p className="has-text-align-center override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            textAlign: "center"
          }}>See risk clearly, prioritize confidently and keep your fleet ready.</p>
        </div>
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p className="has-text-align-center override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            textAlign: "center"
          }}>Identify problems in real time—without ever touching the vehicle.</p>
        </div>
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p className="has-text-align-center override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            textAlign: "center"
          }}>Turn warranty data into dollars. Automatically identify and act on eligible claims.</p>
        </div>
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p className="has-text-align-center override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            textAlign: "center"
          }}>One platform for every asset. Standardize insights across your entire fleet.</p>
        </div>
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <p className="has-text-align-center override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px",
            textAlign: "center"
          }}>Filter alerts based on time, severity, location or affected systems.</p>
        </div>
      </div>

      <div style={{ height: "125px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== IMAGE ROW ===== */}
      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        marginBottom: "1.75em",
        width: "100%"
      }}>
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <figure className="wp-block-image size-large">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/11/unnamed-1-1024x588.png"
              srcSet="https://uptake.com/wp-content/uploads/2025/11/unnamed-1-1024x588.png 1024w, https://uptake.com/wp-content/uploads/2025/11/unnamed-1-300x172.png 300w, https://uptake.com/wp-content/uploads/2025/11/unnamed-1-768x441.png 768w, https://uptake.com/wp-content/uploads/2025/11/unnamed-1.png 1335w"
              decoding="async"
              width="1024"
              height="588"
              alt=""
              className="wp-image-3690"
              sizes="(max-width: 1024px) 100vw, 1024px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
        </div>
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <figure className="wp-block-image size-full">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/01/web_asset-insights_viewer-insights-list.webp"
              srcSet="https://uptake.com/wp-content/uploads/2025/01/web_asset-insights_viewer-insights-list.webp 1000w, https://uptake.com/wp-content/uploads/2025/01/web_asset-insights_viewer-insights-list-300x180.webp 300w, https://uptake.com/wp-content/uploads/2025/01/web_asset-insights_viewer-insights-list-768x461.webp 768w"
              decoding="async"
              width="1000"
              height="600"
              alt=""
              className="wp-image-176"
              sizes="(max-width: 1000px) 100vw, 1000px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
        </div>
      </div>

      <div style={{ height: "108px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== CUSTOMER LOGOS ===== */}
      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        marginBottom: "1.75em",
        width: "100%"
      }}>
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "15%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "70%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <h3 className="wp-block-heading has-text-align-center has-blue-color has-text-color has-link-color has-small-font-size" style={{
            fontStyle: "normal",
            fontWeight: "700",
            textAlign: "center",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.4",
            fontWeight: "500",
            textTransform: "none",
            color: "#165ffb"
          }} id="h-trusted-by-top-fleets-around-the-world">Trusted by Top Fleets Around the World</h3>
          
          <div style={{ height: "36px" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <div className="wp-block-columns is-layout-flex" style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "2em",
            marginBottom: "1.75em",
            width: "100%"
          }}>
            {/* Logo 1: Pepsico */}
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              alignSelf: "center"
            }}>
              <div className="wp-block-image">
                <figure className="aligncenter size-full">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/customer_logo_pepsico-e1763069991306.png"
                    decoding="async"
                    width="150"
                    height="90"
                    alt=""
                    className="wp-image-249"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </figure>
              </div>
            </div>

            {/* Logo 2: United Road */}
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              alignSelf: "center"
            }}>
              <div className="wp-block-image">
                <figure className="aligncenter size-full">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/02/customer_logo_unitedroad-e1763070012577.png"
                    decoding="async"
                    width="150"
                    height="90"
                    alt=""
                    className="wp-image-248"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </figure>
              </div>
            </div>

            {/* Logo 3: AF */}
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div className="wp-block-image">
                <figure className="aligncenter size-full">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/11/AF-e1763134942697.png"
                    decoding="async"
                    width="100"
                    height="78"
                    alt=""
                    className="wp-image-3677"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </figure>
              </div>
            </div>

            {/* Logo 4: BB */}
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              alignSelf: "center"
            }}>
              <div className="wp-block-image is-style-default">
                <figure className="aligncenter size-full is-resized">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/11/BB-e1763135008313.png"
                    decoding="async"
                    width="75"
                    height="74"
                    alt=""
                    className="wp-image-3678"
                    style={{ width: "75px", height: "auto", maxWidth: "100%" }}
                  />
                </figure>
              </div>
            </div>

            {/* Logo 5: Paper Transport */}
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              alignSelf: "center"
            }}>
              <div className="wp-block-image">
                <figure className="aligncenter size-full">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/11/paper_transport-e1763140178136.png"
                    decoding="async"
                    width="80"
                    height="35"
                    alt=""
                    className="wp-image-3826"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </figure>
              </div>
            </div>

            {/* Logo 6: Long Beverage */}
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              alignSelf: "center"
            }}>
              <div className="wp-block-image">
                <figure className="aligncenter size-full">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/11/long_beverage-e1763140463281.png"
                    decoding="async"
                    width="75"
                    height="68"
                    alt=""
                    className="wp-image-3828"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "15%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
      </div>

      {/* ===== BOSCH ANNOUNCEMENT ===== */}
      <div className="lazyblock-uptake-split-content-2f884O wp-block-lazyblock-uptake-split-content">
        <div className="split-content image-right color-blue" style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#165ffb",
          color: "#fff",
          minHeight: "400px",
          alignItems: "center"
        }}>
          <div className="image" style={{
            backgroundImage: "url('https://uptake.com/wp-content/uploads/2026/03/main_image_img_h900-1024x576.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            flex: "1",
            minHeight: "300px"
          }}></div>
          <div className="content" style={{
            flex: "1",
            padding: "40px",
            color: "#fff"
          }}>
            <div className="lazyblock-inner-blocks">
              <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>
              
              <p className="has-white-color has-text-color has-link-color has-small-font-size wp-block-paragraph" style={{
                textTransform: "uppercase",
                color: "#fff",
                fontSize: "0.85em",
                marginBottom: "10px"
              }} id="h-announcement-march-19-2026">
                <strong>Announcement · March 19, 2026</strong>
              </p>
              
              <h2 className="wp-block-heading has-white-color has-text-color has-link-color" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "28px",
                lineHeight: "1.3",
                fontWeight: "500",
                textTransform: "none",
                color: "#fff"
              }} id="h-uptake-is-joining-nbsp-bosch-nbsp-to-scale-ai-powered-fleet-maintenance-globally">
                Uptake is joining&nbsp;<a href="https://www.bosch.com/" style={{ color: "#fff", textDecoration: "underline" }}>Bosch</a>&nbsp;to scale AI-powered fleet maintenance globally
              </h2>
              
              <p className="override-font has-white-color has-text-color has-link-color wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px",
                color: "#fff"
              }} id="h-fleet-is-powering-trucks-worldwide">
                <a href="https://www.linkedin.com/company/bosch/" target="_blank" rel="noreferrer noopener" style={{ color: "#fff", textDecoration: "underline" }}>Bosch</a> has announced its planned acquisition of <a href="https://www.linkedin.com/company/uptake/" target="_blank" rel="noreferrer noopener" style={{ color: "#fff", textDecoration: "underline" }}>Uptake</a>, bringing together AI-driven predictive maintenance with Bosch's global expertise in mobility, diagnostics, and telematics. For fleets, this means smarter maintenance decisions, earlier failure detection, and more uptime.<br /><br />We're excited about what this next chapter will enable as we scale predictive maintenance to more vehicles and operators around the world.
              </p>
              
              <div style={{ height: "47px" }} aria-hidden="true" className="wp-block-spacer"></div>
              
              <p className="override-font has-black-color has-smoke-background-color has-text-color has-background has-link-color has-small-font-size wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "0.85em",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px",
                color: "#000",
                backgroundColor: "#EDEDED",
                padding: "1.25em 2.375em"
              }}>
                "<em>Joining forces with Bosch will allow us to scale our AI-driven vehicle health solutions faster and deliver even greater value to the market.</em>"<br /><br />
                <strong>Adam McElhinney, CEO — Uptake Technologies</strong>
              </p>
              
              <div style={{ height: "36px" }} aria-hidden="true" className="wp-block-spacer"></div>
              
              <div className="wp-block-buttons is-layout-flex" style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button has-custom-width wp-block-button__width-50" style={{ width: "50%" }}>
                  <a className="wp-block-button__link has-black-background-color has-background has-small-font-size has-custom-font-size wp-element-button" 
                     href="https://us.bosch-press.com/pressportal/us/en/press-release-30080.html"
                     target="_blank"
                     rel="noreferrer noopener"
                     style={{
                       backgroundColor: "#000",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0",
                       width: "100%",
                       textAlign: "center"
                     }}>Read the full announcement</a>
                </div>
              </div>
              
              <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "156px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== METRICS SECTION ===== */}
      <h2 className="wp-block-heading has-text-align-center has-large-font-size" style={{
        fontStyle: "normal",
        fontWeight: "700",
        textAlign: "center",
        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontSize: "2em",
        lineHeight: "1.3",
        fontWeight: "500",
        textTransform: "none"
      }} id="h-do-more-spend-less-win-faster">Do more. Spend less. Win faster.</h2>

      <div className="wp-block-image">
        <figure className="aligncenter size-large">
          <img 
            src="https://uptake.com/wp-content/uploads/2025/04/Metrics-2-1024x370.png"
            srcSet="https://uptake.com/wp-content/uploads/2025/04/Metrics-2-1024x370.png 1024w, https://uptake.com/wp-content/uploads/2025/04/Metrics-2-300x109.png 300w, https://uptake.com/wp-content/uploads/2025/04/Metrics-2-768x278.png 768w, https://uptake.com/wp-content/uploads/2025/04/Metrics-2-1536x556.png 1536w, https://uptake.com/wp-content/uploads/2025/04/Metrics-2-2048x741.png 2048w"
            decoding="async"
            width="1024"
            height="370"
            alt=""
            className="wp-image-2271"
            sizes="(max-width: 1024px) 100vw, 1024px"
            style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
          />
        </figure>
      </div>

      <div style={{ height: "145px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== TELEMATIC TREND REPORT ===== */}
      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        marginBottom: "1.75em",
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
          <h3 className="wp-block-heading has-text-align-center has-blue-color has-text-color has-link-color has-large-font-size" style={{
            fontStyle: "normal",
            fontWeight: "800",
            textAlign: "center",
            color: "#165ffb",
            fontSize: "2em",
            lineHeight: "1.3",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          }} id="h-2025-telematic-trend-report">2025 Telematic Trend Report</h3>
          
          <p className="has-text-align-center wp-block-paragraph" style={{ textAlign: "center" }}>At Uptake, we are constantly looking for ways to help Fleet managers be the most information to make the smart decisions. We recently polled fleet managers on their real-world experiences with telematics devices—uncovering the benefits, challenges, and surprising insights that come with adopting this technology.</p>
          
          <p className="has-text-align-center wp-block-paragraph" style={{
            fontStyle: "normal",
            fontWeight: "800",
            textAlign: "center"
          }}>
            <strong>Did you know, almost 70% of organizations use telemetry data for risk mitigation and driver behavior coaching?</strong>
          </p>
          
          <p className="has-text-align-center wp-block-paragraph" style={{ textAlign: "center" }}>Download the whitepaper to see the full results and learn what your peers are saying about the tools driving the future of fleet management.</p>
          
          <iframe 
            src="https://source.uptake.com/l/1011251/2025-08-22/2r6v3" 
            width="100%" 
            height="690" 
            type="text/html" 
            frameBorder="0" 
            allowTransparency="true" 
            style={{ border: "0" }}
            title="Telematic Trend Report"
          ></iframe>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "20%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
      </div>

      <div style={{ height: "64px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== PREMIER CONNECTORS ===== */}
      <p className="has-text-align-center override-font-header2 has-large-font-size wp-block-paragraph" style={{
        fontStyle: "normal",
        fontWeight: "700",
        textAlign: "center",
        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontSize: "2em",
        lineHeight: "1.3",
        fontWeight: "500",
        textTransform: "none"
      }}>Premier Connectors</p>

      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        marginBottom: "1.75em",
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
          <figure className="wp-block-image size-full">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/02/daimler.webp"
              srcSet="https://uptake.com/wp-content/uploads/2025/02/daimler.webp 500w, https://uptake.com/wp-content/uploads/2025/02/daimler-300x180.webp 300w"
              decoding="async"
              width="500"
              height="300"
              alt=""
              className="wp-image-515"
              sizes="(max-width: 500px) 100vw, 500px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
          <figure className="wp-block-image size-full">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/01/platform-science.webp"
              srcSet="https://uptake.com/wp-content/uploads/2025/01/platform-science.webp 500w, https://uptake.com/wp-content/uploads/2025/01/platform-science-300x180.webp 300w"
              decoding="async"
              width="500"
              height="300"
              alt="Platform Science"
              className="wp-image-108"
              sizes="(max-width: 500px) 100vw, 500px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <figure className="wp-block-image size-full">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/02/samsara.webp"
              srcSet="https://uptake.com/wp-content/uploads/2025/02/samsara.webp 500w, https://uptake.com/wp-content/uploads/2025/02/samsara-300x180.webp 300w"
              decoding="async"
              width="500"
              height="300"
              alt=""
              className="wp-image-516"
              sizes="(max-width: 500px) 100vw, 500px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
          <figure className="wp-block-image size-full">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/01/trimble.webp"
              srcSet="https://uptake.com/wp-content/uploads/2025/01/trimble.webp 500w, https://uptake.com/wp-content/uploads/2025/01/trimble-300x180.webp 300w"
              decoding="async"
              width="500"
              height="300"
              alt="Trimble"
              className="wp-image-110"
              sizes="(max-width: 500px) 100vw, 500px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <figure className="wp-block-image size-full">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/02/geotab.webp"
              srcSet="https://uptake.com/wp-content/uploads/2025/02/geotab.webp 500w, https://uptake.com/wp-content/uploads/2025/02/geotab-300x180.webp 300w"
              decoding="async"
              width="500"
              height="300"
              alt=""
              className="wp-image-517"
              sizes="(max-width: 500px) 100vw, 500px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
          <figure className="wp-block-image size-full">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/01/calamp.webp"
              srcSet="https://uptake.com/wp-content/uploads/2025/01/calamp.webp 500w, https://uptake.com/wp-content/uploads/2025/01/calamp-300x180.webp 300w"
              decoding="async"
              width="500"
              height="300"
              alt="Cal/Amp"
              className="wp-image-111"
              sizes="(max-width: 500px) 100vw, 500px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <figure className="wp-block-image size-full">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/01/intellishift.webp"
              srcSet="https://uptake.com/wp-content/uploads/2025/01/intellishift.webp 500w, https://uptake.com/wp-content/uploads/2025/01/intellishift-300x180.webp 300w"
              decoding="async"
              width="500"
              height="300"
              alt="Intellishift"
              className="wp-image-109"
              sizes="(max-width: 500px) 100vw, 500px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
          <figure className="wp-block-image size-full">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/11/Isaac-TSP-Logo.png"
              srcSet="https://uptake.com/wp-content/uploads/2025/11/Isaac-TSP-Logo.png 612w, https://uptake.com/wp-content/uploads/2025/11/Isaac-TSP-Logo-300x142.png 300w"
              decoding="async"
              width="612"
              height="290"
              alt=""
              className="wp-image-3712"
              sizes="(max-width: 612px) 100vw, 612px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </figure>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
      </div>

      <div style={{ height: "133px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== GAIN FOCUS AND CLARITY ===== */}
      <div className="lazyblock-uptake-text-and-image-1bEQa wp-block-lazyblock-uptake-text-and-image">
        <div className="uptake-image-and-text right" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
          padding: "20px 0"
        }}>
          <div className="uptake-image-and-text__image" style={{ flex: "1" }}>
            <img 
              src="https://uptake.com/wp-content/uploads/2025/02/FIA-Graphic-01b.jpg"
              srcSet="https://uptake.com/wp-content/uploads/2025/02/FIA-Graphic-01b.jpg 1536w, https://uptake.com/wp-content/uploads/2025/02/FIA-Graphic-01b-300x150.jpg 300w, https://uptake.com/wp-content/uploads/2025/02/FIA-Graphic-01b-1024x512.jpg 1024w, https://uptake.com/wp-content/uploads/2025/02/FIA-Graphic-01b-768x384.jpg 768w"
              decoding="async"
              width="1536"
              height="768"
              className="attachment-full size-full"
              alt=""
              sizes="(max-width: 1536px) 100vw, 1536px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="uptake-image-and-text__content" style={{ flex: "1", padding: "20px" }}>
            <div className="lazyblock-inner-blocks">
              <h2 className="wp-block-heading" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "28px",
                lineHeight: "1.3",
                fontWeight: "500",
                textTransform: "none"
              }} id="h-gain-focus-and-clarity">Gain Focus and Clarity</h2>
              
              <p className="override-font has-small-font-size wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "0.85em",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px"
              }}>Empower your team with AI-driven insights to reduce maintenance costs, maximize uptime, and improve fuel efficiency. Gain real-time visibility into your fleet's health, prevent unexpected breakdowns, and drive smarter, more cost-effective operations.</p>
              
              <div className="wp-block-buttons is-layout-flex" style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button is-style-fill">
                  <a className="wp-block-button__link has-blue-background-color has-background has-small-font-size has-custom-font-size wp-element-button" 
                     href="https://calendly.com/d/cndn-pt9-ks6/uptake-fleet-demo"
                     target="_blank"
                     rel="noreferrer noopener"
                     style={{
                       backgroundColor: "#165ffb",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "0.85em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Get a Demo</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "144px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== CUSTOMER TESTIMONIALS ===== */}
      <div className="wp-block-group">
        <div className="wp-block-group__inner-container is-layout-constrained">
          <h2 className="wp-block-heading has-text-align-center" style={{
            fontStyle: "normal",
            fontWeight: "600",
            textAlign: "center",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "28px",
            lineHeight: "1.3",
            fontWeight: "500",
            textTransform: "none"
          }} id="h-see-what-customers-are-saying-about-us">See what customers are saying about us.</h2>
          
          <div style={{ height: "28px" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <div className="wp-block-columns is-layout-flex" style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "2em",
            marginBottom: "1.75em",
            width: "100%"
          }}>
            <div className="wp-block-column is-layout-flow" style={{
              flexBasis: "55%",
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div className="wp-block-image">
                <figure className="aligncenter size-full">
                  <img 
                    src="https://uptake.com/wp-content/uploads/2025/11/Customer-Testimonial.png"
                    srcSet="https://uptake.com/wp-content/uploads/2025/11/Customer-Testimonial.png 873w, https://uptake.com/wp-content/uploads/2025/11/Customer-Testimonial-300x104.png 300w, https://uptake.com/wp-content/uploads/2025/11/Customer-Testimonial-768x267.png 768w"
                    decoding="async"
                    width="873"
                    height="303"
                    alt=""
                    className="wp-image-3698"
                    sizes="(max-width: 873px) 100vw, 873px"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </figure>
              </div>
            </div>
            
            <div className="wp-block-column is-layout-flow" style={{
              flexBasis: "45%",
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <div className="override-font">
                {/* Testimonial Carousel - simplified version */}
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  padding: "10px"
                }}>
                  <div style={{
                    backgroundColor: "#f9f9f9",
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center"
                  }}>
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/06/Testimonial1-1-300x90.png"
                      alt="Testimonial1"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div style={{
                    backgroundColor: "#f9f9f9",
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center"
                  }}>
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/06/Testimonial2-1-300x84.png"
                      alt="Testimonial2"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                  <div style={{
                    backgroundColor: "#f9f9f9",
                    padding: "20px",
                    borderRadius: "8px",
                    textAlign: "center"
                  }}>
                    <img 
                      src="https://uptake.com/wp-content/uploads/2025/06/Testimonial3-1-300x81.png"
                      alt="Testimonial3"
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "83px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== CASE STUDY SECTION ===== */}
      <div className="wp-block-group has-white-color has-blue-background-color has-text-color has-background has-link-color" style={{
        backgroundColor: "#165ffb",
        color: "#fff",
        padding: "20px 0"
      }}>
        <div className="wp-block-group__inner-container is-layout-constrained">
          <div style={{ height: "2rem" }} aria-hidden="true" className="wp-block-spacer"></div>
          
          <div className="wp-block-columns are-vertically-aligned-center is-layout-flex" style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "2em",
            marginBottom: "1.75em",
            width: "100%",
            alignItems: "center"
          }}>
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              alignSelf: "center"
            }}>
              <h3 className="wp-block-heading" style={{ color: "#fff" }} id="h-customer-success">Customer Success</h3>
              <h2 className="wp-block-heading" style={{ color: "#fff" }} id="h-united-road-increases-fleet-uptime-with-4x-roi">United Road Increases Fleet Uptime with 4x ROI</h2>
              <p className="wp-block-paragraph" style={{ color: "#fff" }}>With many fleets short on drivers and technicians, vehicle failures are often not addressable in a timely and cost-effective manner. United Road, a leader in heavy-haul transportation services in North America, deployed Uptake Fleet across its fleet to cut maintenance costs and increase driver mileage.</p>
              <div style={{ height: "1rem" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-buttons is-layout-flex" style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button">
                  <a className="wp-block-button__link has-white-color has-black-background-color has-text-color has-background has-link-color wp-element-button" 
                     href="/resources/united-road-capitalizes-on-predictive-maintenance-with-4x-roi"
                     style={{
                       backgroundColor: "#000",
                       color: "#fff",
                       borderRadius: "9999px",
                       padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                       fontSize: "1.125em",
                       textDecoration: "none",
                       display: "inline-block",
                       cursor: "pointer",
                       borderWidth: "0"
                     }}>Get the Case Study</a>
                </div>
              </div>
            </div>
            
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word",
              alignSelf: "center"
            }}>
              <figure className="wp-block-image size-large">
                <img 
                  src="https://uptake.com/wp-content/uploads/2025/01/GettyImages-922733518-1024x683.webp"
                  srcSet="https://uptake.com/wp-content/uploads/2025/01/GettyImages-922733518-1024x683.webp 1024w, https://uptake.com/wp-content/uploads/2025/01/GettyImages-922733518-300x200.webp 300w, https://uptake.com/wp-content/uploads/2025/01/GettyImages-922733518-768x512.webp 768w, https://uptake.com/wp-content/uploads/2025/01/GettyImages-922733518-1536x1024.webp 1536w, https://uptake.com/wp-content/uploads/2025/01/GettyImages-922733518-2048x1365.webp 2048w"
                  decoding="async"
                  width="1024"
                  height="683"
                  alt=""
                  className="wp-image-113"
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </figure>
            </div>
          </div>
          
          <div style={{ height: "2rem" }} aria-hidden="true" className="wp-block-spacer"></div>
        </div>
      </div>

      <div style={{ height: "4rem" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== INDUSTRY SOLUTIONS ===== */}
      <h2 className="wp-block-heading has-text-align-center has-large-font-size" style={{
        fontStyle: "normal",
        fontWeight: "600",
        textAlign: "center",
        fontSize: "2em",
        lineHeight: "1.3",
        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
      }} id="h-no-matter-your-industry-or-fleet-size">No matter your industry or fleet size.</h2>

      <div style={{ height: "70px" }} aria-hidden="true" className="wp-block-spacer"></div>

      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        marginBottom: "1.75em",
        width: "100%"
      }}>
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
        
        {/* Buses */}
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <h3 className="wp-block-heading has-text-align-left has-medium-font-size" style={{
            textTransform: "capitalize",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.4",
            fontWeight: "500",
            textTransform: "none"
          }} id="h-buses">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/11/buses-e1763133894654.png"
              decoding="async"
              width="50"
              height="18"
              className="wp-image-3796"
              style={{ width: "50px", maxWidth: "100%", height: "auto" }}
              alt=""
            />Buses
          </h3>
          <p className="override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px"
          }}>Smarter Maintenance for Safer Passenger Journeys.</p>
          <p className="override-font has-blue-color has-text-color has-link-color has-small-font-size wp-block-paragraph" style={{
            fontStyle: "normal",
            fontWeight: "600",
            color: "#165ffb",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px"
          }}>
            <strong><a href="https://uptake.com/solutions/buses/" style={{ color: "#165ffb" }}>Learn More -&gt;</a></strong>
          </p>
        </div>

        {/* Concrete */}
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <h3 className="wp-block-heading has-medium-font-size" style={{
            textTransform: "capitalize",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.4",
            fontWeight: "500",
            textTransform: "none"
          }} id="h-concrete">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/11/concrete-e1763134145344.png"
              decoding="async"
              width="27"
              height="18"
              className="wp-image-3805"
              style={{ width: "27px", maxWidth: "100%", height: "auto" }}
              alt=""
            />Concrete
          </h3>
          <p className="override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px"
          }}>Deliver Every Load Without Unexpected Breakdowns.</p>
          <p className="override-font has-blue-color has-text-color has-link-color has-small-font-size wp-block-paragraph" style={{
            fontStyle: "normal",
            fontWeight: "600",
            color: "#165ffb",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px"
          }}>
            <strong><a href="https://uptake.com/concrete/" style={{ color: "#165ffb" }}>Learn More -&gt;</a></strong>
          </p>
        </div>

        {/* Construction */}
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <h3 className="wp-block-heading has-medium-font-size" style={{
            textTransform: "capitalize",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.4",
            fontWeight: "500",
            textTransform: "none"
          }} id="h-construction">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/11/construction-e1763134455302.png"
              decoding="async"
              width="32"
              height="18"
              className="wp-image-3809"
              style={{ width: "32px", maxWidth: "100%", height: "auto" }}
              alt=""
            />Construction
          </h3>
          <p className="override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px"
          }}>Predictive Maintenance for the Machines That Build.</p>
          <p className="override-font has-blue-color has-text-color has-link-color has-small-font-size wp-block-paragraph" style={{
            fontStyle: "normal",
            fontWeight: "600",
            color: "#165ffb",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px"
          }}>
            <strong><a href="https://uptake.com/off-highway/" style={{ color: "#165ffb" }}>Learn More -&gt;</a></strong>
          </p>
        </div>

        {/* Trucking */}
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <h3 className="wp-block-heading has-medium-font-size" style={{
            textTransform: "capitalize",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "1.25em",
            lineHeight: "1.4",
            fontWeight: "500",
            textTransform: "none"
          }} id="h-trucking">
            <img 
              src="https://uptake.com/wp-content/uploads/2025/11/semi_truck-e1763134584131.png"
              decoding="async"
              width="57"
              height="18"
              className="wp-image-3811"
              style={{ width: "57px", maxWidth: "100%", height: "auto" }}
              alt=""
            />Trucking
          </h3>
          <p className="override-font has-small-font-size wp-block-paragraph" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px"
          }}>More Miles. Less Downtime. Maximum Fleet Uptime.</p>
          <p className="override-font has-blue-color has-text-color has-link-color has-small-font-size wp-block-paragraph" style={{
            fontStyle: "normal",
            fontWeight: "600",
            color: "#165ffb",
            fontSize: "0.85em",
            lineHeight: "1.8",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "0px",
            marginRight: "0px"
          }}>
            <strong><a href="https://uptake.com/on-highway-trucks/" style={{ color: "#165ffb" }}>Learn More -&gt;</a></strong>
          </p>
        </div>
        
        <div className="wp-block-column is-layout-flow" style={{
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
      </div>
    </div>
  );
}