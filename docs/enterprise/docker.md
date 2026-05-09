# Docker Support

Deploy Grpcavel with confidence using production-optimized Docker images.

## Production Dockerfile

Grpcavel includes a `Dockerfile` designed for high-performance production environments. It handles:
- **PHP 8.3** environment.
- **RoadRunner** binary installation.
- Essential extensions (OPcache, Redis, PDO, etc.).
- Proper process management.

## Example Usage

```bash
docker build -t my-grpc-app .
docker run -p 9001:9001 my-grpc-app
```

The server listens on port `9001` by default, as configured in the RoadRunner `.rr.yaml` file.
