export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  screenshotType: 'job-portal' | 'chatz' | 'thinkboard';
  category: 'all' | 'python' | 'mern';
  keyFeatures: string[];
  architectureNotes?: {
    roleArchitecture?: string;
    endpoints?: { method: 'GET' | 'POST' | 'PUT' | 'DELETE'; path: string; desc: string }[];
    databaseDesign?: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  summary: string;
}

export interface TechCategory {
  title: string;
  description: string;
  skills: { name: string; level?: string }[];
}

export const PERSONAL_INFO = {
  name: "Madhan Ravi",
  headline: "Python Backend Developer & Full Stack Developer",
  subHeadline: "Software developer with hands-on experience shipping production features across React.js, Next.js, TypeScript, the MERN stack (MongoDB, Express.js, Node.js), Django, and PostgreSQL.",
  location: "Chennai - 600062, India",
  phone: "+91 9003140522",
  educationDegree: "Bachelor of Computer Application (BCA)",
  cgpa: "7.8/10",
  internshipExperience: "Full Stack Developer Intern at Marzelet Info Technology Pvt Ltd",
  currentPositioning: "Python Backend Developer | Full Stack Developer | Software Engineer",
  email: "madhanravi734@gmail.com",
  github: "https://github.com/madhanravi734",
  linkedin: "https://www.linkedin.com/in/madhanravi",
  leetcode: "https://leetcode.com/u/Madhan_ravi/",
  suitableRoles: [
    "Python Developer",
    "Backend Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Junior Developer",
    "SDE Fresher"
  ]
};

export const ABOUT_TEXT = {
  intro: "Full-stack developer with hands-on experience shipping production features across React.js, Next.js, TypeScript, the MERN stack (MongoDB, Express.js, Node.js), Django, and PostgreSQL. Builds REST APIs with JWT authentication, role-based permissions, and rate limiting, and deploys full applications live using Vercel, Render, and Neon PostgreSQL.",
  mission: "My primary technical focus is engineering robust, secure backend systems with Python, Django, and Django REST Framework, paired with relational data modeling in PostgreSQL (Neon) and caching/rate-limiting via Upstash Redis. I also build modern full-stack web applications with React.js, Next.js, and the MERN stack.",
  workEthic: "During my internship at Marzelet Info Technology Pvt Ltd, I collaborated on building real-world backend features, integrating RESTful APIs, handling database operations, and creating modular React components under senior engineer review. I prioritize clean code architecture, reliable CRUD logic, secure authentication, and seamless frontend-backend communication."
};

