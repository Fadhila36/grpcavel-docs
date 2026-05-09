# Methods

Methods within a service are the actual RPC endpoints.

## Defining Methods

Annotate your service methods with `#[GrpcMethod]`. Each method must follow these rules:
1. It must accept **exactly one** request DTO (extending `GrpcRequest`).
2. It must return **exactly one** response DTO (extending `GrpcResponse`).

```php
use Grpcavel\Attributes\GrpcMethod;
use App\Grpc\Requests\GetUserRequest;
use App\Grpc\Responses\UserResponse;

#[GrpcMethod]
public function getUser(GetUserRequest $request): UserResponse
{
    $user = \App\Models\User::findOrFail($request->id);
    
    return UserResponse::fromModel($user);
}
```

## How it Works

When you run `php artisan grpc:sync`, Grpcavel inspects these methods to:
- Map the method name to a gRPC RPC name.
- Generate the corresponding message types in the `.proto` file.
- Compile the PHP stubs needed for RoadRunner.

## The `grpc()` Helper

To simplify mapping Eloquent models to gRPC responses, Grpcavel provides a global `grpc()` helper. It automatically matches model attributes to DTO properties:

```php
return grpc($user, UserResponse::class);
```

This is equivalent to:
```php
return UserResponse::fromModel($user);
```

