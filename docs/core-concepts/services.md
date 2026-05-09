# Services

Services in Grpcavel are standard PHP classes annotated with the `#[GrpcService]` attribute.

## Creating a Service

Use the Artisan command to scaffold a new service:

```bash
php artisan grpc:make-service UserService
```

This creates a class in `app/Grpc/Services/UserService.php`.

## Defining a Service

A basic service looks like this:

```php
namespace App\Grpc\Services;

use Grpcavel\Attributes\GrpcService;
use App\Grpc\Requests\GetUserRequest;
use App\Grpc\Responses\UserResponse;

#[GrpcService]
class UserService
{
    // Method definitions go here
}
```

The `#[GrpcService]` attribute marks the class as a gRPC service that will be included in the protobuf generation.
