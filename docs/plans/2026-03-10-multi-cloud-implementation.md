# Multi-Cloud Comparison Mind Map — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add GCP service equivalents and a comparison table view so users can see AWS vs GCP services side by side for any cloud domain.

**Architecture:** Flatten the Root > Core/Specialty > Domain hierarchy to Root > Domain (25 domains). Keep bubble navigation for the first two levels. At the leaf level, replace bubbles with a styled HTML comparison table that morphs seamlessly from the bubble view. Data model changes leaf strings to `{aws, gcp}` objects.

**Tech Stack:** Vanilla JS, SVG, CSS — no dependencies, no build step, GitHub Pages compatible.

---

### Task 1: Flatten tree.js hierarchy

**Files:**
- Modify: `data/tree.js` (entire file)

**Step 1: Restructure ROOT**

Replace the `CORE`/`SPECIALTY` split with a single flat array. Remove the `const CORE=` and `const SPECIALTY=` wrappers. Change `ROOT.ch` to contain all 25 domains directly.

```js
// Replace entire file with:
const DOMAINS = [
  // --- Former CORE ---
  {name:"Compute", icon:"...", color:"...", ch:[...]},
  {name:"Storage", ...},
  {name:"Database", ...},
  {name:"Networking", ...},
  {name:"Security &\nGovernance", ...},
  {name:"Data & Analytics", ...},
  {name:"AI & ML", ...},
  // --- Former SPECIALTY ---
  {name:"App Integration", ...},
  {name:"DevOps", ...},
  // ... all 18 specialty domains
];

const ROOT = {name:'Cloud Computing', icon:'...', color:'#58a6ff', ch: DOMAINS};
```

Keep all existing subcategory structures (`ch` arrays with `name`, `desc`, `ch`) intact — only the top level changes. Leaf `ch` arrays still contain strings at this point (Task 2 converts them).

**Step 2: Verify in browser**

Open `index.html` in browser. Root hover-preview should show all 25 domains as bubbles (no Core/Specialty grouping). Click any domain to drill into subcategories. Leaf service bubbles should still work.

**Step 3: Commit**

```
git add data/tree.js
git commit -m "refactor: flatten Core/Specialty into single DOMAINS array"
```

---

### Task 2: Convert leaf services to AWS/GCP comparison objects in tree.js

**Files:**
- Modify: `data/tree.js` (leaf `ch` arrays in all 25 domains)

This is the largest data task. Convert every leaf `ch` array from strings to comparison objects. The format:

```js
// Each leaf entry becomes:
{ aws: "Amazon EKS", gcp: "Google Kubernetes Engine" }
// AWS-only:
{ aws: "Nitro Enclaves", gcp: null }
// GCP-only:
{ aws: null, gcp: "Anthos" }
```

**Step 1: Convert all 7 former-Core domains**

Below is the complete mapping. Apply these changes to every subcategory's `ch` array in `data/tree.js`.

**Compute:**
```js
// Virtual Machines
ch:[
  {aws:"Amazon EC2",gcp:"Compute Engine"},
  {aws:"EC2 Auto Scaling",gcp:"Autoscaler"},
  {aws:"EC2 Image Builder",gcp:"Custom Images"},
  {aws:"Spot Instances",gcp:"Preemptible / Spot VMs"},
  {aws:"VM Import/Export",gcp:"Migrate for Compute Engine"},
  {aws:null,gcp:"Sole-Tenant Nodes"}
]
// Containers
ch:[
  {aws:"Amazon EKS",gcp:"Google Kubernetes Engine"},
  {aws:"Amazon ECS",gcp:"Cloud Run"},
  {aws:"Amazon ECR",gcp:"Artifact Registry"},
  {aws:"AWS Fargate",gcp:"Cloud Run"},
  {aws:"Karpenter",gcp:"GKE Autopilot"},
  {aws:null,gcp:"Anthos"}
]
// Serverless
ch:[
  {aws:"AWS Lambda",gcp:"Cloud Functions"},
  {aws:"Step Functions",gcp:"Workflows"},
  {aws:"Lambda SnapStart",gcp:null},
  {aws:"Lambda Layers",gcp:null}
]
// PaaS
ch:[
  {aws:"Elastic Beanstalk",gcp:"App Engine"},
  {aws:"App Runner",gcp:"Cloud Run"},
  {aws:"AWS Amplify",gcp:"Firebase Hosting"}
]
// Batch & HPC
ch:[
  {aws:"AWS Batch",gcp:"Batch"},
  {aws:"ParallelCluster",gcp:"HPC Toolkit"},
  {aws:"Elastic Fabric Adapter",gcp:null}
]
// Edge Computing
ch:[
  {aws:"Lambda@Edge",gcp:"Cloud CDN Functions"},
  {aws:"CloudFront Functions",gcp:"Cloud CDN"},
  {aws:"Wavelength",gcp:"Distributed Cloud Edge"},
  {aws:"Local Zones",gcp:"Distributed Cloud Edge"}
]
// Confidential Compute
ch:[
  {aws:"Nitro Enclaves",gcp:"Confidential VMs"},
  {aws:null,gcp:"Confidential GKE Nodes"}
]
```

**Storage:**
```js
// Object Storage
ch:[
  {aws:"Amazon S3",gcp:"Cloud Storage"},
  {aws:"S3 Glacier",gcp:"Cloud Storage Archive"},
  {aws:"S3 Intelligent-Tiering",gcp:"Autoclass"},
  {aws:"S3 Object Lock",gcp:"Retention Policies"}
]
// Block Storage
ch:[
  {aws:"Amazon EBS",gcp:"Persistent Disk"},
  {aws:"EBS Snapshots",gcp:"Disk Snapshots"},
  {aws:"Instance Store",gcp:"Local SSD"}
]
// File Storage
ch:[
  {aws:"Amazon EFS",gcp:"Filestore"},
  {aws:"FSx for Windows",gcp:"NetApp Volumes"},
  {aws:"FSx for Lustre",gcp:"Parallelstore"},
  {aws:"FSx for ONTAP",gcp:"NetApp Volumes"}
]
// Hybrid & Transfer
ch:[
  {aws:"Storage Gateway",gcp:"Transfer Appliance"},
  {aws:"DataSync",gcp:"Storage Transfer Service"},
  {aws:"Snow Family",gcp:"Transfer Appliance"},
  {aws:"Transfer Family",gcp:"Storage Transfer Service"}
]
// Backup
ch:[
  {aws:"AWS Backup",gcp:"Backup and DR"},
  {aws:"Elastic Disaster Recovery",gcp:"Backup and DR"}
]
```

