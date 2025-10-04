export const mockColumnsESG = [
  {
    title: "Facility Name and Location (Extremely Long Header Example)",
    dataIndex: "facility",
    key: "facility",
    fixed: "left",
    resizable: true,
  },
  {
    title: "Waste Management Overview and Detailed Breakdown (Long Header)",
    resizable: true,
    children: [
      {
        title: "Total Waste Generated Annually (tons, Large Numbers)",
        dataIndex: "totalWaste",
        key: "totalWaste",
        resizable: true,
      },
      {
        title: "Waste Breakdown by Type and Hazard Level (Long Header)",
        resizable: true,
        children: [
          {
            title: "Hazardous Waste (Tons, High Precision)",
            dataIndex: "hazardousWaste",
            key: "hazardousWaste",
            resizable: true,
          },
          {
            title: "Non-Hazardous Waste (Tons, High Precision)",
            dataIndex: "nonHazardousWaste",
            key: "nonHazardousWaste",
            resizable: true,
          },
        ],
      },
      {
        title: "Waste Intensity per Unit Output (kg/unit, Long Header)",
        dataIndex: "wasteIntensity",
        key: "wasteIntensity",
        resizable: true,
      },
    ],
  },
  {
    title: "Recycling and Recovery Operations (Long Header)",
    resizable: true,
    children: [
      {
        title: "Total Recycled Material (tons, Large Numbers)",
        dataIndex: "recycled",
        key: "recycled",
        resizable: true,
      },
      {
        title: "Recycling Rate Percentage (Extremely Long Header Example)",
        dataIndex: "recyclingRate",
        key: "recyclingRate",
        resizable: true,
      },
      {
        title: "Recycling Details by Material Type (Long Header)",
        resizable: true,
        children: [
          {
            title: "Plastic Material Recycled (tons, Large Numbers)",
            dataIndex: "plasticRecycled",
            key: "plasticRecycled",
            resizable: true,
          },
          {
            title: "Metal Material Recycled (tons, Large Numbers)",
            dataIndex: "metalRecycled",
            key: "metalRecycled",
            resizable: true,
          },
          {
            title: "Paper Material Recycled (tons, Large Numbers)",
            dataIndex: "paperRecycled",
            key: "paperRecycled",
            resizable: true,
          },
        ],
      },
    ],
  },
  {
    title: "Emissions and Environmental Impact (Long Header)",
    resizable: true,
    children: [
      {
        title: "CO₂ Emissions (tons, Large Numbers)",
        dataIndex: "co2",
        key: "co2",
        resizable: true,
      },
      {
        title: "Methane Emissions (tons, Large Numbers)",
        dataIndex: "methane",
        key: "methane",
        resizable: true,
      },
      {
        title: "NOx Emissions (tons, Large Numbers)",
        dataIndex: "nox",
        key: "nox",
        resizable: true,
      },
    ],
  },
  {
    title: "Compliance and Certifications (Long Header)",
    resizable: true,
    children: [
      {
        title: "Number of Regulatory Violations (Yearly, Large Numbers)",
        dataIndex: "violations",
        key: "violations",
        resizable: true,
      },
      {
        title: "Certifications Achieved (Extremely Long Header Example)",
        dataIndex: "certifications",
        key: "certifications",
        resizable: true,
      },
    ],
  },
  {
    title: "Audit and Reporting Information (Long Header)",
    resizable: true,
    children: [
      {
        title: "Date of Last Environmental Audit (YYYY-MM-DD, Long Header)",
        dataIndex: "lastAudit",
        key: "lastAudit",
        resizable: true,
      },
      {
        title: "Scheduled Date for Next Audit (YYYY-MM-DD, Long Header)",
        dataIndex: "nextAudit",
        key: "nextAudit",
        resizable: true,
      },
      {
        title: "Lead Auditor Name (Extremely Long Header Example)",
        dataIndex: "auditor",
        key: "auditor",
        resizable: true,
      },
    ],
  },
  {
    title: "Responsible Manager Full Name (Long Header)",
    dataIndex: "manager",
    key: "manager",
    resizable: true,
  },
  {
    title: "Geographical Region of Facility (Extremely Long Header Example)",
    dataIndex: "region",
    key: "region",
    resizable: true,
  },
  {
    title: "Operational Status and Activity (Long Header)",
    dataIndex: "status",
    key: "status",
    fixed: "right",
    resizable: true,
  },
];
