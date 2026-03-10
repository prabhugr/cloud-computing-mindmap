# Multi-Cloud Comparison Mind Map — Design

## Goal

Add GCP service equivalents alongside existing AWS services. When a user navigates to a domain, they see a structured comparison table showing AWS and GCP services side by side, grouped by subcategory.

## Navigation Flow (2 clicks to comparison)

```
Root bubble ("Cloud Computing")
  -> 25 Domain bubbles (Compute, Storage, Networking, etc.)
    -> Comparison table view (subcategories as sections, AWS <-> GCP pairs as rows)
```

- Level 1: Root bubble with hover-preview showing all 25 domains (flatten Core/Specialty split)
- Level 2: Click a domain -> subcategories shown as bubbles
- Level 3: Click a subcategory or domain center -> seamless morph to comparison table

## Comparison Table View

- Dark themed table matching existing aesthetic (dark bg, domain-colored accents)
- Particle background persists, shifts to domain color
- Subcategory section headers divide the table
- Each row: AWS Service | GCP Equivalent
- Click a row to expand inline: description + fun fact + doc link for both providers
- Matched pairs first, then "Also in AWS" / "Also in GCP" at bottom of each section
- Back button or breadcrumb morphs back to bubble view

## Transition

Seamless morph: bubbles animate out, table fades in within the same area. Particle background stays and shifts color. Same dark aesthetic throughout.

## Data Model

### tree.js — Leaf service format

```js
// Before: plain strings
ch: ["Amazon EKS", "Amazon ECS", "AWS Fargate"]

// After: comparison objects
ch: [
  { aws: "Amazon EKS", gcp: "Google Kubernetes Engine" },
  { aws: "Amazon ECS", gcp: "Cloud Run" },
  { aws: "AWS Fargate", gcp: "Cloud Run" },
  { aws: null, gcp: "Anthos" }
]
```

### tree.js — Flatten hierarchy

Remove the Core/Specialty grouping. ROOT.ch becomes all 25 domains directly.

### services.js — Add GCP entries

Same format as AWS entries (w, f, l keys):

```js
"Google Kubernetes Engine": {
  "w": "Managed Kubernetes service for containerized applications.",
  "f": "GKE Autopilot fully manages node infrastructure.",
  "l": "https://cloud.google.com/kubernetes-engine/docs"
}
```

## File Changes

| File | Change |
|---|---|
| data/tree.js | Flatten hierarchy, convert leaf strings to {aws, gcp} objects |
| data/services.js | Add ~150+ GCP service entries |
| data/services.json | Regenerate from services.js |
| index.html | Add table view renderer, morph transition, 2-level nav, expand/collapse rows |

## What Stays

- Particle background + domain color shifting
- Bubble map for top two levels
- Hover dimming, click ripples, breadcrumb nav
- Zoom/pan controls
- Mobile touch support
- Zero dependencies, static hosting, no build step

## Future-Proof

Adding Azure = add `azure` field to leaf objects + third column in table.
