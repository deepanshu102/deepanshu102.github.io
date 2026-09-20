export const CONTENT = {
    bio: "Senior Backend Engineer with 6+ years of experience architecting high-throughput, distributed microservices and cloud systems. Specialized in Go (Golang), gRPC / Protobuf, and AWS with proven impact in microservice system design (HLD/LLD), runtime/latency optimization, automated data reconciliation, and full-stack observability via Prometheus and Grafana.",
    
    email: "deepanshuofficials@gmail.com",
    linkedin: "https://www.linkedin.com/in/deepanshu102",
    github: "https://github.com/deepanshu102",

    commendations: [
        {
            title: "NASA Space Apps Challenge Winner",
            organization: "NASA",
            year: "2019",
            description: "Led a team to develop an innovative solution for space data visualization, securing top honors in the global hackathon."
        }
    ],

    skills: [
        { name: "GOLANG", level: 95, icon: "G" },
        { name: "NODE.JS", level: 90, icon: "N" },
        { name: "JAVA / SPRING", level: 85, icon: "J" },
        { name: "AWS / CLOUD", level: 88, icon: "A" },
        { name: "KUBERNETES", level: 80, icon: "K" },
        { name: "MONGODB / SQL", level: 85, icon: "D" }
    ],

    experience: [
        {
            company: "KAIROS TECHNOLOGIES",
            role: "Senior Software Engineer",
            period: "Nov 2024 – Present",
            location: "Remote, India",
            points: [
                "Authored HLD/LLD specifications for 5 distributed microservices, mapping inter-service flows, Dead-Letter Queues (DLQ), automated S3-to-DB cron ingestion, and third-party wallet integrations.",
                "Engineered 2 backend microservices in Go using gRPC and Protobuf (Bazel, AWS) for the mobile app; slashed API latency by flattening and streamlining JSON response payloads.",
                "Halved data crunch time from 6h to 3h (50%) and cut cron execution from 3h to 20m; built automated deduplication endpoints and recurring jobs to resolve multi-location contract collisions.",
                "Instrumented Prometheus metrics and designed Grafana dashboards for API triage, EV remote charging session states (success/failure), sub-CPO/location filters, and dual-tariff tracking."
            ],
            tech: ["Go", "gRPC", "Protobuf", "Bazel", "AWS (S3, DLQ)", "Prometheus", "Grafana", "MySQL", "Docker", "Kubernetes", "Azure DevOps"]
        },
        {
            company: "ASCENDION ENGINEERING",
            role: "Software Engineer (Accenture Engagement)",
            period: "Nov 2022 – Oct 2024",
            location: "Bangalore, India",
            points: [
                "Migrated 200K+ healthcare records to AWS cloud databases via automated ETL and schema mapping pipelines with zero downtime.",
                "Engineered modular REST microservices in Go using Gorilla/Mux, GORM, and MongoDB; standardized unit testing with Testify and automated CI/CD via GitLab CI and Harness.",
                "Established robust testing frameworks with Testify and mocking, serving as the gold standard for all subsequent service migrations.",
                "Streamlined blue-green deployment strategies, reducing rollback time from hours to minutes."
            ],
            tech: ["Go (Golang)", "REST APIs", "Gorilla/Mux", "MongoDB", "GORM", "Testify", "Docker", "AWS", "GitLab CI", "Harness"]
        },
        {
            company: "COFORGE",
            role: "Senior Software Engineer",
            period: "July 2020 – Nov 2022",
            location: "Greater Noida, India",
            points: [
                "Engineered core transaction and ledger engines on the Evo SaaS platform, powering pawn-broking workflows across 150+ retail dealer branches.",
                "Implemented asynchronous task prioritization and SLA queue frameworks; decomposed monolithic features into scalable Go and Spring Boot services on AWS.",
                "Built an API caching layer using Go and Redis that reduced service latency by 40% for high-traffic endpoints.",
                "Optimized backend flows for global stakeholders using AWS Lambda and DynamoDB for event-driven processing."
            ],
            tech: ["Go (Golang)", "Echo", "TypeScript", "AWS (Lambda, DynamoDB, API Gateway, CloudWatch)", "Java", "Spring Boot", "MySQL"]
        },
        {
            company: "NIIT TECHNOLOGIES",
            role: "Trainee Java Developer",
            period: "Jan 2020 – July 2020",
            location: "Greater Noida, India",
            points: [
                "Developed 12+ REST API endpoints using Java, Spring Boot, and MySQL; built responsive Angular UI components with serverless AWS Lambda event triggers.",
                "Assisted in developing business platforms for dealers with a focus on secure transaction handling and process model mapping."
            ],
            tech: ["Java", "Spring Boot", "JPA/Hibernate", "MySQL", "AWS Lambda", "Angular", "Golang"]
        }
    ],

    projects: [
        {
            title: "EV CHARGING BACKEND & INTEGRATION PLATFORM",
            description: "PROBLEM: Distributed EV charging networks suffered from contract data collisions, slow multi-hour crunch jobs, and unmonitored charging session states. SOLUTION: Designed HLD/LLD for Go microservices using gRPC/Protobuf, automated S3-to-DB cron ingestion, OCPI-based CPO integrations, and Prometheus/Grafana observability. RESULT: Halved data crunch time by 50% (6h to 3h), cut cron runtime to 20m, eliminated location contract collisions, and enabled real-time dual-tariff tracking.",
            period: "Nov 2024 – Present",
            tech: ["Golang", "gRPC", "Protobuf", "AWS", "Prometheus", "Grafana", "Kubernetes", "Docker", "MySQL"],
            link: "#contact"
        },
        {
            title: "HEALTHCARE CLOUD MIGRATION & BACKEND SERVICES",
            description: "PROBLEM: High-compliance healthcare data was siloed in legacy architectures, requiring complex database transformations and zero-downtime migration. SOLUTION: Engineered automated ETL pipelines and modular REST microservices in Go using Gorilla/Mux, GORM, and MongoDB with Testify test mocking. RESULT: Migrated 200K+ healthcare records to AWS with 100% cloud deployment uptime, improved code test coverage, and automated deployment via GitLab CI & Harness.",
            period: "2022 – 2024",
            tech: ["Golang", "REST APIs", "Gorilla/Mux", "GORM", "MongoDB", "AWS", "Docker", "Testify", "Harness"],
            link: "#contact"
        },
        {
            title: "BANKING TRANSACTION & LEDGER PROCESSING PLATFORM",
            description: "PROBLEM: Monolithic ledger systems caused processing bottlenecks and SLA delays across high-volume retail financial branches. SOLUTION: Engineered core transaction and ledger engines with asynchronous task prioritization and SLA queue frameworks using Go, Java/Spring Boot, and AWS serverless (Lambda, DynamoDB). RESULT: Scaled transaction processing across 150+ retail branches, reduced service latency by 40%, and achieved high fault-tolerance with zero ledger sync discrepancies.",
            period: "2020 – 2022",
            tech: ["Golang", "Java", "Spring Boot", "AWS Lambda", "DynamoDB", "REST APIs", "SQL", "MySQL"],
            link: "#contact"
        }
    ],

    certifications: [
        {
            title: "Introduction to Agent Skills",
            organization: "Anthropic",
            date: "Apr 2026",
            id: "4zqrekkkin72",
            icon: "AI"
        },
        {
            title: "Claude 101",
            organization: "Anthropic",
            date: "Mar 2026",
            id: "r8ecinarynyv",
            icon: "AI"
        },
        {
            title: "AI Tools Workshop",
            organization: "Be10x",
            date: "Apr 2026",
            id: "0270772f-3b09-4400-b29b-1e1c61cd09971254056",
            icon: "AI"
        },
        {
            title: "Basics of Golang",
            organization: "HackerRank",
            date: "2024",
            id: "HACKERRANK_VALIDATED",
            icon: "GO"
        },
        {
            title: "Blockchain with Go",
            organization: "Udemy",
            date: "Aug 2023",
            id: "UC-bc032d37-524c-40bd-9388-5420b4e0295b",
            icon: "GO"
        },
        {
            title: "Spring Framework & Spring Boot",
            organization: "Udemy",
            date: "Jun 2020",
            id: "UC-00e1b612-b959-4920-9ef7-7b83b210d750",
            icon: "JAVA"
        },
        {
            title: "Introduction of MongoDB",
            organization: "Udemy",
            date: "Apr 2023",
            id: "UC-bd01facc-c884-4958-86fb-71f7a44bb867",
            icon: "DB"
        },
        {
            title: "GO Professional Certification",
            organization: "Sololearn",
            date: "May 2022",
            id: "SOLOLEARN_GO",
            icon: "GO"
        },
        {
            title: "Node Js and Express",
            organization: "Udemy",
            date: "Mar 2021",
            id: "UDEMY_NODE",
            icon: "JS"
        },
        {
            title: "Java Core",
            organization: "Udemy",
            date: "Jun 2019",
            id: "UC-VZ4Z5PYE",
            icon: "JAVA"
        },
        {
            title: "Python-Django",
            organization: "Tech Explica",
            date: "Jul 2018",
            id: "EXPLICATE_PY",
            icon: "PY"
        },
        {
            title: "J2EE Development",
            organization: "Surjan Singh Memorial Society",
            date: "Jul 2016",
            id: "J2EE_PROFESSIONAL",
            icon: "JAVA"
        }
    ]
};
