export interface AppImpact {
  timeSaved: string; // e.g. "2.5 Hours/day" or "4.5h -> 45m"
  keyBenefit: string; // e.g. "5–8% Scrap Reduction"
  beforeProcess: string; // Problem before digitalization
  afterProcess: string; // Solution with this application
  department: string; // Plant line or department
  roiBadge: string; // Short badge for the card
  annualEstimatedSavings?: string; // High-level operational impact
}

export interface CompanyMetric {
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface TransformationSaving {
  id: number;
  application: string;
  benefits: [string, string];
  savings: string;
  category: "MES" | "Optimizers" | "Maintenance" | "Inventory" | "Logistics" | "Commercial" | "AI & Vision";
}

export const companyProfile = {
  name: "Uttam AI",
  fullName: "Uttam Galva Innovative Solutions",
  siteTitle: "Uttam AI: Industrial Intelligence Platform",
  tagline: "AI That Powers The Future of Manufacturing",
  positioning: "Enterprise AI for Manufacturers & Modern Smart-Factory Operations",
  coreTheme: "Turning Factory Data into Industrial Intelligence",
  overview:
    "Uttam AI builds enterprise AI for manufacturers: digital twins, predictive maintenance, computer vision and industrial intelligence for the smart factory. Integrating decades of metallurgical excellence with cutting-edge digital intelligence, our plants are powered by customized MES, real-time OT/IT integration, mathematical optimizers, and AI-driven workflow agents.",
  vision:
    "To achieve zero unplanned line stoppages, zero material trim waste, and 100% paperless real-time traceability across every stage from hot-rolled coil receipt to finished customer dispatch.",
  facilities: [
    "Cold Rolling Mills (CRM) with dynamic pass scheduling",
    "Continuous Galvanizing Lines (CGL) with automated zinc coating control",
    "High-Speed Precision Slitting & Recoiling Centers",
    "Cut-To-Length (CTL) automated shearing lines",
    "High-Frequency Induction Tube & Pipe Mills",
    "Automated Roll Grinding & Profiling Shops",
    "Digital Logistics Bays & RFID/Sensor Weighbridges",
    "Computer Vision AI Safety & Inspection Gates",
  ],
  pillars: [
    {
      title: "Digital Twin (Monitoring)",
      description:
        "Virtual representation of factory assets, OT/IT telemetry, and process synchronization across rolling mills and processing lines.",
    },
    {
      title: "Predictive Analytics (Prediction)",
      description:
        "Predictive maintenance utilizing historical breakdown and sensor telemetry to anticipate machine failures and reduce downtime by 10–25%.",
    },
    {
      title: "Computer Vision (Inspection)",
      description:
        "Visual AI for the factory floor — detecting missing PPE (helmets, shoes, jackets) and inspecting surface quality defects (cracks, scratches, rust).",
    },
    {
      title: "Industrial Intelligence (Decision Support)",
      description:
        "A unified platform view turning raw shopfloor data into real-time operational decision support and autonomous workflow execution.",
    },
  ],
};

export const aggregatePlantMetrics: CompanyMetric[] = [
  {
    label: "Logistics TAT Reduction",
    value: "15–30%",
    subtext: "Vehicle waiting & detention delay reduction",
    iconName: "TimerReset",
  },
  {
    label: "Material Scrap Saved",
    value: "2–5%",
    subtext: "Across CTL, Slitter, and Rolling Mill optimizer plans",
    iconName: "Scissors",
  },
  {
    label: "Maintenance Cost Reduction",
    value: "10–25%",
    subtext: "Unplanned downtime reduction via predictive analytics",
    iconName: "SlidersHorizontal",
  },
  {
    label: "Document Processing Speed",
    value: "50–80%",
    subtext: "Data entry time saved via AI Document Extraction",
    iconName: "ShieldCheck",
  },
];

// Official 16-point Digital Transformation Benefits & Estimated Savings Matrix
// Source: UGIS APP Front Page.docx
export const digitalTransformationSavings: TransformationSaving[] = [
  {
    id: 1,
    application: "Tube Mill",
    benefits: [
      "Real-time monitoring of production, speed, thickness and quality parameters.",
      "Reduce rejection, material wastage and unplanned machine stoppages.",
    ],
    savings: "3–8%",
    category: "MES",
  },
  {
    id: 2,
    application: "Roll Shop Management",
    benefits: [
      "Track roll life, grinding history, diameter reduction and roll consumption.",
      "Optimize roll usage, grinding schedules and roll changeovers.",
    ],
    savings: "5–12%",
    category: "MES",
  },
  {
    id: 3,
    application: "MES – Shop Floor",
    benefits: [
      "Real-time production, WIP, downtime and rejection monitoring.",
      "Eliminate manual reporting and improve production traceability.",
    ],
    savings: "3–8%",
    category: "MES",
  },
  {
    id: 4,
    application: "Production Line Optimizer (CTL, Slitter, Rolling Mills)",
    benefits: [
      "Optimize material allocation, production sequence and cutting patterns.",
      "Minimize scrap, changeovers and idle machine time.",
    ],
    savings: "2–5%",
    category: "Optimizers",
  },
  {
    id: 5,
    application: "Preventive Maintenance, Breakdown & Predictive Maintenance",
    benefits: [
      "Predict machine failures using historical breakdown and sensor data.",
      "Reduce unexpected downtime and maintenance costs through planned maintenance.",
    ],
    savings: "10–25%",
    category: "Maintenance",
  },
  {
    id: 6,
    application: "Inventory Management",
    benefits: [
      "Real-time visibility of raw material, WIP, finished goods and consumables.",
      "Reduce excess inventory, stock discrepancies and carrying costs.",
    ],
    savings: "5–15%",
    category: "Inventory",
  },
  {
    id: 7,
    application: "Raw Material Optimizer",
    benefits: [
      "Identify the best raw material combination based on grade, size, chemistry and cost.",
      "Minimize material consumption, process losses and production costs.",
    ],
    savings: "1–3%",
    category: "Inventory",
  },
  {
    id: 8,
    application: "Yard Management System (YMS)",
    benefits: [
      "Real-time tracking and location visibility of coils, sheets, billets and finished goods.",
      "Optimize material movement, storage locations and material handling.",
    ],
    savings: "10–20%",
    category: "Logistics",
  },
  {
    id: 9,
    application: "Truck Turnaround Time (TAT)",
    benefits: [
      "Monitor truck entry, loading/unloading, waiting and exit times.",
      "Reduce vehicle waiting time, detention charges and dispatch delays.",
    ],
    savings: "15–30%",
    category: "Logistics",
  },
  {
    id: 10,
    application: "Weighbridge Management",
    benefits: [
      "Automate gross, tare and net weight recording with ERP/MES integration.",
      "Prevent manual errors, duplicate transactions and weight discrepancies.",
    ],
    savings: "0.2–0.5%",
    category: "Logistics",
  },
  {
    id: 11,
    application: "Order Management System",
    benefits: [
      "Track customer orders from booking to production and dispatch.",
      "Improve order fulfilment, delivery commitments and customer satisfaction.",
    ],
    savings: "20–40%",
    category: "Commercial",
  },
  {
    id: 12,
    application: "Gate & Visitor Management",
    benefits: [
      "Digitize visitor, employee, contractor and vehicle entry/exit records.",
      "Improve security, eliminate paperwork and automate gate passes.",
    ],
    savings: "30–50%",
    category: "Commercial",
  },
  {
    id: 13,
    application: "AI-Powered Document Extraction",
    benefits: [
      "Automatically extract data from invoices, challans, POs, test certificates using OCR and AI.",
      "Reduce manual data entry, processing time and human errors.",
    ],
    savings: "50–80%",
    category: "AI & Vision",
  },
  {
    id: 14,
    application: "AI Agent for Sales & Purchase Order Creation",
    benefits: [
      "Convert customer emails, RFQs and purchase requests into draft sales/purchase orders.",
      "Automate data validation, item mapping and ERP entry, with human approval.",
    ],
    savings: "40–70%",
    category: "AI & Vision",
  },
  {
    id: 15,
    application: "Vision-Based PPE Compliance",
    benefits: [
      "AI cameras identify missing helmets, safety shoes, reflective jackets and other PPE violations.",
      "Generate real-time alerts and safety compliance reports.",
    ],
    savings: "20–50%*",
    category: "AI & Vision",
  },
  {
    id: 16,
    application: "Vision-Based Quality Defect Analysis",
    benefits: [
      "Detect surface defects such as scratches, cracks, rust, dents and rolling defects using AI cameras.",
      "Maintain defect history and recommend corrective actions to operators.",
    ],
    savings: "10–25%",
    category: "AI & Vision",
  },
];

export const appImpactMap: Record<string, AppImpact> = {
  // Manufacturing Execution System (MES)
  "TubeMill": {
    timeSaved: "2 Hours / Shift",
    keyBenefit: "3–8% Rejection & Stoppage Reduction",
    beforeProcess: "Line stoppages, micro-delays, and yield were logged on paper registers at the end of the shift, making same-day bottleneck resolution impossible.",
    afterProcess: "Real-time monitoring of production, speed, thickness and quality parameters. Reduces rejection, material wastage and unplanned machine stoppages.",
    department: "Tube & Pipe Mill Division",
    roiBadge: "3–8% Savings",
    annualEstimatedSavings: "3–8% Reduction in Rejection & Wastage",
  },
  "RollShop": {
    timeSaved: "1.5 Hours per Roll Change",
    keyBenefit: "5–12% Roll Consumption Savings",
    beforeProcess: "Roll grinding history, pass tonnage, and diameter reduction were tracked in physical logbooks; roll fatigue was unpredictable, risking catastrophic mill snap.",
    afterProcess: "Track roll life, grinding history, diameter reduction and roll consumption. Optimize roll usage, grinding schedules and roll changeovers.",
    department: "Roll Grinding & Profiling Shop",
    roiBadge: "5–12% Savings",
    annualEstimatedSavings: "5–12% Roll Wear & Consumption Saved",
  },
  "MES - Steel Job Works": {
    timeSaved: "3 Hours / Day in Follow-ups",
    keyBenefit: "3–8% Traceability & Scrap Improvement",
    beforeProcess: "Coil processing stages for job-work clients required continuous walk-ins and phone calls to floor foremen, leading to delivery status blindspots.",
    afterProcess: "Real-time production, WIP, downtime and rejection monitoring. Eliminates manual reporting and ensures complete barcode-linked digital coil traceability.",
    department: "Job Works & Conversion Division",
    roiBadge: "3–8% Improvement",
    annualEstimatedSavings: "3–8% Production Traceability Gain",
  },
  "MES - Steel Process": {
    timeSaved: "2.5 Hours / Shift",
    keyBenefit: "3–8% Process Flow & Downtime Reduction",
    beforeProcess: "Disconnected shift handovers between Pickling, Cold Rolling, Annealing, and Skin Pass lines, causing inter-bay queuing bottlenecks.",
    afterProcess: "Real-time production, WIP, downtime and rejection monitoring across all process bays, eliminating manual reports and optimizing line handover.",
    department: "Integrated Steel Processing Bays",
    roiBadge: "3–8% Improvement",
    annualEstimatedSavings: "3–8% Reduction in Shopfloor Bottlenecks",
  },
  "ERP System OT": {
    timeSaved: "Instant Telemetry (Zero Delay)",
    keyBenefit: "Live Sensor & PLC Synchronization",
    beforeProcess: "Operators manually wrote furnace temperatures, hydraulic pressures, and motor loads onto clipboards once per hour.",
    afterProcess: "Continuous telemetry direct from Siemens/Rockwell PLCs and field sensors to centralized dashboards, detecting anomalies in sub-seconds.",
    department: "Operational Technology (OT) / Automation",
    roiBadge: "Live PLC Telemetry",
    annualEstimatedSavings: "Prevents critical motor burnouts",
  },
  "ERP System IT": {
    timeSaved: "4 Hours in Daily Shift Closing",
    keyBenefit: "Zero Discrepancy Reconciliation",
    beforeProcess: "Physical store issues and sales dispatch slips had to be manually entered into ERP ledgers at night, causing invoice reconciliation delays.",
    afterProcess: "Real-time automated transaction synchronization between production floor transactions, stores inventory ledgers, and sales billing.",
    department: "IT & Commercial Accounts",
    roiBadge: "4h Daily Recon Saved",
    annualEstimatedSavings: "Zero accounting mismatch errors",
  },
  "HarborWorks V6": {
    timeSaved: "5+ Hours in Material Planning",
    keyBenefit: "Automated Multi-Level BOM Allocation",
    beforeProcess: "Complex vessel fabrication parts and multi-tier bills of material were maintained on offline sheets with recurring stock mismatches.",
    afterProcess: "Integrated shipyard operations platform synchronizing vessel builds, shop floor work orders, material allocations, and stock balances.",
    department: "Heavy Fabrication & Shipyard Yard",
    roiBadge: "Automated BOM Sync",
    annualEstimatedSavings: "Zero fabrication hold-ups",
  },

  // Optimizers
  "CTL Optimizer": {
    timeSaved: "2.5 Hours / Day in Planning",
    keyBenefit: "2–5% Material Scrap & Waste Reduction",
    beforeProcess: "Production planners used manual spreadsheets and trial-and-error to decide cut lengths on mother coils, resulting in off-cut trim scrap.",
    afterProcess: "Optimize material allocation, production sequence and cutting patterns. Minimize scrap, changeovers and idle machine time.",
    department: "Cut-to-Length (CTL) Shearing Lines",
    roiBadge: "2–5% Scrap Saved",
    annualEstimatedSavings: "2–5% Off-Cut Scrap Reduction",
  },
  "CRS Optimizer": {
    timeSaved: "1.5 Hours per Slitter Setup",
    keyBenefit: "2–5% Scrap & Setup Time Reduction",
    beforeProcess: "Slitter operators spent up to 90 minutes calculating knife placements, rubber spacers, and recoiling sequences for complex custom slit widths.",
    afterProcess: "Optimize material allocation, production sequence and cutting patterns. Minimize side-trim scrap and setup idle time.",
    department: "Cold Rolled Slitting Division",
    roiBadge: "2–5% Scrap Saved",
    annualEstimatedSavings: "2–5% Trim Loss Reduction",
  },
  "CRS Optimizer (G-OR)": {
    timeSaved: "2 Hours per Order Batch",
    keyBenefit: "2–5% Material Scrap Reduction",
    beforeProcess: "Single-order slitting left wide side-trims and unwanted balance baby coils that occupied valuable warehouse bay space for months.",
    afterProcess: "Grouped multi-order coil nesting with optimal mother-coil matching, reducing side trim loss to metallurgical minimum limits.",
    department: "G-OR Specialized Slitter Line",
    roiBadge: "2–5% Scrap Saved",
    annualEstimatedSavings: "2–5% Material Scrap Saved",
  },
  "Rolling Mill Optimizer": {
    timeSaved: "1 Hour / Day Scheduling Time",
    keyBenefit: "2–5% Scrap & Mill Throughput Improvement",
    beforeProcess: "Roll pass reduction schedules and roll force estimations depended strictly on individual operator experience, causing thickness variations.",
    afterProcess: "Optimize material allocation, production sequence and rolling reduction parameters. Minimize idle machine time and strip scrap.",
    department: "Cold Rolling Mill (CRM)",
    roiBadge: "2–5% Yield Gain",
    annualEstimatedSavings: "2–5% Mill Throughput & Scrap Saved",
  },

  // Maintenance Reliability Solutions
  "Preventive Maintenance": {
    timeSaved: "3+ Hours per Breakdown Prevented",
    keyBenefit: "10–25% Lower Downtime & Maintenance Costs",
    beforeProcess: "EOT crane and critical motor maintenance was largely reactive; unexpected breakdowns jammed entire production bays, stalling production lines.",
    afterProcess: "Predict machine failures using historical breakdown and sensor data. Reduce unexpected downtime and maintenance costs through planned maintenance.",
    department: "Electrical & Mechanical Maintenance",
    roiBadge: "10–25% Saved",
    annualEstimatedSavings: "10–25% Lower Unplanned Stoppages",
  },
  "Crane Maintenance / Preventive Maintenance": {
    timeSaved: "3+ Hours per Breakdown Prevented",
    keyBenefit: "10–25% Lower Downtime & Maintenance Costs",
    beforeProcess: "EOT crane and critical motor maintenance was largely reactive; unexpected breakdowns jammed entire production bays.",
    afterProcess: "Predict machine failures using historical breakdown and sensor data. Reduce unexpected downtime and maintenance costs through planned maintenance.",
    department: "Electrical & Mechanical Maintenance",
    roiBadge: "10–25% Saved",
    annualEstimatedSavings: "10–25% Lower Maintenance Costs",
  },
  "Breakdown Analysis": {
    timeSaved: "2 Hours in Incident RCA",
    keyBenefit: "10–25% Reduction in Unexpected Downtime",
    beforeProcess: "Maintenance breakdowns were recorded in paper diaries without systematic classification into mechanical, electrical, or operational causes.",
    afterProcess: "Predict machine failures using historical breakdown and sensor telemetry. Continuously tracks MTTR and MTBF to reduce unexpected downtime by 10–25%.",
    department: "Plant Reliability Engineering",
    roiBadge: "10–25% Saved",
    annualEstimatedSavings: "10–25% Drop in Equipment Breakdowns",
  },

  // Inventory & Material Management
  "Inventory Management System": {
    timeSaved: "3 Hours / Day in Stock Audits",
    keyBenefit: "5–15% Lower Excess Inventory & Carrying Costs",
    beforeProcess: "Spare parts and consumables were counted manually, leading to emergency stockouts of critical bearings, lubricants, and pneumatic valves.",
    afterProcess: "Real-time visibility of raw material, WIP, finished goods and consumables. Reduces excess inventory, stock discrepancies and carrying costs.",
    department: "Central Stores & Spares Depot",
    roiBadge: "5–15% Saved",
    annualEstimatedSavings: "5–15% Reduction in Carrying Costs",
  },
  "RM Stock Optimizer": {
    timeSaved: "4 Hours in Procurement Planning",
    keyBenefit: "1–3% Material Cost & Process Loss Reduction",
    beforeProcess: "Procurement teams ordered mother coils based on intuition, causing high inventory holding costs for certain grades while other lines starved.",
    afterProcess: "Identify the best raw material combination based on grade, size, chemistry and cost. Minimize material consumption, process losses and production costs.",
    department: "Raw Material Procurement & PPC",
    roiBadge: "1–3% Cost Saved",
    annualEstimatedSavings: "1–3% Raw Material Procurement Savings",
  },
  "Green Field Project": {
    timeSaved: "6 Hours in Weekly MIS Reviews",
    keyBenefit: "Real-Time Capex & Commissioning Tracking",
    beforeProcess: "New mill installations and civil erection milestones were reviewed once a week via lengthy Excel summaries with outdated progress photos.",
    afterProcess: "Live project MIS dashboard tracking contractor milestones, civil structural completions, equipment erection, and commissioning checklists.",
    department: "Project Engineering & Capex",
    roiBadge: "Real-Time Capex MIS",
    annualEstimatedSavings: "Prevents commissioning timeline delays",
  },

  // Logistics & Yard Digitization
  "Yard Management System (YMS)": {
    timeSaved: "30 Mins per Coil Retrieval",
    keyBenefit: "10–20% Faster Movement & Handling",
    beforeProcess: "Crane drivers spent 20–30 minutes searching for specific coil tags inside high-density multi-tier coil stacks in the warehouse bays.",
    afterProcess: "Real-time tracking and location visibility of coils, sheets, billets and finished goods. Optimize material movement, storage locations and handling.",
    department: "Logistics & Finished Goods Yard",
    roiBadge: "10–20% Faster",
    annualEstimatedSavings: "10–20% Yard Handling Speedup",
  },
  "Truck Turn Around Time (TAT)": {
    timeSaved: "3.5 Hours per Inbound/Outbound Truck",
    keyBenefit: "15–30% Detention & Dispatch Delay Reduction",
    beforeProcess: "Commercial trucks spent 4 to 6 hours inside the plant due to uncoordinated weighment, loading, physical document stampings, and exit checks.",
    afterProcess: "Monitor truck entry, loading/unloading, waiting and exit times. Reduce vehicle waiting time, detention charges and dispatch delays.",
    department: "Plant Security & Dispatch Gate",
    roiBadge: "15–30% TAT Gain",
    annualEstimatedSavings: "15–30% Less Detention Charges",
  },
  "Weigh Bridge": {
    timeSaved: "8 Mins per Vehicle Weighment",
    keyBenefit: "0.2–0.5% Revenue Leakage & Error Prevention",
    beforeProcess: "Weighbridge operators manually typed weights into billing computers, creating queues of 15+ trucks and potential entry manipulation risks.",
    afterProcess: "Automate gross, tare and net weight recording with ERP/MES integration. Prevent manual errors, duplicate transactions and weight discrepancies.",
    department: "Weighbridge Operations",
    roiBadge: "0.2–0.5% Protected",
    annualEstimatedSavings: "0.2–0.5% Weight Discrepancy Prevention",
  },

  // Order & Visitor Management System
  "Order Management System (OMS)": {
    timeSaved: "3 Hours / Day in Customer Tracking",
    keyBenefit: "20–40% Better Order Fulfilment & Delivery",
    beforeProcess: "Sales teams and regional offices repeatedly called the factory dispatch team to check coil manufacturing, packaging, or dispatch status.",
    afterProcess: "Track customer orders from booking to production and dispatch. Improve order fulfilment, delivery commitments and customer satisfaction.",
    department: "Sales Commercial & Customer Relations",
    roiBadge: "20–40% Fulfilment",
    annualEstimatedSavings: "20–40% On-Time Delivery Improvement",
  },
  "Visitor Management System (VMS)": {
    timeSaved: "10 Mins per Plant Visitor",
    keyBenefit: "30–50% Paperwork & Gate Pass Automation",
    beforeProcess: "Contractors, auditors, and visitors wrote details in paper security registers, with no real-time headcount or safety induction verification.",
    afterProcess: "Digitize visitor, employee, contractor and vehicle entry/exit records. Improve security, eliminate paperwork and automate gate passes.",
    department: "Plant Security & Administration",
    roiBadge: "30–50% Paperless",
    annualEstimatedSavings: "30–50% Security Processing Time Saved",
  },

  // AI & Document Intelligence
  "Steel DocExtract": {
    timeSaved: "4 Hours / Day Data Entry",
    keyBenefit: "50–80% Manual Data Entry Time Saved",
    beforeProcess: "Quality and accounts teams manually transcribed supplier Mill Test Certificates (MTC), heat chemistries, and freight invoices into the ERP.",
    afterProcess: "Automatically extract data from invoices, challans, POs, test certificates and other documents using OCR and AI. Reduces manual data entry and errors.",
    department: "Quality Assurance & Accounts",
    roiBadge: "50–80% Time Saved",
    annualEstimatedSavings: "50–80% Faster Document Ingestion",
  },
  "Steel Orders Agent": {
    timeSaved: "80% Time Reduction in Order Booking",
    keyBenefit: "40–70% Faster Order Creation & Entry",
    beforeProcess: "Entering complex steel specifications (grade, width, thickness, temper, edge, oiling) took 15–20 minutes per order with lookup codes.",
    afterProcess: "Convert customer emails, RFQs and purchase requests into draft sales/purchase orders. Automate data validation, item mapping and ERP entry.",
    department: "Sales Desk & Commercial Order Entry",
    roiBadge: "40–70% Faster",
    annualEstimatedSavings: "40–70% Reduction in Booking Cycle Time",
  },

  // Skin Analysis
  "Skin Analysis": {
    timeSaved: "Instant Clinical Wellness Screening",
    keyBenefit: "AI-Powered Workplace Health & Metrics",
    beforeProcess: "Industrial plant workers in high-dust and heat environments had to visit off-site medical clinics for occupational skin and health screenings.",
    afterProcess: "Multi-model dermatological AI (Claude & GPT-4o cascade) analyzes hydration, redness, and environmental irritation with immediate care guidance.",
    department: "Employee Occupational Wellness & AI",
    roiBadge: "Instant AI Screening",
    annualEstimatedSavings: "On-premise preventive healthcare",
  },
};
