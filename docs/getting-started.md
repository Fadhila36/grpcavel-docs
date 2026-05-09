---
sidebar_position: 2
---

# Getting Started

Learn how to install Grpcavel and set up your first gRPC service.

## Installation

You can install the package via composer:

```bash
composer require fadhila36/grpcavel
```

After installing, run the install command to bootstrap the necessary directories and configuration:

```bash
php artisan grpc:install
```

This command will create:
- `app/Grpc/Services`: Where your service implementations live.
- `app/Grpc/Requests`: For request DTOs and validation.
- `app/Grpc/Responses`: For response DTOs.
- `config/grpc.php`: The main configuration file.
- `proto/`: Where generated `.proto` files are stored.

## First Steps

To get your server running, follow these three steps:

1. **Create a Service**: Define your logic.
2. **Sync Definitions**: Generate the proto files.
3. **Start Server**: Launch the RoadRunner gRPC server.

Next, read about [Core Concepts](./core-concepts/services) to learn how to define your first service.
