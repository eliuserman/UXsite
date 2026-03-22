export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail: string;
  role: string;
  duration: string;
  team: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
  videoUrl?: string;
  content: {
    overview: string;
    research: string;
    design: string;
    outcome: string;
  };
}

export const projects: Project[] = [
  {
    id: "connecting-visual-text-data",
    title: "Connecting visual and text data",
    category: "Company: Bimmatch",
    description: "Automation in construction project data - Connecting any text-data requirement to any 3D model data-element of the project",
    thumbnail: "/assets/7f87584dfef486bea3c284234f73498dd67c9819.png",
    role: "Product Owner and UX",
    duration: "3 months",
    team: "4 designers, 6 developers",
    tags: ["ConTech", "3D BIM", "AI", "Graph RAG", "Big Data", "UX/UI Design"],
    challenge: "Construction projects generate massive volumes of text-based specifications and requirements that need to be matched to 3D BIM model elements. This was a fully manual process — time-consuming, error-prone, and impossible to scale across large projects with thousands of elements.",
    solution: "Designed a UX-driven automation layer that bridges text data (specs, requirements, standards) and visual 3D model data. Using Graph RAG and AI, the system intelligently maps requirements to the right BIM elements, with a clear interface for engineers to review, validate, and override matches.",
    results: [
      "80% reduction in manual data-matching effort",
      "Significant improvement in specification compliance accuracy",
      "Adopted across multiple large-scale construction projects",
    ],
    images: [
      "/assets/a1a53eff92385e7a516310af535124d0b95a24e3.png",
      "/assets/1075bd2bd7769c20a9d931b7ffdc0b20cdf89c90.png",
      "/assets/6cc191ff832474bb7684a41cadb9fffe197efa33.png",
      "/assets/9b0308f19eeb0f291eed688420838d7ee46a7c88.png",
    ],
    videoUrl: "https://www.youtube.com/embed/cmxScYfcOTo",
    content: {
      overview: "Construction data is notoriously fragmented — specifications live in Word documents, requirements in spreadsheets, and design intent in 3D BIM models. This project tackled a core pain point: how do you automatically connect hundreds of pages of text-based requirements to thousands of 3D model elements, accurately and at scale?",
      research: "We embedded with engineers and project managers across several active construction projects to map their workflows. We found that data-matching was done manually in Excel, consuming up to 40% of a project coordinator's week. Interviews revealed that errors in matching led to costly rework and compliance failures during audits.",
      design: "The solution centered on a dual-pane interface — text requirements on one side, BIM elements on the other — with AI-suggested matches surfaced inline. Engineers could accept, reject, or adjust matches with one click. A confidence score system helped prioritize review effort, and a graph-based visualization revealed relationships across elements and requirements.",
      outcome: "The automated matching system dramatically reduced manual work while improving accuracy. Project teams reported higher confidence in compliance audits and faster handoffs between design and construction phases. The product became a core workflow tool for Bimmatch's enterprise clients.",
    },
  },
  {
    id: "im-free-again",
    title: "I'm free again! (parents only...)",
    category: "Company: Amdocs",
    description: "Parent's app to control the traffic and usage of WIFI resource at home, any time from any place",
    thumbnail: "/assets/e83de090439b1fe19ad9a605c2c9b56d4e58c631.png",
    role: "Research and UX Lead",
    duration: "4 months",
    team: "2 designers, 8 developers, 1 PM",
    tags: ["Telecom", "Mobile", "Mesh-like Visualization", "Workshop", "UX/UI Design"],
    challenge: "Parents wanted visibility and control over their children's internet usage at home, but existing ISP tools were buried in router settings — inaccessible, confusing, and completely unusable on mobile. The challenge was to design something parents would actually use, in real moments of family life.",
    solution: "Led discovery workshops with parents to surface real-life scenarios and emotional needs. Designed a mobile-first app with a mesh-like family visualization showing who's online, what they're doing, and real-time controls to pause, limit, or extend access — all within a few taps.",
    results: [
      "High engagement rates among beta-tested parent users",
      "Reduced time-to-action from minutes (router settings) to seconds (app)",
      "Validated across multiple telecom operator deployments",
    ],
    images: [
      "/assets/418acd4ffba7074270c822e61977bb5208a3d670.png",
      "/assets/c20ee02e009a7c2f87dba4291c1ae1984adc387f.png",
      "/assets/78a77931b6bc86153b352e6ee7e69c747831887d.png",
      "/assets/3feaa759964b53942df4c091bab9013ef366fd15.png",
      "/assets/bc3ffec910235d66d6c66d7e71f4958163d24a8f.png",
      "/assets/dee6f445e99c1e80101bc5b66d8617fe683d31bf.png",
    ],
    videoUrl: "https://www.youtube.com/embed/4-OJocDEHPU",
    content: {
      overview: "This project was built for Amdocs telecom clients who needed a compelling, consumer-grade parental control product. The goal wasn't just feature delivery — it was understanding the emotional context of parenting in the digital age, and designing an experience that fits seamlessly into busy family life.",
      research: "We ran co-design workshops with parents across different household compositions and parenting styles. Scenarios emerged organically: 'It's school time but the kids are on YouTube,' 'I'm at work and I have no idea what's happening at home.' These became the design pillars. We also analyzed competitor tools and found all of them were technically-oriented, not parent-oriented.",
      design: "The core UI used a mesh-like visualization mapping each family member to their connected devices, with real-time usage indicators. Parents could tap on any child's node to see activity, set schedules, or immediately pause internet access. Notification flows were carefully designed to be informative but not anxiety-inducing. An undo mechanism allowed extending access with a single tap — for those 'teacher is sick' moments.",
      outcome: "The app was validated through two rounds of usability testing with real parents. All key tasks were completed in under 10 seconds on average. The design was handed off to Amdocs' engineering team and deployed as a white-label product for telecom operators, reaching thousands of households.",
    },
  },
  {
    id: "context-performance-cost",
    title: "Context in the service of performance & cost",
    category: "Company: Bimmatch",
    description: "Improving performance, response accuracy, and reducing tokens in AI solution, by design changes only",
    thumbnail: "/assets/42c626e673f3c01200577fa14bd31c5dcfd49e82.png",
    role: "Product Owner and UX",
    duration: "3 months",
    team: "4 designers, 6 developers",
    tags: ["ConTech", "Research", "AI", "Graph RAG", "Big Data", "UX/UI Design"],
    challenge: "Bimmatch's AI pipeline was consuming excessive tokens, leading to high operational costs and slower response times. The root cause wasn't in the model — it was in how context was being structured and surfaced to users, creating bloated, unfocused prompts.",
    solution: "Rather than re-engineering the AI model, we redesigned the user interaction layer to surface only the most relevant context at each step. By applying progressive disclosure and structured data-entry patterns, we reduced the input noise sent to the AI — improving both accuracy and cost without changing a single line of model code.",
    results: [
      "Significant reduction in average token usage per query",
      "Improved AI response accuracy through better-structured context",
      "Cost savings passed directly to Bimmatch's enterprise clients",
    ],
    images: [
      "/assets/42c626e673f3c01200577fa14bd31c5dcfd49e82.png",
    ],
    videoUrl: "https://www.youtube.com/embed/4-OJocDEHPU",
    content: {
      overview: "As AI becomes core infrastructure for construction tech, token cost and response quality are critical product metrics. This project explored how UX design decisions — not model changes — could directly improve AI performance and reduce costs for Bimmatch and its clients.",
      research: "We analyzed actual prompt logs and identified patterns in how users were submitting queries: long, unstructured, context-heavy inputs that overwhelmed the model. We mapped the information needs at each stage of the workflow and found that most of the context being sent was irrelevant to the specific query being asked.",
      design: "We redesigned the input experience around staged, structured context collection — guiding users to provide focused, relevant information at each workflow step rather than front-loading everything. Contextual hints and smart defaults further reduced unnecessary input. A new prompt-preview feature allowed power users to see and refine what was being sent to the AI.",
      outcome: "The redesign demonstrated that UI decisions have a direct and measurable impact on AI pipeline efficiency. Token usage dropped significantly across tested workflows, response accuracy improved, and the approach became a framework for how Bimmatch thinks about AI-human interaction design going forward.",
    },
  },
  {
    id: "building-blocks",
    title: "Building blocks",
    category: "Company: Bimmatch | Client: Mekorot (Israel National Water Company)",
    description: "What if engineers could approach infrastructure and construction planning the way UI designers work with Design Systems?",
    thumbnail: "/assets/b216ba02fe20ef316352409d4bfc53b041db7e08.png",
    role: "Product Owner, UX",
    duration: "6 months",
    team: "3 designers, 8 developers",
    tags: ["ConTech", "Research", "UX/UI Design", "Multiple Apps", "3D BIM", "BI Reports"],
    challenge: "Engineers needed a more efficient way to plan and manage infrastructure projects, similar to how design systems streamline UI design workflows. Every new project started from scratch — reusing elements was manual, inconsistent, and dependent on individual engineers' institutional knowledge.",
    solution: "Developed a modular building block system that allows engineers to reuse and customize infrastructure components across multiple projects. Integrated into Autodesk tools (Revit, Civil3D, Plant3D) and complemented by a SaaS CMS and a BI reporting layer for project compliance tracking.",
    results: [
      "45% reduction in planning time across tested projects",
      "60% increase in component reusability across the organization",
      "35% improvement in project compliance scores",
    ],
    images: [
      "/assets/b216ba02fe20ef316352409d4bfc53b041db7e08.png",
    ],
    videoUrl: "https://www.youtube.com/embed/4-OJocDEHPU",
    content: {
      overview: "This innovative project brought design system thinking to infrastructure planning for Mekorot, Israel's National Water Company. The goal was to create reusable building blocks that could streamline the planning and execution of water infrastructure projects across dozens of simultaneous projects and departments.",
      research: "We conducted extensive research with civil engineers, project managers, and procurement leads. Key findings revealed that teams were repeatedly designing identical infrastructure components from scratch, with no standardized library to draw from. This caused inconsistency, compliance risk, and wasted thousands of engineer-hours per year.",
      design: "We created a comprehensive library of modular infrastructure components (pumps, pipes, junctions, valves) — each carrying embedded technical and procurement data — integrated with 3D BIM tools used natively by engineers. A SaaS-based CMS allowed Library Owners to manage and update the components centrally. A Project Analytics Report gave Project Managers real-time visibility into how library elements were being adopted across teams.",
      outcome: "The building blocks system transformed how Mekorot approaches infrastructure planning, reducing planning time by 45% and increasing component reusability by 60%. The dynamic compliance ranking system created healthy accountability across engineering teams, and the system is now being expanded to additional clients and project types.",
    },
  },
];
