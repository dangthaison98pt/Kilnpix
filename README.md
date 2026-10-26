# Kilnpix

Kilnpix is a pixel art and sprite editor built with Godot. It is a fork of
[Pixelorama](https://github.com/Orama-Interactive/Pixelorama) by Orama Interactive.

## Running from source

1. Install Godot 4.7 (standard build, not .NET).
2. Open `project.godot` in Godot and press Play (F5).

## Staying in sync with upstream

The original repository is the `upstream` remote:

```bash
git fetch upstream
git merge upstream/master
```

Internal identifiers (`Global.pixelorama_*`, the `.pxo` format, the extensions API,
`pixelorama_data/`) are kept as-is on purpose, so upstream merges stay small and
Pixelorama extensions and project files keep working.

## License

MIT, see [LICENSE](LICENSE). Third-party components and attribution are listed in
[NOTICE.md](NOTICE.md).