**Database:**
```js
// Relational
ch:[
  {aws:"Amazon RDS",gcp:"Cloud SQL"},
  {aws:"Aurora",gcp:"AlloyDB"},
  {aws:"Aurora Serverless v2",gcp:"AlloyDB Omni"},
  {aws:"RDS Proxy",gcp:"Cloud SQL Auth Proxy"}
]
// NoSQL
ch:[
  {aws:"DynamoDB",gcp:"Bigtable"},
  {aws:"DynamoDB Global Tables",gcp:"Bigtable Replication"},
  {aws:"DocumentDB",gcp:"Firestore"}
]
// Graph & Specialty
ch:[
  {aws:"Neptune",gcp:"Neo4j Aura (partner)"},
  {aws:"Timestream",gcp:"Bigtable"},
  {aws:"QLDB",gcp:null},
  {aws:"Keyspaces",gcp:"Bigtable"},
  {aws:null,gcp:"Spanner"}
]
// Caching & Vector
ch:[
  {aws:"ElastiCache",gcp:"Memorystore"},
  {aws:"MemoryDB",gcp:"Memorystore for Redis"},
  {aws:"OpenSearch vector",gcp:"Vertex AI Vector Search"},
  {aws:"pgvector",gcp:"AlloyDB AI"}
]
// Data Warehouse
ch:[
  {aws:"Redshift",gcp:"BigQuery"},
  {aws:"Redshift Serverless",gcp:"BigQuery"},
  {aws:"Athena",gcp:"BigQuery"}
]
```

**Networking:**
```js
// VPC
ch:[
  {aws:"Amazon VPC",gcp:"VPC"},
  {aws:"NAT Gateway",gcp:"Cloud NAT"},
  {aws:"VPC Endpoints",gcp:"Private Service Connect"},
  {aws:"PrivateLink",gcp:"Private Service Connect"}
]
// Load Balancing
ch:[
  {aws:"ALB",gcp:"HTTP(S) Load Balancer"},
  {aws:"NLB",gcp:"Network Load Balancer"},
  {aws:"Global Accelerator",gcp:"Global Load Balancer"}
]
// DNS & CDN
ch:[
  {aws:"Route 53",gcp:"Cloud DNS"},
  {aws:"CloudFront",gcp:"Cloud CDN"}
]
// Hybrid Connectivity
ch:[
  {aws:"Direct Connect",gcp:"Cloud Interconnect"},
  {aws:"Site-to-Site VPN",gcp:"Cloud VPN"},
  {aws:"Transit Gateway",gcp:"Network Connectivity Center"},
  {aws:"Cloud WAN",gcp:"Network Connectivity Center"}
]
// Network Security
ch:[
  {aws:"Security Groups",gcp:"Firewall Rules"},
  {aws:"WAF",gcp:"Cloud Armor"},
  {aws:"Shield",gcp:"Cloud Armor"},
  {aws:"Network Firewall",gcp:"Cloud Firewall"}
]
// Mesh & API
ch:[
  {aws:"API Gateway",gcp:"Apigee"},
  {aws:"AppSync",gcp:"Apigee"},
  {aws:"VPC Lattice",gcp:"Traffic Director"},
  {aws:"Cloud Map",gcp:"Service Directory"}
]
```

**Security & Governance:**
```js
// IAM & Identity
ch:[
  {aws:"AWS IAM",gcp:"Cloud IAM"},
  {aws:"Identity Center",gcp:"Cloud Identity"},
  {aws:"Cognito",gcp:"Identity Platform"},
  {aws:"Access Analyzer",gcp:"IAM Recommender"},
  {aws:"Roles Anywhere",gcp:"Workload Identity Federation"}
]
// Encryption & Secrets
ch:[
  {aws:"KMS",gcp:"Cloud KMS"},
  {aws:"CloudHSM",gcp:"Cloud HSM"},
  {aws:"Secrets Manager",gcp:"Secret Manager"},
  {aws:"ACM",gcp:"Certificate Manager"},
  {aws:"Private CA",gcp:"Certificate Authority Service"}
]
// Threat Detection
ch:[
  {aws:"GuardDuty",gcp:"Security Command Center"},
  {aws:"Security Hub",gcp:"Security Command Center"},
  {aws:"Detective",gcp:"Chronicle"},
  {aws:"Inspector",gcp:"Container Analysis"},
  {aws:"Macie",gcp:"Sensitive Data Protection"}
]
// Compliance & Audit
ch:[
  {aws:"Organizations",gcp:"Resource Manager"},
  {aws:"CloudTrail",gcp:"Cloud Audit Logs"},
  {aws:"Config",gcp:"Cloud Asset Inventory"},
  {aws:"Control Tower",gcp:"Assured Workloads"},
  {aws:"Audit Manager",gcp:"Compliance Reports Manager"},
  {aws:"Artifact",gcp:"Compliance Reports Manager"}
]
// Zero Trust
ch:[
  {aws:"Verified Access",gcp:"BeyondCorp Enterprise"},
  {aws:"Signer",gcp:"Binary Authorization"}
]
// Well-Architected
ch:[
  {aws:"WA Tool",gcp:"Architecture Framework"},
  {aws:"Trusted Advisor",gcp:"Active Assist"},
  {aws:"Service Catalog",gcp:"Service Catalog"}
]
```

