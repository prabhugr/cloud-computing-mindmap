const _SVC_DATA = {
"Amazon EC2": {
"w": "Virtual servers in the cloud for computing workloads.",
"f": "Offers over 750 instance types optimized for different workloads.",
"l": "https://docs.aws.amazon.com/ec2/latest/userguide/concepts.html"
},
"EC2 Auto Scaling": {
"w": "Automatically adjusts EC2 instance capacity based on demand.",
"f": "Can scale across multiple Availability Zones simultaneously.",
"l": "https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html"
},
"EC2 Image Builder": {
"w": "Automates creation and maintenance of custom AMIs.",
"f": "Includes built-in security scanning and compliance testing.",
"l": "https://docs.aws.amazon.com/imagebuilder/latest/userguide/what-is-image-builder.html"
},
"Spot Instances": {
"w": "Spare EC2 capacity available at up to 90% discount.",
"f": "Prices fluctuate based on supply and demand in real-time.",
"l": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-spot-instances.html"
},
"VM Import/Export": {
"w": "Import virtual machine images from on-premises to AWS.",
"f": "Supports VMware vSphere, Microsoft Hyper-V, and Citrix Xen.",
"l": "https://docs.aws.amazon.com/vm-import/latest/userguide/what-is-vmimport.html"
},
"Amazon EKS": {
"w": "Managed Kubernetes service for container orchestration.",
"f": "Automatically scales Kubernetes control plane across multiple AZs.",
"l": "https://docs.aws.amazon.com/eks/latest/userguide/what-is-eks.html"
},
"Amazon ECS": {
"w": "Fully managed container orchestration service.",
"f": "Integrates natively with AWS services like ALB and IAM.",
"l": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html"
},
"Amazon ECR": {
"w": "Fully managed Docker container registry service.",
"f": "Automatically encrypts images at rest and in transit.",
"l": "https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html"
},
"AWS Fargate": {
"w": "Serverless compute engine for containers.",
"f": "Charges only for vCPU and memory resources containers use.",
"l": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html"
},
"Karpenter": {
"w": "Open-source Kubernetes cluster autoscaler for AWS.",
"f": "Can provision nodes in seconds, not minutes.",
"l": "https://docs.aws.amazon.com/eks/latest/best-practices/karpenter.html"
},
"AWS Lambda": {
"w": "Serverless compute service that runs code without servers.",
"f": "Was the first major serverless compute service, launched in 2014.",
"l": "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
},
"Step Functions": {
"w": "Serverless workflow orchestration with visual designer.",
"f": "Standard workflows can run for up to one year.",
"l": "https://docs.aws.amazon.com/step-functions/latest/dg/welcome.html"
},
"Lambda SnapStart": {
"w": "Reduces Lambda cold start times for Java functions.",
"f": "Can reduce cold start times by up to 10x.",
"l": "https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html"
},
"Lambda Layers": {
"w": "Share code and dependencies across multiple Lambda functions.",
"f": "Can include up to 5 layers per function.",
"l": "https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html"
},
"Elastic Beanstalk": {
"w": "Platform service for deploying web applications and services.",
"f": "Supports multiple programming languages and frameworks automatically.",
"l": "https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/Welcome.html"
},
"App Runner": {
"w": "Fully managed service for containerized web applications.",
"f": "Automatically builds from source code or container images.",
"l": "https://docs.aws.amazon.com/apprunner/latest/dg/what-is-apprunner.html"
},
"AWS Amplify": {
"w": "Full-stack development platform for web and mobile apps.",
"f": "Includes built-in CI/CD and hosting capabilities.",
"l": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html"
},
"AWS Batch": {
"w": "Fully managed batch computing service.",
"f": "Automatically provisions optimal compute resources based on job requirements.",
"l": "https://docs.aws.amazon.com/batch/latest/userguide/what-is-batch.html"
},
"ParallelCluster": {
"w": "Open-source cluster management tool for HPC workloads.",
"f": "Supports multiple job schedulers including Slurm.",
"l": "https://docs.aws.amazon.com/parallelcluster/latest/ug/what-is-aws-parallelcluster.html"
},
"Elastic Fabric Adapter": {
"w": "Network interface for high-performance computing applications.",
"f": "Provides sub-microsecond latencies for inter-node communication.",
"l": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html"
},
"Lambda@Edge": {
"w": "Run Lambda functions at CloudFront edge locations globally.",
"f": "Executes closer to users for lower latency responses.",
"l": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-at-the-edge.html"
},
"CloudFront Functions": {
"w": "Lightweight JavaScript runtime for CloudFront edge locations.",
"f": "Sub-millisecond startup times — executes in less than 1ms.",
"l": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cloudfront-functions.html"
},
"Wavelength": {
"w": "Ultra-low latency computing at 5G network edge.",
"f": "Embedded within telecommunications providers' 5G networks.",
"l": "https://docs.aws.amazon.com/wavelength/latest/developerguide/what-is-wavelength.html"
},
"Local Zones": {
"w": "AWS infrastructure deployments closer to end users.",
"f": "Extends AWS regions to provide single-digit millisecond latency.",
"l": "https://docs.aws.amazon.com/local-zones/latest/ug/what-is-aws-local-zones.html"
},
"Amazon S3": {
"w": "Object storage service with industry-leading scalability and durability.",
"f": "Designed for 99.999999999% (11 9's) of data durability.",
"l": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html"
},
"S3 Glacier": {
"w": "Low-cost archive storage for long-term backup and compliance.",
"f": "Retrieval times range from minutes to hours depending on tier.",
"l": "https://docs.aws.amazon.com/amazonglacier/latest/dev/introduction.html"
},
"S3 Intelligent-Tiering": {
"w": "Automatically moves data between access tiers to optimize costs.",
"f": "Uses machine learning to predict access patterns automatically.",
"l": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/intelligent-tiering.html"
},
"S3 Object Lock": {
"w": "Write-once-read-many (WORM) model for S3 objects.",
"f": "Supports both governance and compliance retention modes.",
"l": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html"
},
"Amazon EBS": {
"w": "Block storage volumes for EC2 instances.",
"f": "Offers up to 64,000 IOPS and 1,000 MB/s throughput.",
"l": "https://docs.aws.amazon.com/ebs/latest/userguide/what-is-ebs.html"
},
"EBS Snapshots": {
"w": "Point-in-time backups of EBS volumes stored in S3.",
"f": "Incremental snapshots only store changed blocks since last snapshot.",
"l": "https://docs.aws.amazon.com/ebs/latest/userguide/EBSSnapshots.html"
},
"Instance Store": {
"w": "Temporary block-level storage physically attached to EC2 instances.",
"f": "Data is lost when instance stops, terminates, or fails.",
"l": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html"
},
"Amazon EFS": {
"w": "Fully managed NFS file system for EC2 instances.",
"f": "Automatically scales to petabytes without provisioning storage.",
"l": "https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html"
},
"FSx for Windows": {
"w": "Fully managed Windows file system built on Windows Server.",
"f": "Supports Windows features like DFS, shadow copies, and ACLs.",
"l": "https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html"
},
"FSx for Lustre": {
"w": "High-performance file system for compute-intensive workloads.",
"f": "Can process data at hundreds of GB/s throughput.",
"l": "https://docs.aws.amazon.com/fsx/latest/LustreGuide/what-is.html"
},
"FSx for ONTAP": {
"w": "Fully managed NetApp ONTAP file system.",
"f": "Supports NetApp SnapMirror for data replication.",
"l": "https://docs.aws.amazon.com/fsx/latest/ONTAPGuide/what-is-fsx-ontap.html"
},
"Storage Gateway": {
"w": "Hybrid cloud storage connecting on-premises to AWS.",
"f": "Supports file, volume, and tape gateway configurations.",
"l": "https://docs.aws.amazon.com/storagegateway/latest/userguide/WhatIsStorageGateway.html"
},
"DataSync": {
"w": "Data transfer service for moving data between storage systems.",
"f": "Can transfer data up to 10x faster than open-source tools.",
"l": "https://docs.aws.amazon.com/datasync/latest/userguide/what-is-datasync.html"
},
"Snow Family": {
"w": "Physical devices for data migration and edge computing.",
"f": "Snowmobile can transfer up to 100 petabytes per truck.",
"l": "https://docs.aws.amazon.com/snowball/latest/ug/whatissnowball.html"
},
"Transfer Family": {
"w": "Fully managed file transfer service supporting SFTP, FTPS, FTP.",
"f": "Supports custom identity providers and workflows.",
"l": "https://docs.aws.amazon.com/transfer/latest/userguide/what-is-aws-transfer-family.html"
},
"AWS Backup": {
"w": "Centralized backup service across AWS services.",
"f": "Supports cross-region and cross-account backup copying.",
"l": "https://docs.aws.amazon.com/aws-backup/latest/devguide/whatisbackup.html"
},
"Elastic Disaster Recovery": {
"w": "Scalable disaster recovery for on-premises and cloud servers.",
"f": "Provides RPO of seconds and RTO of minutes.",
"l": "https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html"
},
"Elastic DR": {
"w": "Scalable disaster recovery for on-premises and cloud servers.",
"f": "Provides RPO of seconds and RTO of minutes.",
"l": "https://docs.aws.amazon.com/drs/latest/userguide/what-is-drs.html"
},
"Amazon RDS": {
"w": "Managed relational database service supporting six engines.",
"f": "Supports MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Db2.",
"l": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html"
},
"Aurora": {
"w": "MySQL and PostgreSQL compatible cloud-native relational database.",
"f": "Up to 5x faster than MySQL and 3x faster than PostgreSQL.",
"l": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html"
},
"Aurora Serverless v2": {
"w": "On-demand auto-scaling configuration for Aurora.",
"f": "Scales from 0.5 to 128 ACUs in fine-grained increments.",
"l": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless-v2.html"
},
"RDS Proxy": {
"w": "Database proxy for RDS and Aurora databases.",
"f": "Reduces failover times by up to 66%.",
"l": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.html"
},
"DynamoDB": {
"w": "Fully managed NoSQL key-value and document database.",
"f": "Can handle more than 10 trillion requests per day.",
"l": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html"
},
"DynamoDB Global Tables": {
"w": "Multi-region, multi-active database replication.",
"f": "Provides automatic conflict resolution for concurrent updates.",
"l": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html"
},
"DocumentDB": {
"w": "MongoDB-compatible managed document database.",
"f": "Separates compute and storage for independent scaling.",
"l": "https://docs.aws.amazon.com/documentdb/latest/developerguide/what-is.html"
},
"Neptune": {
"w": "Fully managed graph database service.",
"f": "Supports both property graph (Gremlin) and RDF (SPARQL) models.",
"l": "https://docs.aws.amazon.com/neptune/latest/userguide/intro.html"
},
"Timestream": {
"w": "Fast, scalable serverless time series database.",
"f": "Can ingest trillions of events per day automatically.",
"l": "https://docs.aws.amazon.com/timestream/latest/developerguide/what-is-timestream.html"
},
"QLDB": {
"w": "Fully managed ledger database with immutable transaction log.",
"f": "Uses cryptographic hashing (SHA-256) to ensure data integrity.",
"l": "https://docs.aws.amazon.com/qldb/latest/developerguide/what-is.html"
},
"Keyspaces": {
"w": "Scalable Apache Cassandra-compatible database service.",
"f": "Serverless — scales automatically based on application traffic.",
"l": "https://docs.aws.amazon.com/keyspaces/latest/devguide/what-is-keyspaces.html"
},
"ElastiCache": {
"w": "In-memory caching service supporting Redis and Memcached.",
"f": "Delivers sub-millisecond response times for real-time applications.",
"l": "https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/WhatIs.html"
},
"MemoryDB": {
"w": "Redis-compatible in-memory database with durability.",
"f": "Combines Redis speed with multi-AZ durability.",
"l": "https://docs.aws.amazon.com/memorydb/latest/devguide/what-is-memorydb-for-redis.html"
},
"OpenSearch vector": {
"w": "Search engine with vector similarity search for AI apps.",
"f": "Supports k-NN search for ML and RAG applications.",
"l": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html"
},
"pgvector": {
"w": "PostgreSQL extension for vector similarity search.",
"f": "Enables semantic search and GenAI RAG in PostgreSQL.",
"l": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/PostgreSQL.Concepts.General.FeatureSupport.Extensions.html"
},
"Redshift": {
"w": "Fast, scalable cloud data warehouse.",
"f": "Uses columnar storage and massively parallel processing.",
"l": "https://docs.aws.amazon.com/redshift/latest/mgmt/welcome.html"
},
"Redshift Serverless": {
"w": "Serverless option for Redshift data warehouse.",
"f": "Automatically scales compute based on workload demands.",
"l": "https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-serverless.html"
},
"Athena": {
"w": "Interactive serverless query service for data in S3.",
"f": "No infrastructure to manage — just point at S3 and query with SQL.",
"l": "https://docs.aws.amazon.com/athena/latest/ug/what-is.html"
},
"Amazon VPC": {
"w": "Isolated virtual network within AWS cloud.",
"f": "Supports both IPv4 and IPv6 dual-stack addressing.",
"l": "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html"
},
"NAT Gateway": {
"w": "Managed NAT service for private subnet internet access.",
"f": "Automatically scales up to 100 Gbps bandwidth.",
"l": "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html"
},
"VPC Endpoints": {
"w": "Private connections between VPC and AWS services.",
"f": "Traffic never leaves the AWS network.",
"l": "https://docs.aws.amazon.com/vpc/latest/privatelink/vpc-endpoints.html"
},
"PrivateLink": {
"w": "Private connectivity between VPCs and services.",
"f": "Eliminates exposure of traffic to the public internet.",
"l": "https://docs.aws.amazon.com/vpc/latest/privatelink/what-is-privatelink.html"
},
"ALB": {
"w": "Application Load Balancer for HTTP/HTTPS traffic (Layer 7).",
"f": "Supports content-based routing, WebSocket, and gRPC.",
"l": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html"
},
"NLB": {
"w": "Network Load Balancer for TCP/UDP traffic (Layer 4).",
"f": "Handles millions of requests/sec with ultra-low latency.",
"l": "https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html"
},
"Global Accelerator": {
"w": "Network service improving global application performance.",
"f": "Can improve performance by up to 60% using AWS backbone.",
"l": "https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html"
},
"Route 53": {
"w": "Scalable DNS web service and domain registration.",
"f": "Named after TCP/UDP port 53 used for DNS.",
"l": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html"
},
"CloudFront": {
"w": "Global content delivery network (CDN) service.",
"f": "Has over 600 points of presence across 100+ cities globally.",
"l": "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html"
},
"Direct Connect": {
"w": "Dedicated network connection from premises to AWS.",
"f": "Supports up to 100 Gbps dedicated connections.",
"l": "https://docs.aws.amazon.com/directconnect/latest/UserGuide/Welcome.html"
},
"Site-to-Site VPN": {
"w": "Encrypted connection between on-premises and AWS VPC.",
"f": "Creates two redundant IPSec tunnels for high availability.",
"l": "https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html"
},
"Transit Gateway": {
"w": "Network hub connecting VPCs and on-premises networks.",
"f": "Supports up to 5,000 VPC attachments per gateway.",
"l": "https://docs.aws.amazon.com/vpc/latest/tgw/what-is-transit-gateway.html"
},
"Cloud WAN": {
"w": "Managed wide area network service.",
"f": "Provides a single dashboard to manage your global network.",
"l": "https://docs.aws.amazon.com/vpc/latest/cloudwan/what-is-cloudwan.html"
},
"Security Groups": {
"w": "Virtual firewall controlling inbound and outbound traffic.",
"f": "Stateful — automatically allows return traffic.",
"l": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html"
},
"WAF": {
"w": "Web application firewall against common web exploits.",
"f": "Can block requests based on IP, country, or request patterns.",
"l": "https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html"
},
"Shield": {
"w": "DDoS protection service for AWS applications.",
"f": "Standard tier is free and automatic for all AWS customers.",
"l": "https://docs.aws.amazon.com/waf/latest/developerguide/shield-chapter.html"
},
"Network Firewall": {
"w": "Managed network firewall with IDS/IPS for VPCs.",
"f": "Supports Suricata-compatible intrusion prevention rules.",
"l": "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html"
},
"API Gateway": {
"w": "Fully managed service for creating REST, HTTP, and WebSocket APIs.",
"f": "Handles hundreds of thousands of concurrent API calls.",
"l": "https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html"
},
"AppSync": {
"w": "Managed GraphQL and Pub/Sub API service.",
"f": "Supports real-time subscriptions over WebSocket.",
"l": "https://docs.aws.amazon.com/appsync/latest/devguide/what-is-appsync.html"
},
"VPC Lattice": {
"w": "Application networking for service-to-service communication.",
"f": "Works across VPCs and accounts without VPC peering.",
"l": "https://docs.aws.amazon.com/vpc-lattice/latest/ug/what-is-vpc-lattice.html"
},
"Cloud Map": {
"w": "Service discovery for cloud resources.",
"f": "Automatically updates registry when resources change.",
"l": "https://docs.aws.amazon.com/cloud-map/latest/dg/what-is-cloud-map.html"
},
"AWS IAM": {
"w": "Identity and Access Management — controls who can do what in AWS.",
"f": "Supports over 8,000 different permission actions across AWS services.",
"l": "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"
},
"Identity Center": {
"w": "Centralized SSO for workforce access to multiple AWS accounts.",
"f": "Formerly called AWS Single Sign-On, rebranded in 2022.",
"l": "https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html"
},
"Cognito": {
"w": "User identity and authentication for web and mobile apps.",
"f": "Can handle over 10 million monthly active users per pool.",
"l": "https://docs.aws.amazon.com/cognito/latest/developerguide/what-is-amazon-cognito.html"
},
"Access Analyzer": {
"w": "Analyzes resource policies to find unintended external access.",
"f": "Uses automated mathematical reasoning to prove security properties.",
"l": "https://docs.aws.amazon.com/IAM/latest/UserGuide/what-is-access-analyzer.html"
},
"Roles Anywhere": {
"w": "Lets workloads outside AWS obtain temporary AWS credentials.",
"f": "Uses X.509 certificates instead of long-term access keys.",
"l": "https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html"
},
"KMS": {
"w": "Key Management Service for creating and managing encryption keys.",
"f": "Automatically rotates keys annually, keeping all old versions for decryption.",
"l": "https://docs.aws.amazon.com/kms/latest/developerguide/overview.html"
},
"CloudHSM": {
"w": "Dedicated hardware security modules for cryptographic key storage.",
"f": "FIPS 140-2 Level 3 validated — the highest for cloud HSMs.",
"l": "https://docs.aws.amazon.com/cloudhsm/latest/userguide/introduction.html"
},
"Secrets Manager": {
"w": "Stores, retrieves, and auto-rotates application secrets.",
"f": "Can rotate RDS/Aurora credentials automatically without app changes.",
"l": "https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html"
},
"ACM": {
"w": "AWS Certificate Manager provisions and manages SSL/TLS certificates.",
"f": "Free public certificates that auto-renew — no manual renewal needed.",
"l": "https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html"
},
"Private CA": {
"w": "Managed private certificate authority service.",
"f": "Can issue millions of certificates with sub-millisecond issuance.",
"l": "https://docs.aws.amazon.com/privateca/latest/userguide/PcaWelcome.html"
},
"GuardDuty": {
"w": "Threat detection using ML to identify malicious activity.",
"f": "Analyzes billions of events daily across VPC, DNS, and CloudTrail.",
"l": "https://docs.aws.amazon.com/guardduty/latest/ug/what-is-guardduty.html"
},
"Security Hub": {
"w": "Centralized security findings aggregation and compliance dashboard.",
"f": "Aggregates findings from 70+ AWS and partner security services.",
"l": "https://docs.aws.amazon.com/securityhub/latest/userguide/what-is-securityhub.html"
},
"Detective": {
"w": "Security investigation service that visualizes security data.",
"f": "Automatically builds a behavior graph from weeks of log data.",
"l": "https://docs.aws.amazon.com/detective/latest/userguide/detective-investigation-about.html"
},
"Inspector": {
"w": "Automated vulnerability scanning for EC2, Lambda, and containers.",
"f": "Scans container images in ECR in under 15 seconds.",
"l": "https://docs.aws.amazon.com/inspector/latest/user/what-is-inspector.html"
},
"Macie": {
"w": "Discovers and protects sensitive data in S3 using ML.",
"f": "Can classify over 70 types of sensitive data (PII, PHI, financial).",
"l": "https://docs.aws.amazon.com/macie/latest/user/what-is-macie.html"
},
"Organizations": {
"w": "Centrally manages and governs multiple AWS accounts.",
"f": "Can manage up to 10,000 AWS accounts in a single organization.",
"l": "https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html"
},
"CloudTrail": {
"w": "Logs and monitors all API calls and user activity across AWS.",
"f": "Records every API call — the 'security camera' of your AWS account.",
"l": "https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html"
},
"Config": {
"w": "Tracks AWS resource configurations and compliance over time.",
"f": "Can automatically remediate non-compliant resources.",
"l": "https://docs.aws.amazon.com/config/latest/developerguide/WhatIsConfig.html"
},
"Control Tower": {
"w": "Sets up and governs secure multi-account AWS environments.",
"f": "Implements 20+ guardrails automatically on new accounts.",
"l": "https://docs.aws.amazon.com/controltower/latest/userguide/what-is-control-tower.html"
},
"Audit Manager": {
"w": "Automates evidence collection for compliance audits.",
"f": "Supports 200+ prebuilt frameworks including SOC, PCI DSS, GDPR.",
"l": "https://docs.aws.amazon.com/audit-manager/latest/userguide/what-is.html"
},
"Verified Access": {
"w": "Zero-trust network access without requiring a VPN.",
"f": "Makes access decisions in under 100ms per request.",
"l": "https://docs.aws.amazon.com/verified-access/latest/ug/what-is-verified-access.html"
},
"Signer": {
"w": "Code signing service ensuring software integrity.",
"f": "Integrates with Lambda to sign code during deployment.",
"l": "https://docs.aws.amazon.com/signer/latest/developerguide/Welcome.html"
},
"Nitro Enclaves": {
"w": "Isolated compute environments for processing sensitive data.",
"f": "Provides cryptographic attestation to prove enclave integrity.",
"l": "https://docs.aws.amazon.com/enclaves/latest/user/nitro-enclave.html"
},
"Kinesis": {
"w": "Real-time data streaming for collecting and processing large streams.",
"f": "Can ingest terabytes of data per hour from millions of sources.",
"l": "https://docs.aws.amazon.com/streams/latest/dev/introduction.html"
},
"MSK": {
"w": "Managed Streaming for Apache Kafka.",
"f": "Patches and updates Kafka clusters with zero downtime.",
"l": "https://docs.aws.amazon.com/msk/latest/developerguide/what-is-msk.html"
},
"Data Firehose": {
"w": "Captures and loads streaming data into data lakes and analytics.",
"f": "Can automatically compress, encrypt, and batch data before delivery.",
"l": "https://docs.aws.amazon.com/firehose/latest/dev/what-is-this-service.html"
},
"AppFlow": {
"w": "Integration service transferring data between SaaS apps and AWS.",
"f": "Supports bi-directional flows with 50+ SaaS applications.",
"l": "https://docs.aws.amazon.com/appflow/latest/userguide/what-is-appflow.html"
},
"EMR": {
"w": "Big data platform using Spark, Hive, Presto, and more.",
"f": "Can scale from 1 to 10,000+ instances based on workload.",
"l": "https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-what-is-emr.html"
},
"EMR Serverless": {
"w": "Serverless option for running Spark and Hive without clusters.",
"f": "Starts workers in under 30 seconds and scales to zero when idle.",
"l": "https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/emr-serverless.html"
},
"Glue": {
"w": "Serverless ETL and data catalog service.",
"f": "Crawlers can auto-discover and catalog millions of data assets.",
"l": "https://docs.aws.amazon.com/glue/latest/dg/what-is-glue.html"
},
"Managed Flink": {
"w": "Fully managed Apache Flink for real-time stream processing.",
"f": "Handles checkpointing automatically and recovers from failures in seconds.",
"l": "https://docs.aws.amazon.com/managed-flink/latest/java/what-is.html"
},
"Lake Formation": {
"w": "Service for building, securing, and managing data lakes.",
"f": "Can set up a data lake in days instead of months.",
"l": "https://docs.aws.amazon.com/lake-formation/latest/dg/what-is-lake-formation.html"
},
"Data Exchange": {
"w": "Find, subscribe to, and use third-party data in the cloud.",
"f": "Hosts 3,000+ data products from 300+ providers.",
"l": "https://docs.aws.amazon.com/data-exchange/latest/userguide/what-is.html"
},
"DataZone": {
"w": "Data management for cataloging, discovering, and sharing data.",
"f": "Uses ML to auto-generate business-friendly data descriptions.",
"l": "https://docs.aws.amazon.com/datazone/latest/userguide/what-is-datazone.html"
},
"Glue Data Quality": {
"w": "Measures and monitors data quality in pipelines.",
"f": "Auto-suggests quality rules based on data profiling.",
"l": "https://docs.aws.amazon.com/glue/latest/dg/glue-data-quality.html"
},
"Clean Rooms": {
"w": "Secure data collaboration without sharing raw data.",
"f": "Uses cryptographic computing to analyze encrypted data.",
"l": "https://docs.aws.amazon.com/clean-rooms/latest/userguide/what-is.html"
},
"QuickSight": {
"w": "Business intelligence service for dashboards and visualizations.",
"f": "Can handle billions of rows and thousands of concurrent users.",
"l": "https://docs.aws.amazon.com/quicksight/latest/user/welcome.html"
},
"OpenSearch": {
"w": "Search and analytics engine for logs and application search.",
"f": "Can index petabytes with sub-second query response times.",
"l": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/what-is.html"
},
"Kendra": {
"w": "Intelligent enterprise search powered by machine learning.",
"f": "Understands natural language and returns precise answers from docs.",
"l": "https://docs.aws.amazon.com/kendra/latest/dg/what-is-kendra.html"
},
"SageMaker Studio": {
"w": "Web-based IDE for machine learning development.",
"f": "Provides collaborative notebooks with built-in MLOps.",
"l": "https://docs.aws.amazon.com/sagemaker/latest/dg/studio.html"
},
"SM Pipelines": {
"w": "Service for building ML workflow pipelines.",
"f": "Supports conditional execution and parallel ML steps.",
"l": "https://docs.aws.amazon.com/sagemaker/latest/dg/pipelines.html"
},
"SM Canvas": {
"w": "Visual no-code ML service for business analysts.",
"f": "Generate ML models without writing a single line of code.",
"l": "https://docs.aws.amazon.com/sagemaker/latest/dg/canvas.html"
},
"Clarify": {
"w": "Detects bias and explains ML model predictions.",
"f": "Provides SHAP values for model explainability.",
"l": "https://docs.aws.amazon.com/sagemaker/latest/dg/clarify.html"
},
"Bedrock": {
"w": "Managed service for building GenAI apps with foundation models.",
"f": "Offers 100+ models from Anthropic, Meta, Mistral, and more via single API.",
"l": "https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html"
},
"Bedrock Agents": {
"w": "AI agents that perform complex multi-step tasks.",
"f": "Can automatically invoke APIs and chain actions together.",
"l": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html"
},
"Bedrock KB": {
"w": "Knowledge bases that ground AI responses with your data.",
"f": "Uses RAG (Retrieval-Augmented Generation) to improve accuracy.",
"l": "https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html"
},
"Guardrails": {
"w": "Content filtering and safety controls for GenAI apps.",
"f": "Can block harmful content and enforce responsible AI policies.",
"l": "https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html"
},
"Q Developer": {
"w": "AI coding assistant that writes, debugs, and optimizes code.",
"f": "Can generate entire functions from natural language descriptions.",
"l": "https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/what-is.html"
},
"Q Business": {
"w": "AI assistant for enterprise knowledge and productivity.",
"f": "Connects to 40+ enterprise data sources for answers.",
"l": "https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/what-is.html"
},
"Rekognition": {
"w": "Image and video analysis using machine learning.",
"f": "Can identify objects, people, text, and scenes in images.",
"l": "https://docs.aws.amazon.com/rekognition/latest/dg/what-is.html"
},
"Textract": {
"w": "Extracts text and structured data from documents using ML.",
"f": "Can extract tables and forms automatically — no templates needed.",
"l": "https://docs.aws.amazon.com/textract/latest/dg/what-is.html"
},
"Comprehend": {
"w": "NLP service for extracting insights from text.",
"f": "Detects sentiment, entities, key phrases, and language.",
"l": "https://docs.aws.amazon.com/comprehend/latest/dg/what-is.html"
},
"Translate": {
"w": "Neural machine translation for 75+ languages.",
"f": "Supports real-time and batch translation.",
"l": "https://docs.aws.amazon.com/translate/latest/dg/what-is.html"
},
"Transcribe": {
"w": "Speech-to-text service using machine learning.",
"f": "Can identify different speakers in conversations.",
"l": "https://docs.aws.amazon.com/transcribe/latest/dg/what-is.html"
},
"Polly": {
"w": "Text-to-speech service with lifelike neural voices.",
"f": "Offers SSML support for fine-grained speech control.",
"l": "https://docs.aws.amazon.com/polly/latest/dg/what-is.html"
},
"P5 (H100)": {
"w": "EC2 instances with NVIDIA H100 GPUs for AI training.",
"f": "20x better performance for large language model training.",
"l": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/accelerated-computing-instances.html"
},
"Trn2 (Trainium)": {
"w": "EC2 instances with AWS Trainium2 chips for ML training.",
"f": "Up to 4x better price-performance than previous generation.",
"l": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/accelerated-computing-instances.html"
},
"Inf2 (Inferentia)": {
"w": "EC2 instances with Inferentia2 chips for ML inference.",
"f": "Up to 4x throughput and 10x lower latency than GPU alternatives.",
"l": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/accelerated-computing-instances.html"
},
"Neuron SDK": {
"w": "SDK for optimizing ML models on Trainium and Inferentia.",
"f": "Automatically optimizes PyTorch/TensorFlow models for AWS silicon.",
"l": "https://awsdocs-neuron.readthedocs-hosted.com/"
},
"Lex": {
"w": "Conversational AI service for voice and text chatbots.",
"f": "Uses the same technology that powers Amazon Alexa.",
"l": "https://docs.aws.amazon.com/lexv2/latest/dg/what-is.html"
},
"Connect": {
"w": "Cloud-based contact center service.",
"f": "Can handle millions of contacts per day with pay-per-minute pricing.",
"l": "https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html"
},
"SQS": {
"w": "Fully managed message queuing service.",
"f": "Was one of the first AWS services, launched in 2004.",
"l": "https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html"
},
"SNS": {
"w": "Pub/sub messaging for application-to-application communication.",
"f": "Can deliver to 100,000+ subscribers per topic.",
"l": "https://docs.aws.amazon.com/sns/latest/dg/welcome.html"
},
"Amazon MQ": {
"w": "Managed message broker for ActiveMQ and RabbitMQ.",
"f": "Drop-in replacement — no code changes needed for existing apps.",
"l": "https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/welcome.html"
},
"EventBridge": {
"w": "Serverless event bus for event-driven architectures.",
"f": "Routes events from 90+ AWS services and SaaS apps.",
"l": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is.html"
},
"EB Pipes": {
"w": "Point-to-point event integration with filtering and enrichment.",
"f": "Connects sources to targets with optional transformation.",
"l": "https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html"
},
"MWAA": {
"w": "Managed Apache Airflow for workflow orchestration.",
"f": "Auto-scales workers based on workflow demands.",
"l": "https://docs.aws.amazon.com/mwaa/latest/userguide/what-is-mwaa.html"
},
"SES": {
"w": "Cloud email sending service for transactional and marketing email.",
"f": "Can send billions of emails per month.",
"l": "https://docs.aws.amazon.com/ses/latest/dg/Welcome.html"
},
"Pinpoint": {
"w": "Multichannel marketing — email, SMS, push, and voice.",
"f": "Supports targeted campaigns with audience segmentation.",
"l": "https://docs.aws.amazon.com/pinpoint/latest/developerguide/welcome.html"
},
"CodePipeline": {
"w": "Continuous delivery service for fast application updates.",
"f": "Can integrate with GitHub, Jenkins, and custom actions.",
"l": "https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html"
},
"CodeBuild": {
"w": "Fully managed CI service that compiles and runs tests.",
"f": "Scales automatically — charges only for build minutes used.",
"l": "https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html"
},
"CodeDeploy": {
"w": "Automated deployment service for EC2, Lambda, and ECS.",
"f": "Supports blue/green deployments with automatic rollback.",
"l": "https://docs.aws.amazon.com/codedeploy/latest/userguide/welcome.html"
},
"CodeCatalyst": {
"w": "Unified dev platform for planning, coding, building, and deploying.",
"f": "Includes AI-powered code suggestions and dev environments.",
"l": "https://docs.aws.amazon.com/codecatalyst/latest/userguide/welcome.html"
},
"CloudFormation": {
"w": "Infrastructure as Code — provision AWS resources with templates.",
"f": "Manages resource dependencies automatically.",
"l": "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html"
},
"CDK": {
"w": "Define cloud infrastructure using TypeScript, Python, Java, etc.",
"f": "Generates CloudFormation from high-level programming constructs.",
"l": "https://docs.aws.amazon.com/cdk/v2/guide/home.html"
},
"SAM": {
"w": "Framework for building serverless applications on AWS.",
"f": "Provides local testing and debugging for Lambda functions.",
"l": "https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html"
},
"CFN Guard": {
"w": "Policy-as-code tool for validating CloudFormation templates.",
"f": "Prevents non-compliant resources from being deployed.",
"l": "https://docs.aws.amazon.com/cfn-guard/latest/ug/what-is-guard.html"
},
"CloudWatch": {
"w": "Monitoring and observability for AWS resources and apps.",
"f": "Can store metrics for up to 15 months.",
"l": "https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html"
},
"X-Ray": {
"w": "Distributed tracing for debugging microservices.",
"f": "Traces requests across multiple AWS services automatically.",
"l": "https://docs.aws.amazon.com/xray/latest/devguide/aws-xray.html"
},
"Managed Grafana": {
"w": "Fully managed Grafana for dashboards and visualization.",
"f": "Integrates with 30+ AWS data sources out of the box.",
"l": "https://docs.aws.amazon.com/grafana/latest/userguide/what-is-Amazon-Managed-Service-Grafana.html"
},
"Managed Prometheus": {
"w": "Managed Prometheus-compatible monitoring service.",
"f": "Auto-scales storage and query capacity based on usage.",
"l": "https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html"
},
"Systems Manager": {
"w": "Manage and configure AWS resources and on-prem servers.",
"f": "Can patch thousands of instances simultaneously.",
"l": "https://docs.aws.amazon.com/systems-manager/latest/userguide/what-is-systems-manager.html"
},
"Incident Manager": {
"w": "Manage and respond to application incidents.",
"f": "Auto-creates response plans and escalation procedures.",
"l": "https://docs.aws.amazon.com/incident-manager/latest/userguide/what-is-incident-manager.html"
},
"DevOps Guru": {
"w": "ML-powered service that detects operational anomalies.",
"f": "Trained on millions of AWS deployments.",
"l": "https://docs.aws.amazon.com/devops-guru/latest/userguide/welcome.html"
},
"Cost Explorer": {
"w": "Visualize and analyze AWS costs and usage.",
"f": "Can forecast future costs based on historical patterns.",
"l": "https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html"
},
"Budgets": {
"w": "Set custom cost and usage budgets with alerts.",
"f": "Can auto-apply cost controls when budgets are exceeded.",
"l": "https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html"
},
"Compute Optimizer": {
"w": "Recommends optimal compute resources based on utilization.",
"f": "Can reduce costs by up to 25% through right-sizing.",
"l": "https://docs.aws.amazon.com/compute-optimizer/latest/ug/what-is-compute-optimizer.html"
},
"Migration Hub": {
"w": "Central place to track migrations across AWS tools.",
"f": "Single dashboard for all migration project progress.",
"l": "https://docs.aws.amazon.com/migrationhub/latest/ug/whatishub.html"
},
"App Discovery": {
"w": "Discovers on-premises servers and dependencies for migration.",
"f": "Can map dependencies without installing agents on every machine.",
"l": "https://docs.aws.amazon.com/application-discovery/latest/userguide/what-is-appdiscovery.html"
},
"Migration Evaluator": {
"w": "Builds data-driven business case for AWS migration.",
"f": "Formerly TSO Logic — provides ROI analysis for migrations.",
"l": "https://docs.aws.amazon.com/migrationevaluator/latest/userguide/what-is.html"
},
"MGN": {
"w": "Application Migration Service for lift-and-shift to AWS.",
"f": "Uses continuous block-level replication with zero downtime.",
"l": "https://docs.aws.amazon.com/mgn/latest/ug/what-is-application-migration-service.html"
},
"DMS": {
"w": "Database Migration Service for moving databases to AWS.",
"f": "Supports both same-engine and cross-engine migrations.",
"l": "https://docs.aws.amazon.com/dms/latest/userguide/Welcome.html"
},
"Schema Conversion Tool": {
"w": "Converts database schemas between different engines.",
"f": "Can auto-convert up to 80% of schema and code objects.",
"l": "https://docs.aws.amazon.com/SchemaConversionTool/latest/userguide/CHAP_Welcome.html"
},
"App2Container": {
"w": "Containerizes existing apps for ECS or EKS.",
"f": "Generates container images without any code changes.",
"l": "https://docs.aws.amazon.com/app2container/latest/UserGuide/what-is-a2c.html"
},
"Refactor Spaces": {
"w": "Incremental refactoring from monoliths to microservices.",
"f": "Implements the strangler fig pattern for gradual migration.",
"l": "https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/what-is-mhub-refactor-spaces.html"
},
"Mainframe Mod": {
"w": "Modernizes mainframe applications to run on AWS.",
"f": "Converts COBOL and PL/I to run on cloud infrastructure.",
"l": "https://docs.aws.amazon.com/m2/latest/userguide/what-is-m2.html"
},
"Service Catalog": {
"w": "Create and manage catalogs of approved IT services.",
"f": "Enables self-service provisioning with governance guardrails.",
"l": "https://docs.aws.amazon.com/servicecatalog/latest/adminguide/introduction.html"
},
"WA Tool": {
"w": "Well-Architected Tool reviews architectures against best practices.",
"f": "Based on the five pillars: operational, security, reliability, performance, cost.",
"l": "https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html"
},
"Trusted Advisor": {
"w": "Real-time guidance for provisioning resources per best practices.",
"f": "Checks span cost, performance, security, fault tolerance, and limits.",
"l": "https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html"
},
"Resilience Hub": {
"w": "Define, validate, and track application resilience.",
"f": "Tracks RTO and RPO objectives and provides improvement plans.",
"l": "https://docs.aws.amazon.com/resilience-hub/latest/userguide/what-is.html"
},
"R53 failover": {
"w": "Route 53 DNS failover for high availability.",
"f": "Health checks from multiple global locations trigger automatic failover.",
"l": "https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html"
},
"DDB Global Tables": {
"w": "DynamoDB multi-region, multi-active replication.",
"f": "Sub-second replication across regions.",
"l": "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GlobalTables.html"
},
"Aurora Global": {
"w": "Aurora cross-region database for disaster recovery.",
"f": "Sub-second data replication with minimal performance impact.",
"l": "https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-global-database.html"
},
"Fault Injection Service": {
"w": "Run chaos engineering experiments on AWS workloads.",
"f": "Safely inject faults like CPU stress, network latency, and instance stops.",
"l": "https://docs.aws.amazon.com/fis/latest/userguide/what-is.html"
},
"Outposts": {
"w": "AWS infrastructure and services running on-premises.",
"f": "Same AWS APIs and tools on-prem as in the cloud.",
"l": "https://docs.aws.amazon.com/outposts/latest/userguide/what-is-outposts.html"
},
"EKS Anywhere": {
"w": "Run EKS Kubernetes on your own infrastructure.",
"f": "Same EKS console and APIs for on-prem clusters.",
"l": "https://docs.aws.amazon.com/eks/latest/userguide/eks-anywhere.html"
},
"ECS Anywhere": {
"w": "Run ECS containers on customer-managed infrastructure.",
"f": "Extends ECS task scheduling to on-prem servers.",
"l": "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-anywhere.html"
},
"VMware Cloud on AWS": {
"w": "VMware vSphere running natively on AWS bare metal.",
"f": "Full VMware stack (vSphere, vSAN, NSX) on AWS hardware.",
"l": "https://docs.aws.amazon.com/vmware-cloud-on-aws/latest/userguide/what-is-vmware-cloud-on-aws.html"
},
"IoT Core": {
"w": "Managed cloud service connecting IoT devices to AWS.",
"f": "Supports billions of devices and trillions of messages.",
"l": "https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html"
},
"LoRaWAN": {
"w": "Connects LoRaWAN devices and gateways to AWS IoT.",
"f": "Supports long-range, low-power wireless for IoT.",
"l": "https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan.html"
},
"FreeRTOS": {
"w": "Real-time OS for microcontrollers connecting to AWS.",
"f": "Includes libraries for connectivity, security, and OTA updates.",
"l": "https://docs.aws.amazon.com/freertos/latest/userguide/what-is-amazon-freertos.html"
},
"Device Mgmt": {
"w": "IoT Device Management for fleet operations at scale.",
"f": "Fleet indexing lets you search across millions of devices.",
"l": "https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-management.html"
},
"Device Defender": {
"w": "IoT security auditing and anomaly detection.",
"f": "Uses ML to detect anomalous device behavior.",
"l": "https://docs.aws.amazon.com/iot/latest/developerguide/device-defender.html"
},
"Device Shadow": {
"w": "Virtual representation of IoT devices in the cloud.",
"f": "Apps can interact with devices even when they're offline.",
"l": "https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html"
},
"IoT Analytics": {
"w": "Processes and analyzes IoT data for insights.",
"f": "Includes pre-built Jupyter notebook templates for IoT use cases.",
"l": "https://docs.aws.amazon.com/iotanalytics/latest/userguide/welcome.html"
},
"SiteWise": {
"w": "Collects and analyzes industrial equipment data.",
"f": "Built-in data processing for raw industrial sensor data.",
"l": "https://docs.aws.amazon.com/iot-sitewise/latest/userguide/what-is-sitewise.html"
},
"Greengrass": {
"w": "Extends AWS to edge devices for local compute.",
"f": "Devices act locally on data while using cloud for management.",
"l": "https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html"
},
"TwinMaker": {
"w": "Creates digital twins of real-world systems.",
"f": "Combines IoT, video, and 3D data into unified representations.",
"l": "https://docs.aws.amazon.com/iot-twinmaker/latest/guide/what-is-twinmaker.html"
},
"Carbon Footprint": {
"w": "Shows carbon emission data for your AWS usage.",
"f": "Tracks sustainability goals with historical trend data.",
"l": "https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/what-is-ccft.html"
},
"Graviton": {
"w": "ARM-based processors designed by AWS for cloud workloads.",
"f": "Up to 40% better price-performance than x86 instances.",
"l": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html"
},
"MediaConvert": {
"w": "File-based video transcoding service for playback on any device.",
"f": "Can process 8K video with 500+ input/output format combinations.",
"l": "https://docs.aws.amazon.com/mediaconvert/latest/ug/what-is.html"
},
"MediaLive": {
"w": "Broadcast-grade live video encoding for TV and streaming.",
"f": "Sub-second automatic failover between primary and backup sources.",
"l": "https://docs.aws.amazon.com/medialive/latest/ug/what-is.html"
},
"MediaPackage": {
"w": "Just-in-time video packaging for multiple streaming formats.",
"f": "Generates HLS, DASH, MSS, and CMAF from a single input simultaneously.",
"l": "https://docs.aws.amazon.com/mediapackage/latest/ug/what-is.html"
},
"MediaTailor": {
"w": "Personalized ad insertion and channel assembly for video.",
"f": "Uses ML for frame-accurate ad placement optimization.",
"l": "https://docs.aws.amazon.com/mediatailor/latest/ug/what-is.html"
},
"IVS": {
"w": "Managed live streaming with sub-second latency.",
"f": "Built on the same technology that powers Twitch.",
"l": "https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/what-is.html"
},
"Chime SDK": {
"w": "Real-time communications components for messaging, audio, and video.",
"f": "Supports 250 attendees per meeting with background noise suppression.",
"l": "https://docs.aws.amazon.com/chime-sdk/latest/dg/what-is-chime-sdk.html"
},
"Kinesis Video Streams": {
"w": "Securely stream video from devices to AWS for analytics and ML.",
"f": "Can handle video streams from millions of devices simultaneously.",
"l": "https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/what-is-kinesis-video.html"
},
"Amazon Connect": {
"w": "Cloud contact center that scales from 10 to 10,000+ agents.",
"f": "Integrates with 50+ pre-built partner solutions out of the box.",
"l": "https://docs.aws.amazon.com/connect/latest/adminguide/what-is-amazon-connect.html"
},
"Contact Lens": {
"w": "ML-powered real-time and post-call analytics for Connect.",
"f": "Detects customer sentiment changes in real-time during calls.",
"l": "https://docs.aws.amazon.com/connect/latest/adminguide/contact-lens.html"
},
"Q in Connect": {
"w": "GenAI assistant giving agents real-time answers during calls.",
"f": "Auto-creates knowledge articles from resolved cases.",
"l": "https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html"
},
"Connect Forecasting": {
"w": "ML-powered capacity planning for contact center staffing.",
"f": "Forecasts up to 12 weeks ahead, 10-50% more accurate than traditional methods.",
"l": "https://docs.aws.amazon.com/connect/latest/adminguide/forecasting-capacity-planning.html"
},
"WorkSpaces": {
"w": "Managed Desktop-as-a-Service with persistent cloud desktops.",
"f": "Works on tablets, Chromebooks, and any device with a browser.",
"l": "https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces.html"
},
"AppStream 2.0": {
"w": "Application streaming — desktop apps run on AWS, appear local.",
"f": "Apps run on AWS but feel native on the user's device.",
"l": "https://docs.aws.amazon.com/appstream2/latest/developerguide/what-is-appstream.html"
},
"WorkSpaces Web": {
"w": "Low-cost managed browser for secure web app access.",
"f": "No plugins needed — works from any HTML5-capable device.",
"l": "https://docs.aws.amazon.com/workspaces-web/latest/adminguide/what-is-workspaces-web.html"
},
"Location Maps": {
"w": "Map tiles and visualization for location-based apps.",
"f": "Multiple map styles including satellite, available in 30+ languages.",
"l": "https://docs.aws.amazon.com/location/latest/developerguide/map-concepts.html"
},
"Location Places": {
"w": "Place search, geocoding, and reverse geocoding.",
"f": "Returns business hours, contact details, and multilingual results.",
"l": "https://docs.aws.amazon.com/location/latest/developerguide/places-concepts.html"
},
"Location Routes": {
"w": "Route calculation with multiple travel modes.",
"f": "Supports truck routing with vehicle dimension and weight restrictions.",
"l": "https://docs.aws.amazon.com/location/latest/developerguide/route-concepts.html"
},
"Location Trackers": {
"w": "Device position tracking with geofence notifications.",
"f": "Can track millions of devices with real-time enter/exit alerts.",
"l": "https://docs.aws.amazon.com/location/latest/developerguide/tracker-concepts.html"
},
"HealthLake": {
"w": "FHIR-based data lake for healthcare data at petabyte scale.",
"f": "Auto-extracts medical entities from unstructured text using NLP.",
"l": "https://docs.aws.amazon.com/healthlake/latest/devguide/what-is-amazon-health-lake.html"
},
"HealthImaging": {
"w": "Cloud-native DICOM medical image storage and retrieval.",
"f": "Sub-second retrieval from petabytes of imaging data.",
"l": "https://docs.aws.amazon.com/healthimaging/latest/devguide/what-is.html"
},
"Omics": {
"w": "Purpose-built service for genomic and omics data analysis.",
"f": "Processes whole genome sequencing 7x faster than on-prem.",
"l": "https://docs.aws.amazon.com/omics/latest/dev/what-is-service.html"
},
"Comprehend Medical": {
"w": "NLP service extracting medical info from unstructured text.",
"f": "HIPAA-eligible — identifies PHI and medical entities automatically.",
"l": "https://docs.aws.amazon.com/comprehend-medical/latest/dev/comprehendmedical-welcome.html"
},
"Managed Blockchain": {
"w": "Managed Hyperledger Fabric and Ethereum blockchain networks.",
"f": "Eliminates blockchain infrastructure overhead while staying decentralized.",
"l": "https://docs.aws.amazon.com/managed-blockchain/latest/hyperledger-fabric-dev/what-is-managed-blockchain.html"
},
"Amazon Braket": {
"w": "Quantum computing service with access to real quantum hardware.",
"f": "Access IonQ, Rigetti, and QuEra quantum processors through one API.",
"l": "https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html"
},
"Braket Simulators": {
"w": "Classical simulators for testing quantum algorithms without hardware.",
"f": "Can simulate quantum circuits with up to 34 qubits.",
"l": "https://docs.aws.amazon.com/braket/latest/developerguide/what-is-braket.html"
},
"GameLift": {
"w": "Managed dedicated game server hosting for multiplayer games.",
"f": "Auto-scales on demand and can cut hosting costs by up to 90%.",
"l": "https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-intro.html"
},
"FlexMatch": {
"w": "Customizable matchmaking that groups players by rules and skill.",
"f": "Uses ML to optimize match quality and reduce wait times.",
"l": "https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html"
},
"GameLift FleetIQ": {
"w": "Optimizes game server placement on Spot Instances.",
"f": "Reduces game hosting costs by up to 70% with low latency.",
"l": "https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html"
},
"RoboMaker": {
"w": "Cloud robotics service for ROS development and simulation.",
"f": "Includes pre-built simulation worlds: indoor, race tracks, and towns.",
"l": "https://docs.aws.amazon.com/robomaker/latest/dg/what-is-robomaker.html"
},
"AWS Supply Chain": {
"w": "End-to-end supply chain visibility and demand planning.",
"f": "ML predicts supply chain disruptions up to 6 months in advance.",
"l": "https://docs.aws.amazon.com/aws-supply-chain/latest/userguide/what-is-aws-supply-chain.html"
},
"Amplify Studio": {
"w": "Visual builder for full-stack web and mobile apps.",
"f": "Auto-generates React components from Figma designs.",
"l": "https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html"
},
"Workflow Studio": {
"w": "Visual drag-and-drop designer for Step Functions workflows.",
"f": "Auto-generates Amazon States Language JSON from diagrams.",
"l": "https://docs.aws.amazon.com/step-functions/latest/dg/workflow-studio.html"
},
"Monitron": {
"w": "Wireless sensors + ML for industrial equipment monitoring.",
"f": "Detects anomalies up to 20x earlier than scheduled maintenance.",
"l": "https://docs.aws.amazon.com/Monitron/latest/user-guide/what-is-monitron.html"
},
"Lookout for Equipment": {
"w": "ML service predicting equipment failures from sensor data.",
"f": "Needs no ML expertise — trains with as little as 10 days of data.",
"l": "https://docs.aws.amazon.com/lookout-for-equipment/latest/ug/what-is.html"
},
"IoT Greengrass": {
"w": "Extends AWS to edge devices for local compute.",
"f": "Devices act locally on data while using cloud for management.",
"l": "https://docs.aws.amazon.com/greengrass/v2/developerguide/what-is-iot-greengrass.html"
},
"Quick Suite": {
"w": "Cloud-powered BI service for interactive dashboards and embedded analytics.",
"f": "Renamed from QuickSight — uses ML-powered insights and natural language querying.",
"l": "https://docs.aws.amazon.com/quicksight/latest/user/welcome.html"
},
"OpenSearch Serverless": {
"w": "Serverless option for OpenSearch — no clusters to manage.",
"f": "Includes a vector engine for ML-augmented search and GenAI RAG.",
"l": "https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless.html"
},
"CloudSearch": {
"w": "Managed search service supporting 34 languages with autocomplete.",
"f": "One of the oldest AWS services — simple search without ML complexity.",
"l": "https://docs.aws.amazon.com/cloudsearch/latest/developerguide/what-is-cloudsearch.html"
},
"Entity Resolution": {
"w": "ML service that matches and links related records across data sources.",
"f": "Removes duplicate records and creates unified customer profiles.",
"l": "https://docs.aws.amazon.com/entityresolution/latest/userguide/what-is-service.html"
},
"Bedrock AgentCore": {
"w": "Infrastructure layer for building, deploying, and scaling AI agents in production.",
"f": "Provides agent runtime, memory, identity, and observability as managed services.",
"l": "https://docs.aws.amazon.com/bedrock/latest/userguide/agents-agentcore.html"
},
"Kiro": {
"w": "AI-powered IDE by AWS for spec-driven development with automated coding.",
"f": "Uses specs and steering docs to maintain context across development sessions.",
"l": "https://kiro.dev/docs/"
},
"PartyRock": {
"w": "Code-free playground for building GenAI apps using Bedrock foundation models.",
"f": "Free to use — designed for learning prompt engineering without an AWS account.",
"l": "https://partyrock.aws"
},
"Personalize": {
"w": "ML service for real-time personalized recommendations.",
"f": "Uses the same technology that powers Amazon.com product recommendations.",
"l": "https://docs.aws.amazon.com/personalize/latest/dg/what-is-personalize.html"
},
"Fraud Detector": {
"w": "ML service for identifying potentially fraudulent online activities.",
"f": "Built on 20+ years of fraud detection expertise from Amazon.",
"l": "https://docs.aws.amazon.com/frauddetector/latest/ug/what-is-frauddetector.html"
},
"Forecast": {
"w": "ML-powered time-series forecasting service.",
"f": "Can produce forecasts up to 50% more accurate than traditional methods.",
"l": "https://docs.aws.amazon.com/forecast/latest/dg/what-is-forecast.html"
}
};