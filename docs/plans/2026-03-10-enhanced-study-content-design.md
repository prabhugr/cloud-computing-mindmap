# Enhanced Study Content + Link Fixes — Design

## Goal

Transform the comparison tool from a quick-reference into a study platform by adding structured "use when" scenarios and "key differences" content for each service pair. Also fix broken GCP documentation links.

## Expanded Row Layout

When a user clicks a comparison row, the expanded detail shows:

1. **Key Differences** (full-width, above columns) — 2-3 bullets comparing the AWS and GCP equivalents directly
2. **AWS column | GCP column** (side by side) — Each showing:
   - What is it (existing one-liner)
   - Use when (2-3 bullets)
   - Fun fact (existing)
   - Docs link (existing)

## Data Model

Two new fields added to each entry in `services.js`:

```js
"Amazon EC2": {
  "w": "Virtual servers in the cloud...",
  "f": "Offers over 750 instance types...",
  "l": "https://docs.aws.amazon.com/ec2/...",
  "u": ["Persistent VMs with custom AMIs", "GPU/ML training workloads", "Windows Server"],
  "d": ["EC2 charges per-hour min; GCE bills per-second", "EC2 has 750+ types; GCE allows custom vCPU/RAM"]
}
```

- `u` (use when): 2-3 short bullets per service, both AWS and GCP entries
- `d` (differences): 2-3 bullets on the AWS entry only (shared across the pair)

## Scope

- ~429 service entries get `u` (use-when) bullets
- ~234 matched pairs get `d` (differences) bullets on the AWS side
- ~189 GCP links get validated, broken ones fixed
- CSS/JS changes to render the new expanded layout

## Link Fix Approach

Programmatically validate all GCP doc links using web fetch, identify 404s, and replace with correct URLs.
