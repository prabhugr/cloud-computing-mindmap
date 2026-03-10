# Enhanced Study Content + Link Fixes — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add "use when" scenarios and "key differences" content to all 429 service entries, fix 26 broken GCP doc links, and update the comparison table UI to display the new content.

**Architecture:** Add `u` (use-when array) and `d` (differences array) fields to each entry in services.js. Update the expanded row renderer in index.html to show a full-width "Key Differences" section above the two-column service details. Fix broken GCP links by replacing with correct URLs.

**Tech Stack:** Vanilla JS, CSS — no dependencies, GitHub Pages compatible.

---

### Task 1: Fix 26 broken GCP doc links in services.js

**Files:**
- Modify: `data/services.js`

**Step 1: Replace all broken URLs**

Find and replace these URLs in `data/services.js`:

| Service Name | Broken URL | Replacement URL |
|---|---|---|
| Agones | `https://agones.dev/site/docs` | `https://agones.dev/docs` |
| AlloyDB Cross-Region | `https://cloud.google.com/alloydb/docs/cross-region-replication` | `https://cloud.google.com/alloydb/docs/cross-region-replication/overview` |
| Analytics Hub | `https://cloud.google.com/analytics-hub/docs` | `https://cloud.google.com/bigquery/docs/analytics-hub-introduction` |
| Anti Money Laundering AI | `https://cloud.google.com/anti-money-laundering` | `https://cloud.google.com/financial-services/anti-money-laundering/docs` |
| AppSheet | `https://cloud.google.com/appsheet/docs` | `https://about.appsheet.com/home` |
| BigQuery Clean Rooms | `https://cloud.google.com/bigquery/docs/clean-rooms-introduction` | `https://cloud.google.com/bigquery/docs/introduction` |
| Cloud Robotics Core | `https://cloud.google.com/cloud-robotics-core` | `https://googlecloudrobotics.github.io/core/` |
| CCAI Insights | `https://cloud.google.com/contact-center/insights/docs` | `https://cloud.google.com/contact-center/insights/docs/overview` |
| Cost Management | `https://cloud.google.com/cost-management/docs` | `https://cloud.google.com/cost-management` |
| Deployment Manager | `https://cloud.google.com/deployment-manager/docs` | `https://cloud.google.com/deployment-manager/docs/overview` |
| Edge TPU Runtime | `https://cloud.google.com/edge-tpu/docs` | `https://coral.ai/docs/` |
| Elasticsearch on GCP | `https://cloud.google.com/elasticsearch` | `https://www.elastic.co/partnerships/google-cloud` |
| Incident Manager | `https://cloud.google.com/incident-manager/docs` | `https://cloud.google.com/service-health/docs/overview` |
| Life Sciences API | `https://cloud.google.com/life-sciences/docs` | `https://cloud.google.com/life-sciences` |
| Migrate for Anthos | `https://cloud.google.com/migrate/anthos/docs` | `https://cloud.google.com/migrate/containers/docs` |
| Rapid Assessment | `https://cloud.google.com/migration-center/docs/migration-assessment` | `https://cloud.google.com/migration-center/docs` |
| Neo4j Aura (partner) | `https://cloud.google.com/neo4j` | `https://neo4j.com/cloud/aura-google-cloud/` |
| SendGrid (partner) | `https://cloud.google.com/send-grid` | `https://sendgrid.com/en-us/partners/google` |
| Fault Injection (preview) | `https://cloud.google.com/service-mesh/docs/fault-injection` | `https://cloud.google.com/service-mesh/docs` |
| Supply Chain Pulse | `https://cloud.google.com/supply-chain` | `https://cloud.google.com/solutions/supply-chain-logistics` |
| Supply Chain Twin | `https://cloud.google.com/supply-chain-twin/docs` | `https://cloud.google.com/solutions/supply-chain-logistics` |
| Vertex AI Agent Builder | `https://cloud.google.com/vertex-ai/docs/agents` | `https://cloud.google.com/products/agent-builder` |
| Vertex AI Model Garden | `https://cloud.google.com/vertex-ai/docs/model-garden` | `https://cloud.google.com/vertex-ai/generative-ai/docs/model-garden/explore-models` |
| Vertex AI Forecasting | `https://cloud.google.com/vertex-ai/docs/tabular-data/forecasting` | `https://cloud.google.com/vertex-ai/docs/tabular-data/forecasting-overview` |
| Open Match | `https://open-match.dev/site/docs` | `https://open-match.dev/docs/` |
| Chrome Remote Desktop | `https://remotedesktop.google.com` | `https://support.google.com/chrome/answer/1649523` |

