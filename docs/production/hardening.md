# Production Hardening

Grpcavel is built to run in long-lived worker processes (RoadRunner), which requires special attention to stability.

## Service Discovery Cache

In production, scanning directories and using reflection on every worker start is expensive. Cache your service definitions to improve startup speed:

```bash
php artisan grpc:cache
```

To clear the cache during deployment:

```bash
php artisan grpc:clear
```

## Memory Management

To prevent memory leaks in long-running workers, Grpcavel:
- Automatically flushes Laravel's query logs after every request.
- Triggers garbage collection at strategic intervals.
- Can be configured to restart workers after a certain number of requests or memory threshold (via RoadRunner config).

## Database Resilience

Lost database connections (e.g., MySQL "gone away") are a common issue in persistent processes. Grpcavel's runtime:
- Detects disconnected database states.
- Automatically attempts to reconnect before processing the next request.
- Ensures your application stays alive even if the database is briefly unavailable.
