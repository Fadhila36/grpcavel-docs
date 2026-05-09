# Grpcavel Documentation Site

This repository contains the source code for the official documentation of [Grpcavel](https://github.com/fadhila36/grpcavel), a Laravel-native gRPC framework.

The site is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## 📚 Documentation Structure

The documentation is organized into the following sections to help you get the most out of Grpcavel:

- **Introduction & Getting Started**: Learn the basics and set up your first gRPC service.
- **Core Concepts**: Deep dive into Services, Requests, and Responses.
- **Advanced Features**: Explore Middleware, Validation, and Client Scaffolding.
- **Enterprise Solutions**: Rate Limiting, Docker support, and Service Discovery caching.
- **Production Guide**: Best practices for memory management and database resilience in long-lived processes.
- **Reference**: Detailed list of Artisan commands and configuration options.

## 🛠️ Local Development

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
