# Middleware

You can apply middleware to services or individual methods using attributes, similar to Laravel's controller middleware.

## Global Middleware

Apply middleware to an entire service class:

```php
use Grpcavel\Attributes\GrpcService;
use Grpcavel\Attributes\Middleware;
use App\Grpc\Middleware\Authenticate;

#[GrpcService]
#[Middleware(Authenticate::class)]
class SecureService 
{
    // All methods in this service will use the Authenticate middleware
}
```

## Method Middleware

Apply middleware to specific methods:

```php
#[GrpcMethod]
#[Middleware(LogRequest::class)]
public function handle(...) {}
```

## Creating Middleware

Grpcavel middleware works similarly to Laravel middleware but receives a `GrpcContext`:

```php
namespace App\Grpc\Middleware;

class LogRequest
{
    public function handle($request, $next)
    {
        // Pre-processing
        $response = $next($request);
        // Post-processing
        
        return $response;
    }
}
```
