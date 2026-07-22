export const SERVICES = [
  {
    id: "web-app-dev",
    name: "Web & App Development",
    shortDescription:
      "Custom websites, web apps, and mobile apps built for your business.",
    icon: "code",
    heroTagline: "Software that fits your business, not the other way around.",
    fullDescription:
      "We design and build custom websites, web applications, and mobile apps tailored to how your business actually operates. From customer-facing marketing sites to internal tools that replace spreadsheets and manual workflows, we handle the full lifecycle — planning, design, development, and long-term support.",
    benefits: [
      "Custom-built to your workflow instead of forcing you into a template",
      "Responsive, accessible interfaces that work on any device",
      "Clean, maintainable code your team can build on later",
      "Ongoing support after launch, not a one-and-done handoff",
    ],
    process: [
      { title: "Discovery", detail: "We learn your goals, users, and constraints before writing a line of code." },
      { title: "Design", detail: "Wireframes and prototypes so you can see the plan before we build it." },
      { title: "Build", detail: "Iterative development with regular check-ins, not a black box." },
      { title: "Launch & support", detail: "We ship, monitor, and stay available for fixes and enhancements." },
    ],
    followUpQuestions: [
      {
        id: "app_type",
        label: "What type of application do you need?",
        type: "radio",
        options: ["Website", "Web App", "Mobile App"],
      },
      {
        id: "has_design_assets",
        label:
          "Do you already have design assets (logo, brand guide, mockups)?",
        type: "radio",
        options: ["Yes", "No"],
      },
      {
        id: "user_base_size",
        label: "Estimated user base size",
        type: "radio",
        options: ["Under 100", "100–1,000", "1,000–10,000", "10,000+"],
      },
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud Infrastructure & DevOps",
    shortDescription:
      "Migrate, build, and scale your infrastructure on the cloud.",
    icon: "cloud",
    heroTagline: "Infrastructure that scales quietly in the background.",
    fullDescription:
      "Whether you're moving off legacy servers or standing up cloud infrastructure for the first time, we design systems that scale predictably and fail gracefully. We build CI/CD pipelines, automate deployments, and set up monitoring so problems get caught before your customers notice.",
    benefits: [
      "Infrastructure-as-code so environments are reproducible, not hand-tuned",
      "Automated deployments that reduce human error",
      "Monitoring and alerting so you find out about issues first",
      "Cost-aware architecture — we don't over-provision to pad a bill",
    ],
    process: [
      { title: "Assess", detail: "We audit your current setup and identify risk and cost hotspots." },
      { title: "Design", detail: "An architecture plan sized to your actual load, not hypothetical scale." },
      { title: "Migrate or build", detail: "Staged rollout with rollback plans at every step." },
      { title: "Operate", detail: "Monitoring, alerting, and ongoing tuning after go-live." },
    ],
    followUpQuestions: [
      {
        id: "current_provider",
        label: "Current cloud provider (if any)",
        type: "radio",
        options: ["AWS", "Azure", "Google Cloud", "None yet"],
      },
      {
        id: "migration_or_new",
        label: "Is this a migration or a new build?",
        type: "radio",
        options: ["Migration", "New Build"],
      },
      {
        id: "expected_load",
        label: "Expected monthly traffic/load",
        type: "radio",
        options: ["Low", "Medium", "High", "Not sure yet"],
      },
    ],
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity Audit & Compliance",
    shortDescription:
      "Identify vulnerabilities and meet compliance requirements.",
    icon: "shield",
    heroTagline: "Know where you're exposed before someone else finds out.",
    fullDescription:
      "We assess your systems for real-world vulnerabilities and help you meet the compliance frameworks that matter to your customers and regulators — HIPAA, SOC 2, GDPR, and more. You get a clear, prioritized report, not a wall of jargon, plus hands-on help closing the gaps.",
    benefits: [
      "Plain-language findings ranked by actual risk, not just severity scores",
      "Compliance mapping to the frameworks your customers require",
      "Remediation support, not just a report and a goodbye",
      "Repeat audits to track progress over time",
    ],
    process: [
      { title: "Scope", detail: "We define what's in-bounds and which frameworks apply." },
      { title: "Assess", detail: "Technical review of systems, access controls, and data handling." },
      { title: "Report", detail: "A prioritized, plain-language findings report with clear next steps." },
      { title: "Remediate", detail: "We help you fix what's found and re-verify before you attest." },
    ],
    followUpQuestions: [
      {
        id: "compliance_requirements",
        label: "Relevant compliance requirements",
        type: "radio",
        options: ["HIPAA", "SOC 2", "GDPR", "None"],
      },
      {
        id: "prior_audit_history",
        label: "Have you had a prior security audit?",
        type: "radio",
        options: ["Yes", "No"],
      },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation Integration",
    shortDescription:
      "Automate processes and integrate AI into your existing systems.",
    icon: "spark",
    heroTagline: "Put AI to work on the tasks slowing your team down.",
    fullDescription:
      "We identify the manual, repetitive processes costing your team the most time and build automation and AI-driven tooling to handle them — integrated with the systems you already use. No rip-and-replace, no hype: just practical automation that gives your team time back.",
    benefits: [
      "Automation built around your existing tools and data",
      "AI applied where it adds real value, not for its own sake",
      "Clear handoff and documentation so your team can maintain it",
      "Measurable time and cost savings, tracked after launch",
    ],
    process: [
      { title: "Map the process", detail: "We document the manual workflow and where time is lost." },
      { title: "Design the automation", detail: "A plan for what gets automated and what still needs a human." },
      { title: "Integrate", detail: "Built to work with your existing systems and data sources." },
      { title: "Measure", detail: "We track outcomes after launch to confirm it's actually saving time." },
    ],
    followUpQuestions: [
      {
        id: "process_to_automate",
        label: "Which business process do you want to automate?",
        type: "text",
      },
      {
        id: "existing_systems",
        label:
          "What existing systems or data will this need to integrate with?",
        type: "text",
      },
    ],
  },
];

export function getServiceById(serviceId) {
  return SERVICES.find((service) => service.id === serviceId);
}