**Data & Analytics:**
```js
// Streaming
ch:[
  {aws:"Kinesis",gcp:"Pub/Sub"},
  {aws:"MSK",gcp:"Managed Kafka"},
  {aws:"Data Firehose",gcp:"Dataflow"},
  {aws:"AppFlow",gcp:"Application Integration"}
]
// Processing & ETL
ch:[
  {aws:"EMR",gcp:"Dataproc"},
  {aws:"EMR Serverless",gcp:"Dataproc Serverless"},
  {aws:"Glue",gcp:"Dataflow"},
  {aws:"Managed Flink",gcp:"Dataflow"}
]
// Data Lake & Warehouse
ch:[
  {aws:"Lake Formation",gcp:"Dataplex"},
  {aws:"Redshift",gcp:"BigQuery"},
  {aws:"Athena",gcp:"BigQuery"},
  {aws:"Data Exchange",gcp:"Analytics Hub"}
]
// BI & Search
ch:[
  {aws:"Quick Suite",gcp:"Looker"},
  {aws:"OpenSearch",gcp:"Elasticsearch on GCP"},
  {aws:"OpenSearch Serverless",gcp:"Elasticsearch on GCP"},
  {aws:"Kendra",gcp:"Vertex AI Search"},
  {aws:"CloudSearch",gcp:"Vertex AI Search"},
  {aws:"Entity Resolution",gcp:"Dataplex"}
]
// Data Governance
ch:[
  {aws:"DataZone",gcp:"Dataplex"},
  {aws:"Glue Data Quality",gcp:"Dataplex Data Quality"},
  {aws:"Clean Rooms",gcp:"BigQuery Clean Rooms"}
]
```

**AI & ML:**
```js
// ML Platform
ch:[
  {aws:"SageMaker Studio",gcp:"Vertex AI Workbench"},
  {aws:"SM Pipelines",gcp:"Vertex AI Pipelines"},
  {aws:"SM Canvas",gcp:"Vertex AI AutoML"},
  {aws:"Clarify",gcp:"Vertex Explainable AI"}
]
// Generative AI
ch:[
  {aws:"Bedrock",gcp:"Vertex AI Model Garden"},
  {aws:"Bedrock Agents",gcp:"Vertex AI Agent Builder"},
  {aws:"Bedrock AgentCore",gcp:"Vertex AI Agent Builder"},
  {aws:"Bedrock KB",gcp:"Vertex AI Search"},
  {aws:"Guardrails",gcp:"Vertex AI Safety"},
  {aws:"Q Developer",gcp:"Gemini Code Assist"},
  {aws:"Q Business",gcp:"Gemini for Workspace"},
  {aws:"Kiro",gcp:null},
  {aws:"PartyRock",gcp:null},
  {aws:null,gcp:"Gemini API"}
]
// AI Services
ch:[
  {aws:"Rekognition",gcp:"Vision AI"},
  {aws:"Textract",gcp:"Document AI"},
  {aws:"Comprehend",gcp:"Natural Language AI"},
  {aws:"Translate",gcp:"Translation AI"},
  {aws:"Transcribe",gcp:"Speech-to-Text"},
  {aws:"Polly",gcp:"Text-to-Speech"},
  {aws:"Personalize",gcp:"Recommendations AI"},
  {aws:"Fraud Detector",gcp:"Anti Money Laundering AI"},
  {aws:"Forecast",gcp:"Vertex AI Forecasting"}
]
// AI Infrastructure
ch:[
  {aws:"P5 (H100)",gcp:"A3 (H100)"},
  {aws:"Trn2 (Trainium)",gcp:"TPU v5p"},
  {aws:"Inf2 (Inferentia)",gcp:"TPU v5e"},
  {aws:"Neuron SDK",gcp:"JAX / TPU SDK"}
]
// Conversational AI
ch:[
  {aws:"Lex",gcp:"Dialogflow"},
  {aws:"Connect",gcp:"CCAI"}
]
```

**Step 2: Convert all 18 former-Specialty domains**

**App Integration:**
```js
// Messaging
ch:[
  {aws:"SQS",gcp:"Pub/Sub"},
  {aws:"SNS",gcp:"Pub/Sub"},
  {aws:"Amazon MQ",gcp:"Managed Kafka"}
]
// Events & Workflows
ch:[
  {aws:"EventBridge",gcp:"Eventarc"},
  {aws:"EB Pipes",gcp:"Eventarc"},
  {aws:"Step Functions",gcp:"Workflows"},
  {aws:"MWAA",gcp:"Cloud Composer"}
]
// Notifications
ch:[
  {aws:"SES",gcp:"SendGrid (partner)"},
  {aws:"Pinpoint",gcp:"Firebase Cloud Messaging"}
]
```

**DevOps:**
```js
// CI/CD
ch:[
  {aws:"CodePipeline",gcp:"Cloud Build"},
  {aws:"CodeBuild",gcp:"Cloud Build"},
  {aws:"CodeDeploy",gcp:"Cloud Deploy"},
  {aws:"CodeCatalyst",gcp:null}
]
// IaC
ch:[
  {aws:"CloudFormation",gcp:"Deployment Manager"},
  {aws:"CDK",gcp:"Pulumi / Terraform"},
  {aws:"SAM",gcp:null},
  {aws:"CFN Guard",gcp:null}
]
// Observability
ch:[
  {aws:"CloudWatch",gcp:"Cloud Monitoring"},
  {aws:"X-Ray",gcp:"Cloud Trace"},
  {aws:"Managed Grafana",gcp:"Cloud Monitoring Dashboards"},
  {aws:"Managed Prometheus",gcp:"Managed Prometheus"}
]
// Operations
ch:[
  {aws:"Systems Manager",gcp:"VM Manager"},
  {aws:"Incident Manager",gcp:"Incident Manager"},
  {aws:"DevOps Guru",gcp:"Error Reporting"}
]
// FinOps
ch:[
  {aws:"Cost Explorer",gcp:"Cost Management"},
  {aws:"Budgets",gcp:"Budget Alerts"},
  {aws:"Compute Optimizer",gcp:"Active Assist"}
]
```

