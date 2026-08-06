# Accessibility Component Audit: Custom vs. shadcn/ui

## Evaluated Components

1. **Modal Dialog** (`Modal.tsx`) vs. `@/components/ui/dialog` (Radix Dialog)
2. **Tabs** (`Tabs.tsx`) vs. `@/components/ui/tabs` (Radix Tabs)

---

## Key Gaps Identified in Custom Implementation

### 1. Portal Rendering & Stacking Context (Modal)

- **Custom Version:** Renders inline inside the parent container DOM tree. If a parent container has `overflow: hidden` or a low `z-index`, the modal display and backdrop can clip or render incorrectly.
- **shadcn/ui (Radix):** Uses `@radix-ui/react-portal` to dynamically transport the dialog overlay and content to the root of `document.body`. This guarantees top-level rendering and isolates modal styling from parent stacking contexts.

### 2. Screen Reader Background Shielding (`aria-hidden` on Root)

- **Custom Version:** Traps keyboard focus using `keydown` event handlers, but screen reader users navigating outside key events (e.g., swipe navigation or screen reader virtual cursor) can still discover background page contents.
- **shadcn/ui (Radix):** Automatically marks all siblings of the dialog root as `aria-hidden="true"` while open and restores them on close (`aria-hidden` locking). This completely masks background content from screen readers.

---

## Summary

Building components manually confirms the necessity of exact W3C keyboard bindings (`ArrowLeft`/`ArrowRight`, `Tab` traps, `Escape`). However, production libraries like `shadcn/ui` handle edge cases like DOM portal mounts and screen reader background locking out of the box.
