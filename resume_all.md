# Alan Kydd — Master Resume Source

> Combined from `resume_v2.tex` (fullstack) and `resume_backend.tex` (backend).
> Use this file as the basis for tailored resumes. Bullets tagged `[backend]`, `[fullstack]`, or `[devops]` indicate primary relevance; untagged bullets are broadly applicable.

---

## Summary Options

**Fullstack:**
Senior Software Engineer with 18 years of experience designing and building backend systems and scalable web applications in startups and large organizations. Specialized in Go, APIs, and cloud-based infrastructure, with strong experience building scalable services and internal tools that improve operational efficiency. Recent work includes leading backend development for major features in a SaaS platform, integrating Google Workspace and AWS infrastructure, and developing internal systems enabling non-engineers to manage complex workflows.

**Backend:**
Senior Backend Engineer with 18 years of experience building distributed systems, APIs, and cloud-native platforms. Specialized in Go, event-driven architectures, and asynchronous processing with a focus on reliability and scalability.

---

## Key Skills

- **Languages:** Go, TypeScript, Clojure, SQL
- **Backend:** Go, GraphQL, REST APIs, microservices, Clojure
- **Systems:** Distributed systems, event-driven architecture, async processing, concurrency `[backend]`
- **Frontend:** React, Redux, TypeScript, ClojureScript `[fullstack]`
- **Tools:** Claude Code, Git, GitHub Actions, CircleCI, New Relic, Grafana, Zipkin, Splunk
- **Infrastructure:** AWS (S3, CloudFront, ACM, ECS Fargate, RDS, ALB, Lambda, API Gateway, DynamoDB, IAM, Bedrock), Terraform, Kubernetes, Helm, Docker, Apache Kafka
- **Databases:** PostgreSQL, MySQL, MongoDB, Cassandra, ElasticSearch, Redis
- **Other:** Stripe, Adyen, Google Workspace

---

## Experience

### Senior Fullstack Engineer — Looka, Toronto, Ontario (10/2022–09/2025)
*Laid off due to company-wide reduction in force. Fully remote from Alberta; company HQ in Toronto with a mostly distributed team.*

- Acted as tech lead for two major customer-facing platform features — partnered with Product owners to define and sequence releases, drove technical decisions, and owned end-to-end delivery including cross-team API contract design with front-end contractors, PostgreSQL schema and table design, custom SQL queries, and distributed workflow orchestration. `[backend]`
- Led backend architecture and implementation (Go, GraphQL) for two major customer-facing features in Looka's flagship SaaS platform. `[fullstack]`
  - **Google Workspace Reseller integration** adopted by ~850 customers: coordinated Stripe billing, Google APIs, and Pub/Sub events to drive a multi-step provisioning lifecycle in an event-driven architecture, allowing customers to purchase and manage subscriptions directly within Looka. Integrated Google Places Autocomplete for address validation, reducing incomplete-address Customer Support issues from several per week to several per month. `[backend]`
  - **AWS-based website hosting platform:** orchestrated provisioning across S3, CloudFront, ACM, IAM, and an external domain registrar, enabling users to deploy branded websites. Structured the system to balance scalability, reliability, and operational simplicity across multiple external dependencies. `[backend][devops]`
  - Both features introduced new Stripe checkout flows; Redis-backed session state ensured in-progress checkouts were not disrupted during rolling deployments. `[backend]`
- Designed and implemented a shared asynchronous job processing system to handle long-running provisioning workflows spanning minutes to days, decoupling external integrations from request/response cycles. Implemented concurrency control, retry strategies with exponential backoff, and failure recovery, improving system reliability, scalability, and user experience. `[backend]`
- Engineered internal observability and operational tooling (SQL and TypeScript-based) to surface job state, failures, and system health, enabling the 5-person Customer Support team to independently diagnose issues and reducing engineering escalations. `[backend][devops]`
- Developed TypeScript automation tools for the Customer Support team, reducing engineering involvement in support cases and improving ticket resolution speed. `[fullstack]`
- Managed Kubernetes cluster operations: container configuration, Helm chart deployments, node lifecycle management, and secrets management. `[devops]`
- Maintained CI/CD pipelines (CircleCI) for automated testing and reliable deployments. `[devops]`
- Participated in on-call rotation, using New Relic and ElasticSearch for production cluster monitoring, log querying, and incident triage. `[devops]`
- Maintained continuous availability as an implicit SLO: enforced zero-downtime deployments and live database migrations across all production releases using rolling deploys and backward-compatible schema changes. `[devops]`
- Authored Makefile targets to simplify applying and rolling back versioned database migrations in local developer environments, reducing setup friction and onboarding time for the engineering team. `[devops]`
- Mentored junior engineers through code reviews, pair programming, and architectural discussions.
- Wrote unit and end-to-end tests across backend services and frontend components; authored technical documentation for APIs, system architecture, and operational runbooks.
- Implemented a drop-shadow feature for Looka's SVG-based graphic editor, working with the MySQL-backed design storage layer to persist and retrieve design state. `[fullstack]`

---

### Senior Software Engineer — Betable, Edmonton, Alberta (09/2021–10/2022)

