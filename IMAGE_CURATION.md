# Portfolio Image Curation & Selection Log

**Theme & Kit Reference:** Inter Typography | Palette: Canvas Light (`#F8F9FA`), Charcoal (`#111827`), Slate (`#1E293B`), Cobalt Accent (`#2563EB`) | Mood: Clean, technical, code-first.

---

## 1. Portfolio Image Inventory & Mapping

| Asset Need            | Type               | Selection Call      | File Path / Reference                     | Rationale                                                                                                                               |
| :-------------------- | :----------------- | :------------------ | :---------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **Profile Photo**     | Personal Bio       | **Real Photo**      | `public/assets/shaheer-headshot.jpg`      | Authentic developer representation; AI personal portraits look fake and erode visitor trust.                                            |
| **FE-03 Form Drill**  | Case Study Capture | **Real Screenshot** | `public/assets/fe03-vscode-preview.png`   | Real Code & UI in VS Code proving actual implementation of React Hook Form + Zod.                                                       |
| **Recurrence Solver** | Case Study Capture | **Real Screenshot** | `public/assets/discrete-cpp-terminal.png` | Direct terminal execution output proving functional C++ logic and execution trace.                                                      |
| **Hero Background**   | Connective Texture | **AI Generated**    | `public/assets/hero-abstract-mesh.svg`    | Subtle dark slate grid pattern (`#1E293B`) matching Identity Kit color palette to frame the hero section without distracting from text. |
| **Project Icons**     | UI Components      | **AI Generated**    | `public/assets/icons-monochrome-set.svg`  | Minimalist single-line vector icons in Slate (`#1E293B`) and Cobalt (`#2563EB`) maintaining visual consistency across project cards.    |

---

## 2. Real Captures vs. AI Generation Decisions

- **Where Real Captures Were Chosen:**
  - **Code & IDE Interface:** Used direct VS Code screenshots displaying `SettingsForm.tsx` and terminal outputs. _Reasoning:_ AI-generated code IDEs often hallucinate invalid syntax, unnatural window chrome, or mismatched theme colors. Real screenshots are non-negotiable proof of work.
  - **Headshot / Persona:** Used a real photo. _Reasoning:_ AI headshots create a synthetic feel that contradicts an authentic portfolio.

- **Where AI Generation Was Chosen:**
  - **Abstract Hero Mesh & UI Icons:** Generated minimalistic vector graphics using precise hex prompts (`#F8F9FA`, `#1E293B`, `#2563EB`). _Reasoning:_ Decorative elements don't represent proof of work, but need to strictly match the Identity Kit palette and mood.

---

## 3. Discernment & Rejection Log (Kill Your Darlings)

### Rejected Image 1: Hyper-Realistic 3D Cyberpunk Code Workspace

- **Prompt Used:** _"Futuristic glowing 3D workstation with holographic code windows, neon blue and purple lighting, 8k render."_
- **Why It Was Rejected:** The neon colors (#8A2BE2, #00FFFF) completely broke the restrained Identity Kit palette (`#1E293B` slate / `#2563EB` cobalt). It looked like a generic stock wallpaper rather than an intentional developer portfolio canvas.

### Rejected Image 2: AI-Generated IDE Code Window Mockup

- **Prompt Used:** _"Clean modern code editor showing React code dark mode interface minimalist."_
- **Why It Was Rejected:** Upon close inspection, the code in the generated image contained garbled text and fake syntax (`const function = <React.Component />`). Using fake code mockups undermines developer credibility. Replaced with an actual screenshot of VS Code.

---

## 4. Summary Standing Rule

> _"Real screenshots prove capability; AI graphics provide structural framing. If an image purports to show work, it must be a real capture. If an image is decorative, it must strictly adhere to the project hex codes and identity note."_
