// src/pages/FleetPage.jsx
import React from "react";

export default function FleetPage() {
  return (
    <div className="fleet-page" style={{ 
      fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#ffffff",
      color: "#000000"
    }}>
      
      {/* ===== HERO SECTION ===== */}
      <div className="wp-block-cover breakout-hero" style={{
        width: "100vw",
        maxWidth: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        height: "50vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <img 
          src="https://uptake.com/wp-content/uploads/2025/02/AdobeStock_1124675783-scaled.jpeg"
          srcSet="https://uptake.com/wp-content/uploads/2025/02/AdobeStock_1124675783-scaled.jpeg 2560w, https://uptake.com/wp-content/uploads/2025/02/AdobeStock_1124675783-300x168.jpeg 300w, https://uptake.com/wp-content/uploads/2025/02/AdobeStock_1124675783-1024x574.jpeg 1024w, https://uptake.com/wp-content/uploads/2025/02/AdobeStock_1124675783-768x430.jpeg 768w, https://uptake.com/wp-content/uploads/2025/02/AdobeStock_1124675783-1536x861.jpeg 1536w, https://uptake.com/wp-content/uploads/2025/02/AdobeStock_1124675783-2048x1148.jpeg 2048w"
          fetchPriority="high"
          decoding="async"
          width="2560"
          height="1435"
          className="wp-block-cover__image-background"
          alt="A semi-truck drives down a highway at sunset with mountains in the distance."
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            position: "absolute",
            top: "0",
            left: "0"
          }}
        />
        <div className="wp-block-cover__background" style={{
          backgroundColor: "#9a7053",
          opacity: "0.6",
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
          width: "100%",
          maxWidth: "1360px",
          padding: "0 20px",
          margin: "0 auto"
        }}>
          <div className="wp-block-group">
            <div className="wp-block-group__inner-container">
              <div style={{ height: "47px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-columns is-layout-flex" style={{
                display: "flex",
                flexWrap: "nowrap",
                gap: "2em",
                width: "100%"
              }}>
                <div className="wp-block-column is-layout-flow" style={{
                  flexBasis: "30%",
                  flexGrow: 1,
                  minWidth: 0,
                  overflowWrap: "break-word",
                  wordBreak: "break-word"
                }}></div>
                <div className="wp-block-column is-layout-flow" style={{
                  flexBasis: "25%",
                  flexGrow: 1,
                  minWidth: 0,
                  overflowWrap: "break-word",
                  wordBreak: "break-word"
                }}>
                  <div className="wp-block-group">
                    <div className="wp-block-group__inner-container">
                      <h3 className="wp-block-heading" style={{
                        color: "#EDEDED",
                        fontSize: "20px",
                        lineHeight: "1.4",
                        fontWeight: "500",
                        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                        marginBottom: "10px"
                      }} id="h-uptake-fleet">Uptake Fleet</h3>
                      <h2 className="wp-block-heading overrride-font-header2 has-smoke-color has-text-color has-link-color has-large-font-size" style={{
                        color: "#EDEDED",
                        fontSize: "2em",
                        lineHeight: "1.3",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                        marginBottom: "20px"
                      }} id="h-keep-your-trucks-on-the-road">
                        <strong><strong>Keep Your<br />Trucks on the<br />Road</strong></strong>
                      </h2>
                      <p className="override-font has-smoke-color has-text-color has-link-color wp-block-paragraph" style={{
                        color: "#EDEDED",
                        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.8",
                        marginTop: "10px",
                        marginBottom: "20px",
                        marginLeft: "0px",
                        marginRight: "0px"
                      }}>Uptake Fleet empowers your team to cut maintenance costs, increase uptime, and improve fuel efficiency.</p>
                      <div className="wp-block-buttons is-layout-flex" style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "0.5em"
                      }}>
                        <div className="wp-block-button">
                          <a className="wp-block-button__link wp-element-button" 
                             href="https://uptake.com/speak-to-an-expert/"
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
                             }}>Talk to an Expert</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wp-block-column is-layout-flow" style={{
                  flexBasis: "35%",
                  flexGrow: 1,
                  minWidth: 0,
                  overflowWrap: "break-word",
                  wordBreak: "break-word"
                }}></div>
                <div className="wp-block-column is-layout-flow" style={{
                  flexBasis: "10%",
                  flexGrow: 1,
                  minWidth: 0,
                  overflowWrap: "break-word",
                  wordBreak: "break-word"
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "58px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== MAIN CONTENT SECTION ===== */}
      <div className="wp-block-group">
        <div className="wp-block-group__inner-container" style={{
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "0 20px"
        }}>
          <div className="wp-block-columns is-layout-flex" style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "2em",
            width: "100%"
          }}>
            <div className="wp-block-column is-layout-flow" style={{
              flexBasis: "5%",
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
              <h2 className="wp-block-heading has-text-align-center override-font-header2" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "28px",
                lineHeight: "1.3",
                fontWeight: "500",
                textTransform: "capitalize",
                textAlign: "center"
              }} id="h-enhance-your-preventive-maintenance-program-with-predictive-maintenance">Enhance your preventive maintenance program with predictive maintenance.</h2>
            </div>
            <div className="wp-block-column is-layout-flow" style={{
              flexBasis: "5%",
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}></div>
          </div>

          <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>

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
            }}>
              <h3 className="wp-block-heading has-text-align-center override-font-header3 has-medium-font-size" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "1.25em",
                lineHeight: "1.4",
                fontWeight: "500",
                textTransform: "capitalize",
                textAlign: "center"
              }} id="h-streamline-operations">
                <strong>Streamline operations</strong>
              </h3>
              <p className="override-font wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px"
              }}>Boost reliability and maximize uptime with AI-driven insights that power preventive and predictive maintenance. Reduce downtime, cut costs, and keep operations running smoothly with data-backed decision-making.</p>
            </div>
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <h3 className="wp-block-heading has-text-align-center override-font-header3 has-medium-font-size" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "1.25em",
                lineHeight: "1.4",
                fontWeight: "500",
                textTransform: "capitalize",
                textAlign: "center"
              }} id="h-optimize-inventory">
                <strong>Optimize inventory</strong>
              </h3>
              <p className="override-font wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px"
              }}>We help you forecast your fleet's needs ahead of time, ensuring the right parts are always in stock exactly when you need them. This proactive approach minimizes downtime, reduces unexpected repair costs, and optimizes your inventory, keeping your fleet running smoothly and efficiently.</p>
            </div>
            <div className="wp-block-column is-layout-flow" style={{
              flexGrow: 1,
              minWidth: 0,
              overflowWrap: "break-word",
              wordBreak: "break-word"
            }}>
              <h3 className="wp-block-heading has-text-align-center override-font-header3 has-medium-font-size" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "1.25em",
                lineHeight: "1.4",
                fontWeight: "500",
                textTransform: "capitalize",
                textAlign: "center"
              }} id="h-improve-labor-effectiveness">
                <strong>Improve labor effectiveness</strong>
              </h3>
              <p className="override-font wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px"
              }}>By leveraging real-time data and in-depth analysis of your truck's performance, we ensure that the right experts are deployed for the right repair at exactly the right time. This proactive approach maximizes productivity, reduces unnecessary labor costs, and ensures every technician is equipped with the right information to get the job done efficiently.</p>
            </div>
          </div>

          <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>
        </div>
      </div>

      {/* ===== BIG BUTTON SECTION ===== */}
      <div className="lazyblock-uptake-big-button-1xdPKv wp-block-lazyblock-uptake-big-button">
        <div className="big-button" style={{
          textAlign: "center",
          padding: "20px 0"
        }}>
          <a href="https://www.uptake.com/fleet/fia" target="_blank" style={{
            display: "inline-block",
            backgroundColor: "#165ffb",
            color: "#fff",
            padding: "16px 40px",
            borderRadius: "50px",
            fontSize: "18px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "all 0.3s ease"
          }}>
            Get your FREE Fleet Health Assessment <span style={{ marginLeft: "8px" }}>→</span>
          </a>
        </div>
      </div>

      <div style={{ height: "62px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== MANAGE EVERYTHING SECTION ===== */}
      <h2 className="wp-block-heading has-text-align-center override-font-header2" style={{
        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontSize: "28px",
        lineHeight: "1.3",
        fontWeight: "500",
        textTransform: "capitalize",
        textAlign: "center"
      }} id="h-manage-everything-that-affects-your-assets-health">Manage everything that affects your assets health</h2>

      <div style={{ height: "43px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== UPTAKE TEXT AND IMAGE - LEFT ===== */}
      <div className="lazyblock-uptake-text-and-image-Z1BQLbj wp-block-lazyblock-uptake-text-and-image">
        <div className="uptake-image-and-text left" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
          padding: "20px 20px",
          maxWidth: "1360px",
          margin: "0 auto"
        }}>
          <div className="uptake-image-and-text__image" style={{ flex: "1" }}>
            <img 
              src="https://uptake.com/wp-content/uploads/2025/01/web_risk-explorer_overview.webp"
              srcSet="https://uptake.com/wp-content/uploads/2025/01/web_risk-explorer_overview.webp 1000w, https://uptake.com/wp-content/uploads/2025/01/web_risk-explorer_overview-300x180.webp 300w, https://uptake.com/wp-content/uploads/2025/01/web_risk-explorer_overview-768x461.webp 768w"
              decoding="async"
              width="1000"
              height="600"
              className="attachment-full size-full"
              alt=""
              sizes="(max-width: 1000px) 100vw, 1000px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="uptake-image-and-text__content" style={{ flex: "1", padding: "20px" }}>
            <div className="lazyblock-inner-blocks">
              <h4 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontWeight: "700",
                marginBottom: "10px"
              }} id="h-anomaly-detection-amp-failure-prediction">Anomaly Detection &amp; Failure Prediction</h4>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "15px"
              }}>Say goodbye to unexpected roadside breakdowns! Our cutting-edge predictive analytics detect potential issues before they become problems, keeping your vehicle running smoothly. When a risk is identified, our system initiates virtual diagnostics and provides data-driven recommendations—so you can stay ahead of failures and keep moving with confidence.</p>
              <p className="has-blue-color has-text-color has-link-color wp-block-paragraph" style={{
                color: "#165ffb",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                fontWeight: "600"
              }}>
                <strong><a href="https://uptake.com/fleet/fia/" style={{ color: "#165ffb", textDecoration: "none" }}>Learn More →</a></strong>
              </p>
              <h4 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontWeight: "700",
                marginTop: "30px",
                marginBottom: "10px"
              }} id="h-asset-details">Asset Details</h4>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>Unlock smarter truck diagnostics with a 360° view of fault codes, signals, Uptake insights, cases, and repair orders from the past 30, 60, and 90 days. Optimize performance, prevent downtime, and drive efficiency with data-driven decisions.</p>
              <h4 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontWeight: "700",
                marginTop: "30px",
                marginBottom: "10px"
              }} id="h-dashboard-and-advanced-filtering-capability">
                <strong>Dashboard and Advanced Filtering Capability</strong>
              </h4>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>Unlock an at-a-glance overview of your entire vehicle portfolio, empowering you to swiftly identify high-risk trucks and take proactive measures. Stay ahead of maintenance needs by anticipating repairs before they become urgent.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== UPTAKE TEXT AND IMAGE - RIGHT ===== */}
      <div className="lazyblock-uptake-text-and-image-1bEQa wp-block-lazyblock-uptake-text-and-image">
        <div className="uptake-image-and-text right" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
          padding: "20px 20px",
          maxWidth: "1360px",
          margin: "0 auto"
        }}>
          <div className="uptake-image-and-text__content" style={{ flex: "1", padding: "20px" }}>
            <div className="lazyblock-inner-blocks">
              <h2 className="wp-block-heading" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "28px",
                lineHeight: "1.3",
                fontWeight: "500",
                marginBottom: "15px"
              }} id="h-gain-focus-and-clarity">Gain Focus and Clarity</h2>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "20px"
              }}>Empower your team with AI-driven insights to reduce maintenance costs, maximize uptime, and improve fuel efficiency. Gain real-time visibility into your fleet's health, prevent unexpected breakdowns, and drive smarter, more cost-effective operations.</p>
              <div className="wp-block-buttons is-layout-flex" style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button is-style-fill">
                  <a className="wp-block-button__link has-blue-background-color has-background wp-element-button" 
                     href="https://calendly.com/d/cndn-pt9-ks6/uptake-fleet-demo"
                     target="_blank"
                     rel="noreferrer noopener"
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
                     }}>
                    <strong>R</strong>equest a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </div>

      <div style={{ height: "83px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== INCREASE VISIBILITY SECTION ===== */}
      <h2 className="wp-block-heading has-text-align-center override-font-header2" style={{
        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontSize: "28px",
        lineHeight: "1.3",
        fontWeight: "500",
        textTransform: "capitalize",
        textAlign: "center"
      }} id="h-increase-visibility-across-your-entire-fleet">Increase visibility across your entire fleet</h2>

      <div style={{ height: "56px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== UPTAKE TEXT AND IMAGE - LEFT (2) ===== */}
      <div className="lazyblock-uptake-text-and-image-ZshoCM wp-block-lazyblock-uptake-text-and-image">
        <div className="uptake-image-and-text left" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "40px",
          padding: "20px 20px",
          maxWidth: "1360px",
          margin: "0 auto"
        }}>
          <div className="uptake-image-and-text__image" style={{ flex: "1" }}>
            <img 
              src="https://uptake.com/wp-content/uploads/2025/03/Asset-Performance-3.png"
              srcSet="https://uptake.com/wp-content/uploads/2025/03/Asset-Performance-3.png 1180w, https://uptake.com/wp-content/uploads/2025/03/Asset-Performance-3-300x109.png 300w, https://uptake.com/wp-content/uploads/2025/03/Asset-Performance-3-1024x371.png 1024w, https://uptake.com/wp-content/uploads/2025/03/Asset-Performance-3-768x278.png 768w"
              decoding="async"
              width="1180"
              height="427"
              className="attachment-full size-full"
              alt=""
              sizes="(max-width: 1180px) 100vw, 1180px"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          <div className="uptake-image-and-text__content" style={{ flex: "1", padding: "20px" }}>
            <div className="lazyblock-inner-blocks">
              <h4 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontWeight: "700",
                marginBottom: "10px"
              }} id="h-sensor-analytics">
                <strong>Sensor Analytics</strong>
              </h4>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "15px"
              }}>Enhance fleet performance with Uptake Fleet's External Insights API, now supporting major fleet and sensor manufacturers. For Geotab customers, use advanced data science models to monitor critical systems like alternators and batteries, setting precise performance thresholds to predict maintenance needs. Minimize downtime, reduce costs, and optimize fleet reliability with actionable insights.</p>
              <h4 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontWeight: "700",
                marginTop: "30px",
                marginBottom: "10px"
              }} id="h-work-order-analytics">
                <strong>Work Order Analytics</strong>
              </h4>
              <p className="wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8"
              }}>Uptake's Survival Analysis Model provides real-time risk scores, helping you track fleet health and proactively flag potential failures. With detailed analytics on vehicle components and sensor data, it empowers smarter decisions, reduces downtime, and streamlines fleet management—all in one platform.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== SPLIT CONTENT - HEAVY TRUCKS ===== */}
      <div className="lazyblock-uptake-split-content-1UaMiv wp-block-lazyblock-uptake-split-content">
        <div className="split-content image-right color-black" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffffff",
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "20px"
        }}>
          <div className="content" style={{ flex: "1", padding: "40px" }}>
            <div className="lazyblock-inner-blocks">
              <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>
              <h3 className="wp-block-heading has-medium-font-size" style={{
                fontSize: "1.25em",
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontWeight: "500",
                marginBottom: "10px"
              }} id="h-industries">Industries</h3>
              <h2 className="wp-block-heading" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "28px",
                lineHeight: "1.3",
                fontWeight: "500",
                marginBottom: "20px"
              }} id="h-fleet-is-powering-trucks-worldwide">Fleet is powering trucks worldwide.</h2>
              <div style={{ height: "36px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-buttons is-layout-flex" style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button">
                  <a className="wp-block-button__link wp-element-button" 
                     href="/on-highway-trucks"
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
                     }}>Learn More about Heavy Trucks</a>
                </div>
              </div>
              <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>
            </div>
          </div>
          <div className="image" style={{
            flex: "1",
            minHeight: "300px",
            backgroundImage: "url('https://uptake.com/wp-content/uploads/2025/01/fleet-repair-shop-1024x683.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}></div>
        </div>
      </div>

      <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== SPLIT CONTENT - CONSTRUCTION ===== */}
      <div className="lazyblock-uptake-split-content-bRDOc wp-block-lazyblock-uptake-split-content">
        <div className="split-content image-left color-black" style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffffff",
          maxWidth: "1360px",
          margin: "0 auto",
          padding: "20px"
        }}>
          <div className="image" style={{
            flex: "1",
            minHeight: "300px",
            backgroundImage: "url('https://uptake.com/wp-content/uploads/2025/01/off-highway-cta-1024x683.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}></div>
          <div className="content" style={{ flex: "1", padding: "40px" }}>
            <div className="lazyblock-inner-blocks">
              <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>
              <h2 className="wp-block-heading" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "28px",
                lineHeight: "1.3",
                fontWeight: "500",
                marginBottom: "20px"
              }} id="h-looking-for-tire-insights-for-construction">Looking for Tire insights for Construction?</h2>
              <div style={{ height: "36px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <div className="wp-block-buttons is-layout-flex" style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button">
                  <a className="wp-block-button__link wp-element-button" 
                     href="/off-highway"
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
                     }}>Learn More about Uptake for Construction</a>
                </div>
              </div>
              <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== BLUE CTA SECTION ===== */}
      <div className="wp-block-group has-white-color has-blue-background-color has-text-color has-background has-link-color" style={{
        backgroundColor: "#165ffb",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center"
      }}>
        <div className="wp-block-group__inner-container" style={{
          maxWidth: "1360px",
          margin: "0 auto"
        }}>
          <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>
          <p className="has-text-align-center has-large-font-size wp-block-paragraph" style={{
            fontSize: "2em",
            fontWeight: "700",
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          }}>
            <strong>Want to see it for yourself?</strong>
          </p>
          <div style={{ height: "2em" }} aria-hidden="true" className="wp-block-spacer"></div>
          <div className="wp-block-buttons is-content-justification-center is-layout-flex" style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5em"
          }}>
            <div className="wp-block-button">
              <a className="wp-block-button__link has-black-background-color has-background has-text-align-center wp-element-button" 
                 href="/fleet-request-info"
                 target="_blank"
                 rel="noreferrer noopener"
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
                 }}>Talk to an Expert</a>
            </div>
          </div>
          <div style={{ height: "4em" }} aria-hidden="true" className="wp-block-spacer"></div>
        </div>
      </div>
    </div>
  );
}