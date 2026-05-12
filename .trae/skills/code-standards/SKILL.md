---
name: "code-standards"
description: "Defines Vue 3.5 and TypeScript 6.0 coding standards. Invoke when creating, modifying, reviewing, or generating Vue pages, routes, article details, and typed frontend modules."
---

# Code Standards

## Purpose

This skill defines unified coding standards for projects built with Vue 3.5 and TypeScript 6.0. Use it whenever implementing or reviewing frontend code, especially Vue single-file components, route definitions, typed data models, article pages, and detail-page generation flows.

## Core Principles

- Prefer readability over cleverness
- Keep component responsibilities single and explicit
- Favor strict typing over implicit inference when domain data is involved
- Keep route structure stable and data structure predictable
- Reuse composable logic instead of duplicating view-layer behavior
- Match existing project conventions before introducing new abstractions

## Skill Usage Standards

- When a task involves backend-style layouts, management pages, dashboards, list pages, enterprise UI patterns, or shared admin interaction patterns, invoke the `frontend-design` skill before implementation
- During implementation, prefer patterns and structure aligned with the `frontend-design` skill when the target page matches design Design style usage
- If the current page is not an frontend design style page, keep existing project conventions and do not force frontend design patterns into unrelated UI
- When multiple skills are relevant, apply this skill for Vue and TypeScript code rules, and apply `frontend-design` for page structure and UI conventions

## Vue 3.5 Standards

### Component Authoring

- Prefer `script setup` for Vue single-file components
- Use the Composition API by default
- Keep templates declarative and avoid embedding complex logic in template expressions
- Extract repeated logic into composables when used by more than one view or component
- Avoid oversized page components; split reusable blocks into focused child components
- Prefer computed state over imperative recalculation inside lifecycle hooks

### Props and Emits

- Define props with explicit TypeScript types
- Use `defineProps` and `defineEmits` with clear, narrow contracts
- Avoid passing large unstructured objects when a dedicated typed interface is more appropriate
- Keep emitted events semantically named and aligned with user actions or state changes

### State Management

- Keep local UI state inside the component when it is not shared
- Extract shared state only when multiple pages or components depend on the same source of truth
- Avoid mutating imported constants or shared objects directly
- Use derived state through `computed` whenever possible

## TypeScript 6.0 Standards

### Typing Rules

- Use explicit interfaces or type aliases for domain models such as articles, routes, cards, and navigation items
- Avoid `any`; use `unknown` first if a type is not yet determined
- Narrow unions before use and handle impossible states deliberately
- Keep function return types explicit for exported utilities, composables, and data builders
- Prefer readonly data structures for static content where mutation is not intended

### TSConfig Expectations

- Follow TypeScript 6.0 compatible configuration patterns
- Do not rely on deprecated `baseUrl`
- Use explicit `paths` mappings with relative prefixes when aliasing is needed
- Keep project references clean and split by runtime responsibility, such as app and node configs

## File and Naming Standards

### File Organization

- Place view pages under `src/views`
- Place reusable UI components under `src/components`
- Place static content definitions and typed data builders under `src/data`
- Keep route configuration centralized and typed when practical

### Naming

- Use PascalCase for Vue component filenames and component symbols
- Use camelCase for variables, functions, composables, and instances
- Use UPPER_SNAKE_CASE only for true constants with stable semantic meaning
- Use descriptive names based on domain meaning, not implementation detail

## Routing Standards

### Detail Page Routing

- Article detail routes must use the article ID as the route parameter
- Do not use article title, slug, or array index as the primary detail-page route key
- The detail route should follow a stable structure such as `/article/:id`
- Route lookup logic must resolve article content by ID, not by display text

### Article ID Rules

- Every generated article detail record must be assigned a random 8-digit numeric ID at generation time
- The ID must be stored as part of the article data model
- The ID must remain stable for that article instance after generation
- The ID field should be typed explicitly, preferably as `string` when preserving leading zeros matters, otherwise as `number` only if leading zeros are not required
- When generating random IDs, ensure the value is exactly 8 digits long
- Avoid deriving IDs from timestamps, array positions, or route order

### Recommended Article Model

Use a dedicated type similar to the following:

```ts
export interface Article {
  id: string
  title: string
  summary: string
  content: string
  cover: string
}
```

### Recommended ID Generator

Prefer a small dedicated utility that guarantees exactly 8 numeric characters:

```ts
export function createArticleId(): string {
  return Math.floor(10000000 + Math.random() * 90000000).toString()
}
```

If collision risk grows, replace the generator with a uniqueness check against existing article IDs.

## Data Generation Standards

- Generate article IDs when creating article records, not lazily during rendering
- Keep generated article data normalized and consistently shaped
- Do not mix display formatting logic into raw data definitions
- If articles are generated from scripts or factories, ensure the generator assigns the ID before route registration or page rendering

## Implementation Guidance

When implementing article detail pages:

1. Define a typed `Article` model including `id`
2. Assign each generated article a random 8-digit numeric ID
3. Register detail routing using `:id`
4. Resolve the article in the detail page by matching the route param to the stored article ID
5. Handle missing IDs with a clear fallback state or not-found route

## Review Checklist

Before completing code changes, verify the following:

- Vue components use `script setup` where appropriate
- Exported functions and domain data have explicit types
- No deprecated TypeScript 6.0 config patterns are introduced
- Detail pages route by article ID only
- Every article record includes a generated 8-digit numeric ID
- ID lookup is stable and independent from array index or title text
- Aliases and route logic remain consistent with project structure
- Use the `antdesign-ui` skill first when the target implementation matches Ant Design style enterprise UI patterns