**Migration:**
```js
// Assessment
ch:[
  {aws:"Migration Hub",gcp:"Migration Center"},
  {aws:"App Discovery",gcp:"Migration Center"},
  {aws:"Migration Evaluator",gcp:"Rapid Assessment"}
]
// Server & DB
ch:[
  {aws:"MGN",gcp:"Migrate for Compute Engine"},
  {aws:"DMS",gcp:"Database Migration Service"},
  {aws:"Schema Conversion Tool",gcp:"Database Migration Service"}
]
// Modernization
ch:[
  {aws:"App2Container",gcp:"Migrate for Anthos"},
  {aws:"Refactor Spaces",gcp:"Migrate for Anthos"},
  {aws:"Mainframe Mod",gcp:"Dual Run"}
]
```

**Hybrid Cloud:**
```js
// Hybrid Platforms
ch:[
  {aws:"Outposts",gcp:"Distributed Cloud"},
  {aws:"EKS Anywhere",gcp:"Anthos"},
  {aws:"ECS Anywhere",gcp:"Anthos"}
]
// VMware
ch:[
  {aws:"VMware Cloud on AWS",gcp:"Google Cloud VMware Engine"}
]
```

**IoT:**
```js
// Core & Connect
ch:[
  {aws:"IoT Core",gcp:"IoT Core (deprecated)"},
  {aws:"LoRaWAN",gcp:null},
  {aws:"FreeRTOS",gcp:null},
  {aws:null,gcp:"Cloud IoT (partner solutions)"}
]
// Device Mgmt
ch:[
  {aws:"Device Mgmt",gcp:null},
  {aws:"Device Defender",gcp:null},
  {aws:"Device Shadow",gcp:null}
]
// Data & Edge
ch:[
  {aws:"IoT Analytics",gcp:"Pub/Sub + BigQuery"},
  {aws:"SiteWise",gcp:null},
  {aws:"Greengrass",gcp:"Edge TPU Runtime"},
  {aws:"TwinMaker",gcp:"Supply Chain Twin"}
]
```

**Sustainability:**
```js
// Efficiency
ch:[
  {aws:"Carbon Footprint",gcp:"Carbon Footprint"},
  {aws:"Graviton",gcp:"Tau VMs"},
  {aws:"Compute Optimizer",gcp:"Active Assist"}
]
```

**DR & Resilience:**
```js
// Backup & DR
ch:[
  {aws:"AWS Backup",gcp:"Backup and DR"},
  {aws:"Elastic DR",gcp:"Backup and DR"},
  {aws:"Resilience Hub",gcp:null}
]
// Multi-Region
ch:[
  {aws:"R53 failover",gcp:"Cloud DNS routing policies"},
  {aws:"Global Accelerator",gcp:"Global Load Balancer"},
  {aws:"DDB Global Tables",gcp:"Spanner"},
  {aws:"Aurora Global",gcp:"AlloyDB Cross-Region"}
]
// Chaos Engineering
ch:[
  {aws:"Fault Injection Service",gcp:"Fault Injection (preview)"}
]
```

**Media Services:**
```js
// Video Processing
ch:[
  {aws:"MediaConvert",gcp:"Transcoder API"},
  {aws:"MediaLive",gcp:"Live Stream API"},
  {aws:"MediaPackage",gcp:"Video Stitcher API"},
  {aws:"MediaTailor",gcp:"Video Stitcher API"}
]
// Interactive
ch:[
  {aws:"IVS",gcp:"Live Stream API"},
  {aws:"Chime SDK",gcp:"WebRTC (partner)"},
  {aws:"Kinesis Video Streams",gcp:"Video Intelligence API"}
]
```

**Contact Center:**
```js
// Core
ch:[
  {aws:"Amazon Connect",gcp:"CCAI Platform"},
  {aws:"Contact Lens",gcp:"CCAI Insights"},
  {aws:"Q in Connect",gcp:"CCAI Agent Assist"},
  {aws:"Connect Forecasting",gcp:null}
]
```

**End User Computing:**
```js
// Virtual Desktops
ch:[
  {aws:"WorkSpaces",gcp:"Chrome Remote Desktop"},
  {aws:"AppStream 2.0",gcp:null},
  {aws:"WorkSpaces Web",gcp:"Chrome Enterprise"},
  {aws:null,gcp:"Chromebook Plus"}
]
```

**Location:**
```js
// Geo Services
ch:[
  {aws:"Location Maps",gcp:"Maps Platform"},
  {aws:"Location Places",gcp:"Places API"},
  {aws:"Location Routes",gcp:"Routes API"},
  {aws:"Location Trackers",gcp:"Fleet Engine"}
]
```

**Healthcare:**
```js
// Health Data
ch:[
  {aws:"HealthLake",gcp:"Cloud Healthcare API"},
  {aws:"HealthImaging",gcp:"Healthcare NLP API"},
  {aws:"Omics",gcp:"Life Sciences API"},
  {aws:"Comprehend Medical",gcp:"Healthcare NLP API"}
]
```

**Blockchain:**
```js
// Ledger
ch:[
  {aws:"Managed Blockchain",gcp:"Blockchain Node Engine"},
  {aws:"QLDB",gcp:null}
]
```

**Quantum:**
```js
// Quantum Computing
ch:[
  {aws:"Amazon Braket",gcp:"Cirq + qsim"},
  {aws:"Braket Simulators",gcp:"qsim"},
  {aws:null,gcp:"Quantum AI Lab"}
]
```

**Gaming:**
```js
// Game Servers
ch:[
  {aws:"GameLift",gcp:"Agones"},
  {aws:"FlexMatch",gcp:"Open Match"},
  {aws:"GameLift FleetIQ",gcp:"Agones"}
]
```

**Robotics:**
```js
// Robot Dev
ch:[
  {aws:"RoboMaker",gcp:"Cloud Robotics Core"},
  {aws:"IoT Greengrass",gcp:"Edge TPU Runtime"}
]
```

**Supply Chain:**
```js
// Planning
ch:[
  {aws:"AWS Supply Chain",gcp:"Supply Chain Twin"},
  {aws:null,gcp:"Supply Chain Pulse"}
]
```

**Low-Code:**
```js
// Visual Builders
ch:[
  {aws:"Amplify Studio",gcp:"AppSheet"},
  {aws:"Workflow Studio",gcp:"Workflows"},
  {aws:"SM Canvas",gcp:"Vertex AI AutoML"}
]
```

