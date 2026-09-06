export const profile = {
  name: "Dustin Long",
  role: "Full-stack developer — Dynamics 365, Power Platform & Azure",
  location: "Jacksonville, FL",
  email: "dustinlong.business@gmail.com",
  linkedin: "https://linkedin.com/in/dustin-long-8943ab434/",
};

export const summary =
  "I've spent the last decade inside Azure, Dynamics 365, Power Apps and Dataverse — mostly called in after an implementation has been configured well past what it was built to do. My job is to work out what's actually wrong, then decide what genuinely needs custom C# and what a low-code Power Platform fix can handle without over-building it. On the infrastructure side I deliver production-grade Azure — App Service, Functions, Logic Apps, Entra ID — for manufacturing, healthcare and financial services clients who have real compliance requirements. I build ASP.NET/C# backends against SQL Server and Azure SQL, design ETL/ELT pipelines for high-volume data, and keep it all moving through Azure DevOps and infrastructure as code. Lately that's expanded into applied AI: forecasting, anomaly detection, and LLM-powered agents wired into Dynamics and Power Automate.";

export const experience = [
  {
    range: "Jul 2026 — Present",
    title: "Full-Stack AI Developer",
    org: "Upwork",
    tags: ["Azure", "Dynamics 365 F&O", "Power Apps", "C#", "Dataverse"],
    points: [
      "Engaged by enterprise clients on Dynamics 365 F&O integration projects, building custom X++ extensions for gaps that native OData and Dataverse APIs don't cover.",
      "Scoped and delivered vendor invoice processing automation, coordinating deployment across multi-tenant F&O environments.",
      "Worked directly with client stakeholders to turn business process gaps into technical specs and phased delivery plans.",
    ],
  },
  {
    range: "Jul 2023 — Mar 2026",
    title: "Azure & Dynamics 365 Developer / Power Platform Consultant",
    org: "Kforce",
    tags: ["Dynamics 365", "Power Platform", "Azure", "HIPAA"],
    points: [
      "Consulted on Dynamics 365 and Power Platform engagements across manufacturing, healthcare and financial services clients, resolving implementations where the platform had drifted from actual business needs.",
      "Extended Dynamics with custom C# once the low-code layer reached its limits — and built targeted Power Apps where a full custom build would have outpaced the actual need.",
      "Built out Azure infrastructure — App Service, Functions, Logic Apps, Azure AD/Entra — to bring solutions to production scale with attention to HIPAA and audit compliance.",
    ],
  },
  {
    range: "Aug 2019 — Jul 2023",
    title: "Business Applications Developer / Dynamics 365 Developer",
    org: "Tribridge",
    tags: ["Dynamics 365", "Dataverse", "Power Platform", "SharePoint"],
    points: [
      "Developed and customized Dynamics 365 and Dynamics CRM solutions to fit client operational workflows.",
      "Designed Dataverse security roles and data structures built to withstand audit scrutiny for regulated clients.",
      "Extended Dynamics through the Power Platform and SharePoint, reaching for custom code only where configuration and low-code tools fell short.",
    ],
  },
  {
    range: "Aug 2016 — May 2019",
    title: ".NET Developer / Application Developer",
    org: "Modernizing Medicine",
    tags: ["ASP.NET", "C#", "SQL Server"],
    points: [
      "Built and maintained ASP.NET/C# applications against SQL Server in a healthcare software environment.",
      "Contributed to feature development and system maintenance within the .NET Framework, supporting medical practice operations.",
      "Developed an early focus on data accuracy and system reliability that carried into later compliance-sensitive Dynamics 365 work.",
    ],
  },
  {
    range: "Apr 2012 — Aug 2016",
    title: "IT Support Specialist / Systems Analyst",
    org: "Kaseya",
    tags: ["Systems Analysis", "IT Support"],
    points: [
      "Provided technical support and systems analysis, troubleshooting issues across enterprise software systems.",
      "Maintained systems infrastructure and supported end users, building foundational technical skills.",
      "Gained early exposure to enterprise software environments that informed a practical, business-first approach to later development work.",
    ],
  },
];

export const skillGroups = [
  {
    label: "Dynamics & Power Platform",
    items: [
      "Microsoft Dynamics 365 / Dynamics CRM",
      "Microsoft Dataverse",
      "Power Apps",
      "Power Automate",
      "Microsoft SharePoint",
    ],
  },
  {
    label: "Cloud & Delivery",
    items: [
      "Microsoft Azure — App Service, Logic Apps",
      "Azure DevOps / CI-CD",
      "Infrastructure as Code",
    ],
  },
  {
    label: "Backend & Data",
    items: [
      "C# / ASP.NET / .NET Framework",
      "SQL Server / Azure SQL Database",
      "Database Architecture",
      "Python",
    ],
  },
];

export const certifications = [
  {
    code: "PL-400",
    name: "Microsoft Power Platform Developer",
  },
  {
    code: "AZ-204",
    name: "Developing Solutions for Microsoft Azure",
  },
];

export const education = {
  degree: "Bachelor of Computer Applications, Mathematics",
  school: "Jacksonville University",
  range: "2006 — 2010",
};