**Step 2: Verify syntax**

```bash
node -c data/services.js
```

---

### Task 2: Update expanded row layout in index.html

**Files:**
- Modify: `index.html`

**Step 1: Add CSS for new sections**

Add inside the `<style>` block, after the existing `.cmp-detail-col a:hover` rule:

```css
.cmp-diff{grid-column:1/-1;background:rgba(255,153,0,.04);border:1px solid rgba(255,153,0,.12);border-radius:8px;padding:10px 14px;margin-bottom:8px}
.cmp-diff-hdr{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#f0883e;margin-bottom:6px;display:flex;align-items:center;gap:6px}
.cmp-diff-list{list-style:none;padding:0;margin:0}
.cmp-diff-list li{font-size:12px;color:#c9d1d9;line-height:1.6;padding:2px 0 2px 14px;position:relative}
.cmp-diff-list li::before{content:"\2022";position:absolute;left:0;color:#f0883e}
.cmp-use{margin:8px 0}
.cmp-use-hdr{font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#484f58;margin-bottom:4px}
.cmp-use-list{list-style:none;padding:0;margin:0}
.cmp-use-list li{font-size:12px;color:#8b949e;line-height:1.5;padding:2px 0 2px 14px;position:relative}
.cmp-use-list li::before{content:"\2022";position:absolute;left:0;color:#58a6ff}
```

**Step 2: Update the row expand/collapse handler in renderComparisonTable**

Find the click handler inside `renderComparisonTable` that builds `dh` (the detail HTML). Replace the detail-building section (the part inside `if(!isOpen){...}`) with:

```js
if(!isOpen){
  row.classList.add('expanded');
  var awsInfo=SVC[awsName]||{};
  var gcpInfo=SVC[gcpName]||{};
  var dh='';

  // Key differences (full-width, from AWS entry's d field)
  var diffs=awsInfo.d||gcpInfo.d||null;
  if(diffs&&diffs.length){
    dh+='<div class="cmp-diff"><div class="cmp-diff-hdr">Key Differences</div><ul class="cmp-diff-list">';
    diffs.forEach(function(d){dh+='<li>'+d+'</li>';});
    dh+='</ul></div>';
  }

  // AWS column
  dh+='<div class="cmp-detail-col">';
  if(awsName){
    dh+='<div class="dtl-name">'+awsName+'</div>';
    dh+='<div>'+(awsInfo.w||'An AWS cloud service.')+'</div>';
    if(awsInfo.u&&awsInfo.u.length){
      dh+='<div class="cmp-use"><div class="cmp-use-hdr">Use when</div><ul class="cmp-use-list">';
      awsInfo.u.forEach(function(b){dh+='<li>'+b+'</li>';});
      dh+='</ul></div>';
    }
    if(awsInfo.f)dh+='<div class="dtl-fact">'+awsInfo.f+'</div>';
    if(awsInfo.l)dh+='<a href="'+awsInfo.l+'" target="_blank" rel="noopener">Docs \u2192</a>';
  } else {
    dh+='<div style="color:#484f58;font-style:italic">No AWS equivalent</div>';
  }
  dh+='</div>';

  // GCP column
  dh+='<div class="cmp-detail-col">';
  if(gcpName){
    dh+='<div class="dtl-name">'+gcpName+'</div>';
    dh+='<div>'+(gcpInfo.w||'A Google Cloud service.')+'</div>';
    if(gcpInfo.u&&gcpInfo.u.length){
      dh+='<div class="cmp-use"><div class="cmp-use-hdr">Use when</div><ul class="cmp-use-list">';
      gcpInfo.u.forEach(function(b){dh+='<li>'+b+'</li>';});
      dh+='</ul></div>';
    }
    if(gcpInfo.f)dh+='<div class="dtl-fact">'+gcpInfo.f+'</div>';
    if(gcpInfo.l)dh+='<a href="'+gcpInfo.l+'" target="_blank" rel="noopener">Docs \u2192</a>';
  } else {
    dh+='<div style="color:#484f58;font-style:italic">No GCP equivalent</div>';
  }
  dh+='</div>';

  detail.innerHTML=dh;
  detail.style.display='grid';
}
```

