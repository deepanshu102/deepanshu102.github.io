export const CONTENT = {
    bio: "Senior Software Engineer with 5.2+ years of experience in developing high-end back-end cloud applications and services. Specializing in Golang, Distributed Systems, and Microservices Architecture with a focus on high-scale enterprise transformations.",
    
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
            location: "Pune, India",
            points: [
                "Architecting a hybrid Macro-service model and transitioning from distributed microservices to a modular macro-service architecture to reduce operational overhead at current scale.",
                "Leading the pragmatic consolidation of distributed components to reduce operational costs by ~25% through resource sharing.",
                "Increased internal system stability by improving unit test coverage from 45% to 85% through gRPC mock isolation.",
                "Automated deployment workflows via ADO pipelines, reducing manual release overhead by ~40%."
            ],
            tech: ["Golang", "gRPC", "MySQL", "Node.js", "Kubernetes", "ADO"]
        },
        {
            company: "ASCENDION ENGINEERING",
            role: "Software Engineer (Accenture Engagement)",
            period: "Nov 2022 – Oct 2024",
            location: "Bangalore, India",
            points: [
                "Successfully migrated a global healthcare product from a classic monolith to a cloud-native architecture.",
                "Managed a complex database transformation involving 100+ tables and millions of records with 100% cloud deployment uptime.",
                "Established a robust testing framework with Testify, serving as the gold standard for all subsequent service migrations.",
                "Streamlined CI/CD using GitLab and Harness, implementing blue-green deployment strategies that reduced rollback time from hours to minutes.",
            ],
            tech: ["Golang", "GitLab", "Gorilla/Mux", "MongoDB", "Gorm", "Harness"]
        },
        {
            company: "COFORGE",
            role: "Senior Software Engineer",
            period: "July 2020 – Nov 2022",
            location: "G.Noida, India",
            points: [
                "Architected a Banking Audit System that processed 1M+ transactions daily using a Microservices mesh, improving data integrity by 30%.",
                "Built an API caching layer using Go and Redis that reduced service latency by 40% for high-traffic endpoints.",
                "Engineered a digital platform for pawn-broking dealers with a Task Prioritization and SLA framework that eliminated process bottlenecks.",
                "Optimized backend flows for global stakeholders using AWS Lambda and DynamoDB for event-driven processing."
            ],
            tech: ["Golang", "Echo", "Redis", "AWS", "DynamoDB", "Java", "Spring Boot", "MySQL"]
        },
        {
            company: "NIIT TECHNOLOGIES",
            role: "Trainee Java Developer",
            period: "Jan 2020 – July 2020",
            location: "G.Noida, India",
            points: [
                "Assisted in developing business platforms for pawn-broking dealers with a focus on secure transaction handling.",
                "Developed documentation templates for process model mapping to improve onboarding efficiency."
            ],
            tech: ["Java", "Spring Boot", "JPA", "MySQL", "Golang", "AWS"]
        }
    ],

    projects: [
        {
            title: "BANKING SYSTEM MICROSERVICES",
            description: "PROBLEM: Legacy monolithic ledger systems caused high latency and data sync issues. SOLUTION: Architected an event-driven microservices mesh with Go, Redis caching, and real-time ledger sync. RESULT: Reduced API latency by 40% while processing 1M daily transactions with 30% improved data integrity.",
            period: "2021 – 2022",
            tech: ["Golang", "Echo Server", "Redis", "AWS DynamoDB", "Lambda"],
            link: "#contact"
        },
        {
            title: "HEALTHCARE CLOUD MIGRATION",
            description: "PROBLEM: High-compliance healthcare data was locked in legacy on-prem servers. SOLUTION: Engineered a zero-downtime migration pipeline to AWS using MongoDB and Gorm. RESULT: Successfully transformed millions of records with 100% cloud deployment uptime and HIPAA-compliant data isolation.",
            period: "2022 – 2024",
            tech: ["Golang", "MongoDB", "Gorm", "Gorilla/Mux"],
            link: "#contact"
        },
        {
            title: "ECOMMERCE BACKEND CONSOLIDATION",
            description: "PROBLEM: Distributed components caused high operational overhead and inter-service latency. SOLUTION: Consolidated services into a hybrid Macro-service model with Redis caching. RESULT: Lowered infrastructure costs by 25% and reduced inter-service overhead.",
            period: "2024",
            tech: ["Golang", "Redis", "gRPC", "Kubernetes"],
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
