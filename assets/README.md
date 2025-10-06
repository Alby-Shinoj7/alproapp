# Assets Directory

This directory stores vector and raster assets used by the Sustainable Living App. Binary files are generated at build time or downloaded from the design system repository to keep Git history light and compatible with tooling that disallows binary diffs.

## Current Policy
- **Icons & Splash:** Expo defaults are used in development. Custom PNGs should be added via secure artifact storage and referenced through the EAS asset pipeline.
- **Impact Data:** Keep JSON datasets (e.g., `impact_factors.json`) under version control because they are text-based and auditable.

## Adding New Assets
1. Place non-binary source files (SVG, JSON) under version control when possible.
2. For required PNGs, store the generation script or source vector in this directory and produce the PNG during the build step (`npm run generate:assets`, to be added in future milestones).
3. Avoid committing large binary blobs; prefer automation or CDN delivery.

