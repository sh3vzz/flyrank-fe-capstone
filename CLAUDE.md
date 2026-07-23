# FlyRank FE Capstone Conventions

## Tech Stack

- Frontend: HTML/CSS/JS (or React/Tailwind)
- Build Tool: Vite / Node.js

## Development Commands

- Install: npm install
- Build: npm run build

## Code Conventions

- Use semantic HTML tags
- Prioritize utility-first Tailwind CSS for styling

## Project Rules Learned from FE-03

1. **Form Validation:** All form components must use `react-hook-form` paired with `zod` schemas via `@hookform/resolvers/zod`. Uncontrolled raw inputs without schemas are forbidden.
2. **Accessible Labels:** Every form input field must have an explicit `<label>` element connected via matching `id` and `htmlFor` attributes.
3. **Submit Handling:** Form submit buttons must disable dynamically during async operations (`isSubmitting`) to prevent duplicate submissions.