**Digital Twins:**
```js
// Twin Platform
ch:[
  {aws:"TwinMaker",gcp:"Supply Chain Twin"},
  {aws:"SiteWise",gcp:null},
  {aws:"Monitron",gcp:null},
  {aws:"Lookout for Equipment",gcp:null}
]
```

**Step 3: Verify in browser**

Open `index.html`. Navigation should still work for domain and subcategory levels. At the leaf level, bubbles will break (since children are now objects not strings). This is expected — Task 5 builds the table view.

**Step 4: Commit**

```
git add data/tree.js
git commit -m "data: add GCP equivalents as {aws,gcp} objects for all 240+ services"
```

---

### Task 3: Add GCP service entries to services.js

**Files:**
- Modify: `data/services.js`

Add entries for every GCP service referenced in Task 2. Same format: `w` (what is it), `f` (fun fact), `l` (doc link).

**Step 1: Add all GCP entries**

Add entries to the `_SVC_DATA` object for every unique GCP service name used in tree.js. There are approximately 120-150 unique GCP services. Each entry follows the format:

```js
"Cloud Functions": {
  "w": "Event-driven serverless compute platform for simple functions.",
  "f": "Supports Node.js, Python, Go, Java, .NET, Ruby, and PHP.",
  "l": "https://cloud.google.com/functions/docs"
},
```

Group additions by domain (Compute, Storage, Database, etc.) and add them after the existing AWS entries — or intermix alphabetically. Consistency within the file is what matters.

Key GCP services to add (grouped by domain, not exhaustive — every unique name from Task 2 must have an entry):

**Compute:** Compute Engine, Autoscaler, Custom Images, Preemptible / Spot VMs, Migrate for Compute Engine, Sole-Tenant Nodes, Google Kubernetes Engine, Cloud Run, Artifact Registry, GKE Autopilot, Anthos, Cloud Functions, Workflows, App Engine, Firebase Hosting, Batch, HPC Toolkit, Cloud CDN Functions, Cloud CDN, Distributed Cloud Edge, Confidential VMs, Confidential GKE Nodes

**Storage:** Cloud Storage, Cloud Storage Archive, Autoclass, Retention Policies, Persistent Disk, Disk Snapshots, Local SSD, Filestore, NetApp Volumes, Parallelstore, Transfer Appliance, Storage Transfer Service, Backup and DR

**Database:** Cloud SQL, AlloyDB, AlloyDB Omni, Cloud SQL Auth Proxy, Bigtable, Bigtable Replication, Firestore, Spanner, Neo4j Aura (partner), Memorystore, Memorystore for Redis, Vertex AI Vector Search, AlloyDB AI, BigQuery

**Networking:** VPC, Cloud NAT, Private Service Connect, HTTP(S) Load Balancer, Network Load Balancer, Global Load Balancer, Cloud DNS, Cloud Interconnect, Cloud VPN, Network Connectivity Center, Firewall Rules, Cloud Armor, Cloud Firewall, Apigee, Traffic Director, Service Directory

**Security:** Cloud IAM, Cloud Identity, Identity Platform, IAM Recommender, Workload Identity Federation, Cloud KMS, Cloud HSM, Secret Manager, Certificate Manager, Certificate Authority Service, Security Command Center, Chronicle, Container Analysis, Sensitive Data Protection, Resource Manager, Cloud Audit Logs, Cloud Asset Inventory, Assured Workloads, Compliance Reports Manager, BeyondCorp Enterprise, Binary Authorization, Architecture Framework, Active Assist, Service Catalog

**Data & Analytics:** Pub/Sub, Managed Kafka, Dataflow, Application Integration, Dataproc, Dataproc Serverless, Dataplex, Analytics Hub, Looker, Elasticsearch on GCP, Vertex AI Search, Dataplex Data Quality, BigQuery Clean Rooms

**AI & ML:** Vertex AI Workbench, Vertex AI Pipelines, Vertex AI AutoML, Vertex Explainable AI, Vertex AI Model Garden, Vertex AI Agent Builder, Vertex AI Safety, Gemini Code Assist, Gemini for Workspace, Gemini API, Vision AI, Document AI, Natural Language AI, Translation AI, Speech-to-Text, Text-to-Speech, Recommendations AI, Anti Money Laundering AI, Vertex AI Forecasting, A3 (H100), TPU v5p, TPU v5e, JAX / TPU SDK, Dialogflow, CCAI

**Specialty:** Eventarc, Cloud Composer, SendGrid (partner), Firebase Cloud Messaging, Cloud Build, Cloud Deploy, Deployment Manager, Pulumi / Terraform, Cloud Monitoring, Cloud Trace, Cloud Monitoring Dashboards, Managed Prometheus, VM Manager, Incident Manager, Error Reporting, Cost Management, Budget Alerts, Migration Center, Rapid Assessment, Migrate for Compute Engine, Database Migration Service, Migrate for Anthos, Dual Run, Distributed Cloud, Google Cloud VMware Engine, IoT Core (deprecated), Cloud IoT (partner solutions), Edge TPU Runtime, Supply Chain Twin, Tau VMs, Carbon Footprint, Cloud DNS routing policies, AlloyDB Cross-Region, Fault Injection (preview), Transcoder API, Live Stream API, Video Stitcher API, WebRTC (partner), Video Intelligence API, CCAI Platform, CCAI Insights, CCAI Agent Assist, Chrome Remote Desktop, Chrome Enterprise, Chromebook Plus, Maps Platform, Places API, Routes API, Fleet Engine, Cloud Healthcare API, Healthcare NLP API, Life Sciences API, Blockchain Node Engine, Cirq + qsim, qsim, Quantum AI Lab, Agones, Open Match, Cloud Robotics Core, Supply Chain Pulse, AppSheet, Workflows

**Step 2: Verify**

Open browser, ensure the page loads without JS errors (check console). The existing AWS service panel should still work.

**Step 3: Commit**

```
git add data/services.js
git commit -m "data: add 150+ GCP service descriptions, facts, and doc links"
```

