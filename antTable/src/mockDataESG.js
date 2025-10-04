// Helper to generate random data with very large numbers and long strings
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const mockDataESG = Array.from({ length: 100 }).map((_, i) => ({
  key: i,
  facility: `Facility Name and Location for ESG Waste Management Site Number ${
    i + 1
  } - Region Alpha Beta Gamma Delta`,
  totalWaste: randomInt(1000000, 9000000),
  hazardousWaste: randomInt(100000, 900000),
  nonHazardousWaste: randomInt(500000, 8000000),
  wasteIntensity: (Math.random() * 10000).toFixed(2),
  recycled: randomInt(200000, 7000000),
  recyclingRate: (Math.random() * 100).toFixed(4),
  plasticRecycled: randomInt(50000, 2000000),
  metalRecycled: randomInt(50000, 2000000),
  paperRecycled: randomInt(50000, 2000000),
  co2: randomInt(100000, 5000000),
  methane: randomInt(10000, 500000),
  nox: randomInt(1000, 100000),
  violations: randomInt(0, 100),
  certifications: [
    "ISO 14001 Environmental Management Certification - International Standard",
    "ISO 9001 Quality Management Certification - Global",
    "LEED Platinum Certification for Green Buildings - United States",
    "None",
  ][randomInt(0, 3)],
  lastAudit: `202${randomInt(0, 3)}-0${randomInt(1, 9)}-2${randomInt(0, 9)}`,
  nextAudit: `202${randomInt(4, 6)}-1${randomInt(0, 2)}-3${randomInt(0, 9)}`,
  auditor: [
    "SGS International Environmental Auditing Services",
    "Bureau Veritas Global Compliance Auditors",
    "TÜV Rheinland Environmental Certification Division",
    "DNV GL Sustainability Auditing Group",
  ][randomInt(0, 3)],
  manager: [
    "Alexandra Johnson - Senior ESG Waste Manager",
    "Benjamin Lee - Chief Sustainability Officer",
    "Charlotte Smith - Environmental Compliance Lead",
    "Daniela Martinez - Regional Waste Operations Director",
  ][randomInt(0, 3)],
  region: [
    "Northern Hemisphere - Arctic Circle Operations",
    "Southern Hemisphere - Antarctic Research Facilities",
    "Eastern Region - Asia Pacific Waste Management",
    "Western Region - North America & Europe",
  ][randomInt(0, 3)],
  status: [
    "Active - Fully Operational and Compliant",
    "Inactive - Under Maintenance or Review",
    "Pending - Awaiting Certification or Audit",
  ][randomInt(0, 2)],
}));
