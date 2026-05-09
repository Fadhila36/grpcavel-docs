# Commands Reference

Grpcavel provides several Artisan commands to manage your gRPC environment.

| Command | Description |
| --- | --- |
| `php artisan grpc:install` | Bootstrap directories and configuration files. |
| `php artisan grpc:sync` | Inspect PHP classes, generate `.proto` files, and compile stubs. |
| `php artisan grpc:compile` | Manually compile existing `.proto` files. |
| `php artisan grpc:cache` | Create a service discovery cache for production. |
| `php artisan grpc:clear` | Remove the service discovery cache. |
| `php artisan grpc:start` | Start the RoadRunner gRPC server. |
| `php artisan grpc:make-service` | Scaffold a new service class. |
| `php artisan grpc:make-client` | Create a client wrapper for service-to-service communication. |
| `php artisan grpc:make-request` | Create a new request DTO. |
| `php artisan grpc:make-response` | Create a new response DTO. |
