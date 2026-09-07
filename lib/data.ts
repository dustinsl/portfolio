export const profile = {
  name: "Dustin Long",
  initials: "DL",
  role: "Full-Stack Developer",
  tagline: "Dynamics 365, Power Platform and Azure",
  location: "Jacksonville, FL",
  email: "dustinlong.business@gmail.com",
  linkedin: "https://linkedin.com/in/dustin-long-8943ab434/",
  photo: "/images/dustin.jpg",
};

export const heroIntro =
  "I'm an AI Full-stack developer who builds scalable, high-performance solutions on Dynamics 365, Power Platform and Azure. I specialize in turning drifted, over-configured implementations back into systems that actually match the business, choosing custom C# where it's warranted and low-code where it isn't.";

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "14", label: "Certifications" },
  { value: "23", label: "Employers & Engagements" },
  { value: "9", label: "Industries Served" },
];

export const aboutBlocks = [
  {
    text: "I've spent the last decade inside Azure, Dynamics 365, Power Apps and Dataverse, mostly called in after an implementation has been configured well past what it was built to do.",
    image: "/images/b1.jpg",
  },
  {
    text: "My job is to work out what's actually wrong, then decide what genuinely needs custom C# and what a low-code Power Platform fix can handle without over-building it.",
    image: "/images/b2.jpg",
  },
  {
    text: "On the infrastructure side I deliver production-grade Azure, including App Service, Functions, Logic Apps and Entra ID, for manufacturing, healthcare and financial services clients who have real compliance requirements.",
    image: "/images/b3.jpg",
  },
];

export const services = [
  {
    icon: "sparkles",
    title: "AI Full-Stack",
    description:
      "Forecasting, anomaly detection and LLM-powered agents wired directly into Dynamics and Power Automate workflows.",
    images: ["/images/w1.jpg", "/images/w2.jpg", "/images/w3.jpg"],
  },
  {
    icon: "layers",
    title: "Dynamics 365 & Power Platform",
    description:
      "Diagnosing implementations that have drifted from what the business needs, then rebuilding with the right mix of custom C# and low-code Power Apps and Power Automate.",
    images: ["/images/w7.jpg", "/images/w8.jpg", "/images/w9.jpg"],
  },
  {
    icon: "cloud",
    title: "Azure Infrastructure & DevOps",
    description:
      "Production-grade Azure, including App Service, Functions, Logic Apps and Entra ID, with CI/CD through Azure DevOps and infrastructure as code.",
    images: ["/images/w4.jpg", "/images/w5.jpg", "/images/w6.jpg"],
  },
  {
    icon: "database",
    title: "Backend & Data Engineering",
    description:
      "ASP.NET/C# backends against SQL Server and Azure SQL, plus ETL/ELT pipelines for high-volume, compliance-sensitive data.",
    images: ["/images/w10.jpg", "/images/w11.jpg", "/images/w12.jpg"],
  },
];

export const skillGroups = [
  {
    label: "Dynamics & Power Platform",
    items: [
      { name: "Dynamics 365 / Dynamics CRM", level: 95 },
      { name: "Power Apps", level: 90 },
      { name: "Power Automate", level: 88 },
      { name: "Microsoft Dataverse", level: 92 },
      { name: "SharePoint", level: 80 },
    ],
  },
  {
    label: "Backend & Data",
    items: [
      { name: "C# / ASP.NET / .NET", level: 92 },
      { name: "SQL Server / Azure SQL", level: 88 },
      { name: "Database Architecture", level: 85 },
      { name: "Python", level: 75 },
    ],
  },
  {
    label: "Cloud & Delivery",
    items: [
      { name: "Azure (App Service, Functions, Logic Apps)", level: 90 },
      { name: "Azure DevOps / CI-CD", level: 85 },
      { name: "Infrastructure as Code", level: 80 },
      { name: "Entra ID / Azure AD", level: 82 },
    ],
  },
];

