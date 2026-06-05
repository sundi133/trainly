# Votal Academy

Votal Academy is an agent-based Learning & Development platform prototype for personalized learning paths, role-based skill-gap analysis, manager coaching, admin content curation, assessments, and analytics.

## MVP coverage

- Role-based access preview for Employees, Managers, L&D Admins, and HR Leaders.
- Employee dashboard with assigned learning, progress, deadlines, recommendations, and assessment status.
- Skill-gap panel comparing current proficiency with expected role benchmarks.
- Agent workflow cards for Learning Advisor, Skill Gap, Content Curator, Assessment, Manager Coach, and Analytics agents.
- Manager dashboard for team progress and recommended development actions.
- Admin console for content upload, cohort assignment, and audit-log review.
- Analytics cards tied to activation, completion, admin-effort reduction, and recommendation relevance success metrics.

## Run locally

```bash
npm run dev
```

Then open <http://localhost:5173>.

## Validate

```bash
npm run lint
npm run build
```

The project has no third-party runtime dependencies; the build script copies the static app into `dist/`.
