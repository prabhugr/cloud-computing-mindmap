# Visual Experience Overhaul — Design

## Goal
Elevate the mindmap from functional to polished data-visualization aesthetic. Animated landing, pulsing connections, size-encoded bubbles, provider split rings, staggered table animations, match quality indicators, domain-colored chrome.

## Changes
1. Animated landing reveal (~2s orchestrated entrance)
2. Pulsing gradient connection lines between bubbles
3. Size-encoded bubble radius based on service count
4. Provider split ring (AWS orange / GCP blue arc) on each bubble
5. Staggered row entrance in comparison table
6. Smooth expand/collapse with height transitions
7. Match quality indicators (strong/partial/loose) per service pair
8. Domain-colored table chrome
9. Polished bubble-to-table morph transition

## Data Change
Add `m` field to tree.js comparison objects: "s" (strong), "p" (partial), "l" (loose).
