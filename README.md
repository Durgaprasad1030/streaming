# 📺 Streaming Dashboard Clone

A simplified Netflix-style streaming dashboard built using **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and the **OMDb API**.  
This project is part of the **StoryBit Frontend Developer Assignment**.

---

## 🚀 Live Demo

Deployed on Vercel:  
`https://<your-vercel-project>.vercel.app`

> Replace the above with your actual Vercel URL after deployment.

---

## 📂 GitHub Repository

This project is hosted on GitHub:  
https://github.com/Durgaprasad1030/streaming

---

## 🧰 Tech Stack

| Technology                 | Purpose                                      |
|---------------------------|----------------------------------------------|
| **Next.js 16 (App Router)** | Routing, SSR, static generation              |
| **TypeScript**            | Type safety & better DX                      |
| **Tailwind CSS**          | Utility-first styling                        |
| **OMDb API**              | Movie / series metadata                      |
| **next/image / img**      | Optimized images where supported             |
| **Vercel**                | Hosting & deployment                         |

---

## ✨ Features

### 🎬 Homepage

- Horizontal scrolling movie rows:
  - **Batman movies**
  - **Spider-Man movies**
  - **Avengers movies**
- Each movie card shows:
  - Poster  
  - Title  
  - Year  
- Clean, responsive UI using Tailwind.

### 🔍 Movie Detail Page

- Dynamic route: `/movie/[id]` (using OMDb `imdbID`)
- Shows:
  - Title, year, rating, runtime  
  - Genre, director, actors  
  - Full plot description  
  - Poster (if available)

### 🧱 Architecture

- App Router with `src/app`
- Server Components for data fetching
- Client Components for interactive UI (rows, cards, header)
- Type-safe API helpers and models

---

## 📦 Project Structure

```txt
streaming/
├─ src/
│  ├─ app/
│  │  ├─ components/
│  │  │  ├─ Header.tsx
│  │  │  ├─ MovieCard.tsx
│  │  │  ├─ MovieRow.tsx
│  │  │  └─ HeroBanner.tsx (optional / TMDB-based)
│  │  ├─ movie/
│  │  │  └─ [id]/
│  │  │     └─ page.tsx     # Movie detail page
│  │  └─ page.tsx           # Homepage
│  ├─ lib/
│  │  └─ omdb.ts            # OMDb API helper functions
│  └─ types/
│     └─ omdb.ts            # OMDb TypeScript interfaces
├─ public/
├─ next.config.ts
├─ tailwind.config.ts
├─ postcss.config.cjs / .ts
├─ package.json
├─ README.md
└─ .env.local
