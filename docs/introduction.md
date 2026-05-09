---
sidebar_position: 1
---

# Introduction

**Grpcavel** is a high-performance gRPC framework for Laravel that focuses on developer experience. It uses a **code-first approach** to generate and compile protobuf files, meaning you don't have to write `.proto` definitions manually.

## Why Grpcavel?

Building gRPC services in PHP is traditionally painful and requires jumping between `.proto` files and PHP classes. Grpcavel makes it feel like building a standard Laravel API:

- **🚀 Code-First**: Your PHP classes are the source of truth. Protos are generated automatically.
- **⚡ RoadRunner Runtime**: Uses a persistent worker model for extreme performance.
- **🏗️ Laravel Native**: Supports Laravel validation, middleware, and Eloquent out of the box.
- **🛡️ Hardened for Production**: Built-in memory management and database resilience.

## Key Features

- **Automatic Sync**: Sync your PHP code with Proto definitions using a single command.
- **Rich Middleware**: Apply Laravel-like middleware to your gRPC services.
- **Validation**: Full support for Laravel-style validation in Request DTOs.
- **Enterprise Ready**: Includes Rate Limiting, Docker support, and Service Discovery caching.
- **Developer Friendly**: Comprehensive Artisan commands for scaffolding everything.
