// Cloud Computing Mindmap — Tree Data
// 6 Core Domains + 18 Specialty Domains

const CORE=[
{name:"Compute",icon:"⚡",color:"#58a6ff",ch:[
{name:"Virtual Machines",desc:"On-demand, spot, reserved & bare metal",ch:["Amazon EC2","EC2 Auto Scaling","EC2 Image Builder","Spot Instances","VM Import/Export"]},
{name:"Containers",desc:"Managed K8s & container services",ch:["Amazon EKS","Amazon ECS","Amazon ECR","AWS Fargate","Karpenter"]},
{name:"Serverless",desc:"FaaS & orchestration",ch:["AWS Lambda","Step Functions","Lambda SnapStart","Lambda Layers"]},
{name:"PaaS",desc:"Managed app platforms",ch:["Elastic Beanstalk","App Runner","AWS Amplify"]},
{name:"Batch & HPC",desc:"Job scheduling & parallel compute",ch:["AWS Batch","ParallelCluster","Elastic Fabric Adapter"]},
{name:"Edge Computing",desc:"Compute at edge & local zones",ch:["Lambda@Edge","CloudFront Functions","Wavelength","Local Zones"]},
{name:"Confidential Compute",desc:"Isolated & secure execution",ch:["Nitro Enclaves"]}]},

{name:"Storage",icon:"💾",color:"#f78166",ch:[
{name:"Object Storage",desc:"Scalable object storage & archival",ch:["Amazon S3","S3 Glacier","S3 Intelligent-Tiering","S3 Object Lock"]},
{name:"Block Storage",desc:"Persistent volumes",ch:["Amazon EBS","EBS Snapshots","Instance Store"]},
{name:"File Storage",desc:"Managed NFS, SMB & parallel FS",ch:["Amazon EFS","FSx for Windows","FSx for Lustre","FSx for ONTAP"]},
{name:"Hybrid & Transfer",desc:"Gateways, sync & physical transfer",ch:["Storage Gateway","DataSync","Snow Family","Transfer Family"]},
{name:"Backup",desc:"Managed backup & DR",ch:["AWS Backup","Elastic Disaster Recovery"]}]},

{name:"Database",icon:"🗄️",color:"#d2a8ff",ch:[
{name:"Relational",desc:"Managed & cloud-native RDBMS",ch:["Amazon RDS","Aurora","Aurora Serverless v2","RDS Proxy"]},
{name:"NoSQL",desc:"Key-value & document stores",ch:["DynamoDB","DynamoDB Global Tables","DocumentDB"]},
{name:"Graph & Specialty",desc:"Graph, time-series, ledger",ch:["Neptune","Timestream","QLDB","Keyspaces"]},
{name:"Caching & Vector",desc:"In-memory & vector search",ch:["ElastiCache","MemoryDB","OpenSearch vector","pgvector"]},
{name:"Data Warehouse",desc:"Columnar analytics",ch:["Redshift","Redshift Serverless","Athena"]}]},

{name:"Networking",icon:"🌐",color:"#7ee787",ch:[
{name:"VPC",desc:"Virtual networks & private access",ch:["Amazon VPC","NAT Gateway","VPC Endpoints","PrivateLink"]},
{name:"Load Balancing",desc:"L4/L7 & global",ch:["ALB","NLB","Global Accelerator"]},
{name:"DNS & CDN",desc:"Domain & content delivery",ch:["Route 53","CloudFront"]},
{name:"Hybrid Connectivity",desc:"VPN, dedicated & WAN",ch:["Direct Connect","Site-to-Site VPN","Transit Gateway","Cloud WAN"]},
{name:"Network Security",desc:"Firewalls, DDoS & WAF",ch:["Security Groups","WAF","Shield","Network Firewall"]},
{name:"Mesh & API",desc:"Service mesh & API mgmt",ch:["API Gateway","AppSync","VPC Lattice","Cloud Map"]}]},

{name:"Security &\nGovernance",icon:"🔒",color:"#f0883e",ch:[
{name:"IAM & Identity",desc:"Users, roles, federation",ch:["AWS IAM","Identity Center","Cognito","Access Analyzer","Roles Anywhere"]},
{name:"Encryption & Secrets",desc:"Keys, HSM, secrets, certs",ch:["KMS","CloudHSM","Secrets Manager","ACM","Private CA"]},
{name:"Threat Detection",desc:"SIEM, scanning & intel",ch:["GuardDuty","Security Hub","Detective","Inspector","Macie"]},
{name:"Compliance & Audit",desc:"Org policies, config & audit",ch:["Organizations","CloudTrail","Config","Control Tower","Audit Manager","Artifact"]},
{name:"Zero Trust",desc:"Identity-aware access & signing",ch:["Verified Access","Signer"]},
{name:"Well-Architected",desc:"Framework & optimization",ch:["WA Tool","Trusted Advisor","Service Catalog"]}]},

{name:"Data & Analytics",icon:"📊",color:"#79c0ff",ch:[
{name:"Streaming",desc:"Real-time data streaming",ch:["Kinesis","MSK","Data Firehose","AppFlow"]},
{name:"Processing & ETL",desc:"Batch/stream processing",ch:["EMR","EMR Serverless","Glue","Managed Flink"]},
{name:"Data Lake & Warehouse",desc:"Lakehouse & analytics",ch:["Lake Formation","Redshift","Athena","Data Exchange"]},
{name:"BI & Search",desc:"Dashboards & search",ch:["Quick Suite","OpenSearch","OpenSearch Serverless","Kendra","CloudSearch","Entity Resolution"]},
{name:"Data Governance",desc:"Catalog, quality & clean rooms",ch:["DataZone","Glue Data Quality","Clean Rooms"]}]},

{name:"AI & ML",icon:"🧠",color:"#e3b341",ch:[
{name:"ML Platform",desc:"End-to-end ML & MLOps",ch:["SageMaker Studio","SM Pipelines","SM Canvas","Clarify"]},
{name:"Generative AI",desc:"Foundation models & agents",ch:["Bedrock","Bedrock Agents","Bedrock AgentCore","Bedrock KB","Guardrails","Q Developer","Q Business","Kiro","PartyRock"]},
{name:"AI Services",desc:"Pre-built AI APIs",ch:["Rekognition","Textract","Comprehend","Translate","Transcribe","Polly","Personalize","Fraud Detector","Forecast"]},
{name:"AI Infrastructure",desc:"GPU & custom silicon",ch:["P5 (H100)","Trn2 (Trainium)","Inf2 (Inferentia)","Neuron SDK"]},
{name:"Conversational AI",desc:"Chatbots & contact center",ch:["Lex","Connect"]}]}
];