**Step 3: Verify in browser**

Open index.html, drill into a domain, click a row. Should show the new layout (differences section will be empty until Task 3+ adds the data, but the layout should render cleanly with just descriptions).

---

### Task 3: Add u/d fields — Compute, Storage, Database services

**Files:**
- Modify: `data/services.js`

Add `u` (use-when, 2-3 bullets) to every AWS and GCP entry in these domains.
Add `d` (key-differences, 2-3 bullets) to each AWS entry that has a GCP match.

Services in scope (~110 entries): All AWS and GCP services listed under Compute (Virtual Machines, Containers, Serverless, PaaS, Batch & HPC, Edge Computing, Confidential Compute), Storage (Object, Block, File, Hybrid & Transfer, Backup), and Database (Relational, NoSQL, Graph & Specialty, Caching & Vector, Data Warehouse).

Format example:
```js
"Amazon EC2": {
"w": "Virtual servers in the cloud for computing workloads.",
"f": "Offers over 750 instance types optimized for different workloads.",
"l": "https://docs.aws.amazon.com/ec2/...",
"u": ["Need persistent VMs with custom AMIs or specific OS configs", "GPU/ML training, HPC, or Windows Server workloads", "Require fine-grained instance type selection"],
"d": ["EC2 charges per-hour minimum; Compute Engine bills per-second from the start", "EC2 offers 750+ fixed instance types; GCE allows custom vCPU/RAM combos", "EC2 uses AMIs for images; GCE uses machine images with automatic encryption"]
},
```

For GCP entries, add only `u` (no `d` — differences live on the AWS side):
```js
"Compute Engine": {
"w": "Virtual machines running on Google infrastructure.",
"f": "Offers custom machine types where you choose exact vCPU and memory.",
"l": "https://cloud.google.com/compute/docs",
"u": ["Need custom vCPU/RAM combinations not available as fixed types", "Want per-second billing and live migration between hosts", "Running containerized workloads that don't need Kubernetes"]
},
```

---

### Task 4: Add u/d fields — Networking, Security, Data & Analytics, AI & ML services

**Files:**
- Modify: `data/services.js`

Same format as Task 3. Services in scope (~180 entries): All AWS and GCP services under Networking, Security & Governance, Data & Analytics, and AI & ML domains.

---

### Task 5: Add u/d fields — All 19 Specialty domain services

**Files:**
- Modify: `data/services.js`

Same format as Tasks 3-4. Services in scope (~140 entries): All AWS and GCP services under App Integration, DevOps, Migration, Hybrid Cloud, IoT, Sustainability, DR & Resilience, Media Services, Contact Center, End User Computing, Location, Healthcare, Blockchain, Quantum, Gaming, Robotics, Supply Chain, Low-Code, Digital Twins.

---

### Task 6: Regenerate services.json

**Files:**
- Modify: `data/services.json`

```bash
cd cloud-computing-mindmap-main
node -e "const vm=require('vm');const code=require('fs').readFileSync('data/services.js','utf8');const ctx=vm.createContext({});vm.runInContext(code.replace(/\bconst\b/g,'var'),ctx);require('fs').writeFileSync('data/services.json',JSON.stringify(ctx._SVC_DATA,null,2));"
node -e "JSON.parse(require('fs').readFileSync('data/services.json','utf8'));console.log('Valid JSON')"
```

---

### Task 7: Final verification

- Open in browser, test full flow
- Verify expanded rows show Key Differences + Use When sections
- Verify all GCP doc links work (re-run link checker)
- Test mobile viewport
- Check no console errors

---

## Task Dependency Graph

```
Task 1 (fix links) — independent
Task 2 (update UI) — independent
  ↓
Task 3 (u/d: Compute, Storage, Database) — after Task 2
  ↓
Task 4 (u/d: Network, Security, Analytics, AI) — after Task 3
  ↓
Task 5 (u/d: 19 Specialty domains) — after Task 4
  ↓
Task 6 (regenerate JSON) — after Task 5
  ↓
Task 7 (verify) — after all
```

Tasks 1 and 2 can run in parallel. Tasks 3-5 are sequential (same file).