---

### Task 4: Update index.html — detect comparison leaves and render table

**Files:**
- Modify: `index.html` (lines 155-572)

This is the core UI task. We need to:
1. Detect when children are `{aws, gcp}` comparison objects (not tree nodes with `ch` or plain strings)
2. Show a comparison table instead of bubbles for those cases
3. Animate the transition

**Step 1: Add CSS for comparison table**

Add inside the `<style>` block (after line 57, before `</style>`):

```css
.cmp-wrap{position:fixed;inset:0;z-index:10;overflow-y:auto;opacity:0;transition:opacity .4s ease;pointer-events:none;display:flex;justify-content:center}
.cmp-wrap.open{opacity:1;pointer-events:auto}
.cmp-table{position:relative;max-width:900px;width:92%;margin:60px auto 40px;padding-bottom:40px}
.cmp-back{position:sticky;top:0;z-index:11;display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:10px;border:1px solid rgba(48,54,61,.7);background:rgba(13,17,23,.85);backdrop-filter:blur(12px);color:#8b949e;font-size:13px;cursor:pointer;margin-bottom:16px;transition:all .2s}
.cmp-back:hover{color:#e6edf3;border-color:rgba(88,166,255,.4)}
.cmp-title{font-size:22px;font-weight:700;color:#e6edf3;margin-bottom:6px}
.cmp-sub{font-size:13px;color:#484f58;margin-bottom:24px}
.cmp-section{margin-bottom:28px}
.cmp-section-hdr{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;padding:8px 0;border-bottom:1px solid rgba(48,54,61,.5);margin-bottom:2px;display:flex;align-items:center;gap:8px}
.cmp-section-name{flex:1}
.cmp-hdr{display:grid;grid-template-columns:1fr 1fr;gap:1px;padding:6px 14px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:#484f58}
.cmp-row{display:grid;grid-template-columns:1fr 1fr;gap:1px;padding:10px 14px;border-radius:8px;cursor:pointer;transition:background .15s}
.cmp-row:hover{background:rgba(88,166,255,.06)}
.cmp-row.expanded{background:rgba(88,166,255,.04);border-radius:8px 8px 0 0}
.cmp-cell{font-size:14px;color:#c9d1d9;display:flex;align-items:center;gap:8px}
.cmp-cell.empty{color:#484f58;font-style:italic;font-size:12px}
.cmp-badge{font-size:9px;font-weight:600;padding:2px 6px;border-radius:4px;text-transform:uppercase;letter-spacing:.04em}
.cmp-badge.aws{background:rgba(255,153,0,.15);color:#f90}
.cmp-badge.gcp{background:rgba(66,133,244,.15);color:#4285f4}
.cmp-detail{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:12px 14px 16px;background:rgba(13,17,23,.5);border:1px solid rgba(48,54,61,.3);border-radius:0 0 8px 8px;margin-bottom:4px}
.cmp-detail-col{font-size:12px;color:#8b949e;line-height:1.6}
.cmp-detail-col .svc-name{font-size:13px;font-weight:600;color:#e6edf3;margin-bottom:4px}
.cmp-detail-col .svc-fact{font-size:11px;color:#a5d6ff;background:rgba(88,166,255,.06);border:1px solid rgba(88,166,255,.1);border-radius:8px;padding:8px 10px;margin:8px 0}
.cmp-detail-col a{color:#58a6ff;text-decoration:none;font-size:11px}
.cmp-detail-col a:hover{text-decoration:underline}
.cmp-also{margin-top:8px}
.cmp-also-hdr{font-size:10px;font-weight:600;color:#484f58;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;padding:4px 0}
.cmp-also .cmp-row{opacity:.7}
@media(max-width:768px){
  .cmp-table{width:96%;margin:48px auto 24px}
  .cmp-row,.cmp-hdr,.cmp-detail{grid-template-columns:1fr 1fr;gap:4px;padding:8px 10px}
  .cmp-cell{font-size:12px}
  .cmp-title{font-size:18px}
}
```

**Step 2: Add comparison table container in HTML**

After the `<div class="crumb" id="crumb"></div>` line (line 68), add:

```html
<div class="cmp-wrap" id="cmpWrap"><div class="cmp-table" id="cmpTable"></div></div>
```

**Step 3: Add helper to detect comparison leaves**

In the `<script>` block (around line 155), add a helper function:

```js
function isComparisonLevel(node){
  // A node's children are comparison objects if they have aws/gcp keys
  const ch=node.ch||[];
  if(!ch.length) return false;
  // Check subcategories: if any subcategory's children are {aws,gcp} objects
  if(ch[0] && ch[0].ch && ch[0].ch[0] && typeof ch[0].ch[0]==='object' && ('aws' in ch[0].ch[0]||'gcp' in ch[0].ch[0])) return true;
  // Direct children are comparison objects
  if(typeof ch[0]==='object' && ('aws' in ch[0]||'gcp' in ch[0])) return true;
  return false;
}
```

**Step 4: Add renderComparisonTable function**

