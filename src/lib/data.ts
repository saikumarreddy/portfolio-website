import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const SITE_CONFIG = {
    name: "Sai Reddy",
    title: "Full Stack Java Developer",
    email: "saireddyputha1@gmail.com",
    phone: "+1(602) 842-8825",
    socials: {
        linkedin: "https://www.linkedin.com/in/saireddyputha1/",
        github: "https://github.com/saikumarreddy",
    },
    url: "https://saireddy.dev",
};

export const NAV_LINKS = [

    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
    headline: "Full Stack Java Developer",
    intro: "I design and build scalable distributed systems that handle 100K+ concurrent users. Specializing in microservices, event-driven architecture, and cloud-native solutions. Currently building payment systems at Nutrisystem.",
    ctas: {
        primary: "View My Latest Work",
        downloadResume: "Download Resume",
    }
};

export const IMPACT_METRICS = [
    { value: "100K+", label: "Concurrent Users Handled", icon: "user-group" },
    { value: "70% ↓", label: "MTTD (Incident Response)", icon: "activity" },
    { value: "$2M+", label: "GMV Processed Annually", icon: "currency-dollar" },
    { value: "1000s/sec", label: "Events via Kafka", icon: "lightning-bolt" }
];

export const WHY_HIRE_SAI = [
    {
        title: "FULL-STACK ENGINEERING",
        description: "I don't just build backends—I design end-to-end systems. Proven ability to take monolithic applications and scale them to microservices handling 100K+ concurrent users while reducing deployment time by 60%.",
        icon: "building",
    },
    {
        title: "PERFORMANCE & SCALE",
        description: "Experience optimizing distributed systems at scale: APIs responding in <200ms under high load, event streaming systems processing 1000s of events/second, and Redis caching strategies cutting database load by 60%.",
        icon: "server",
    },
    {
        title: "EVENT-DRIVEN & RESILIENT",
        description: "Built resilient async systems using Kafka, RabbitMQ, and Spring Async. Decoupled microservices with independent scaling, payment systems processing $2M+ GMV annually with zero failures.",
        icon: "refresh",
    },
    {
        title: "PROVEN LEADERSHIP",
        description: "More than just an engineer—a mentor and technical lead. Led teams of 3-5 engineers in Agile/Scrum environments, mentored junior engineers, and drove technical strategy.",
        icon: "users",
    },
    {
        title: "CLOUD-NATIVE MINDSET",
        description: "AWS expert who thinks in containers, serverless, and managed services. Kubernetes orchestration for production workloads, Lambda functions, API Gateway, and cost optimization.",
        icon: "cloud",
    },
    {
        title: "QUALITY OBSESSED",
        description: "High test coverage, monitoring, and observability. Unit + integration testing (JUnit, Mockito), structured logging, Prometheus/Grafana metrics, and SonarQube code quality.",
        icon: "shield-check",
    },
];

export const ABOUT_CONTENT = {
    narrative: [
        "Started as a Software Developer building enterprise backend systems. Led the transition from monolithic architecture to event-driven microservices, handling 100K+ concurrent users. Now at Nutrisystem as Sr. Backend Engineer, building payment systems and meal planning APIs.",
        "My sweet spot: taking complex distributed systems and making them faster, more resilient, and easier to operate. Microservices, event-driven architecture, and cloud-native design are my core strengths. But I don't stop at backend—I deliver full-stack solutions with React/Next.js frontend expertise.",
        "I believe in clean architecture, measurable performance, and observable systems. Code isn't done until it's monitored, tested, and documented. Great engineers lift up their teams.",
        "Pursuing AWS Solutions Architect certification. Always learning—currently exploring Go for microservices and Spring AI.",
    ]
};

export const EDUCATION = [
    {
        degree: "Master of Computing and Information Systems",
        school: "Youngstown State University",
        dates: "Jan 2023 – Dec 2024",
        details: ["Distributed Systems & Cloud Computing", "Advanced Database Design", "Microservices Architecture", "Security"],
        gpa: "4.0",
    },
    {
        degree: "Bachelor of Engineering",
        school: "Lovely Professional University",
        dates: "Aug 2014 – Jun 2018",
        focus: "Software Engineering",
        details: ["Data Structures & Algorithms", "Database Management", "Software Engineering", "Web Development"],
    },
];

