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

- **Languages:** Go, TypeScript, Node.js, Clojure, C#, SQL
- **Backend:** Go, GraphQL, REST APIs, gRPC, microservices, Clojure
- **Systems:** Distributed systems, event-driven architecture, async processing, concurrency `[backend]`
- **Security:** Working knowledge of web security fundamentals — input validation, JWT authentication, mutual TLS, principle of least privilege (IAM)
- **Frontend:** React, Redux, TypeScript, ClojureScript `[fullstack]`
- **Tools:** Claude Code, Git (branching, tagging/releases, merge-conflict resolution, code review), GitHub Actions, CircleCI, Jenkins, Hudson, New Relic, Grafana, Zipkin, Splunk, Dependabot
- **Editors / IDEs:** VS Code, IntelliJ IDEA, Emacs
- **Test automation:** Selenium/WebDriver, Cypress, Postman (GraphQL and REST API testing), Hurl
- **Infrastructure:** AWS (S3, CloudFront, ACM, ECS Fargate, RDS, ALB, Lambda, API Gateway, DynamoDB, IAM, Bedrock), Azure (App Service, serverless SQL Database; provisioned with Terraform), Terraform, Kubernetes, Helm, Docker, Apache Kafka
- **Application servers:** Apache Tomcat, IBM WebSphere (public-sector Java EE at IBM); ASP.NET Core / Azure App Service
- **Databases:** PostgreSQL, MySQL, Microsoft SQL Server (MSSQL), IBM DB2, MongoDB, Cassandra, ElasticSearch, Redis, Snowflake
- **Other:** Stripe, Adyen, Google Workspace

---

## Experience

### Senior Fullstack Engineer — Looka, Toronto, Ontario (10/2022–09/2025)
*Laid off due to company-wide reduction in force. Fully remote from Alberta; company HQ in Toronto with a mostly distributed team.*

- Served as technical lead for both major platform features at Looka: set backend architecture, defined and implemented the GraphQL API and the PostgreSQL data layer, aligned API contracts with front-end contractors, drove technical decisions with Product, sequenced releases, and owned delivery from initial design through post-launch operations. No formal lead title, but full technical leadership scope including mentoring and final say on design trade-offs. `[backend]`
- Both features arrived loosely specified: broke down ambiguous problems into deliverable work, communicated regularly with product owners to clarify edge cases, made pragmatic scope and design tradeoffs, and defined MVP scope along with subsequent milestone releases. Kept this communication in the open in a shared Slack team channel so that teammates and the CTO stayed in the loop.
- Led backend architecture and implementation (Go, GraphQL) for two major customer-facing features in Looka's flagship SaaS platform, built on a microservices architecture. `[fullstack]`
  - **Google Workspace Reseller integration** adopted by ~850 customers: coordinated Stripe billing, Google APIs, and Pub/Sub events to drive a multi-step provisioning lifecycle in an event-driven architecture, allowing customers to purchase and manage subscriptions directly within Looka. Integrated Google Places Autocomplete for address validation, reducing incomplete-address Customer Support issues from several per week to several per month. `[backend]`
  - **AWS-based website hosting platform:** built the backend for a Wix-like subscription hosting product — S3 for compiled website assets, a shared CloudFront distribution (100 domains/distro, 100 domains/ACM cert), and custom domain purchases and attachment via OpenSRS. Solved three non-trivial problems: (1) apex CNAME limitations worked around using a www-subdomain CNAME + external static-IP redirect service for the apex A record; (2) ACM cert immutability meant every domain add/remove required creating a new cert for the full domain set, revalidating, and redeploying the CF distro — built as a multi-step async job with retry; (3) concurrent domain operations could collide and clobber each other, and the AWS Go SDK v2 blocks CF operations mid-deploy — solved by building a dedicated CF job queue with a single worker, using leader election across a two-cluster production environment to keep exactly one worker running at all times. `[backend][devops]`
  - Both features introduced new Stripe checkout flows; Redis-backed session state ensured in-progress checkouts were not disrupted during rolling deployments. `[backend]`
