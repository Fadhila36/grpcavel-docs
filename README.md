# Grpcavel Documentation Site

<p align="center">
    <img src="static/img/logo.png" width="300" alt="Grpcavel Logo">
</p>

This repository contains the source code for the official documentation of **[Grpcavel](https://github.com/fadhila36/grpcavel)**, a gRPC framework for Laravel that focuses on developer experience.

The site is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## 🚀 About Grpcavel

Grpcavel makes building gRPC services in PHP feel like building a standard Laravel API:

- **Code-First**: Your PHP classes are the source of truth. Protos are generated automatically.
- **RoadRunner Runtime**: Uses a persistent worker model for high performance.
- **Laravel Native**: Supports Laravel validation, middleware, and Eloquent.

## 📚 Documentation Structure

The documentation is organized into the following sections:

- **Introduction & Getting Started**: Learn the basics and set up your first gRPC service.
- **Core Concepts**: Deep dive into Services, Requests, and Responses.
- **Advanced Features**: Explore Middleware, Validation, and Client Scaffolding.
- **Enterprise Solutions**: Rate Limiting, Docker support, and Service Discovery caching.
- **Production Guide**: Best practices for memory management and database resilience in long-lived processes.
- **Reference**: Detailed list of Artisan commands and configuration options.

## 🛠️ Local Development

### Prerequisites

- Node.js (LTS version recommended)
- npm

### Installation

```bash
npm install
```

### Run Server

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## 🚀 Deployment

To deploy to GitHub Pages:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## ✍️ Contributing

We welcome improvements to the documentation!

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improved-docs`).
3. Make your changes in the `docs/` directory.
4. Commit your changes (`git commit -m 'Improve documentation'`).
5. Push to the branch (`git push origin feature/improved-docs`).
6. Open a Pull Request.

Files in the `docs/` directory are written in Markdown (or MDX). You can use React components in your markdown!
