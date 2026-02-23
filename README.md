# ☁️ Cloud Computing Mind Map

An interactive visual mind map exploring cloud computing domains and AWS services. Built as a study and reference tool for cloud practitioners.

**[🔗 Live Demo](https://prabhugr.github.io/cloud-computing-mindmap/)**

## What is this

The Cloud Computing Mind Map organizes 240+ AWS services into a visual, explorable hierarchy — from broad domains like Compute and Storage down to individual services like Lambda and S3. Click to drill in, hover to preview, and tap any service for a description, a unique fact, and a direct link to its developer guide.

Whether you're studying for a cloud certification, onboarding to AWS, or just trying to remember where Kinesis fits in the ecosystem — this tool makes it easy to navigate.

## Features

- **7 Core Domains** — Compute, Storage, Database, Networking, Security & Governance, Data & Analytics, AI & ML
- **19 Specialty Domains** — App Integration, DevOps, Migration, IoT, Media, Healthcare, Quantum, and more
- **240+ AWS Services** — with descriptions, unique facts, and developer guide links
- **Progressive Drill-Down** — start from one bubble, explore deeper with each click
- **Hover Preview** — hover the root to peek at top-level domains
- **Immersive Visuals** — particle background that shifts color per domain, breathing glow, click ripples
- **Instant Highlight** — hover a bubble to dim siblings and focus
- **Service Info Panel** — click any leaf service for a description, fun fact, and docs link
- **Mobile Friendly** — touch pan, pinch zoom, long-press for tooltips
- **Zero Dependencies** — pure HTML + SVG + vanilla JS, no frameworks or build step

## Structure

```
index.html          → UI, interactions, animations
data/
  tree.js           → Domain hierarchy (cloud-agnostic categories)
  services.js       → 240+ service descriptions, facts, and doc URLs
  services.json     → Same data in JSON format
```

## Roadmap

- [ ] Add GCP and Azure service equivalents per domain

## Cloud-Agnostic Design

The domain categories (Compute, Storage, Database, etc.) are intentionally cloud-agnostic. AWS services are the first branch — GCP and Azure branches can be added under the same taxonomy for cross-cloud comparison.

## Who is behind this

This project is built and maintained by [Prabhu](https://www.linkedin.com/in/prabhugr/), a Solutions Architect at AWS. I created this to help people easily navigate cloud computing domains and the relevant AWS services in each one. It's a good place to understand the overall landscape and quickly skim through what each service does — without drowning in documentation.

If you found this useful, ⭐ the repo and [connect on LinkedIn](https://www.linkedin.com/in/prabhugr/) — I'd love to hear how you're using it.

## Disclaimer

This project is not affiliated with, endorsed by, or sponsored by Amazon Web Services. AWS service names are trademarks of Amazon.com, Inc. All service descriptions are for educational purposes.

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — free to share and adapt for non-commercial use with attribution.
