# FE-03: AI-Assisted Workflow Drill Write-Up

## Overview

This report compares the outputs generated from two different AI prompting strategies used to build an Account Settings Form component.

---

## Round 1 vs. Round 2 Comparison

### 1. Correctness & Quality

- **Round 1 (Vague Prompt):** The vague prompt resulted in basic form elements without strict type checking, robust schema validation, or clean error handling. Edge cases like email format verification and disabled button states during submission were ignored.
- **Round 2 (Precise Prompt):** The detailed prompt generated a fully typed component using `react-hook-form` and `zodResolver`. It correctly enforced string length limits, email structure, boolean flags, and enum selections for theme preferences.

### 2. Accessibility & Edge Cases

- **Round 1:** Lacked explicit `htmlFor` bindings and accessible form submission handling.
- **Round 2:** Includes explicit `htmlFor` label connections, `noValidate` attributes to prevent browser-native conflicts, inline validation messages, and state feedback (`isSubmitting` / `isSubmitSuccessful`).

### 3. Review & Fix Effort

- **Round 1:** Required significant manual editing to integrate state management, validation libraries, and proper user feedback loops, taking roughly twice as long to make production-ready.
- **Round 2:** Produced near-production-grade code out of the box, requiring zero structural changes to meet functional specifications.

---

## AI Mistake Caught

During Round 1, the AI attempted to handle form state using simple `useState` hooks with inline string validation instead of a modular schema parser. This made scaling rules difficult and failed to leverage project-standard validation tools (`Zod`).

---

## Key Takeaway

Specifying exact dependencies, error constraints, and component state requirements upfront eliminates prompt drift and dramatically reduces post-generation refactoring time.
