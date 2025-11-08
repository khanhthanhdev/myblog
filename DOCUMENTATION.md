# AstroPaper Documentation

This document provides a detailed overview of the AstroPaper theme, its structure, and how to use it.

## Project Overview

AstroPaper is a minimal, responsive, and SEO-friendly Astro theme for building a personal blog. It includes features like a dark mode, search functionality, RSS feeds, and automatic OG image generation.

## Technologies Used

-   **[Astro](https://astro.build/)**: The core web framework for building the site.
-   **[React](https://reactjs.org/)**: Used for interactive UI components like the search bar.
-   **[Tailwind CSS](https://tailwindcss.com/)**: For styling the website.
-   **[Fuse.js](https://fusejs.io/)**: For client-side search functionality.
-   **[Satori](https://github.com/vercel/satori)**: For generating dynamic Open Graph (OG) images.
-   **[Remark](https://remark.js.org/)** and **[Rehype](https://github.com/rehypejs/rehype)**: For processing Markdown and adding features like tables of contents and math equation rendering.

## Project Structure

Here is a breakdown of the most important files and directories:

```
.
├── public/
│   └── toggle-theme.js  # Script for toggling dark mode
├── src/
│   ├── components/      # Reusable Astro and React components
│   ├── content/         # Blog posts and other content
│   │   └── blog/
│   ├── layouts/         # Page layouts
│   ├── pages/           # Site pages and API routes
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── astro.config.ts      # Astro configuration file
├── package.json         # Project dependencies and scripts
└── tailwind.config.cjs  # Tailwind CSS configuration
```

### `src/content/blog/`

This directory contains all the blog posts as Markdown files. To create a new post, simply add a new `.md` file to this directory.

### `src/pages/`

This directory defines the routes for the website. Astro uses a file-based routing system, where each file in this directory becomes a page on the site.

### `src/components/` and `src/layouts/`

These directories contain the reusable UI components and page layouts. Components are the building blocks of the UI, while layouts define the overall structure of a page.

## Getting Started

To get started with this project, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/satnaing/astro-paper.git
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```

This will start a local development server at `http://localhost:4321`.

## Content Management

### Adding a New Blog Post

To add a new blog post, create a new Markdown file in the `src/content/blog/` directory. The frontmatter of the Markdown file should include the following fields:

```yaml
---
title: "My New Post"
pubDatetime: 2023-01-01
author: "Your Name"
postSlug: "my-new-post"
featured: false
draft: false
tags:
  - "tag1"
  - "tag2"
---
```

-   `title`: The title of the post.
-   `pubDatetime`: The publication date of the post.
-   `author`: The author of the post.
-   `postSlug`: The URL slug for the post.
-   `featured`: Whether the post should be featured on the homepage.
-   `draft`: If `true`, the post will not be included in the production build.
-   `tags`: A list of tags for the post.

## Configuration

The main configuration files for the project are:

-   `astro.config.ts`: The Astro configuration file. This is where you can configure integrations, Markdown processing, and other Astro-specific settings.
-   `tailwind.config.cjs`: The Tailwind CSS configuration file. You can customize the theme, add new utility classes, and more.
-   `src/config.ts`: A site-wide configuration file where you can set the site title, description, and other metadata.

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/). To deploy the site, simply push the code to a Vercel-linked GitHub repository. The project includes the `@astrojs/vercel` adapter, which will automatically configure the project for Vercel's serverless environment.
