// src/pages/ResourcesPage.jsx
import React from "react";

export default function ResourcesPage() {
  // Resource data from the HTML
  const resources = [
    {
      id: 1,
      title: "Fleet Data Quality Assessment Checklist",
      category: "White Paper",
      subject: "Data Science",
      image: "https://uptake.com/wp-content/uploads/2025/12/step_5.png",
      link: "/resources/fleet-data-quality-assessment-checklist/"
    },
    {
      id: 2,
      title: "Trimble Insight 2025: Role of AI in Trucking Maintenance Operations",
      category: "Video",
      subject: "AI",
      image: "",
      link: "/resources/trimble-insight-2025-role-of-ai-in-trucking-maintenance-operations/"
    },
    {
      id: 3,
      title: "Predictive Maintenance to Revolutionize Fleet Management",
      category: "Video",
      subject: "Data Science",
      image: "",
      link: "/resources/predictive-maintenance-to-revolutionize-fleet-management/"
    },
    {
      id: 4,
      title: "Uptake and Geotab – Better Together",
      category: "Video",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/01/uptake-geotab-poster-1024x522.webp",
      link: "/resources/uptake-and-geotab-better-together/"
    },
    {
      id: 5,
      title: "Geotab Marketplace Premier Partner Spotlight",
      category: "Video",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/geotab-poster.webp",
      link: "/resources/uptake-a-geotab-premier-marketplace-partner/"
    },
    {
      id: 6,
      title: "Transportation Tech, Talent and Recruiting with Jim Rice",
      category: "Video",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/Transportation-Tech-Thumbnail-1024x576.webp",
      link: "/resources/transportation-tech-talent-and-recruiting-with-jim-rice/"
    },
    {
      id: 7,
      title: "The Road to Better – 5 Tips to Operationalize Your Data",
      category: "Webinar",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/The-Road-to-Better-thumbnail-1024x576.webp",
      link: "/resources/the-road-to-better-5-tips-to-operationalize-your-data/"
    },
    {
      id: 8,
      title: "Uptake and Daimler Truck North America – Innovating Together",
      category: "Video",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/Daimler-Video-Thumbnail-2-1024x576.png",
      link: "/resources/uptake-and-daimler-truck-north-america-innovating-together/"
    },
    {
      id: 9,
      title: "Find Freedom from Unplanned Breakdowns",
      category: "White Paper",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/White-Paper-Thumbnail-1024x576.png",
      link: "/resources/find-freedom-from-unplanned-breakdowns/"
    },
    {
      id: 10,
      title: "How Is Predictive Analytics Streamlining Truck Maintenance?",
      category: "Video",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/Podcast-Thumbnail-1024x576.png",
      link: "/resources/how-is-predictive-analytics-streamlining-truck-maintenance/"
    },
    {
      id: 11,
      title: "Your Fleet Competes with Uptake",
      category: "Video",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/Your-Fleet-Competes-with-Uptake-thumbnail_new-1024x576.jpg",
      link: "/resources/your-fleet-competes-with-uptake/"
    },
    {
      id: 12,
      title: "The Ultimate Guide for Maximizing Vehicle Uptime",
      category: "eBook",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/Geotab-ebook-web-thumbnail-1024x576.png",
      link: "/resources/the-ultimate-guide-for-maximizing-vehicle-uptime/"
    },
    {
      id: 13,
      title: "Top Tips for Carriers to Protect Profits in a Soft Market",
      category: "Webinar",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/FreightWaves-webinar2-graphics-thumbnail01-1024x576.png",
      link: "/resources/top-tips-for-carriers-to-protect-profits-in-a-soft-market/"
    },
    {
      id: 14,
      title: "How Can Carriers Protect Profits in a Soft Market?",
      category: "White Paper",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/FreightWaves-2022-Graphics-Thumbnail-1024x576.png",
      link: "/resources/how-can-carriers-protect-profits-in-a-soft-market/"
    },
    {
      id: 15,
      title: "Loaded & Rolling: The Hidden Value in Knowing Your Fleet's Health",
      category: "Webinar",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/FreightWaves-webinar-thumbnail-1024x576.png",
      link: "/resources/loaded-rolling-the-hidden-value-in-knowing-your-fleets-health/"
    },
    {
      id: 16,
      title: "5 Challenges Fleet Maintenance Must Overcome to Get Lean",
      category: "White Paper",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/transport_topics_thumbnail-1024x576.png",
      link: "/resources/5-challenges-fleet-maintenance-must-overcome-to-get-lean/"
    },
    {
      id: 17,
      title: "Guide to Fleet Maintenance Analytics",
      category: "eBook",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/fleet-v2-blog-thumbnail-1-1024x576.png",
      link: "/resources/guide-to-fleet-maintenance-analytics/"
    },
    {
      id: 18,
      title: "The Road from Preventive to Predictive Maintenance",
      category: "eBook",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/fleet-road-ebook-thumbnail-1920x1080-1-1024x576.png",
      link: "/resources/the-road-from-preventive-to-predictive-maintenance/"
    },
    {
      id: 19,
      title: "Government Fleets: The Road from Preventive to Predictive Maintenance",
      category: "eBook",
      subject: "Federal",
      image: "https://uptake.com/wp-content/uploads/2025/02/government-fleet-ebook-thumbnail-1200x675-1-1024x576.png",
      link: "/resources/government-fleets-the-road-from-preventive-to-predictive-maintenance/"
    },
    {
      id: 20,
      title: "How to Bring TCO Under Control for Alternative Vehicles",
      category: "White Paper",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/alternative-fuel-truck-dark-blue_dark-blue-template-copy-1024x576.png",
      link: "/resources/how-to-bring-tco-under-control-for-alternative-vehicles/"
    },
    {
      id: 21,
      title: "Making Predictive Maintenance Real",
      category: "eBook",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/fleet-ebook-1024x576.png",
      link: "/resources/making-predictive-maintenance-real/"
    },
    {
      id: 22,
      title: "United Road Increases Fleet Uptime with 4x ROI",
      category: "Case Study",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/Uptake-United-Road-case-study-v2.png",
      link: "/resources/united-road-capitalizes-on-predictive-maintenance-with-4x-roi/"
    },
    {
      id: 23,
      title: "Fleet operator identifies $12,500 in annual savings per truck.",
      category: "Case Study",
      subject: "Fleet",
      image: "https://uptake.com/wp-content/uploads/2025/02/fleet-repair-shop-1024x683.jpg",
      link: "/resources/fleet-operator-identifies-12500-in-annual-savings-per-truck/"
    },
    {
      id: 24,
      title: "Data Science 101: What is data science?",
      category: "Video",
      subject: "Data Science",
      image: "https://uptake.com/wp-content/uploads/2025/02/UPT_101Banners_FN-Part6-1024x384.png",
      link: "/resources/data-science-101-what-is-data-science/"
    },
    {
      id: 25,
      title: "Data Science 101: Developing Industrial AI applications",
      category: "Video",
      subject: "Data Science",
      image: "https://uptake.com/wp-content/uploads/2025/02/UPT_101Banners_FN-Part6-1024x384.png",
      link: "/resources/data-science-101-developing-industrial-ai-applications/"
    },
    {
      id: 26,
      title: "Data Science 101: What skills do data scientists need?",
      category: "Video",
      subject: "Data Science",
      image: "https://uptake.com/wp-content/uploads/2025/02/UPT_101Banners_FN-Part6-1024x384.png",
      link: "/resources/data-science-101-what-skills-do-data-scientists-need/"
    },
    {
      id: 27,
      title: "Data Science 101: How do machine learning algorithms create data science models?",
      category: "Video",
      subject: "Data Science",
      image: "https://uptake.com/wp-content/uploads/2025/02/UPT_101Banners_FN-Part6-1024x384.png",
      link: "/resources/data-science-101-how-do-machine-learning-algorithms-create-data-science-models/"
    },
    {
      id: 28,
      title: "Data Science 101: Machine learning in the data science workflow",
      category: "Video",
      subject: "Data Science",
      image: "https://uptake.com/wp-content/uploads/2025/02/UPT_101Banners_FN-Part6-1024x384.png",
      link: "/resources/data-science-101-machine-learning-in-the-data-science-workflow/"
    }
  ];

  return (
    <div className="resources-page" style={{ 
      fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      backgroundColor: "#ffffff",
      color: "#000000"
    }}>
      
      {/* ===== PAGE HEADER ===== */}
      <div className="page-content resources-index desktop-width" style={{
        maxWidth: "1360px",
        margin: "0 auto",
        padding: "40px 20px"
      }}>
        <div className="page-preheading" style={{
          color: "#165ffb",
          fontSize: "16px",
          fontWeight: "600",
          textTransform: "uppercase",
          letterSpacing: "2px",
          marginBottom: "10px"
        }}>Resources</div>
        <h1 className="wp-block-heading" style={{
          fontSize: "48px",
          fontWeight: "700",
          lineHeight: "1.2",
          fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          marginBottom: "30px"
        }}>Make hard work easier.</h1>

        {/* ===== RESOURCE FILTER ===== */}
        <div className="posts-grid-container">
          <div className="resource-filter" style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            marginBottom: "30px",
            flexWrap: "wrap"
          }}>
            <label style={{
              fontWeight: "600",
              fontSize: "16px",
              fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
            }}>Resource Type:</label>
            <select id="resource-category-filter" style={{
              padding: "10px 20px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              fontSize: "16px",
              fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
              backgroundColor: "#fff",
              cursor: "pointer"
            }}>
              <option value="/resources/">All Resources</option>
              <option value="https://uptake.com/resource-category/case-study/">Case Study</option>
              <option value="https://uptake.com/resource-category/ebook/">eBook</option>
              <option value="https://uptake.com/resource-category/video/">Video</option>
              <option value="https://uptake.com/resource-category/webinar/">Webinar</option>
              <option value="https://uptake.com/resource-category/white-paper/">White Paper</option>
            </select>
          </div>

          {/* ===== RESOURCES GRID ===== */}
          <div id="resources-container" className="posts-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "30px",
            marginTop: "20px"
          }}>
            {resources.map((resource) => (
              <div className="grid-item" key={resource.id} style={{
                backgroundColor: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                cursor: "pointer"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)";
              }}>
                <a href={resource.link} style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block"
                }}>
                  {/* Thumbnail */}
                  <div className="thumbnail" style={{
                    backgroundImage: resource.image ? `url(${resource.image})` : "linear-gradient(135deg, #165ffb, #003ad1)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "200px",
                    width: "100%",
                    backgroundColor: "#f5f6f7"
                  }}></div>
                  
                  {/* Content */}
                  <div style={{ padding: "20px" }}>
                    <div className="terms" style={{
                      display: "flex",
                      gap: "10px",
                      marginBottom: "10px",
                      flexWrap: "wrap"
                    }}>
                      <span className="category" style={{
                        backgroundColor: "#165ffb",
                        color: "#fff",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px"
                      }}>{resource.category}</span>
                      <span className="subject" style={{
                        backgroundColor: "#EDEDED",
                        color: "#333",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600"
                      }}>{resource.subject}</span>
                    </div>
                    <h2 style={{
                      fontSize: "18px",
                      fontWeight: "600",
                      lineHeight: "1.4",
                      margin: "0",
                      fontFamily: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
                      color: "#1a1a1a"
                    }}>{resource.title}</h2>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}