```js
function renderComparisonTable(domainNode, color){
  const wrap=document.getElementById('cmpWrap');
  const table=document.getElementById('cmpTable');
  const subcats=domainNode.ch||[];

  let html=`<button class="cmp-back" id="cmpBack">← Back</button>`;
  html+=`<div class="cmp-title" style="color:${color}">${domainNode.icon||''} ${domainNode.name.replace('\\n',' ')}</div>`;
  html+=`<div class="cmp-sub">${subcats.length} subcategories · AWS vs GCP comparison</div>`;

  subcats.forEach(sub=>{
    const pairs=sub.ch||[];
    const matched=pairs.filter(p=>p.aws&&p.gcp);
    const awsOnly=pairs.filter(p=>p.aws&&!p.gcp);
    const gcpOnly=pairs.filter(p=>!p.aws&&p.gcp);

    html+=`<div class="cmp-section">`;
    html+=`<div class="cmp-section-hdr" style="color:${color}"><span class="cmp-section-name">${sub.name}</span><span style="font-size:10px;color:#484f58;font-weight:400">${sub.desc||''}</span></div>`;
    html+=`<div class="cmp-hdr"><span><span class="cmp-badge aws">AWS</span></span><span><span class="cmp-badge gcp">GCP</span></span></div>`;

    // Matched pairs
    matched.forEach(p=>{
      html+=`<div class="cmp-row" data-aws="${p.aws||''}" data-gcp="${p.gcp||''}">`;
      html+=`<div class="cmp-cell">${p.aws}</div>`;
      html+=`<div class="cmp-cell">${p.gcp}</div>`;
      html+=`</div>`;
      html+=`<div class="cmp-detail" style="display:none" data-detail-for="${p.aws||''}|${p.gcp||''}"></div>`;
    });

    // AWS only
    if(awsOnly.length){
      html+=`<div class="cmp-also"><div class="cmp-also-hdr">Also in AWS</div>`;
      awsOnly.forEach(p=>{
        html+=`<div class="cmp-row" data-aws="${p.aws}" data-gcp="">`;
        html+=`<div class="cmp-cell">${p.aws}</div>`;
        html+=`<div class="cmp-cell empty">No direct equivalent</div>`;
        html+=`</div>`;
        html+=`<div class="cmp-detail" style="display:none" data-detail-for="${p.aws}|"></div>`;
      });
      html+=`</div>`;
    }

    // GCP only
    if(gcpOnly.length){
      html+=`<div class="cmp-also"><div class="cmp-also-hdr">Also in GCP</div>`;
      gcpOnly.forEach(p=>{
        html+=`<div class="cmp-row" data-aws="" data-gcp="${p.gcp}">`;
        html+=`<div class="cmp-cell empty">No direct equivalent</div>`;
        html+=`<div class="cmp-cell">${p.gcp}</div>`;
        html+=`</div>`;
        html+=`<div class="cmp-detail" style="display:none" data-detail-for="|${p.gcp}"></div>`;
      });
      html+=`</div>`;
    }

    html+=`</div>`; // close section
  });

  table.innerHTML=html;

  // Back button
  document.getElementById('cmpBack').onclick=()=>{
    wrap.classList.remove('open');
    svg.style.opacity='1';
    setTimeout(()=>{goBack();},300);
  };

  // Row expand/collapse
  table.querySelectorAll('.cmp-row').forEach(row=>{
    row.addEventListener('click',()=>{
      const awsName=row.dataset.aws;
      const gcpName=row.dataset.gcp;
      const key=`${awsName}|${gcpName}`;
      const detail=table.querySelector(`[data-detail-for="${key}"]`);
      if(!detail)return;

      const isOpen=detail.style.display!=='none';
      // Close all
      table.querySelectorAll('.cmp-detail').forEach(d=>d.style.display='none');
      table.querySelectorAll('.cmp-row.expanded').forEach(r=>r.classList.remove('expanded'));

      if(!isOpen){
        row.classList.add('expanded');
        const awsInfo=SVC[awsName]||{};
        const gcpInfo=SVC[gcpName]||{};
        let dh='';
        // AWS column
        dh+=`<div class="cmp-detail-col">`;
        if(awsName){
          dh+=`<div class="svc-name">${awsName}</div>`;
          dh+=`<div>${awsInfo.w||'An AWS cloud service.'}</div>`;
          if(awsInfo.f)dh+=`<div class="svc-fact">${awsInfo.f}</div>`;
          if(awsInfo.l)dh+=`<a href="${awsInfo.l}" target="_blank" rel="noopener">Docs →</a>`;
        } else {
          dh+=`<div style="color:#484f58;font-style:italic">No AWS equivalent</div>`;
        }
        dh+=`</div>`;
        // GCP column
        dh+=`<div class="cmp-detail-col">`;
        if(gcpName){
          dh+=`<div class="svc-name">${gcpName}</div>`;
          dh+=`<div>${gcpInfo.w||'A Google Cloud service.'}</div>`;
          if(gcpInfo.f)dh+=`<div class="svc-fact">${gcpInfo.f}</div>`;
          if(gcpInfo.l)dh+=`<a href="${gcpInfo.l}" target="_blank" rel="noopener">Docs →</a>`;
        } else {
          dh+=`<div style="color:#484f58;font-style:italic">No GCP equivalent</div>`;
        }
        dh+=`</div>`;
        detail.innerHTML=dh;
        detail.style.display='grid';
      }
    });
  });

  // Show table, hide SVG
  svg.style.transition='opacity .3s ease';
  svg.style.opacity='0';
  setTimeout(()=>{wrap.classList.add('open');},200);
}
```

**Step 5: Modify drillIn() to trigger table view**

In the `drillIn` function (around line 371), add a check before the normal bubble rendering:

```js
function drillIn(treeNode){
  if(busy)return;busy=true;
  if(treeNode.aws&&!treeNode.ch){busy=false;return;}

  // Check if this node's children contain comparison objects
  if(isComparisonLevel(treeNode)){
    const col=treeNode.color||parentColor();
    shiftParticleColor(col);
    spawnRipple(0,0,col);
    // Animate out bubbles
    currentEls.forEach((el,i)=>{
      el.g.style.transition=`transform .3s ease ${i*10}ms, opacity .2s ease ${i*10}ms`;
      el.g.setAttribute('transform','translate(0,0) scale(0)');el.g.style.opacity='0';
      el.line.style.transition='opacity .2s ease';el.line.style.opacity='0';
    });
    viewStack.push(treeNode);
    updateCrumb();
    setTimeout(()=>{
      renderComparisonTable(treeNode,col);
      busy=false;
    },350);
    return;
  }

  // ... existing drillIn code below ...
```

**Step 6: Modify goBack() to handle returning from table view**

Update goBack to close the table wrapper if it's open:

```js
function goBack(){
  if(busy||viewStack.length<=1)return;busy=true;
  const wrap=document.getElementById('cmpWrap');
  if(wrap.classList.contains('open')){
    wrap.classList.remove('open');
    setTimeout(()=>{
      viewStack.pop();
      svg.style.transition='opacity .3s ease';
      svg.style.opacity='1';
      shiftParticleColor(currentNode().color||'#58a6ff');
      renderView(true);
      busy=false;
    },350);
    return;
  }
  // ... existing goBack code ...
```

