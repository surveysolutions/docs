+++
title="Available C# Namespaces"
date = 2025-07-20T01:01:01Z
+++

Survey Solutions uses C# language for writing the expressions, such as enabling
or validation conditions. The C# language organizes classes of objects into
`namespaces`. To use a class from a namespace the C# program must have access to
the corresponding namespace. Survey Solutions provides access to the following
namespaces:

- [`System`](https://learn.microsoft.com/en-us/dotnet/api/system?view=netstandard-1.5) (except these specific properties: `DateTime.Now`, `DateTime.UtcNow`, `DateTime.Today`)
- [`System.Collections`](https://learn.microsoft.com/en-us/dotnet/api/system.collections?view=netstandard-1.5)
- [`Systems.Collections.Generic`](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic?view=netstandard-1.5)
- [`System.Linq`](https://learn.microsoft.com/en-us/dotnet/api/system.linq?view=netstandard-1.5)
- `System.Linq.Queryable`
- [`System.Text.RegularExpressions`](https://learn.microsoft.com/en-us/dotnet/api/system.text.regularexpressions?view=netstandard-1.5)

You can click on the name of the namespace to see which classes, functions, etc.
the namespace avails for the user. `System.Linq.Queryable` is technically a
class, documented [here](https://learn.microsoft.com/en-us/dotnet/api/system.linq.queryable?view=net-7.0&viewFallbackFrom=netstandard-1.5).

Some classes contained in the available namespaces are prohibited for security
reasons, these include all of the following:

- `System.Activator`
- `System.AppContext`
- `System.AppDomain`
- `System.Console`
- `System.Environment`
- `System.GC`
- and some other classes.

In Addition to the above C# namespaces Survey Solutions avails some specialized
functions to the users, such as `GpsDistance()` or `ContainsAny()`, which are
based in its own namespace.

See also [forbidden type](../forbidden-type/) and [data types](../data-types/).
