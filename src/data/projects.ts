export type ProjectDetail = {
  problem: string;
  solution: string;
  role?: string;
  architecture: string;
  architectureSteps?: string[];
  techStack: { group: string; items: string[] }[];
  impact: string[];
  gallery?: string[];
  liveUrl?: string;
  repoUrls?: {
    repo?: string;
    frontend?: string;
    backend?: string;
  };
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  year: string;
  category: string;
  /** Omitted for confidential projects they render ConfidentialPlaceholder
   *  instead, and an image path can itself leak the client's name. */
  image?: string;
  description: string;
  tags: string[];
  confidential?: boolean;
  detail: ProjectDetail;
};

export const projects: Project[] = [
  {
    id: "000",
    slug: "enterprise-operations-platform",
    title: "Enterprise Operations & Project Management Platform",
    year: "2026",
    category: "Product Engineering",
    description:
      "A production-grade internal operational platform combining project management, collaboration, workflow automation, data aggregation, management reporting, and external service integrations.",
    confidential: true,
    tags: ["REACT", "NESTJS", "POSTGRESQL", "REDIS"],

    detail: {
      role: "Full-stack Engineer",

      problem:
        "Project-related work was distributed across multiple workflows, making coordination, information visibility, operational tracking, and management reporting difficult to handle consistently. The organization needed a centralized platform capable of supporting day-to-day execution while transforming operational data into higher-level management information.",

      solution:
        "Designed and developed a full-stack internal platform that centralizes project execution, task management, timelines, documentation, meetings, scheduling, collaboration, notifications, approvals, and management reporting within a single application.",

      architecture:
        "Designed and developed the platform as a modular full-stack system spanning 22 backend modules and 33 relational data tables, taking ownership across requirements discovery, application architecture, frontend, backend, data modeling, business logic, data aggregation, caching, asynchronous processing, integrations, security, deployment, and production support.",

      architectureSteps: [
        "Analyzed stakeholder requirements and translated non-technical workflows into technical requirements, application flows, data relationships, and implementable features",
        "Designed the overall application architecture, module boundaries, and relational data model across interconnected application domains",
        "Developed the frontend using React, TypeScript, Vite, and reusable component-based architecture",
        "Implemented modular backend APIs and business logic using NestJS",
        "Designed and integrated PostgreSQL data models supporting interconnected project, task, document, meeting, scheduling, collaboration, and reporting workflows",
        "Implemented data aggregation and calculation logic to transform operational records into derived management information",
        "Built reporting and dashboard workflows that combine data from multiple related domains into role-aware management views",
        "Implemented JWT-based authentication using secure httpOnly cookies and Argon2 password hashing",
        "Implemented role-based authorization with differentiated read and mutation permissions across application domains",
        "Integrated TanStack Query for server-state management, data fetching, synchronization, and client-side caching",
        "Introduced Redis caching for frequently accessed and derived data to reduce unnecessary database operations",
        "Implemented asynchronous background processing using BullMQ and Redis for non-blocking application workloads",
        "Implemented retry handling for background email and notification jobs",
        "Implemented email and web-push notification workflows for application events",
        "Implemented API rate limiting and application-level security controls",
        "Implemented document and attachment handling using object storage and secure upload flows",
        "Integrated external calendar services through OAuth-based authentication for scheduling workflows",
        "Implemented meeting coordination, scheduling, approval, collaboration, and notification workflows",
        "Established database migration, backup, and restoration procedures as part of production operations",
        "Implemented automated database backup workflows with off-site object storage for operational resilience",
        "Implemented application health checks and production-oriented safeguards",
        "Containerized the application using Docker and contributed to CI/CD, container registry, environment configuration, and production deployment workflows",
        "Implemented Indonesian and English interfaces through application internationalization",
        "Developed and maintained automated tests for critical application workflows",
        "Tested, audited, and refined AI-assisted implementations before integrating them into the production codebase",
        "Maintained and iterated on the production system after release, including troubleshooting, user support, and continuous improvements",
      ],

      techStack: [
        {
          group: "Frontend",
          items: [
            "React 19",
            "TypeScript",
            "Vite",
            "React Router 7",
            "TanStack Query",
            "Tailwind CSS",
            "shadcn / Base UI",
            "i18next",
          ],
        },
        {
          group: "Backend",
          items: ["NestJS 11", "TypeScript", "TypeORM", "JWT", "Argon2"],
        },
        {
          group: "Database",
          items: ["PostgreSQL"],
        },
        {
          group: "Infrastructure",
          items: ["Redis", "BullMQ", "Docker", "AWS S3", "GHCR"],
        },
        {
          group: "Integrations",
          items: ["OAuth", "Google Calendar", "Email", "Web Push"],
        },
      ],

      impact: [
        "Delivered a centralized production platform spanning 20+ production features across project execution, task management, collaboration, documentation, meetings, scheduling, notifications, approvals, and management reporting.",
        "Designed a modular backend architecture spanning 22 modules and 33 relational data tables to support interconnected operational workflows.",
        "Implemented aggregation and calculation workflows that transform interconnected operational records into derived management information.",
        "Built management reporting and dashboard capabilities that combine data from multiple application domains into role-aware views.",
        "Established separation between transactional data, derived information, and management-oriented presentation layers to keep reporting workflows maintainable.",
        "Improved application efficiency through Redis caching for frequently accessed and derived data.",
        "Moved non-critical workloads into asynchronous BullMQ jobs, including email and notification processing with retry handling.",
        "Implemented secure authentication and authorization using JWT, httpOnly cookies, Argon2, and role-based access control.",
        "Implemented document management and secure object-storage workflows for application attachments.",
        "Integrated external calendar services to support application scheduling workflows.",
        "Established automated database backup and validated restoration procedures as part of production reliability practices.",
        "Implemented application health checks, rate limiting, automated testing, database migrations, and deployment safeguards.",
        "Supported bilingual application experiences through Indonesian and English internationalization.",
        "Owned end-to-end product development across requirements discovery, system design, frontend, backend, database, infrastructure, testing, deployment, and ongoing production support.",
      ],
    },
  },

  {
    id: "001",
    slug: "enterprise-e-rups-platform",
    title: "Enterprise E-RUPS Platform",
    year: "2026",
    category: "Enterprise Web Application",
    description:
      "An enterprise e-RUPS platform developed to support digital shareholder meeting workflows and participation.",
    confidential: true,
    tags: ["REACT", "TYPESCRIPT", "LARAVEL"],
    detail: {
      role: "Frontend Developer",

      problem:
        "Shareholder meeting operations required a more integrated digital workflow to support meeting preparation, participant management, attendance verification, meeting execution, and decision-making.",

      solution:
        "Contributed to the development of a web-based e-RUPS platform that brings key shareholder meeting workflows into a single digital experience.",

      architecture:
        "Worked primarily across the frontend layer of a React-based enterprise application integrated with a Laravel backend, translating business requirements into production-ready interfaces and workflows.",

      architectureSteps: [
        "Translated product requirements into frontend workflows",
        "Designed and implemented reusable React components and application screens",
        "Built interactive interfaces for meeting and participant workflows",
        "Integrated frontend features with backend APIs",
        "Handled client-side state, form flows, validation, and user interactions",
        "Implemented responsive interfaces using the project's component and design system",
        "Debugged and refined features based on testing and stakeholder feedback",
        "Collaborated with the development team throughout implementation and refinement",
      ],

      techStack: [
        {
          group: "Frontend",
          items: ["React", "TypeScript", "Vite", "Ant Design", "Admiral"],
        },
        {
          group: "Backend",
          items: ["Laravel"],
        },
      ],

      impact: [
        "Contributed to the digitalization of core shareholder meeting workflows.",
        "Translated business requirements into production-ready enterprise interfaces.",
        "Built reusable frontend components and workflows for a complex business application.",
        "Collaborated with backend and business stakeholders to deliver end-to-end features.",
      ],
    },
  },

  {
    id: "002",
    slug: "bikinkonten-ai",
    title: "BikinKonten.ai",
    year: "2025",
    category: "AI-Powered SaaS",
    image: "/bikinkonten.webp",
    description:
      "An AI-powered SaaS platform that helps businesses create, manage, and distribute marketing content through a centralized workflow.",
    tags: ["NEXTJS", "REACT", "TYPESCRIPT", "TURBOREPO"],
    detail: {
      role: "Frontend Developer",

      problem:
        "Businesses need to produce marketing content consistently, but the process involves repetitive research, content creation, review, and distribution across multiple workflows and tools.",

      solution:
        "Developed the frontend application for an AI-powered content platform, providing interfaces for AI Agent management, knowledge source configuration, content workflows, and product interactions.",

      architecture:
        "Worked within a Turborepo-based monorepo where the Next.js frontend communicates with a NestJS API while sharing TypeScript types, API contracts, utilities, and UI components across applications.",

      architectureSteps: [
        "Next.js and React frontend application",
        "TypeScript for type-safe frontend development",
        "Shared TypeScript types and API contracts",
        "Reusable shared UI components",
        "API client for communication with backend services",
        "Turborepo for managing the monorepo and shared packages",
      ],

      techStack: [
        {
          group: "Frontend",
          items: ["Next.js", "React", "TypeScript"],
        },
        {
          group: "Styling",
          items: ["Tailwind CSS"],
        },
        {
          group: "Architecture",
          items: ["Turborepo", "Monorepo"],
        },
        {
          group: "Shared",
          items: ["API Client", "Shared Types", "Shared UI"],
        },
      ],

      impact: [
        "Delivered the frontend experience for an AI-powered SaaS product.",
        "Implemented user interfaces for AI Agent and Knowledge Base workflows.",
        "Connected frontend workflows with backend APIs through a shared type-safe architecture.",
        "Built reusable frontend components within a shared monorepo structure.",
      ],

      liveUrl: "https://bikinkonten.ai/login",
    },
  },

  {
    id: "003",
    slug: "landing-page-bikinkonten-ai",
    title: "BikinKonten.ai Landing Page",
    year: "2025",
    category: "Marketing Website",
    image: "/lp-bikinkonten.webp",
    description:
      "A responsive marketing website designed to communicate BikinKonten.ai's product value, features, pricing, and AI-powered content workflow.",
    tags: ["NEXTJS", "TAILWIND", "FRAMER MOTION"],
    detail: {
      role: "Frontend Developer",

      problem:
        "BikinKonten.ai needed a dedicated marketing experience to clearly communicate its product value, capabilities, pricing, and workflow to prospective customers.",

      solution:
        "Developed the frontend landing page with a responsive layout, reusable sections, and interactive animations to present the product narrative and guide visitors toward conversion.",

      architecture:
        "A standalone Next.js frontend application structured around reusable React components, Tailwind CSS for responsive styling, and Framer Motion for interactive animations.",

      architectureSteps: [
        "Next.js application using React and TypeScript",
        "Reusable React components for marketing sections",
        "Tailwind CSS for responsive styling",
        "Framer Motion for interactive animations",
      ],

      techStack: [
        {
          group: "Frontend",
          items: ["Next.js", "React", "TypeScript"],
        },
        {
          group: "Styling",
          items: ["Tailwind CSS"],
        },
        {
          group: "Animation",
          items: ["Framer Motion"],
        },
      ],

      impact: [
        "Delivered a responsive marketing experience across desktop and mobile.",
        "Structured the product narrative around features, workflow, pricing, and calls to action.",
        "Enhanced the marketing experience with interactive animations and reusable frontend components.",
      ],

      liveUrl: "https://bikinkonten.ai/",
    },
  },

  {
    id: "004",
    slug: "chatter",
    title: "Chatter",
    year: "2025",
    category: "Real-time Messaging Web App",
    image: "/chatter.webp",
    description:
      "A full-stack real-time messaging application built with GraphQL, WebSockets, and Redis Pub/Sub for instant communication between connected users.",
    tags: ["REACT", "NESTJS", "GRAPHQL", "WEBSOCKET", "REDIS", "MONGODB"],
    detail: {
      role: "Full-stack Developer",

      problem:
        "Traditional request-response APIs are not sufficient for a messaging experience where users expect messages and user updates to appear instantly. The project was built to explore real-time communication, persistent conversations, secure authentication, and media handling in a modern web application.",

      solution:
        "Built a full-stack real-time messaging application using GraphQL and WebSockets, with Redis Pub/Sub for event distribution, MongoDB for persistent data, JWT-based authentication, and AWS S3 for user media storage.",

      architecture:
        "A React and Vite SPA communicates with a NestJS backend through GraphQL. Apollo Client handles GraphQL operations and client-side state, graphql-ws enables real-time subscriptions, Redis Pub/Sub distributes real-time events, MongoDB stores persistent data, and AWS S3 handles user-uploaded media.",

      architectureSteps: [
        "React 19 + Vite frontend application",
        "Apollo Client for GraphQL queries, mutations, and cache management",
        "GraphQL Code Generator for type-safe frontend operations",
        "graphql-ws for real-time WebSocket communication",
        "NestJS + Apollo Server for the backend API",
        "Redis Pub/Sub for real-time event distribution",
        "MongoDB + Mongoose for persistent application data",
        "AWS S3 for user-uploaded media storage",
        "JWT authentication with HttpOnly cookies",
      ],

      techStack: [
        {
          group: "Frontend",
          items: [
            "React",
            "Vite",
            "TypeScript",
            "React Router",
            "Apollo Client",
          ],
        },
        {
          group: "Real-time",
          items: ["GraphQL Subscriptions", "WebSockets", "Redis Pub/Sub"],
        },
        {
          group: "Backend",
          items: ["NestJS", "GraphQL", "Apollo Server"],
        },
        {
          group: "Database",
          items: ["MongoDB", "Mongoose"],
        },
        {
          group: "Infrastructure",
          items: ["AWS S3"],
        },
        {
          group: "Security",
          items: ["JWT", "HttpOnly Cookies", "bcrypt"],
        },
      ],

      impact: [
        "Built a complete full-stack real-time messaging system from frontend to backend.",
        "Implemented bidirectional messaging using GraphQL subscriptions and WebSockets without polling.",
        "Used Redis Pub/Sub to distribute real-time events across application instances.",
        "Implemented secure authentication using JWT with HttpOnly cookies.",
        "Supported persistent messaging, user profiles, and media uploads.",
        "Implemented infinite scrolling to progressively load historical messages.",
      ],

      gallery: [
        // "/chatter-home.webp",
        // "/chatter-chat.webp",
        // "/chatter-auth.webp",
        // "/chatter-architecture.webp",
      ],

      repoUrls: {
        frontend: "https://github.com/GustinRhezaRNA/chatter-ui",
        backend: "https://github.com/GustinRhezaRNA/chatter-backend",
      },
    },
  },

  {
    id: "005",
    slug: "cinebox-movie-app",
    title: "CineBox",
    year: "2024",
    category: "Movie Discovery Web App",
    image: "/cinebox.webp",
    description:
      "A responsive movie discovery application powered by the TMDB API, featuring real-time search, genre-based discovery, pagination, and detailed movie information.",
    tags: ["REACT", "TYPESCRIPT", "VITE", "TMDB API"],
    detail: {
      role: "Frontend Developer",

      problem:
        "Movie discovery involves browsing large collections of titles, finding specific movies, and navigating detailed information across multiple views. This project was built to explore how a frontend application can transform third-party API data into an interactive and responsive discovery experience.",

      solution:
        "Built a React-based movie discovery application integrated with the TMDB API, providing movie discovery, search, genre filtering, pagination, and detailed movie information through a responsive cinematic interface.",

      architecture:
        "A React and Vite single-page application consuming movie data from the TMDB API through the Fetch API, with React Router for navigation and Context API for shared authentication state.",

      architectureSteps: [
        "React + Vite single-page application",
        "React Router for client-side navigation",
        "Fetch API for TMDB integration",
        "TypeScript interfaces for external API data",
        "Context API for shared authentication state",
        "Local storage for client-side user persistence",
      ],

      techStack: [
        {
          group: "Frontend",
          items: ["React", "TypeScript", "Vite", "React Router"],
        },
        {
          group: "UI",
          items: ["Tailwind CSS", "shadcn/ui", "Lucide React"],
        },
        {
          group: "State",
          items: ["React Context", "React Hooks"],
        },
        {
          group: "API",
          items: ["TMDB API", "Fetch API"],
        },
      ],

      impact: [
        "Built a complete movie discovery experience around a third-party REST API.",
        "Implemented search, genre filtering, pagination, and detailed movie views.",
        "Handled asynchronous API loading and error states.",
        "Delivered a responsive mobile-first interface across different screen sizes.",
        "Applied TypeScript interfaces to maintain type safety when consuming external API data.",
      ],

      liveUrl: "https://cinebox-opal.vercel.app/",
      repoUrls: {
        repo: "https://github.com/GustinRhezaRNA/cinebox",
      },
    },
  },
];

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((p) => p.slug === slug);
