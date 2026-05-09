# Rate Limiting

Protect your services from abuse using the built-in `RateLimitMiddleware`.

## Configuration

Configure your rate limits in `config/grpc.php`:

```php
'rate_limiting' => [
    'enabled' => true,
    'max_attempts' => 60,
    'decay_minutes' => 1,
],
```

## Usage

Apply the middleware to your services or methods:

```php
use Grpcavel\Middleware\RateLimitMiddleware;

#[GrpcService]
#[Middleware(RateLimitMiddleware::class)]
class PublicService 
{
    // ...
}
```

The middleware uses Laravel's underlying rate limiter, supporting multiple drivers like Redis or Database.