export const TECH_STACK = {
    backend: ["Java 17", "Java 11", "Spring Boot", "Spring Cloud", "Spring Security", "Spring Data JPA", "Hibernate", "Design Patterns", "Multithreading", "Stream API"],
    frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Hooks", "HTML5", "CSS3", "Responsive Design"],
    database: ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "Cassandra", "Redis", "DynamoDB", "AWS RDS"],
    api: ["REST APIs", "GraphQL", "Swagger/OpenAPI", "Apache Kafka", "RabbitMQ", "Async Processing"],
    cloud: ["AWS EC2", "S3", "RDS", "Lambda", "API Gateway", "CloudWatch", "SQS", "ECS", "Docker", "Kubernetes", "VPC", "IAM"],
    devops: ["Jenkins", "Maven", "Gradle", "GitHub Actions", "Git/GitHub", "Infrastructure as Code", "SonarQube"],
    monitoring: ["Prometheus", "Grafana", "ELK Stack", "Splunk", "AWS CloudWatch", "Log4j", "SLF4J"],
    testing: ["JUnit", "Mockito", "Jest", "Selenium", "Postman", "JMeter", "Integration Testing", "TDD"],
};

export const PROFESSIONAL_EXPERIENCE = [
    {
        role: "Java Backend Developer",
        company: "Nutrisystem",
        dates: "Jan 2025 – Present",
        metrics: [
            { text: "100K+ Concurrent Users", subtext: "System throughput optimized" },
            { text: "<200ms API Response", subtext: "P99 latency reduction" },
            { text: "$2M+ GMV Annually", subtext: "Secure payment processing" },
            { text: "60% Cache Hit Ratio", subtext: "Redis-driven performance" },
        ],
        achievements: [
            "Leading the development of highly scalable microservices for meal planning and subscription-based payment systems.",
            "Optimizing distributed systems performance using Redis caching and database query tuning to achieve <200ms P95 latency.",
            "Architecting secure and PCI-DSS compliant payment processing flows handling over $2M in annual GMV.",
            "Collaborating with cross-functional teams to drive technical strategy and improve system observability using ELK stack."
        ],
        tech: ["Java 17", "Spring Boot", "REST APIs", "Spring Security", "JWT", "Oracle DB", "Redis", "AWS", "Jenkins", "SonarQube"],
    },
    {
        role: "Software Developer",
        company: "Wipro",
        dates: "Jun 2018 – Dec 2022",
        metrics: [
            { text: "60% ↑ Deployment Frequency", subtext: "Monolith → Microservices" },
            { text: "1000s events/sec", subtext: "High-volume Kafka streams" },
            { text: "40% resource savings", subtext: "GraphQL query optimization" },
            { text: "Zero Downtime", subtext: "Resilient systems design" },
        ],
        achievements: [
            "Spearheaded the migration of legacy monolithic applications to event-driven microservices architecture using Spring Cloud and Kafka.",
            "Implemented real-time data streaming solutions processing thousands of events per second with Apache Kafka.",
            "Reduced data transfer overhead by 40% through the implementation of a GraphQL API Gateway.",
            "Automated CI/CD pipelines using Jenkins and Docker, reducing deployment cycle time from days to minutes."
        ],
        tech: ["Java 8/11", "Spring Boot", "Spring Cloud", "Kafka", "RabbitMQ", "Oracle", "MongoDB", "React.js", "Redux", "Docker", "AWS", "Jenkins"],
    },
];

export const FEATURED_PROJECT = {
    title: "Nutrisystem Meal Planning & Payment Platform",
    metrics: [
        "100K+ concurrent users",
        "<200ms API response time",
        "$2M+ GMV processed annually",
        "Zero payment failure rate",
    ],
    description: "Scalable microservices architecture for Nutrisystem's meal planning, product recommendations, and subscription payment systems. The system handles 100K+ concurrent users with <200ms API response times while processing $2M+ in transactions annually.",
    details: {
        architecture: ["Microservices design", "RESTful APIs", "Async job processing", "Event-driven subscription renewals"],
        security: ["JWT-based authentication", "Role-based authorization (RBAC)", "PCI-DSS compliant", "Zero payment failures"],
        performance: ["Redis caching", "Cache hit ratio 60%+", "Database query optimization", "<200ms P95 latency"],
    },
    tech: ["Java 17", "Spring Boot", "Spring Security", "REST APIs", "Oracle", "Redis", "AWS"],
};

export const OTHER_PROJECTS = [
    {
        title: "Microservices Migration & Event-Driven Architecture",
        impact: "60% ↓ deployment time | 1000s events/sec via Kafka",
        tech: "Java 11 | Spring Boot | Kafka | Kubernetes",
    },
    {
        title: "Full-Stack E-Commerce Platform",
        impact: "End-to-end platform demonstrating full-stack expertise",
        tech: "Java 17 | Next.js | TypeScript | PostgreSQL",
    },
    {
        title: "Real-Time Analytics Dashboard",
        impact: "70% ↓ incident response time (MTTD)",
        tech: "Java | Prometheus | Grafana | React.js",
    },
    {
        title: "GraphQL API Gateway",
        impact: "40% ↓ data transfer | Improved developer experience",
        tech: "Java | Spring Boot | GraphQL Java",
    },
];
