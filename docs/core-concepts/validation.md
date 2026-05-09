# Validation

Grpcavel brings Laravel's powerful validation system to gRPC.

## Defining Rules

Define validation rules in your request DTO by extending `GrpcRequest` and implementing the `rules()` method:

```php
namespace App\Grpc\Requests;

use Grpcavel\Http\Requests\GrpcRequest;

class GetUserRequest extends GrpcRequest
{
    public function __construct(
        public readonly int $id
    ) {}

    public function rules(): array
    {
        return [
            'id' => 'required|integer|exists:users,id'
        ];
    }
}
```

## Automatic Validation

When a request arrives at the gRPC server:
1. Grpcavel instantiates your Request DTO.
2. It automatically runs the validator using your `rules()`.
3. If validation fails, it returns a `INVALID_ARGUMENT` gRPC status code along with the error messages.
4. If validation passes, your service method is called.
