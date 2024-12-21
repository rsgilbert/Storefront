
#nullable enable

using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
using JetBrains.Annotations;
using Microsoft.EntityFrameworkCore.Diagnostics;

namespace Api.Utilities;

public static class MyCheck
{

    public static T MustEqual<T>([AllowNull][NotNull] T value, T expected)
    {
        if (value is null || !value.Equals(expected))
        {
            throw new Exception($"Check failed. {value} must equal {expected}");
        }

        return value;
    }

    [return: NotNull]
    public static T NotNull<T>([AllowNull][NotNull] T value, string parameterName)
    {
        if (value is null)
        {
            NotEmpty(parameterName, nameof(parameterName));

            throw new ArgumentNullException(parameterName);
        }

        return value;
    }
    public static IReadOnlyList<T> NotEmpty<T>(
        [NotNull] IReadOnlyList<T>? value,
         string parameterName)
    {
        NotNull(value, parameterName);

        if (value.Count == 0)
        {
            NotEmpty(parameterName, nameof(parameterName));

            throw new ArgumentException(AbstractionsStrings.CollectionArgumentIsEmpty(parameterName));
        }

        return value;
    }


    public static string NotEmpty([NotNull] string? value, string parameterName)
    {
        if (value is null)
        {
            NotEmpty(parameterName, nameof(parameterName));

            throw new ArgumentNullException(parameterName);
        }

        if (value.Trim().Length == 0)
        {
            NotEmpty(parameterName, nameof(parameterName));

            throw new ArgumentException(AbstractionsStrings.ArgumentIsEmpty(parameterName));
        }

        return value;
    }

    public static string? NullButNotEmpty(string? value, string parameterName)
    {
        if (value is not null && value.Length == 0)
        {
            NotEmpty(parameterName, nameof(parameterName));

            throw new ArgumentException(AbstractionsStrings.ArgumentIsEmpty(parameterName));
        }

        return value;
    }

    public static IReadOnlyList<T> HasNoNulls<T>(
        [NotNull] IReadOnlyList<T>? value,
        string parameterName)
        where T : class
    {
        NotNull(value, parameterName);

        if (value.Any(e => e == null))
        {
            NotEmpty(parameterName, nameof(parameterName));

            throw new ArgumentException(parameterName);
        }

        return value;
    }

    public static IReadOnlyList<string> HasNoEmptyElements(
        [NotNull] IReadOnlyList<string>? value,
        string parameterName)
    {
        NotNull(value, parameterName);

        if (value.Any(s => string.IsNullOrWhiteSpace(s)))
        {
            NotEmpty(parameterName, nameof(parameterName));

            throw new ArgumentException(AbstractionsStrings.CollectionArgumentHasEmptyElements(parameterName));
        }

        return value;
    }

    public static void DebugAssert([DoesNotReturnIf(false)] bool condition, string message)
    {
        if (!condition)
        {
            throw new UnreachableException($"Check.DebugAssert failed: {message}");
        }
    }

    [DoesNotReturn]
    public static void DebugFail(string message)
        => throw new UnreachableException($"Check.DebugFail failed: {message}");
}