**Step 7: Update the leaf detection in renderView**

In `renderView` (line 200), the `isLeaf` check needs updating since leaves are now objects:

```js
// Replace line 200:
const isLeaf=typeof children[0]==='string';
// With:
const isLeaf=typeof children[0]==='string'||(typeof children[0]==='object'&&('aws' in children[0]||'gcp' in children[0]));
```

But since comparison leaves are now handled by the table view (via `isComparisonLevel` in `drillIn`), `renderView` should never see them. This line is a safety fallback.

**Step 8: Update breadcrumb click handler**

Update the crumb click handler to close the table if navigating backward:

```js
crumbEl.addEventListener('click',e=>{
  const idx=e.target.dataset.idx;
  if(idx==null||busy)return;
  busy=true;
  const wrap=document.getElementById('cmpWrap');
  if(wrap.classList.contains('open')) wrap.classList.remove('open');
  const target=parseInt(idx);
  svg.style.transition='opacity .3s ease';
  svg.style.opacity='1';
  currentEls.forEach(el=>{el.g.style.transition='opacity .2s';el.g.style.opacity='0';el.line.style.transition='opacity .2s';el.line.style.opacity='0';});
  setTimeout(()=>{
    viewStack.length=target+1;
    if(viewStack.length===1) drawRootView();
    else renderView(true);
    busy=false;
  },250);
});
```

**Step 9: Verify in browser**

1. Open `index.html`
2. Click any domain (e.g., Compute) — should show subcategory bubbles
3. Click a subcategory (e.g., Containers) — should morph to comparison table
4. Verify matched pairs appear first, then "Also in AWS" / "Also in GCP"
5. Click a row — should expand showing descriptions for both providers
6. Click back button — should morph back to bubbles
7. Test breadcrumb navigation
8. Test on mobile viewport (Chrome DevTools)

**Step 10: Commit**

```
git add index.html
git commit -m "feat: add comparison table view with AWS vs GCP side-by-side layout"
```

---

### Task 5: Update the service panel for comparison objects

**Files:**
- Modify: `index.html` (openServicePanel function, around line 437)

The existing `openServicePanel` was designed for single AWS services. Since leaf-level services now open via the comparison table (Task 4), the slide-out panel is no longer the primary detail view. However, keep it functional as a fallback.

**Step 1: Update openServicePanel to accept provider context**

```js
async function openServicePanel(name,color,provider){
  const info=SVC[name]||SVC[name.replace('IoT ','')]||SVC['Amazon '+name]||SVC['AWS '+name]||SVC['Google '+name];
  const w=info?info.w:(provider==='gcp'?'A Google Cloud service.':'An AWS cloud service.');
  const f=info?info.f:'One of the services in the cloud platform.';
  const l=info?info.l:(provider==='gcp'?'https://cloud.google.com/':'https://docs.aws.amazon.com/');
  const badge=provider==='gcp'?'<span class="cmp-badge gcp" style="margin-left:8px">GCP</span>':'<span class="cmp-badge aws" style="margin-left:8px">AWS</span>';
  svcBody.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px">
      <span class="svc-icon">${getParentIcon(name)}</span>
      <div class="svc-name" style="color:${color};margin:0">${name}${badge}</div>
    </div>
    <div class="svc-section"><div class="svc-label">What is it</div><div class="svc-text">${w}</div></div>
    <div class="svc-fact"><div class="svc-label">Did you know</div><div class="svc-text">${f}</div></div>
    <a class="svc-link" href="${l}" target="_blank" rel="noopener">Developer Guide</a>`;
  svcPanel.classList.add('open');svcOverlay.classList.add('open');
}
```

**Step 2: Commit**

```
git add index.html
git commit -m "feat: update service panel to support both AWS and GCP providers"
```

---

### Task 6: Regenerate services.json

**Files:**
- Modify: `data/services.json`

**Step 1: Generate JSON from services.js**

Open browser console on the page and run:

```js
console.log(JSON.stringify(_SVC_DATA, null, 2));
```

Copy output and save to `data/services.json`.

Alternatively, use node:

```bash
cd cloud-computing-mindmap-main
node -e "eval(require('fs').readFileSync('data/services.js','utf8')); console.log(JSON.stringify(_SVC_DATA,null,2))" > data/services.json
```

**Step 2: Commit**

```
git add data/services.json
git commit -m "chore: regenerate services.json with GCP entries"
```

---

### Task 7: Final polish and mobile testing

**Files:**
- Modify: `index.html`

**Step 1: Update hint text**

Change the hint text (line 67) to reflect new navigation:

```js
'click to explore domains · click subcategory for AWS vs GCP comparison · scroll to zoom'
```

And the mobile version:

```js
'tap to explore · tap subcategory for comparison · pinch to zoom'
```

**Step 2: Update page title**

```html
<title>Cloud Computing — Multi-Cloud Interactive Mind Map</title>
```

**Step 3: Verify everything end-to-end**

1. Root → 25 domains visible on hover, clickable
2. Domain → subcategory bubbles
3. Subcategory click → comparison table
4. Row expand → both AWS & GCP details
5. Back navigation (button + breadcrumb)
6. Particle color shifts per domain
7. Mobile: touch, pinch zoom, table scrollable
8. No console errors

**Step 4: Commit**

```
git add index.html
git commit -m "polish: update hints, title, and verify mobile responsiveness"
```

---

## Task Dependency Graph

```
Task 1 (flatten tree.js)
  ↓
Task 2 (add GCP mappings to tree.js) ←→ Task 3 (add GCP entries to services.js) [parallel]
  ↓
Task 4 (comparison table UI in index.html) — depends on Tasks 1, 2, 3
  ↓
Task 5 (update service panel) — depends on Task 4
  ↓
Task 6 (regenerate services.json) — depends on Task 3
  ↓
Task 7 (polish + verify) — depends on all above
```

Tasks 2 and 3 can be done in parallel as they modify different files.
