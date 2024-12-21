using Microsoft.AspNetCore.Diagnostics;

namespace Api.Handlers;

public class GlobalExceptionHandler : IExceptionHandler
{
    private readonly ILogger<GlobalExceptionHandler> _logger;

    public GlobalExceptionHandler(ILogger<GlobalExceptionHandler> logger)
    {
        _logger = logger;
    }

    public async ValueTask<bool> TryHandleAsync(
        HttpContext httpContext,
        Exception exception,
        CancellationToken cancellationToken)
    {
        string msg = exception.InnerException?.Message ?? exception.Message;

        _logger.LogError(
            exception, $"Exception occurred: {msg}");

        ErrorResponse response = new()
        {
            error = msg
        };
        httpContext.Response.StatusCode = 500;

        await httpContext.Response
            .WriteAsJsonAsync(response, cancellationToken);

        return true;
    }

    public struct ErrorResponse
    {
        public string error { get; set; }
    }
}