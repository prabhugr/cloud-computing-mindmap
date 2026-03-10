![Cloud Computing Mind Map](https://github.com/user-attachments/assets/87110270-3c35-45af-93c2-221955d25173)

An interactive multi-cloud mind map comparing AWS, GCP, and Azure services side by side. Built as a study and reference tool for cloud practitioners.

**[Live Demo](https://prabhugr.github.io/cloud-computing-mindmap/)**

## What is this

The Cloud Computing Mind Map organizes 600+ cloud services across AWS, GCP, and Azure into a visual, explorable hierarchy — from broad domains like Compute and Storage down to individual services like Lambda, Cloud Functions, and Azure Functions. Click to drill in, hover to preview, and tap any service row for descriptions, use cases, key differences, and direct links to official documentation.

Whether you're studying for a cloud certification, comparing providers for a migration, or just trying to understand how EKS, GKE, and AKS differ — this tool makes it easy to navigate.

## Features

- **26 Cloud Domains** — Compute, Storage, Database, Networking, Security & Governance, Data & Analytics, AI & ML, DevOps, Migration, IoT, and 16 more
- **600+ Services** — 246 AWS + 189 GCP + 176 Azure, each with descriptions, use cases, fun facts, and doc links
- **3-Column Comparison Table** — AWS vs GCP vs Azure side by side, grouped by subcategory
- **Key Differences** — expand any row to see how the services actually differ across providers
- **Use When Bullets** — practical guidance on when to choose each service
- **Match Quality Indicators** — green (strong match), yellow (partial overlap), gray (loose equivalent)
- **Provider Split Rings** — bubble borders show AWS/GCP/Azure coverage ratio at a glance
- **Progressive Drill-Down** — start from one bubble, explore deeper with each click
- **Immersive Visuals** — animated particle background, pulsing gradient connections, size-encoded bubbles, domain color shifting
- **Mobile Friendly** — touch pan, pinch zoom, long-press for tooltips
- **Zero Dependencies** — pure HTML + SVG + vanilla JS, no frameworks or build step

## Structure

```
index.html          -> UI, interactions, animations, comparison table
data/
  tree.js           -> Domain hierarchy with AWS/GCP/Azure mappings
  services.js       -> 600+ service entries with descriptions, facts, use cases, and doc URLs
  services.json     -> Same data in JSON format
```

## Roadmap

- [x] Add GCP service equivalents per domain
- [x] Add Azure service equivalents per domain
- [x] 3-column comparison table with key differences and use cases
- [x] Match quality indicators (strong/partial/loose)
- [x] Visual enhancements (animated landing, pulsing lines, provider rings)
- [ ] Automated CI/CD pipeline to detect new/deprecated services monthly
- [ ] Search and filter across all services
- [ ] Export comparison views as PDF

## Cloud-Agnostic Design

The domain categories (Compute, Storage, Database, etc.) are intentionally cloud-agnostic. AWS, GCP, and Azure services are mapped under the same taxonomy for direct cross-cloud comparison. Adding a fourth provider would require only data changes — no UI modifications.

## Who is behind this

This project is built and maintained by [Prabhu](https://www.linkedin.com/in/prabhugr/), a Solutions Architect at AWS. I created this to help people easily navigate cloud computing domains and compare services across providers. It's a good place to understand the overall landscape and quickly skim through what each service does — without drowning in documentation.

If you found this useful, star the repo and [connect on LinkedIn](https://www.linkedin.com/in/prabhugr/) — I'd love to hear how you're using it.

## Disclaimer

This project is not affiliated with, endorsed by, or sponsored by Amazon Web Services, Google Cloud, or Microsoft Azure. Service names are trademarks of their respective owners. All service descriptions are for educational purposes.

## License

[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) — free to share and adapt for non-commercial use with attribution.