const SPECIALTY=[
// Moved from Core
{name:"App Integration",icon:"🔗",color:"#ff7b72",ch:[
{name:"Messaging",desc:"Queues, pub/sub & brokers",ch:["SQS","SNS","Amazon MQ"]},
{name:"Events & Workflows",desc:"Event bus & orchestration",ch:["EventBridge","EB Pipes","Step Functions","MWAA"]},
{name:"Notifications",desc:"Email, SMS & push",ch:["SES","Pinpoint"]}]},
{name:"DevOps",icon:"🔧",color:"#a5d6ff",ch:[
{name:"CI/CD",desc:"Build, test & deploy",ch:["CodePipeline","CodeBuild","CodeDeploy","CodeCatalyst"]},
{name:"IaC",desc:"Infrastructure as Code",ch:["CloudFormation","CDK","SAM","CFN Guard"]},
{name:"Observability",desc:"Metrics, logs & traces",ch:["CloudWatch","X-Ray","Managed Grafana","Managed Prometheus"]},
{name:"Operations",desc:"Systems mgmt & AIOps",ch:["Systems Manager","Incident Manager","DevOps Guru"]},
{name:"FinOps",desc:"Cost management",ch:["Cost Explorer","Budgets","Compute Optimizer"]}]},
{name:"Migration",icon:"🚀",color:"#b392f0",ch:[
{name:"Assessment",desc:"Discovery & planning",ch:["Migration Hub","App Discovery","Migration Evaluator"]},
{name:"Server & DB",desc:"VM & database migration",ch:["MGN","DMS","Schema Conversion Tool"]},
{name:"Modernization",desc:"Containerize & refactor",ch:["App2Container","Refactor Spaces","Mainframe Mod"]}]},
{name:"Hybrid Cloud",icon:"☁️",color:"#388bfd",ch:[
{name:"Hybrid Platforms",desc:"On-prem extensions",ch:["Outposts","EKS Anywhere","ECS Anywhere"]},
{name:"VMware",desc:"Managed VMware",ch:["VMware Cloud on AWS"]}]},
{name:"IoT",icon:"📡",color:"#d29922",ch:[
{name:"Core & Connect",desc:"MQTT, SDKs & protocols",ch:["IoT Core","LoRaWAN","FreeRTOS"]},
{name:"Device Mgmt",desc:"Registry, security & OTA",ch:["Device Mgmt","Device Defender","Device Shadow"]},
{name:"Data & Edge",desc:"Analytics & edge",ch:["IoT Analytics","SiteWise","Greengrass","TwinMaker"]}]},
{name:"Sustainability",icon:"🌱",color:"#3fb950",ch:[
{name:"Efficiency",desc:"Footprint & optimization",ch:["Carbon Footprint","Graviton","Compute Optimizer"]}]},
{name:"DR & Resilience",icon:"🛡️",color:"#da3633",ch:[
{name:"Backup & DR",desc:"Managed backup & recovery",ch:["AWS Backup","Elastic DR","Resilience Hub"]},
{name:"Multi-Region",desc:"Failover & replication",ch:["R53 failover","Global Accelerator","DDB Global Tables","Aurora Global"]},
{name:"Chaos Engineering",desc:"Fault injection & testing",ch:["Fault Injection Service"]}]},
// Original Specialty domains
{name:"Media Services",icon:"🎬",color:"#f78166",ch:[
{name:"Video Processing",desc:"Transcoding & packaging",ch:["MediaConvert","MediaLive","MediaPackage","MediaTailor"]},
{name:"Interactive",desc:"Streaming & conferencing",ch:["IVS","Chime SDK","Kinesis Video Streams"]}]},
{name:"Contact Center",icon:"📞",color:"#ff7b72",ch:[
{name:"Core",desc:"Omnichannel contact center",ch:["Amazon Connect","Contact Lens","Q in Connect","Connect Forecasting"]}]},
{name:"End User Computing",icon:"🖥️",color:"#a5d6ff",ch:[
{name:"Virtual Desktops",desc:"Desktop & app streaming",ch:["WorkSpaces","AppStream 2.0","WorkSpaces Web"]}]},
{name:"Location",icon:"📍",color:"#7ee787",ch:[
{name:"Geo Services",desc:"Maps, routing & tracking",ch:["Location Maps","Location Places","Location Routes","Location Trackers"]}]},
{name:"Healthcare",icon:"🏥",color:"#79c0ff",ch:[
{name:"Health Data",desc:"FHIR, imaging & genomics",ch:["HealthLake","HealthImaging","Omics","Comprehend Medical"]}]},
{name:"Blockchain",icon:"🔗",color:"#d2a8ff",ch:[
{name:"Ledger",desc:"Managed blockchain & ledger",ch:["Managed Blockchain","QLDB"]}]},
{name:"Quantum",icon:"⚛️",color:"#b392f0",ch:[
{name:"Quantum Computing",desc:"Access to quantum processors",ch:["Amazon Braket","Braket Simulators"]}]},
{name:"Gaming",icon:"🎮",color:"#56d364",ch:[
{name:"Game Servers",desc:"Hosting & matchmaking",ch:["GameLift","FlexMatch","GameLift FleetIQ"]}]},
{name:"Robotics",icon:"🤖",color:"#e3b341",ch:[
{name:"Robot Dev",desc:"Simulation & fleet mgmt",ch:["RoboMaker","IoT Greengrass"]}]},
{name:"Supply Chain",icon:"📦",color:"#f0883e",ch:[
{name:"Planning",desc:"Demand & inventory",ch:["AWS Supply Chain"]}]},
{name:"Low-Code",icon:"🧩",color:"#58a6ff",ch:[
{name:"Visual Builders",desc:"No-code app & ML tools",ch:["Amplify Studio","Workflow Studio","SM Canvas"]}]},
{name:"Digital Twins",icon:"🏭",color:"#d29922",ch:[
{name:"Twin Platform",desc:"Industrial digital twins",ch:["TwinMaker","SiteWise","Monitron","Lookout for Equipment"]}]}
];

const ROOT={name:'Cloud Computing',icon:'☁️',color:'#58a6ff',ch:[
  {name:'Core\nDomains',icon:'🏗️',color:'#58a6ff',ch:CORE},
  {name:'Specialty\nDomains',icon:'✦',color:'#8b949e',ch:SPECIALTY}
]};
