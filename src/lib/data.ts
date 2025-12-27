import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const SITE_CONFIG = {
    name: "Sai Kumar Reddy",
    title: "Senior Full Stack Java Developer",
    email: "saireddyputha1@gmail.com",
    phone: "+1(602) 842-8825",
    location: "Phoenix, Arizona",
    socials: {
        linkedin: "https://www.linkedin.com/in/saireddyputha1/",
        github: "https://github.com/", // Placeholder
    },
};

export const NAV_LINKS = [
    { label: "Home", href: "#hero" },
    { label: "Impact", href: "#impact" },
    { label: "Why Sai?", href: "#why-hire-sai" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
    headline: "Senior Full Stack Java Developer",
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
        "Started as a Software Developer building enterprise microservices. Led the transition from monolithic architecture to event-driven microservices, handling 100K+ concurrent users. Now at Nutrisystem as Sr. Backend Engineer, building payment systems and meal planning APIs.",
        "My sweet spot: taking complex distributed systems and making them faster, more resilient, and easier to operate. Microservices, event-driven architecture, and cloud-native design are my core strengths. But I don't stop at backend—I deliver full-stack solutions with React/Next.js frontend expertise.",
        "I believe in clean architecture, measurable performance, and observable systems. Code isn't done until it's monitored, tested, and documented. Great engineers lift up their teams.",
        "Recently completed Master's in Computing and Information Systems. Pursuing AWS Solutions Architect certification. Always learning—currently exploring Go for microservices and Spring AI.",
    ],
    achievements: [
        { text: "Built 100K+ user systems", icon: "🚀" },
        { text: "Optimized APIs to <200ms response time", icon: "📉" },
        { text: "Led monolith→microservices migration", icon: "🔄" },
        { text: "Handled $2M+ annual transaction volume", icon: "💰" },
        { text: "Mentored junior engineers in system design", icon: "👥" },
    ],
};

export const EDUCATION = [
    {
        degree: "Master of Computing and Information Systems",
        school: "Youngstown State University",
        dates: "Jan 2023 – Dec 2024",
        details: ["Distributed Systems & Cloud Computing", "Advanced Database Design", "Microservices Architecture", "Security & Cryptography"],
        gpa: "3.7+", // Placeholder based on prompt hint
    },
    {
        degree: "Bachelor of Engineering",
        school: "Lovely Professional University",
        dates: "Aug 2014 – Jun 2018",
        focus: "Computer Science / Software Engineering",
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
        role: "Sr. Java Backend Developer",
        company: "Nutrisystem",
        dates: "Jan 2025 – Present",
        metrics: [
            { text: "100K+ Concurrent Users", subtext: "Handled in production" },
            { text: "<200ms API Response Time", subtext: "Under high load" },
            { text: "$2M+ GMV Processed Annually", subtext: "Zero Payment Failures" },
            { text: "60% Cache Hit Ratio", subtext: "Via Redis optimization" },
        ],
        achievements: [
            "Built scalable RESTful microservices (Java 17, Spring Boot) for product catalog, meal plans, and subscription workflows.",
            "Integrated payment gateways (Braintree, SVS Gift Card) with zero transaction failures and PCI-DSS compliance.",
            "Optimized API performance using Redis caching strategy reducing database load by 60% and response times to <200ms.",
            "Designed JWT-based authentication and role-based authorization using Spring Security, securing 100K+ user accounts.",
            "Implemented async job processing for order management and subscription renewals using Spring Async.",
            "Built AWS S3 integration for customer review data processing supporting internal analytics and reporting.",
            "Wrote comprehensive unit and integration tests (JUnit, Mockito, Spring Test) maintaining 85%+ code coverage.",
            "Monitored application behavior using AWS CloudWatch assisting in debugging and incident resolution.",
        ],
        tech: ["Java 17", "Spring Boot", "REST APIs", "Spring Security", "JWT", "Oracle DB", "Redis", "AWS", "Jenkins", "SonarQube"],
    },
    {
        role: "Software Developer",
        company: "Wipro",
        dates: "Jun 2018 – Dec 2022",
        metrics: [
            { text: "60% ↓ Deployment Time", subtext: "Monolith → Microservices" },
            { text: "1000s/sec Event Processing", subtext: "Via Kafka" },
            { text: "40% ↓ Data Transfer", subtext: "Via GraphQL" },
            { text: "<100ms Latency", subtext: "End-to-end" },
        ],
        achievements: [
            "Architected and built event-driven microservices using Spring Boot with RESTful and GraphQL APIs.",
            "Led migration of monolithic application to microservices architecture reducing deployment time by 60%.",
            "Implemented Apache Kafka for asynchronous communication processing 1000s of events per second with <100ms latency.",
            "Built data migration and synchronization pipelines using Oracle, GoldenGate, and Kafka.",
            "Developed full-stack features: React.js/Redux/TypeScript frontend + Java backend.",
            "Optimized backend performance through JPA/Hibernate query tuning and multithreading.",
            "Implemented CI/CD pipelines using Jenkins and GitHub Actions in Agile environment.",
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

//export const CERTIFICATIONS = [
//{ name: "[Certification Name]", status: "Completed", year: "2024" },
//  { name: "AWS Solutions Architect Associate", status: "Completed", expected: "Q2 2025" },
//{ name: "Spring Certified Associate Java Programmer", status: "In Progress", expected: "Q1 2025" },
//];
