export const CONTENT = {
    bio: "Senior Software Engineer with 5.2+ years of experience in developing high-end back-end cloud applications and services. Specializing in Golang, Distributed Systems, and Microservices Architecture with a focus on high-scale enterprise transformations.",
    
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
                "Leading the transformation of legacy distributed systems into high-performance Golang microservices.",
                "Increased internal system stability by improving unit test coverage from 45% to 85% through gRPC mock isolation.",
                "Automated deployment workflows via ADO pipelines, reducing manual release overhead by ~40%.",
                "Optimizing high-concurrency layers for low-latency synchronization across [N] cloud regions."
            ],
            tech: ["Golang", "gRPC", "MySql", "Node.js", "Kubernetes", "ADO"]
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
                "Streamlined CI/CD using GitLab and Harness, achieving significantly faster builds for core healthcare modules."
            ],
            tech: ["Golang", "GitLab", "Gorilla/Mux", "MongoDB", "Gorm", "Harness"]
        },
        {
            company: "COFORGE",
            role: "Senior Software Engineer",
            period: "July 2020 – Nov 2022",
            location: "G.Noida, India",
            points: [
                "Engineered a digital platform for pawn-broking dealers, processing over [X]k transactions daily with 99.9% availability.",
                "Architected a scalable Task Prioritization and SLA framework that reduced business process bottlenecks.",
                "Optimized backend flows for global stakeholders using AWS Lambda and DynamoDB for event-driven processing."
            ],
            tech: ["Golang", "Echo", "TypeScript", "AWS", "DynamoDB", "Java", "Spring Boot"]
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
            tech: ["Java", "Spring Boot", "JPA", "MySql", "Golang", "AWS"]
        }
    ],

    projects: [
        {
            title: "BANKING SYSTEM MICROSERVICES",
            description: "High-scale fintech platform for Coforge. Project features event-driven architecture and real-time ledger sync. Implementation details available on request.",
            period: "2021 – 2022",
            tech: ["Golang", "Echo", "AWS DynamoDB", "Lambda"],
            link: "#request-intel"
        },
        {
            title: "HEALTHCARE CLOUD MIGRATION",
            description: "Global healthcare platform transformation (Accenture engagement). Achieved 100% cloud uptime during migration of millions of records.",
            period: "2022 – 2024",
            tech: ["Golang", "MongoDB", "Gorm", "Gorilla/Mux"],
            link: "#request-intel"
        },
        {
            title: "JOBSEEKERS-STOPS",
            description: "A comprehensive dashboard for recruiters and job seekers to manage job postings and profile tracking with full CRUD operations. (Training Project)",
            period: "2020",
            tech: ["Java", "Spring Boot", "JPA", "MySql", "Angular"],
            link: "https://github.com/deepanshu102/Jobseekers-Stops"
        }
    ]
};
