// Navigation data structure for Roomonitor's mega-menu

export const servicesData = {
  operations: {
    title: "OPERATIONS",
    items: [
      {
        title: "Guest Assist™",
        description: "24/7 guest and incident handling outside office hours",
        href: "/services/guest-assist",
      },
      {
        title: "Control Center 24/7",
        description: "Human verification, decision-making and escalation",
        href: "/services/control-center",
      },
      {
        title: "Field Service Network",
        description: "On-site intervention when remote resolution is not enough",
        href: "/services/field-service",
      },
    ],
  },
  incidentRisk: {
    title: "INCIDENT & RISK MANAGEMENT",
    items: [
      {
        title: "Incident Response",
        description: "End-to-end incident detection and resolution",
        href: "/services/incident-response",
      },
      {
        title: "Emergency Handling",
        description: "Critical situations managed with protocols and real action",
        href: "/services/emergency-handling",
      },
    ],
  },
  enablement: {
    title: "OPERATIONAL ENABLEMENT",
    items: [
      {
        title: "PMS & Tool Access",
        description: "We operate directly from the client's operational ecosystem",
        href: "/services/pms-access",
      },
      {
        title: "Operational Protocols",
        description: "Client rules and priorities executed 24/7",
        href: "/services/protocols",
      },
    ],
  },
};

export const solutionsData = [
  {
    title: "For Hospitality Operators",
    description: "Full operational coverage outside office hours",
    href: "/solutions/hospitality-operators",
  },
  {
    title: "For Hotels",
    description: "Smoke detection and asset protection",
    href: "/solutions/hotels",
  },
  {
    title: "For Independent Owners",
    description: "Noise monitoring and issue prevention",
    href: "/solutions/independent-owners",
  },
];

export const monitoringData = [
  {
    title: "Noise Monitoring",
    description: "Real-time acoustic detection and alerts",
    href: "/monitoring/noise",
  },
  {
    title: "Occupancy Detection",
    description: "Accurate presence tracking for your properties",
    href: "/monitoring/occupancy",
  },
  {
    title: "Smoke Detection",
    description: "Immediate smoke alerts to protect your assets",
    href: "/monitoring/smoke",
  },
  {
    title: "Air Quality, Temperature & Humidity",
    description: "Environmental monitoring for guest comfort",
    href: "/monitoring/environment",
  },
];

export const resourcesData = {
  learn: {
    title: "LEARN",
    items: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Guides", href: "/resources/guides" },
      { title: "Knowledge Base", href: "/resources/knowledge-base" },
    ],
  },
  ecosystem: {
    title: "ECOSYSTEM",
    items: [
      { title: "Integrations", href: "/integrations" },
      { title: "Case Studies", href: "/resources/case-studies" },
    ],
  },
  company: {
    title: "COMPANY",
    items: [
      { title: "About Roomonitor", href: "/about" },
      { title: "Contact", href: "/contact" },
    ],
  },
};
