---
no: 63
title: $TMPDIR on macOS
created: 2026-04-08
---

**TIL:** `$TMPDIR` is an environment variable set by macOS (not fish-specific) that points to a per-user temporary directory. Its value looks something like:

```
/var/folders/xx/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx/T/
```

The path is unique per user and per boot session — macOS generates it under `/var/folders/`. Files here are:

- **Automatically cleaned up** by the system. macOS periodically purges files in `/var/folders/` that haven't been accessed recently (typically after 3 days of inactivity, managed by the `periodic` daily scripts). A reboot also clears them.
- **Not shared** across users, since each user gets their own subdirectory.

On Linux, `$TMPDIR` is often unset; the conventional fallback is `/tmp`.
