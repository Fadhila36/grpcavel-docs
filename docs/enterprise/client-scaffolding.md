# Client Scaffolding

Grpcavel makes it easy for microservices to communicate with each other by generating client-side wrappers.

## Generating a Client

Use the Artisan command to create a client wrapper for a specific service:

```bash
php artisan grpc:make-client UserServiceClient
```

This command generates a client class that handles:
- Connection management.
- Request/Response DTO mapping.
- Error handling.
- Timeout configuration.

## Using the Client

Once generated, you can use the client to call remote services as if they were local classes:

```php
use App\Grpc\Clients\UserServiceClient;
use App\Grpc\Requests\GetUserRequest;

$client = new UserServiceClient('user-service:9001');
$response = $client->getUser(new GetUserRequest(id: 1));

echo $response->name;
```

This ensures type safety and a consistent developer experience across your entire microservice ecosystem.