export const experience = [
  {
    range: "Jul 2026 - Present",
    title: "Full-Stack AI Developer",
    org: "Upwork",
    type: "Contract",
    tags: ["Azure", "Dynamics 365 F&O", "Power Apps", "C#", "Dataverse"],
    points: [
      "Engaged by enterprise clients on Dynamics 365 F&O integration projects, building custom X++ extensions for gaps that native OData and Dataverse APIs don't cover.",
      "Scoped and delivered vendor invoice processing automation, coordinating deployment across multi-tenant F&O environments.",
      "Worked directly with client stakeholders to turn business process gaps into technical specs and phased delivery plans.",
    ],
  },
  {
    range: "Jul 2023 - Mar 2026",
    title: "Azure & Dynamics 365 Developer / Power Platform Consultant",
    org: "Kforce",
    type: "Full-time",
    tags: ["Dynamics 365", "Power Platform", "Azure", "HIPAA"],
    points: [
      "Consulted on Dynamics 365 and Power Platform engagements across manufacturing, healthcare and financial services clients, resolving implementations where the platform had drifted from actual business needs.",
      "Extended Dynamics with custom C# once the low-code layer reached its limits, and built targeted Power Apps where a full custom build would have outpaced the actual need.",
      "Built out Azure infrastructure, including App Service, Functions, Logic Apps and Azure AD/Entra, to bring solutions to production scale with attention to HIPAA and audit compliance.",
    ],
  },
  {
    range: "Aug 2019 - Jul 2023",
    title: "Business Applications Developer / Dynamics 365 Developer",
    org: "Tribridge",
    type: "Full-time",
    tags: ["Dynamics 365", "Dataverse", "Power Platform", "SharePoint"],
    points: [
      "Developed and customized Dynamics 365 and Dynamics CRM solutions to fit client operational workflows.",
      "Designed Dataverse security roles and data structures built to withstand audit scrutiny for regulated clients.",
      "Extended Dynamics through the Power Platform and SharePoint, reaching for custom code only where configuration and low-code tools fell short.",
    ],
  },
  {
    range: "Aug 2016 - May 2019",
    title: ".NET Developer / Application Developer",
    org: "Modernizing Medicine",
    type: "Full-time",
    tags: ["ASP.NET", "C#", "SQL Server"],
    points: [
      "Built and maintained ASP.NET/C# applications against SQL Server in a healthcare software environment.",
      "Contributed to feature development and system maintenance within the .NET Framework, supporting medical practice operations.",
      "Developed an early focus on data accuracy and system reliability that carried into later compliance-sensitive Dynamics 365 work.",
    ],
  },
  {
    range: "Apr 2012 - Aug 2016",
    title: "IT Support Specialist / Systems Analyst",
    org: "Kaseya",
    type: "Full-time",
    tags: ["Systems Analysis", "IT Support"],
    points: [
      "Provided technical support and systems analysis, troubleshooting issues across enterprise software systems.",
      "Maintained systems infrastructure and supported end users, building foundational technical skills.",
      "Gained early exposure to enterprise software environments that informed a practical, business-first approach to later development work.",
    ],
  },
];

export const education = [
  {
    range: "2006 - 2010",
    degree: "Bachelor of Computer Applications, Mathematics",
    school: "Jacksonville University",
  },
];

export const projects = [
  {
    title: "Dynamics 365 F&O Integration Suite",
    description:
      "Custom X++ extensions closing gaps that native OData and Dataverse APIs don't cover, for enterprise F&O clients running multi-tenant environments.",
    tags: ["Dynamics 365 F&O", "X++", "OData"],
    image: "/images/f1.jpg",
  },
  {
    title: "Vendor Invoice Automation",
    description:
      "Scoped and delivered an automated vendor invoice processing workflow, coordinating deployment considerations across multi-tenant F&O environments.",
    tags: ["Power Automate", "Dynamics 365", "F&O"],
    image: "/images/f2.jpg",
  },
  {
    title: "HIPAA-Compliant Azure Infrastructure",
    description:
      "Production-scale Azure infrastructure, including App Service, Functions, Logic Apps and Entra ID, built with attention to HIPAA and audit compliance for healthcare and financial clients.",
    tags: ["Azure", "Entra ID", "HIPAA"],
    image: "/images/f3.jpg",
  },
  {
    title: "Dataverse Security & Audit Framework",
    description:
      "Security roles and data structures designed to withstand audit scrutiny for regulated clients, built directly in Dataverse.",
    tags: ["Dataverse", "Security", "Compliance"],
    image: "/images/f4.jpg",
  },
  {
    title: "Power Platform Modernization",
    description:
      "Extended Dynamics with custom C# once the low-code layer reached its limits, and built targeted Power Apps where a full custom build would have outpaced the actual need.",
    tags: ["Power Apps", "C#", "Dynamics 365"],
    image: "/images/f5.jpg",
  },
  {
    title: "Healthcare Practice Backend",
    description:
      "ASP.NET/C# applications against SQL Server supporting medical practice operations, with an early focus on data accuracy and reliability.",
    tags: ["ASP.NET", "C#", "SQL Server"],
    image: "/images/f6.jpg",
  },
];

export const certifications = [
  { code: "PL-400", name: "Microsoft Power Platform Developer" },
  { code: "AZ-204", name: "Developing Solutions for Microsoft Azure" },
];

export const testimonials = [
  {
    quote:
      "Working with Dustin was a game-changer for our SaaS product. We needed to bridge our core application with Microsoft Dynamics 365 and automate complex customer workflows, and he delivered a flawless solution. His expertise across Azure AI services and .NET backend design turned a high-risk integration into our strongest selling point.",
    name: "Marcus Vance",
    title: "VP of Product at EnterpriseSync",
  },
  {
    quote:
      "Dustin brought top-tier enterprise architectural discipline to our SaaS build. He seamlessly wired up custom C# microservices with Power Apps and Dataverse, giving our team a low-code internal management suite while keeping our core Azure AI pipeline fast and secure. He doesn't just write clean code; he builds scalable systems.",
    name: "Elena Rostova",
    title: "Founder and CEO at SaaSify AI",
  },
  {
    quote:
      "If you need someone to connect the dots between custom C# development, cutting-edge Azure AI and the Power Platform ecosystem, Dustin is the engineer you want. He helped us architect a hybrid data model using Dataverse that cut our API overhead by 40%. A true full-stack expert who delivers production-ready code every single time.",
    name: "David Chen",
    title: "Engineering Lead at Apex Software Solutions",
  },
];
