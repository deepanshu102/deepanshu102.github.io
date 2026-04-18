/**
 * Portfolio v2.0 - Content Data
 * Sourced from extracted_resume.txt
 */

export const CONTENT = {
    bio: "Senior Software Engineer with 5.2+ years of experience in developing high-end back-end cloud applications and services. Experienced in developing server-less/DDD architecture applications using Golang, Docker, gRPC, and AWS services.",
    
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
                "Creating design documents for existing system transformation.",
                "Implementing methodologies for cloud product migration.",
                "Increased code coverage through mock test-case implementation.",
                "Deployed systems using ADO pipeline tools."
            ],
            tech: ["Golang", "gRPC", "MySql", "Node.js", "Kubernetes", "ADO"]
        },
        {
            company: "ASCENDION ENGINEERING",
            role: "Engineer",
            period: "Nov 2022 – Oct 2024",
            location: "Bangalore, India",
            points: [
                "Transformed healthcare product from classic to cloud platform.",
                "Implemented methodologies for existing product on cloud.",
                "Increased code coverage and database connectivity testing.",
                "Deployed systems using GitLab and Harness pipeline tools."
            ],
            tech: ["Golang", "GitLab", "Gorilla/Mux", "MongoDB", "Gorm", "Testify"]
        },
        {
            company: "COFORGE",
            role: "Senior Software Engineer",
            period: "July 2020 – Nov 2022",
            location: "G.Noida, India",
            points: [
                "Developed platform for pawn broking dealers.",
                "Implemented Task prioritization and SLA framework.",
                "Integrated AWS Lambda and DynamoDB for backend flows."
            ],
            tech: ["Golang", "Echo", "TypeScript", "AWS", "DynamoDB", "Java", "Spring Boot"]
        },
        {
            company: "NIIT TECHNOLOGIES",
            role: "Trainee Java Developer",
            period: "Jan 2020 – July 2020",
            location: "G.Noida, India",
            points: [
                "Assisted in developing business platforms for pawn broking.",
                "Created documentation templates for process model mapping."
            ],
            tech: ["Java", "Spring Boot", "JPA", "MySql", "Angular", "AWS"]
        }
    ],

    projects: [
        {
            title: "JOBSEEKERS-STOPS",
            description: "A comprehensive dashboard for recruiters and job seekers to manage job postings, applications, and profile tracking with full CRUD operations.",
            period: "Jan 2020 – Apr 2020",
            tech: ["Java", "Spring Boot", "JPA", "MySql", "Angular"],
            link: "https://github.com/deepanshu102"
        },
        {
            title: "E-COMMERCE IMPRINT",
            description: "E-commerce platform for seamless order processing, transaction management, and dynamic category expansion for Admin users.",
            period: "May 2019 – July 2019",
            tech: ["Java", "Spring Boot", "MySql", "Golang", "AWS"],
            link: "https://github.com/deepanshu102"
        },
        {
            title: "SPARSH ACCUPUNCTURE",
            description: "Interactive learning platform for practitioners. Features body diagram marking and health benefit tracking for registered users.",
            period: "June 2018 – Dec 2018",
            tech: ["Python", "Django", "MySql"],
            link: "https://github.com/deepanshu102"
        }
    ]
};
