# Moodscape

An AI-powered art experience that matches your mood with Albert Bierstadt's landscape paintings.

## Overview

Moodscape uses AI embeddings to find paintings that match your emotional state. It features the works of Albert Bierstadt, a German-American painter renowned for his sweeping landscapes of the American West.

## Tech Stack

### Frontend

- **React** with TypeScript for type-safe component development
- **Tailwind CSS** for responsive, utility-first styling
- **Vite** for lightning-fast development and optimized builds
- **Shadcn/UI** for elegant, accessible UI components

### Backend

- **Hono** for performant API routing and middleware
- **OpenAI API** for AI-powered mood analysis and embeddings

### Infrastructure

- **Cloudflare Workers** for serverless compute at the edge
- **Cloudflare R2** for image asset storage and delivery
- **Cloudflare D1** (SQLite) for serverless database
- **GitHub Actions** for CI/CD automation
