---
no: 25
title: Zig's juicy main
created: 2026-01-18
category: regular
tags: [Zig]
---

Not quite following [Zig](https://ziglang.org/)'s new features recently, and a quick check yesterday made me find that the **juicy main** has landed!

[Andrew Kelley](https://andrewkelley.me/) proposed it directly (see [#24510](https://github.com/ziglang/zig/issues/24510)) to enhance the main function by providing useful variables like memory allocators, I/O instance, environment variables, and command line arguments as parameters. It reduces the boilerplate we previously needed to set up these variables.

Now there are three allowed argument signatures for the main function:

1. `pub fn main() !void`
2. `pub fn main(init: std.process.Init.Minimal) !void`
3. `pub fn main(init: std.process.Init) !void`

The definition of `std.process.Init` is as follows:

```zig
pub const Init = struct {
    /// `Init` is a superset of `Minimal`; the latter is included here.
    minimal: Minimal,
    /// Permanent storage for the entire process, cleaned automatically on
    /// exit. Not threadsafe.
    arena: *std.heap.ArenaAllocator,
    /// A default-selected general purpose allocator for temporary heap
    /// allocations. Debug mode will set up leak checking if possible.
    /// Threadsafe.
    gpa: std.mem.Allocator,
    /// An appropriate default Io implementation based on the target
    /// configuration. Debug mode will set up leak checking if possible.
    io: std.Io,
    /// Environment variables, initialized with `gpa`. Not threadsafe.
    environ_map: *std.process.Environ.Map,
    /// Named files that have been provided by the parent process. This is
    /// mainly useful on WASI, but can be used on other systems to mimic the
    /// behavior with respect to stdio.
    preopens: std.process.Preopens,

    /// Alternative to `Init` as the first parameter of the main function.
    pub const Minimal = struct {
        /// Environment variables.
        environ: std.process.Environ,
        /// Command line arguments.
        args: std.process.Args,
    };
};
```

The changeset is in [#30644](https://codeberg.org/ziglang/zig/pulls/30644) and there's a follow-up issue [#30677](https://codeberg.org/ziglang/zig/issues/30677) for a minimal CLI parsing mechanism.

I recommend this video walking through the new main function: [_Zig's new juicy main is here_](https://www.youtube.com/watch?v=GfzCJzm8S6M).
