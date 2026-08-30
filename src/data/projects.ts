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
    slug: "project-management-platform",
    title: "Project Management Platform",
    year: "2026",
    category: "Full-stack Web Application",
    description:
      "A full-stack project management platform built to centralize project execution, task tracking, collaboration, documentation, meetings, and team workflows.",
    confidential: true,
    tags: ["REACT", "NESTJS", "POSTGRESQL", "REDIS"],
    detail: {
      role: "Full-stack Engineer",

      problem:
        "Project-related work was spread across multiple workflows and required a centralized platform to improve visibility, coordination, and day-to-day execution across teams.",

      solution:
        "Built a full-stack project management platform that brings project tracking, task management, timelines, documents, meetings, meeting minutes, and scheduling workflows into a single application.",

      architecture:
        "Designed and developed the application as a modular full-stack system, working across the frontend, backend, database, caching, background processing, and deployment layers.",

      architectureSteps: [
        "Analyzed stakeholder requirements and translated them into technical workflows and application features",
        "Designed the overall application structure and data relationships",
        "Developed the frontend using React, TypeScript, Vite, and component-based architecture",
        "Implemented backend APIs and business logic using NestJS",
        "Designed and integrated PostgreSQL data models for core application entities",
        "Implemented authentication and authorization across protected application areas",
        "Integrated TanStack Query for server-state management, data fetching, and caching on the frontend",
        "Implemented Redis-based caching to reduce unnecessary database operations",
        "Introduced asynchronous background processing for operations that should not block the request lifecycle",
        "Implemented API rate limiting and application-level security controls",
        "Established and validated database backup and restore procedures",
        "Containerized the application stack and worked on production deployment and environment configuration",
        "Implemented internationalization to support Indonesian and English interfaces",
        "Tested and refined features based on stakeholder feedback and real application usage",
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
          items: ["NestJS", "TypeScript"],
        },
        {
          group: "Database",
          items: ["PostgreSQL"],
        },
        {
          group: "Infrastructure",
          items: ["Redis", "BullMQ", "Docker"],
        },
      ],

      impact: [
        "Delivered a centralized platform for project execution, task management, collaboration, documentation, and meeting workflows.",
        "Improved warm endpoint response time by approximately 38% through Redis caching.",
        "Moved email processing off the request path and introduced automatic retries through BullMQ, with up to 3 retry attempts.",
        "Validated database backup and restore procedures with a 608 ms backup and 1.2 s restore while maintaining exact row-count parity.",
        "Implemented and verified login rate limiting, returning HTTP 429 after the 6th attempt within a 60-second window.",
        "Supported bilingual application experiences through internationalization.",
        "Owned end-to-end development across frontend, backend, database, and infrastructure.",
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