- Owned the PostgreSQL data layer for both flagship features: designed the schemas backing the Google Workspace provisioning lifecycle and the website hosting platform, authored versioned migration scripts, and deployed live, zero-downtime database migrations to production. `[backend]`
- Owned the Stripe integration for both flagship features: built new checkout flows and subscription billing; performed multiple Stripe library/API version upgrades, updating application code and reconfiguring Stripe webhook endpoints; and resolved customer-support escalations by manually creating and updating Stripe subscriptions through the Stripe dashboard. `[fullstack][backend]`
- Investigated discrepancies between coupon codes and Stripe product codes across development, staging, and production, then introduced a standard the engineering team adopted: new product and coupon codes are added through database migration scripts rather than directly in the database or in Stripe, so they pass through code review and apply consistently to every environment. This gave the whole team consistent identifiers across environments and made rolling out and testing new products easier. `[backend]`
- While upgrading the Stripe integration, refactored the existing webhook handling to ease the transition to the new Stripe API version, and wrote a runbook laying out a repeatable process for handling Stripe webhook versioning (following Stripe's recommended approach) so other engineers could perform webhook version upgrades consistently. `[backend]`
- Designed and implemented a shared asynchronous job processing system to handle long-running provisioning workflows spanning minutes to days, decoupling external integrations from request/response cycles. Implemented concurrency control, retry strategies with exponential backoff, and failure recovery, improving system reliability, scalability, and user experience. `[backend]`
- Benchmarked synchronous vs. asynchronous execution paths to validate architectural decisions: confirmed Stripe checkout steps completed within HTTP request latency budgets, and timed Google Workspace and AWS provisioning steps to establish that async job queuing was the correct pattern for those workflows. `[backend]`
- Set up an email alert notifying the person responsible for financials when the monthly Google bill for the Google Workspace Reseller integration was due, a small but necessary operational safeguard as the integration went into production. `[backend][devops]`
- Engineered internal observability and operational tooling (SQL and TypeScript-based) to surface job state, failures, and system health, enabling the 5-person Customer Support team to independently diagnose issues and reducing engineering escalations. `[backend][devops]`
- Developed TypeScript automation tools for the Customer Support team, built in direct consultation with them to fit their workflows and gather requirements, reducing engineering involvement in support cases and improving ticket resolution speed. `[fullstack]`
- Instrumented the React front end to capture high-volume browser UI events (button clicks, component interactions) into Snowflake, a columnar analytical warehouse; data analysts and product owners queried the events to analyze user behaviour and gauge interest in new features as they shipped. `[fullstack]`
- Translated Figma wireframes, mockups, and product requirements into functional front-end (React, Redux, TypeScript) and backend code, working from design artifacts through to shipped, production features. `[fullstack]`
- Modified Cypress end-to-end browser tests as needed while rolling out new front-end features. `[fullstack]`
- Worked within a monorepo encompassing the main web application and the embedded SVG graphic editor as a sub-package; contributed to cross-package build tooling and shared developer workflows. `[devops][fullstack]`
- Maintained a shared shell wrapper script used by the full engineering team to simplify and standardize complex Helm deployment commands, reducing deployment errors and onboarding friction. `[devops]`
- Managed Kubernetes cluster operations: container configuration, Helm chart deployments, node lifecycle management, and secrets management. `[devops]`
- Maintained CI/CD pipelines (CircleCI) for automated testing and reliable deployments. `[devops]`
- Introduced a change the engineering team adopted, moving from long-lived feature branches to a trunk-based workflow: as the engineering team and the monorepo grew, long-lived branches became hard to maintain, so new code is merged into master once it passes QA, with unreleased features hidden behind feature flags and config settings. This removed long-lived-branch maintenance, since closing a ticket now requires merging to master. `[devops]`
- Participated in on-call rotation, using New Relic and ElasticSearch for production cluster monitoring, log querying, and incident triage. `[devops]`
- Maintained continuous availability as an implicit SLO: enforced zero-downtime deployments and live PostgreSQL migrations across all production releases using rolling deploys and backward-compatible schema changes. `[devops]`
- Authored Makefile targets to simplify applying and rolling back versioned database migrations in local developer environments, reducing setup friction and onboarding time for the engineering team. `[devops]`
- Identified a session isolation vulnerability in a proposed Vendasta OAuth integration: diagnosed that Vendasta dashboard sessions persisted independently of the Looka session with no logout mechanism, allowing a shared browser to expose one user's dashboard to the next; recommended abandoning the integration on security grounds; the team agreed and moved directly to a Google Workspace integration. `[backend]`
- Contributed to establishing Looka's vulnerability disclosure program: reviewed incoming security submissions, assessed severity, and prioritized findings for engineering follow-up; monitored Dependabot alerts for CVE exposure across Go and TypeScript dependencies. `[backend]`
- Mentored junior engineers through code reviews, pair programming, and architectural discussions.
- Championed coding standards across the team: surfaced coding-standard issues to other engineers for feedback and guided adherence through the regular code review process, and set expectations even earlier when writing tickets by describing how the code should be organized to reflect those standards.
- Wrote unit and end-to-end tests across backend services and frontend components, treating test coverage as a completion requirement for every pull request; used Postman to test and exercise both GraphQL and REST APIs; authored technical documentation for APIs, system architecture, and operational runbooks in Notion, which also served as the team's issue and ticket tracker.
- Implemented a drop-shadow feature in the React/TypeScript logo editor (an SVG-based graphic editor) of Looka's flagship web app, working with the MySQL-backed design storage layer to persist and retrieve design state. `[fullstack]`
- Used AWS DynamoDB in production as the datastore for the graphic editor's library of predefined SVG symbols; regenerated SVG symbol data and went into DynamoDB directly to correct records that had become corrupted during the regeneration. `[backend][devops][fullstack]`
- Added enhancements to a TypeScript AWS Lambda that converted JSON and SVG logo data into multiple file formats (SVG, EPS, JPG, PNG), sizes (thumbnail, full size, favicon), and colour schemes (black-and-white, colour, no-background, dark-background, light-background, text-only, logo-only). `[backend][devops]`

---

### Senior Software Engineer — Betable, Edmonton, Alberta (09/2021–10/2022)

- Built, as part of a team, a greenfield Go microservice for an Adyen payment integration in a high-availability distributed system processing thousands of real-money transactions per day for licensed casino operators, with a focus on reliability and correctness under financial and regulatory constraints; also added the front-end components for user card input (AngularJS). `[backend][fullstack]`
- Maintained and extended the main casino frontend (AngularJS / Angular 1.x), including integrating the Adyen payment UI and delivering new frontend features mandated by UKGC regulatory requirements; also built React frontends (CSS, HTML) supporting desktop and mobile modes. `[fullstack]`
- Maintained and extended two Node.js services: a backend-for-frontend (BFF) powering the AngularJS online casino site, and a custom API gateway written in Node; used npm to manage front-end dependencies across React applications. `[backend][fullstack]`
- Used Selenium/WebDriver browser automation to verify and style the React front end across multiple casino brands. `[fullstack]`
- Maintained and extended a React KYC (Know Your Customer) web application used by the casino operations team. `[fullstack]`
- Designed and delivered a game management system: defined and implemented its REST API (Go endpoints added to an existing microservice), plus a UI added to an existing backoffice React application, to replace manual Go and JavaScript scripts that side-loaded game data directly into the production database with no validation. The scripts had been written for a single casino; as Betable scaled to multiple casinos, the manual process broke down. The new system added data validation, multi-casino support, show/hide per-casino game toggling (for pre-release testing), and thumbnail image uploads. All game management was handed over to a non-engineering staff member, freeing engineers from tracking game publishing and discontinuation dates across multiple third-party providers (Netent, PlayNGo, others). `[backend][fullstack]`
- Set up a game-release coordination workflow that gave the marketing team advance notice of new titles: subscribed to release announcements from third-party game providers, tracked upcoming releases in a shared calendar, and briefed the engineering and marketing teams every two weeks, in line with the sprint cadence, so marketing could prepare for each launch.
- Defined service boundaries and backend workflows to support safe rollout and lifecycle management of externally integrated systems in a Cassandra (NoSQL) backed microservices architecture, improving operational scalability and reducing engineering involvement. `[backend]`
- Participated in on-call rotation (Grafana, ElasticSearch, Zipkin) on a UKGC-regulated real-money gaming platform where outages had immediate financial impact; used Zipkin for distributed request tracing across microservices, correlating requests by unique IDs to diagnose cross-service failures; maintained continuous availability through rolling deploys and zero-downtime schema migrations. `[devops]`
- Delivered compliance-driven features and operational policy changes in response to evolving UKGC regulatory requirements, translating mandates directly into production code. `[backend]`
- Delivered work within a Scrum-based Agile process (sprints, standups, backlog refinement, sprint delivery).
- Worked under a Jenkins CI/CD quality gate on the mainline: no merge to master without a passing build and an approving code review from another developer, keeping the trunk releasable. `[devops]`
- Mentored junior engineers through code reviews and technical guidance.
- Wrote unit and end-to-end tests, with every pull request requiring corresponding unit or end-to-end coverage to be considered complete; wrote spec (BDD) tests for Go backend services using Ginkgo and Gomega; maintained technical documentation for services and APIs.

---

### Software Engineer — Betable, Edmonton, Alberta (01/2016–09/2021)

- Developed backend services and internal tooling to support marketing workflows (promotions, bonuses, and offers), enabling non-technical teams to manage configuration and scheduling without engineering intervention. `[backend]`
- Developed internal marketing tools enabling non-technical teams to create, edit, and schedule promotions, bonuses, and game offers. `[fullstack]`
- Implemented Go-based backend components alongside React/Redux front-end systems in a Cassandra (NoSQL) backed microservices architecture, contributing to the evolution toward a more service-oriented design. `[fullstack][backend]`
- Wrote unit and end-to-end tests; maintained technical documentation for services and internal tools.

---

### Developer — Gamesys Canada, Edmonton, Alberta (08/2013–10/2015)
*Laid off due to company restructuring.*

- Built a Backbone.js single-page application for managing online poker tournaments, communicating with an event-driven microservice backend using Apache Kafka; poker-hand records stored in MongoDB (NoSQL); used npm for package management and build tooling; Jenkins for CI builds; used Splunk for distributed log correlation and request tracing across services. `[fullstack][backend]`
- Extended an existing Java service that consumed Apache Kafka events, adding domain-level handling for a new event type (routing it to a downstream service and persisting the payload to MongoDB (NoSQL)). `[backend]`
- Contributed to a GWT analytics application used to investigate poker game fraud and analyze player win/loss data. `[fullstack]`
- Delivered work within a Scrum-based Agile process (sprints, standups, backlog refinement), using JIRA for issue and ticket tracking.
- Wrote unit and end-to-end tests; maintained technical documentation for developed features.

---

### Developer — CGI Canada, Edmonton, Alberta (10/2011–08/2013)

- Developed enhancements for two public-sector Java EE web applications, backed by Microsoft SQL Server (MSSQL) as the primary relational database. `[fullstack]`
- Presented to product leads a browser test-automation approach using Selenium/WebDriver with rspec-style BDD tests, showing how business analysts could write manual front-end test cases that translate directly into automated tests. `[fullstack]`
- Delivered work within a Scrum-based Agile process (sprints, standups, backlog refinement).
- Added and updated unit tests for each enhancement and maintained the project's required code coverage metrics, with builds run through Hudson CI; maintained technical documentation for developed features.

---

### IT Specialist — IBM Canada, Edmonton, Alberta (03/2007–09/2011)

- Delivered 30+ enhancements and production fixes for public-sector Java EE systems, including eHealth Saskatchewan's Pharmaceutical Information Program (backed by IBM DB2); other government web applications used Microsoft SQL Server (MSSQL) as their database. `[fullstack]`
- Diagnosed and fixed defects in eHealth Saskatchewan PIP's HL7 CeRx implementation (Canadian pharmacy/e-prescribing messaging), a healthcare interoperability standard; work included writing and editing complex XML-based test scripts to reproduce and validate message-exchange behaviour. `[backend][fullstack]`
- Served as tier 4 (highest-level escalation) production support for the eHealth Saskatchewan PIP for the full duration at IBM, owning root-cause diagnosis and resolution of the most complex application and data issues on a regulated healthcare system. `[backend][devops]`
- Added and updated unit tests for each enhancement and maintained the project's required code coverage metrics; maintained technical documentation for developed features.

---

### Junior Developer — ShirWin Knowledge and Learning Inc., Edmonton, Alberta (01/2007–03/2007)

- Implemented a real-time chat system and UI components for a systematic review web application. `[fullstack]`

---

### Contract Instructor — Canadian University College (now Burman University), Lacombe, Alberta (2005–2007)

- Taught undergraduate mathematics for two years as a contract instructor, spanning the full range from introductory college algebra through to fourth-year real analysis, plus two semesters of operations management in the School of Business.
- Distilled complex, abstract concepts for students across a wide range of levels; developed and delivered lectures, assessments, and one-on-one instruction, strengthening the communication and teaching skills I now apply to mentoring, code review, and cross-functional collaboration.

---

## Selected Systems & Backend Projects

### Event-Driven Usage-Based Billing Platform (Stripe + Metronome) — Go
https://github.com/akydd/stripe_metronome

- Event-driven, microservices usage-based billing platform in Go: separate `metering` (Metronome), `billing`/customer-registry, and `invoicing` (Stripe) services communicating over a Kafka event bus, with synchronous HTTP for reads and provider calls. `[backend][devops]`
- Provider-driven billing cycles: each Stripe subscription owns its own period; at period end a Stripe webhook (`invoice.upcoming`) triggers the invoicing service to pull that exact usage window from Metronome, push usage line items, and finalize one invoice (flat fee + metered usage). `[backend]`
- Pluggable provider stubs (`fakestripe` / `fakemetronome`) that mirror the real Stripe and Metronome APIs and are swappable via environment variables for real test-mode endpoints; handles Stripe webhooks (`customer.subscription.created`, `invoice.upcoming`). `[backend]`
- Two event-bus implementations behind one interface: an in-memory bus for local dev and tests, and a Kafka bus (franz-go) over a Redpanda broker for cross-process messaging; a read-only `eventfeed` service tails every topic to power a live-events UI panel. `[backend][devops]`
- React/TypeScript frontend as a control plane for usage generators, customers, and subscriptions, plus the live-events view. `[fullstack]`
- Infrastructure as code with Terraform, a Docker Compose stack, and GitHub Actions CI. `[devops]`
- Stack: Go, Apache Kafka (Redpanda, franz-go), Stripe, Metronome, React/TypeScript, Terraform, Docker Compose, GitHub Actions. `[backend][devops]`

### Drupal 11 Citizen Service Intake Classifier
https://github.com/akydd/drupal-ai

- Custom Drupal 11 module that accepts plain-language citizen service requests via a Drupal Webform and classifies them to the responsible ministry using Claude (Anthropic). `[fullstack]`
- A custom PHP WebformHandler plugin calls Claude via the Drupal AI module, parses the structured JSON response, and stores ministry name, next-steps summary, and confidence score in hidden webform fields. Results are rendered in a Twig-templated response page. `[fullstack]`
- High-confidence results are auto-routed; low-confidence results are flagged for human review. AI output is validated before use: markdown code fences stripped with regex, JSON decoded with error checking, required fields verified — treating Claude's response as an untrusted external input. `[fullstack]`
- Business logic extracted into a plain PHP `IntakeClassifier` service with no Drupal dependencies, testable with PHPUnit without a Drupal bootstrap; handler wiring tested separately as Drupal kernel tests. `[fullstack]`
- Stack: PHP 8.4, Drupal 11, Twig, Drupal AI module (Anthropic provider), Webform module, Key module for environment-variable API key management, DDEV for Docker-based local development. `[fullstack]`

### Go Backend with Prometheus + Grafana Observability
https://github.com/akydd/realworld-backend-go-prometheus

- Instrumented a production-style Go backend with Prometheus and Grafana: RED method metrics (request rate, error rate, p99 latency histograms via `prometheus/client_golang`), custom Go runtime metrics (memory, goroutines, GC duration, file descriptors), and `postgres_exporter` for database-level monitoring. `[backend][devops]`
- Three Grafana dashboards (RED, Go Processes, PostgreSQL) auto-provision on Docker Compose startup; label cardinality controlled to prevent metric explosion. `[devops]`
- Stack: Go, Prometheus, Grafana, `postgres_exporter`, Docker Compose. `[devops]`

### AI-assisted anomaly classification using AWS Bedrock (Claude)
https://github.com/akydd/log-anomale-detector

- Serverless, event-driven log processing system: simulates HTTP access logs, injects anomalous traffic, classifies anomalies in real time via AWS Bedrock (Claude), and delivers alerts via SNS. `[backend][devops]`
- Stack: Lambda (serverless compute), API Gateway (authenticated endpoints), DynamoDB (low-latency log storage), S3 (dashboard hosting), Terraform (infrastructure provisioning). `[devops]`
- Built a cloud-based log anomaly detection system using Go and AWS, processing application logs to identify unusual patterns and surface potential issues. Designed as a distributed pipeline with infrastructure provisioned via Terraform. Emphasizes observability, scalability, and real-world monitoring use cases. `[backend]`

### AWS Cloud-Deployed Go Backend (RealWorld API)
https://github.com/akydd/realworld-backend-go

- RealWorld backend API in Go using hexagonal architecture, keeping business logic fully decoupled from infrastructure. `[backend]`
- Built a native gRPC API alongside the HTTP API, both backed by the same domain layer. Defined the full set of `.proto` service contracts (users, articles, profiles, comments, tags, feeds) with generated Go stubs, including unary RPCs and two server-streaming RPCs (live article and comment feeds with per-author and per-slug filtering). `[backend]`
- Wrote unary and stream auth interceptors supporting required, optional, and no-auth RPCs, passing JWTs through `authorization` metadata; returned typed `google.rpc.Status` error details (BadRequest, ErrorInfo, ResourceInfo) so clients can inspect failures without parsing strings. `[backend]`
- Added mutual TLS to the gRPC server: generated a CA plus server and client certs with OpenSSL, set `tls.RequireAndVerifyClientCert` and TLS 1.3 minimum, and loaded credentials from environment variables (AWS Secrets Manager in production) so both server and client verify each other at the transport layer with no changes to application logic. `[backend][devops]`
- Deployed to ECS Fargate behind an ALB for high availability and zero-downtime rolling deploys; Application Auto Scaling adjusts task count under load. `[devops]`
- RDS PostgreSQL in private subnets; secrets in AWS Secrets Manager (never in source control or CI). `[devops]`
- CI/CD via GitHub Actions with OIDC-based AWS authentication — no long-lived credentials in the pipeline. `[devops]`
- Observability via CloudWatch alarms and SNS alerts covering ECS, RDS, and ALB metrics. `[devops]`
- Developed using a spec-driven workflow with Claude Code: features written as plain-English specifications, then implemented and verified against the full Hurl integration test suite; exercised the REST and gRPC endpoints with Postman during development. `[backend]`

### RealWorld Clojure API
https://github.com/akydd/realworld-clojure

- Production-style REST API implementing the RealWorld spec in Clojure, applying functional design principles and idiomatic patterns. `[backend]`
- Demonstrates backend architecture, JWT authentication flows, and practical Clojure in real-world service development. `[backend]`

### RealWorld Java / Spring Boot API
https://github.com/akydd/realworld-spring

- Production-style REST API implementing the RealWorld spec on a current Java/Spring stack (Java 26, Spring Boot 4.1, Spring Framework 7): Spring MVC, Spring Data JPA with PostgreSQL, Flyway migrations, Spring Security with JWT, and MapStruct DTO mapping. Gradle build with a layered service/repository/entity/mapper architecture. `[backend]`
- Full test pyramid: JUnit unit tests, Testcontainers-backed integration tests (real PostgreSQL, random ports, `TestRestTemplate`), and a Hurl end-to-end suite, all run in GitHub Actions CI on every push. `[backend]`
- Non-trivial design work: tri-state partial-update handling (absent / null / value) with custom Jackson 3 deserializers, immutable-user-id JWT subjects, and Actuator health/readiness/liveness endpoints. `[backend]`
- Data modeling for scale and operability: follows and favorites modeled as dedicated join entities with composite keys for O(1) indexed lookups (rather than `@ManyToMany` collection hydration), a denormalized `favoritesCount` with atomic updates plus a `reconcile-counts` Spring Shell maintenance command for drift recovery, and centralized error handling via `@RestControllerAdvice`. `[backend]`
- Demonstrates current Java and Spring Boot fluency and production-quality testing/CI discipline. Part of a deliberate, ongoing practice of continuously expanding my language and framework knowledge: I have taken one well-specified API to production quality across Go, Clojure, and Java, each time applying principles-based design (hexagonal architecture, functional design, layered service/repository separation) and a first-class testing discipline rather than a one-off implementation. `[backend]`

### RealWorld C# / .NET API (Azure-deployed)
https://github.com/akydd/realworld-net

- Production-style REST API implementing the RealWorld spec on a current Microsoft stack: C# on .NET 10, ASP.NET Core (controller-based Web API), Entity Framework Core 10 against SQL Server 2022 (containerized with Docker), and JWT bearer authentication. `[backend]`
- Layered design (Controllers → service interfaces → EF Core `AppDbContext`) with EF Core projections to minimize SQL queries; OpenAPI documentation with a Scalar interactive API UI. `[backend]`
- Considered design decisions: hand-rolled the `User` table (reusing ASP.NET Core Identity's password hasher) rather than taking on `IdentityDbContext` schema overhead the spec does not need; denormalized `FavoritesCount` on articles with atomic SQL increments for safe concurrency. `[backend]`
- Testing and quality: xUnit integration suite backed by Testcontainers (real SQL Server per run) with Respawn resetting database state between tests; nullable reference types, analyzers, and `TreatWarningsAsErrors` enabled; formatting enforced via `.editorconfig` and `dotnet format`. `[backend]`
- CI/CD and deployment: GitHub Actions runs the integration tests on every push/PR as a gate before shipping; Terraform provisions Azure infrastructure (App Service, serverless Azure SQL Database); EF Core migrations run automatically on startup. `[backend][devops]`
- Adds C#/.NET and Azure to the set of RealWorld implementations (Go, Clojure, Java, .NET), applying the same principles-based design and first-class testing discipline on the Microsoft stack. `[backend]`

### Python Data Exploration (Pokémon stats)
https://github.com/akydd/py_pokemon

- Personal data exploration project using Python; demonstrates basic scripting, data manipulation, and familiarity with the Python ecosystem. `[backend]`

### 6502 CPU Emulator — C
https://github.com/akydd/nes_emulator

- Implemented a cycle-accurate emulation of the MOS 6502 processor in C, including the full instruction set, addressing modes, and interrupt handling. `[backend]`
- Demonstrates low-level systems programming, hardware-level understanding of CPU architecture, and comfort working close to the metal in C. `[backend]`

---

## Education

- **Master of Science** — University of Alberta, Edmonton — Pure Mathematics (convocation June 2005)
- **Bachelor of Science** — University of Alberta, Edmonton — Mathematics Specialization (convocation June 2002)

---

## Certifications

- **Introduction to Agent Skills** — Anthropic (March 2026)
- **Introduction to Subagents** — Anthropic (May 2026)