- Contributed to an Adyen payment integration in a high-availability distributed system processing thousands of real-money transactions per day for licensed casino operators; implemented a Go microservice with a focus on reliability and correctness under financial and regulatory constraints; included Angular and React frontends. `[backend][fullstack]`
- Designed and delivered a backend-driven system (Go + REST APIs) and supporting React/Redux application for managing third-party online casino game integrations, replacing a manual engineering workflow and enabling non-engineers to operate deployments independently, saving ~20 hours of engineering time per month. `[backend][fullstack]`
- Defined service boundaries and backend workflows to support safe rollout and lifecycle management of externally integrated systems in a Cassandra (NoSQL) backed microservices architecture, improving operational scalability and reducing engineering involvement. `[backend]`
- Participated in on-call rotation (Grafana, ElasticSearch, Zipkin) on a UKGC-regulated real-money gaming platform where outages had immediate financial impact; used Zipkin for distributed request tracing across microservices, correlating requests by unique IDs to diagnose cross-service failures; maintained continuous availability through rolling deploys and zero-downtime schema migrations. `[devops]`
- Delivered compliance-driven features and operational policy changes in response to evolving UKGC regulatory requirements, translating mandates directly into production code. `[backend]`
- Mentored junior engineers through code reviews and technical guidance.
- Wrote unit and end-to-end tests; maintained technical documentation for services and APIs.

---

### Software Engineer — Betable, Edmonton, Alberta (01/2016–09/2021)

- Developed backend services and internal tooling to support marketing workflows (promotions, bonuses, and offers), enabling non-technical teams to manage configuration and scheduling without engineering intervention. `[backend]`
- Developed internal marketing tools enabling non-technical teams to create, edit, and schedule promotions, bonuses, and game offers. `[fullstack]`
- Implemented Go-based backend components alongside React/Redux front-end systems in a Cassandra (NoSQL) backed microservices architecture, contributing to the evolution toward a more service-oriented design. `[fullstack][backend]`
- Wrote unit and end-to-end tests; maintained technical documentation for services and internal tools.

---

### Developer — Gamesys Canada, Edmonton, Alberta (08/2013–10/2015)
*Laid off due to company restructuring.*

- Built a Backbone.js single-page application for managing online poker tournaments, communicating with an event-driven microservice backend using Apache Kafka; poker-hand records stored in MongoDB (NoSQL); used Splunk for distributed log correlation and request tracing across services. `[fullstack][backend]`
- Contributed to a GWT analytics application used to investigate poker game fraud and analyze player win/loss data. `[fullstack]`
- Wrote unit and end-to-end tests; maintained technical documentation for developed features.

---

### Developer — CGI Canada, Edmonton, Alberta (10/2011–08/2013)

- Developed enhancements for two public-sector Java EE web applications. `[fullstack]`
- Wrote unit and end-to-end tests; maintained technical documentation for developed features.

---

### IT Specialist — IBM Canada, Edmonton, Alberta (03/2007–09/2011)

- Delivered 30+ enhancements and production fixes for public-sector Java EE systems, including eHealth Saskatchewan's Pharmaceutical Information Program. `[fullstack]`
- Wrote unit and end-to-end tests; maintained technical documentation for developed features.

---

### Junior Developer — ShirWin Knowledge and Learning Inc., Edmonton, Alberta (01/2007–03/2007)

- Implemented a real-time chat system and UI components for a systematic review web application. `[fullstack]`

---

## Selected Systems & Backend Projects

### AI-assisted anomaly classification using AWS Bedrock (Claude)
https://github.com/akydd/log-anomale-detector

- Serverless, event-driven log processing system: simulates HTTP access logs, injects anomalous traffic, classifies anomalies in real time via AWS Bedrock (Claude), and delivers alerts via SNS. `[backend][devops]`
- Stack: Lambda (serverless compute), API Gateway (authenticated endpoints), DynamoDB (low-latency log storage), S3 (dashboard hosting), Terraform (infrastructure provisioning). `[devops]`
- Built a cloud-based log anomaly detection system using Go and AWS, processing application logs to identify unusual patterns and surface potential issues. Designed as a distributed pipeline with infrastructure provisioned via Terraform. Emphasizes observability, scalability, and real-world monitoring use cases. `[backend]`

### AWS Cloud-Deployed Go Backend (RealWorld API)
https://github.com/akydd/realworld-backend-go

- RealWorld backend API in Go using hexagonal architecture, keeping business logic fully decoupled from infrastructure. `[backend]`
- Deployed to ECS Fargate behind an ALB for high availability and zero-downtime rolling deploys; Application Auto Scaling adjusts task count under load. `[devops]`
- RDS PostgreSQL in private subnets; secrets in AWS Secrets Manager (never in source control or CI). `[devops]`
- CI/CD via GitHub Actions with OIDC-based AWS authentication — no long-lived credentials in the pipeline. `[devops]`
- Observability via CloudWatch alarms and SNS alerts covering ECS, RDS, and ALB metrics. `[devops]`
- Developed using a spec-driven workflow with Claude Code: features written as plain-English specifications, then implemented and verified against the full Hurl integration test suite. `[backend]`

### RealWorld Clojure API
https://github.com/akydd/realworld-clojure

- Production-style REST API implementing the RealWorld spec in Clojure, applying functional design principles and idiomatic patterns. `[backend]`
- Demonstrates backend architecture, JWT authentication flows, and practical Clojure in real-world service development. `[backend]`

---

## Education

- **Master of Science** — University of Alberta, Edmonton — Pure Mathematics (2005)
- **Bachelor of Science** — University of Alberta, Edmonton — Mathematics Specialization (2002)