export const TECH_STACK_CATEGORIES: TechCategory[] = [
  {
    title: "Backend Development",
    description: "Core backend architecture, REST API design, and server-side business logic",
    skills: [
      { name: "Python" },
      { name: "Django" },
      { name: "Django REST Framework" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "PyQt5" }
    ]
  },
  {
    title: "Frontend Engineering",
    description: "Modern, component-driven client applications with responsive design",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "HTML5" },
      { name: "CSS3" }
    ]
  },
  {
    title: "Databases & Storage",
    description: "Relational modeling, document storage, and query optimization",
    skills: [
      { name: "PostgreSQL (Neon)" },
      { name: "MongoDB (Mongoose)" },
      { name: "SQLite" },
      { name: "Upstash Redis" }
    ]
  },
  {
    title: "Cloud & DevOps & Tools",
    description: "Deployment, containerization, API testing, and continuous workflows",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "Postman" },
      { name: "Vercel" },
      { name: "Render" },
      { name: "Swagger/OpenAPI" }
    ]
  },
  {
    title: "Core Concepts & Practices",
    description: "Foundational software engineering patterns applied across all projects",
    skills: [
      { name: "JWT Authentication" },
      { name: "Role-Based Access Control" },
      { name: "Rate Limiting" },
      { name: "REST API Design" },
      { name: "CRUD Architecture" },
      { name: "Data Structures & Algorithms" },
      { name: "OOP" }
    ]
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    company: "Marzelet Info Technology Pvt Ltd",
    role: "Full Stack Developer Intern",
    duration: "July 2026 - Present",
    period: "Internship",
    location: "Chennai, Tamil Nadu",
    description: "Built and shipped production-facing features across Python, Django, REST APIs, PostgreSQL, React.js, and TypeScript under senior engineer review.",
    highlights: [
      "Built and shipped production-facing UI components using React.js, Next.js, TypeScript, and Tailwind CSS, working directly within a live codebase under senior engineer review.",
      "Designed and implemented RESTful APIs using Python, Django, and Django REST Framework to connect frontend and backend systems for live product features.",
      "Queried, modeled, and persisted application data in PostgreSQL, contributing to schema design decisions for new features.",
      "Debugged issues spanning frontend, backend, and API layers, improving reliability of production-grade code before release.",
      "Collaborated using Git-based version control and team code-review workflows, following industry-standard software engineering practices."
    ],
    technologies: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "Postman"
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Sindhi College of Arts and Science",
    location: "Chennai, Tamil Nadu",
    period: "Oct 2021 - May 2024",
    cgpa: "7.8 / 10",
    summary: "Comprehensive academic foundation in computer programming, database systems, software engineering fundamentals, algorithms, and web applications."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "django-job-portal",
    name: "Django Job Portal",
    tagline: "Role-based recruitment platform with Django REST Framework & PostgreSQL (Neon)",
    description: "A role-based job portal built with Django and Django REST Framework connecting candidates and recruiters. Spans 4 core Django apps (profiles, postings, applications, resumes) with database uniqueness constraints, JWT auth, and interactive Swagger/ReDoc docs.",
    technologies: [
      "Python",
      "Django",
      "DRF",
      "PostgreSQL (Neon)",
      "Docker",
      "Postman",
      "HTML/CSS",
      "Swagger/OpenAPI"
    ],
    githubUrl: "https://github.com/madhanravi734/django-job-portal",
    liveDemoUrl: "https://django-job-portal-6ttmskzcb-madhanravi734.vercel.app/",
    screenshotType: "job-portal",
    category: "python",
    keyFeatures: [
      "Eliminated duplicate and unauthorized job applications by enforcing database-level uniqueness constraints and ownership checks across 4 core Django apps",
      "Secured and scaled the API layer by implementing JWT authentication and role-based permissions across all endpoints",
      "Added pagination, search, filtering, and ordering; thoroughly validated every endpoint using Postman before release",
      "Enabled one-command environment setup and consistent deployments by containerizing the full stack with Docker and Docker Compose",
      "Shipped interactive Swagger/OpenAPI + ReDoc API documentation",
      "Deployed publicly end-to-end to Vercel with a Neon serverless PostgreSQL database"
    ],
    architectureNotes: {
      roleArchitecture: "Role-Based Access Control separating Candidate & Recruiter profiles with customized dashboard workflows across 4 Django apps",
      endpoints: [
        { method: "GET", path: "/api/jobs/", desc: "Fetch paginated active job listings with search, filtering, and ordering" },
        { method: "POST", path: "/api/jobs/create/", desc: "Recruiter endpoint to post new vacancy with requirements" },
        { method: "POST", path: "/api/applications/apply/", desc: "Candidate submission endpoint with resume file upload & uniqueness checks" },
        { method: "GET", path: "/api/recruiter/applicants/", desc: "Recruiter applicant management dashboard with status updates" }
      ],
      databaseDesign: "PostgreSQL (Neon) normalized tables: Users, Profiles (Roles), JobPostings, Applications (unique constraints), Resumes."
    }
  },
  {
    id: "chatz",
    name: "Chatz",
    tagline: "MERN Real-Time Chat Application with instant messaging & WebSocket events",
    description: "A full-stack chat application built using the MERN stack, focused on real-time communication, authentication, API integration, and modern responsive UI.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "Authentication",
      "Socket-based Communication"
    ],
    githubUrl: "https://github.com/madhanravi734/Chatz",
    liveDemoUrl: "https://chatz-fawn.vercel.app/login",
    screenshotType: "chatz",
    category: "mern",
    keyFeatures: [
      "Real-time instant communication with socket events and responsive client state",
      "Secure user authentication flow (login, register, session verification)",
      "Channel and direct messaging with timestamped message history",
      "Modern dark-mode card interface optimized for developer workflows",
      "Modular Express and Node.js REST API backend with MongoDB storage"
    ],
    architectureNotes: {
      roleArchitecture: "Client-server architecture with event-driven socket handling and stateless JWT authentication",
      endpoints: [
        { method: "POST", path: "/api/auth/register", desc: "User registration and password hashing" },
        { method: "POST", path: "/api/auth/login", desc: "Authenticate user and issue session token" },
        { method: "GET", path: "/api/messages/:chatId", desc: "Retrieve chronological chat history" },
        { method: "POST", path: "/api/messages/send", desc: "Dispatch message payload and broadcast via socket" }
      ],
      databaseDesign: "MongoDB collections for Users, Conversations, and Messages with timestamp indexing."
    }
  },
  {
    id: "thinkboard",
    name: "Thinkboard — MERN Notes App",
    tagline: "Full-stack MERN note-taking app with Upstash Redis rate limiting",
    description: "A full-stack MERN note-taking app enabling users to create, edit, and delete notes in real time, with a REST API built on Express.js and Node.js backed by MongoDB, Mongoose, and Upstash Redis rate limiting.",
    technologies: [
      "MongoDB (Mongoose)",
      "Express.js",
      "React.js",
      "Node.js",
      "Upstash Redis",
      "Tailwind CSS",
      "REST APIs",
      "Vercel"
    ],
    githubUrl: "https://github.com/madhanravi734/Thinkboard",
    liveDemoUrl: "https://thinkboard-rho.vercel.app/",
    screenshotType: "thinkboard",
    category: "mern",
    keyFeatures: [
      "Built a full-stack MERN note-taking app enabling users to create, edit, and delete notes in real time",
      "REST API built on Express.js and Node.js backed by MongoDB and Mongoose",
      "Prevented API abuse and protected backend stability by implementing request rate limiting with Upstash Redis across all note endpoints",
      "Delivered a fully responsive UI and deployed the application live on Vercel, making the project independently testable without local setup"
    ],
    architectureNotes: {
      roleArchitecture: "Decoupled frontend-backend with Express REST endpoints, Upstash Redis rate limiter middleware, and optimistic client UI updates",
      endpoints: [
        { method: "GET", path: "/api/notes", desc: "List user notes with category filters & rate limiting" },
        { method: "POST", path: "/api/notes", desc: "Create a new note entry with title, body, and tags" },
        { method: "PUT", path: "/api/notes/:id", desc: "Update existing note contents" },
        { method: "DELETE", path: "/api/notes/:id", desc: "Remove a note from MongoDB storage" }
      ],
      databaseDesign: "MongoDB Note collection with title, content, tags, pinned status, and Upstash Redis rate limit keys."
    }
  }
];

