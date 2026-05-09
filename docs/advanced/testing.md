# Testing

Grpcavel provides a built-in `GrpcClient` helper to test your gRPC services efficiently within your Laravel application.

## In-Process Testing

You can test your services without starting a real gRPC server. This is perfect for feature tests:

```php
use Grpcavel\Testing\GrpcClient;
use App\Grpc\Services\UserService;
use App\Grpc\Requests\GetUserRequest;
use App\Grpc\Responses\UserResponse;

$response = GrpcClient::call(
    UserService::class, 
    'getUser', 
    new GetUserRequest(id: 1)
);

expect($response)->toBeInstanceOf(UserResponse::class);
expect($response->id)->toBe(1);
```

## Why Test In-Process?

1. **Speed**: No overhead of network communication or server startup.
2. **Simplicity**: Use standard Laravel testing tools (Pest or PHPUnit).
3. **Database Transactions**: Tests run within your existing database transactions, allowing for easy cleanup.
4. **Mocking**: You can still mock underlying dependencies or services as usual.
