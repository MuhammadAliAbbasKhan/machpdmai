// src/pages/BusesPage.jsx
import React from "react";

export default function BusesPage() {
  return (
    <div className="buses-page" style={{ 
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
          src="https://uptake.com/wp-content/uploads/2025/11/AdobeStock_1734762091-scaled.jpeg"
          srcSet="https://uptake.com/wp-content/uploads/2025/11/AdobeStock_1734762091-scaled.jpeg 1920w, https://uptake.com/wp-content/uploads/2025/11/AdobeStock_1734762091-300x168.jpeg 300w, https://uptake.com/wp-content/uploads/2025/11/AdobeStock_1734762091-1024x574.jpeg 1024w, https://uptake.com/wp-content/uploads/2025/11/AdobeStock_1734762091-768x430.jpeg 768w, https://uptake.com/wp-content/uploads/2025/11/AdobeStock_1734762091-1536x861.jpeg 1536w, https://uptake.com/wp-content/uploads/2025/11/AdobeStock_1734762091-2048x1148.jpeg 2048w"
          fetchPriority="high"
          decoding="async"
          width="1920"
          height="1076"
          className="wp-block-cover__image-background"
          alt=""
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
          backgroundColor: "#646b6b",
          opacity: "0.8",
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
                  flexBasis: "35%",
                  flexGrow: 1,
                  minWidth: 0,
                  overflowWrap: "break-word",
                  wordBreak: "break-word"
                }}>
                  <div className="wp-block-group">
                    <div className="wp-block-group__inner-container">
                      <h2 className="wp-block-heading overrride-font has-smoke-color has-text-color has-link-color has-large-font-size" style={{
                        color: "#EDEDED",
                        fontSize: "2em",
                        lineHeight: "1.3",
                        fontWeight: "500",
                        textTransform: "uppercase",
                        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                        marginBottom: "20px"
                      }} id="h-uptake-fleet-for-buses">
                        <strong>Uptake Fleet For Buses</strong>
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
                      }}>Predict and prevent failures with maintenance solutions leveraging advanced AI and machine learning technologies. Reduce unplanned downtime, minimizes maintenance costs, and extend the lifespan of bus components. Predictive maintenance allows for the early detection of potential issues, enabling timely interventions that prevent minor problems from escalating into major failures.</p>
                      <div className="wp-block-buttons is-nowrap is-layout-flex" style={{
                        display: "flex",
                        flexWrap: "nowrap",
                        alignItems: "center",
                        gap: "0.5em"
                      }}>
                        <div className="wp-block-button has-custom-width wp-block-button__width-50" style={{ width: "50%" }}>
                          <a className="wp-block-button__link has-blue-background-color has-background has-small-font-size has-custom-font-size wp-element-button" 
                             href="https://calendly.com/d/cndn-pt9-ks6/uptake-fleet-demo"
                             target="_blank"
                             rel="external noopener noreferrer"
                             style={{
                               backgroundColor: "#165ffb",
                               color: "#fff",
                               borderRadius: "14px",
                               padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                               fontSize: "0.85em",
                               textDecoration: "none",
                               display: "inline-block",
                               cursor: "pointer",
                               borderWidth: "0",
                               width: "100%",
                               textAlign: "center"
                             }}>Book a Demo</a>
                        </div>
                        <div className="wp-block-button has-custom-width wp-block-button__width-50 override-font" style={{ width: "50%" }}>
                          <a className="wp-block-button__link has-blue-background-color has-background has-small-font-size has-custom-font-size wp-element-button" 
                             href="https://uptake.com/fleet-insights-assessment/"
                             style={{
                               backgroundColor: "#165ffb",
                               color: "#fff",
                               borderRadius: "14px",
                               padding: "calc(0.667em + 2px) calc(1.333em + 2px)",
                               fontSize: "0.85em",
                               textDecoration: "none",
                               display: "inline-block",
                               cursor: "pointer",
                               borderWidth: "0",
                               width: "100%",
                               textAlign: "center"
                             }}>Get a FREE Report</a>
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

      <div style={{ height: "81px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== CUSTOMER RESULTS SECTION ===== */}
      <h2 className="wp-block-heading has-text-align-center override-font-header2" style={{
        fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        fontSize: "28px",
        lineHeight: "1.3",
        fontWeight: "600",
        textTransform: "none",
        textAlign: "center",
        fontStyle: "normal"
      }} id="h-customers-drive-amazing-results-with-uptake-for-buses">Customers drive amazing results with Uptake for Buses</h2>

      <div style={{ height: "55px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== BUS METRICS IMAGE ===== */}
      <div className="wp-block-image">
        <figure className="aligncenter size-full">
          <img 
            src="https://uptake.com/wp-content/uploads/2025/03/Bus-Metrics.png"
            srcSet="https://uptake.com/wp-content/uploads/2025/03/Bus-Metrics.png 1815w, https://uptake.com/wp-content/uploads/2025/03/Bus-Metrics-300x45.png 300w, https://uptake.com/wp-content/uploads/2025/03/Bus-Metrics-1024x152.png 1024w, https://uptake.com/wp-content/uploads/2025/03/Bus-Metrics-768x114.png 768w, https://uptake.com/wp-content/uploads/2025/03/Bus-Metrics-1536x228.png 1536w"
            decoding="async"
            width="1815"
            height="270"
            alt=""
            className="wp-image-1783"
            sizes="(max-width: 1815px) 100vw, 1815px"
            style={{ maxWidth: "100%", height: "auto", display: "block", margin: "0 auto" }}
          />
        </figure>
      </div>

      <div style={{ height: "98px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== OPTIMIZE MAINTENANCE SECTION ===== */}
      <div className="wp-block-columns is-layout-flex" style={{
        display: "flex",
        flexWrap: "nowrap",
        gap: "2em",
        width: "100%"
      }}>
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "10%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "80%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}>
          <h2 className="wp-block-heading has-text-align-center override-font-header2 has-large-font-size" style={{
            fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
            fontSize: "2em",
            lineHeight: "1.3",
            fontWeight: "600",
            textTransform: "capitalize",
            textAlign: "center",
            fontStyle: "normal"
          }} id="h-optimize-maintenance-schedules-reduce-breakdowns-and-improve-overall-reliability">Optimize maintenance schedules, reduce breakdowns, and improve overall reliability</h2>
        </div>
        <div className="wp-block-column is-layout-flow" style={{
          flexBasis: "10%",
          flexGrow: 1,
          minWidth: 0,
          overflowWrap: "break-word",
          wordBreak: "break-word"
        }}></div>
      </div>

      <div style={{ height: "58px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== SPLIT CONTENT - IMAGE LEFT ===== */}
      <div className="lazyblock-uptake-split-content-H3VeR wp-block-lazyblock-uptake-split-content">
        <div className="split-content image-left color-white" style={{
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
            backgroundImage: "url('https://uptake.com/wp-content/uploads/2025/03/fleet-ebook-thumbnails_article-dark-1920x1080-1-1024x576.png')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}></div>
          <div className="content" style={{ flex: "1", padding: "40px" }}>
            <div className="lazyblock-inner-blocks">
              <h5 className="wp-block-heading override-font has-medium-font-size" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "1.25em",
                lineHeight: "1.4",
                fontWeight: "700",
                marginBottom: "15px"
              }} id="h-optimize-maintenance-costs">
                <strong>Optimize Maintenance Costs</strong>
              </h5>
              <p className="override-font wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px"
              }}>Reduce the time and investment required for preventative maintenance (PM) failure mode and effects (FMEA) analysis while simultaneously recalibrating PM schedules by incorporating proven-in-use industrial content to enhance existing strategies.</p>
              <div style={{ height: "32px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <h5 className="wp-block-heading override-font has-medium-font-size" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "1.25em",
                lineHeight: "1.4",
                fontWeight: "700",
                marginBottom: "15px"
              }} id="h-maximize-scheduled-maintenance">
                <strong>Maximize Scheduled Maintenance</strong>
              </h5>
              <p className="has-text-align-left override-font wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px",
                textAlign: "left"
              }}>Achieve more timely and precise decision making by identifying near-real-time equipment risk. Extract all information from transactional asset management, engineering design, time-series historians, SCADA systems, and spreadsheets to uncover emerging degradation and abnormal conditions down to the component level.</p>
              <div style={{ height: "30px" }} aria-hidden="true" className="wp-block-spacer"></div>
              <h5 className="wp-block-heading override-font has-medium-font-size" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "1.25em",
                lineHeight: "1.4",
                fontWeight: "700",
                marginBottom: "15px"
              }} id="h-acquire-forensic-intelligence">
                <strong>Acquire forensic intelligence</strong>
              </h5>
              <p className="has-text-align-left override-font wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "16px",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px",
                textAlign: "left"
              }}>Use AI to make the most of all captured data, giving a complete view of enterprise assets to improve planning, speed up problem-solving, and ensure safety and compliance.</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "95px" }} aria-hidden="true" className="wp-block-spacer"></div>

      {/* ===== GAIN FOCUS AND CLARITY SECTION ===== */}
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
              <h2 className="wp-block-heading override-font-header2" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "28px",
                lineHeight: "1.3",
                fontWeight: "700",
                textTransform: "none",
                fontStyle: "normal",
                marginBottom: "15px"
              }} id="h-gain-focus-and-clarity">Gain Focus and Clarity</h2>
              <p className="override-font has-medium-font-size wp-block-paragraph" style={{
                fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                fontSize: "1.25em",
                lineHeight: "1.8",
                marginTop: "10px",
                marginBottom: "10px",
                marginLeft: "0px",
                marginRight: "0px"
              }}>Get Your FREE Custom Report</p>
              <ul className="wp-block-list" style={{
                paddingLeft: "20px",
                marginBottom: "20px"
              }}>
                <li className="override-font" style={{
                  fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginLeft: "0px",
                  marginRight: "0px"
                }}>Receive a real-time view into the current health of your fleet</li>
                <li className="override-font" style={{
                  fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.8",
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginLeft: "0px",
                  marginRight: "0px"
                }}>Detect anomalies and outliers within your fleet</li>
                <li style={{
                  fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.8"
                }}>Plan for campaigns to address specific large issues</li>
              </ul>
              <div className="wp-block-buttons is-layout-flex" style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5em"
              }}>
                <div className="wp-block-button is-style-fill">
                  <a className="wp-block-button__link has-blue-background-color has-background wp-element-button" 
                     href="https://uptake.com/fleet-insights-assessment/"
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
                    <strong>Get Your Free Report</strong>
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
    </div>
  );
}