export const MOCK_API_ENDPOINTS = [
  {
    id: "job-listings",
    project: "Django Job Portal",
    method: "GET",
    endpoint: "/api/jobs/?role=candidate&status=open",
    status: 200,
    statusText: "OK",
    response: {
      count: 2,
      results: [
        {
          id: 104,
          title: "Junior Python Developer",
          company: "FinTech Systems",
          location: "Chennai, India",
          type: "Full-time",
          required_skills: ["Python", "Django", "PostgreSQL (Neon)", "REST APIs"],
          posted_by: "Recruiter #12",
          applications_count: 8
        },
        {
          id: 105,
          title: "Backend Engineer (SDE 1)",
          company: "CloudCore Labs",
          location: "Remote / Bengaluru",
          type: "Full-time",
          required_skills: ["Python", "Django REST Framework", "Docker"],
          posted_by: "Recruiter #07",
          applications_count: 14
        }
      ]
    }
  },
  {
    id: "candidate-apply",
    project: "Django Job Portal",
    method: "POST",
    endpoint: "/api/applications/apply/",
    status: 201,
    statusText: "Created",
    response: {
      application_id: 849,
      job_id: 104,
      candidate: "Madhan Ravi",
      resume_filename: "Madhan_Ravi_Resume.pdf",
      status: "Submitted (Under Review)",
      created_at: "2026-10-08T06:15:00Z",
      message: "Application submitted successfully with database uniqueness check verified."
    }
  },
  {
    id: "thinkboard-ratelimit",
    project: "Thinkboard (MERN)",
    method: "GET",
    endpoint: "/api/notes",
    status: 200,
    statusText: "OK",
    response: {
      rate_limit: {
        limit: 60,
        remaining: 58,
        reset_in_seconds: 42,
        backend: "Upstash Redis"
      },
      notes: [
        {
          id: "note_01",
          title: "Django REST Framework Best Practices",
          content: "Use serializers with validation, model viewsets for standard CRUD, and custom permissions for RBAC.",
          tags: ["python", "django", "drf"],
          updatedAt: "2026-10-07T14:30:00Z"
        },
        {
          id: "note_02",
          title: "PostgreSQL Indexing Strategy",
          content: "Add B-tree indexes on foreign keys and frequently queried status fields.",
          tags: ["database", "postgres", "optimization"],
          updatedAt: "2026-10-06T09:12:00Z"
        }
      ]
    }
  },
  {
    id: "chatz-auth",
    project: "Chatz (Thinkboard Chat)",
    method: "POST",
    endpoint: "/api/auth/login",
    status: 200,
    statusText: "OK",
    response: {
      user: {
        id: "usr_65f8a01",
        username: "testuser2",
        email: "madhanravi734@gmail.com",
        status: "active"
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      expires_in: "24h"
    }
  }
];
